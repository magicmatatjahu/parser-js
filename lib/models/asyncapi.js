const { createMapOfType, getMapValueOfType, mix } = require('../utils');

const Base = require('./base');
const Info = require('./info');
const Server = require('./server');
const Channel = require('./channel');
const Components = require('./components');

const MixinTags = require('../mixins/tags');
const MixinExternalDocs = require('../mixins/external-docs');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

const xParserMessageName = 'x-parser-message-name';
const xParserSchemaId = 'x-parser-schema-id';

/**
 * Implements functions to deal with the AsyncAPI document.
 * @class AsyncAPIDocument
 * @mixes MixinTags
 * @mixes MixinExternalDocs
 * @mixes MixinSpecificationExtensions
 * @augments Base
 * @returns {AsyncAPIDocument}
 */
class AsyncAPIDocument extends Base {
  constructor(...args) {
    super(...args);

    assignNameToAnonymousMessages(this);
    assignNameToComponentMessages(this);

    assignUidToComponentSchemas(this);
    assignUidToParameterSchemas(this);
    assignIdToAnonymousSchemas(this);
  }

  /**
   * @returns {string}
   */
  version() {
    return this._json.asyncapi;
  }

  /**
   * @returns {boolean}
   */
  hasId() {
    return !!this._json.id;
  }

  /**
   * @returns {(string|null)}
   */
  id() {
    return this.hasId() ? this._json.id : null;
  }

  /**
   * @returns {Info}
   */
  info() {
    return new Info(this._json.info);
  }

  /**
   * @returns {boolean}
   */
  hasServers() {
    return !!(this._json.servers && Object.keys(this._json.servers).length);
  }

  /**
   * @returns {(Object<string, Server>|null)}
   */
  servers() {
    return createMapOfType(this._json.servers, Server);
  }

  /**
   * @returns {(string[]|null)}
   */
  serverNames() {
    return this.hasServers() ? Object.keys(this._json.servers) : null;
  }

  /**
   * @param {string} name - Name of the server.
   * @returns {boolean}
   */
  hasServer(name) {
    return this.hasServers() && !!this._json.servers[String(name)];
  }

  /**
   * @param {string} name - Name of the server.
   * @returns {(Server|null)}
   */
  server(name) {
    return getMapValueOfType(this._json.servers, name, Server);
  }

  /**
   * @returns {boolean}
   */
  hasChannels() {
    return !!(this._json.channels && Object.keys(this._json.channels).length);
  }

  /**
   * @returns {(Object<string, Channel>|null)}
   */
  channels() {
    return createMapOfType(this._json.channels, Channel, this);
  }

  /**
   * @returns {(string[]|null)}
   */
  channelNames() {
    return this.hasChannels() ? Object.keys(this._json.channels) : null;
  }

  /**
   * @param {string} name - Name of the channel.
   * @returns {boolean}
   */
  hasChannel(name) {
    return this.channelNames() && !!this._json.channels[String(name)];
  }

  /**
   * @param {string} name - Name of the channel.
   * @returns {(Channel|null)}
   */
  channel(name) {
    return getMapValueOfType(this._json.channels, name, Channel);
  }

  /**
   * @returns {boolean}
   */
  hasDefaultContentType() {
    return !!this._json.defaultContentType;
  }

  /**
   * @returns {(string|null)}
   */
  defaultContentType() {
    return this.hasDefaultContentType() ? this._json.defaultContentType : null;
  }

  /**
   * @returns {boolean}
   */
  hasComponents() {
    return !!(this._json.components && Object.keys(this._json.components).length);
  }

  /**
   * @returns {(Components|null)}
   */
  components() {
    return this.hasComponents() ? new Components(this._json.components) : null;
  }

  /**
   * @returns {boolean}
   */
  hasMessages() {
    return !!this.allMessages().size;
  }

  /**
   * @returns {Map<Message>}
   */
  allMessages() {
    const messages = new Map();
    
    if (this.hasChannels()) {
      this.channelNames().forEach(channelName => {
        const channel = this.channel(channelName);
        if (channel.hasPublish()) {
          channel.publish().messages().forEach(m => {
            messages.set(m.uid(), m);
          });
        }
        if (channel.hasSubscribe()) {
          channel.subscribe().messages().forEach(m => {
            messages.set(m.uid(), m);
          });
        }
      });
    }
    
    if (this.hasComponents()) {
      Object.values(this.components().messages()).forEach(m => {
        messages.set(m.uid(), m);
      });
    }
    
    return messages;
  }

  /**
   * @returns {boolean}
   */
  hasSchemas() {
    return !!this.allSchemas().size;
  }

  /**
   * @returns {Map<Schema>}
   */
  allSchemas() {
    const schemas = new Map();
    const callback = (schema) => {
      if (schema.uid()) {
        schemas.set(schema.uid(), schema);
      }
    };
    schemaDocument(this, callback);
    if (this.hasComponents()) {
      Object.values(this.components().schemas()).forEach(s => {
        recursiveSchema(s, callback);
      });
    }

    return schemas;
  }
}

function assignNameToComponentMessages(doc) {
  if (doc.hasComponents()) {
    for (const [key, m] of Object.entries(doc.components().messages())) {
      if (m.name() === undefined) {
        m.json()[String(xParserMessageName)] = key;
      }
    }
  }
}

/**
 * Assign parameter keys as uid for the parameter schema.
 * 
 * @param {AsyncAPIDocument} doc 
 */
function assignUidToParameterSchemas(doc) {
  if (doc.hasChannels()) {
    doc.channelNames().forEach(channelName => {
      const channel = doc.channel(channelName);
      for (const [parameterKey, parameterSchema] of Object.entries(channel.parameters())) {
        parameterSchema.json()[String(xParserSchemaId)] = parameterKey;
      }
    });
  }
}

/**
 * Assign uid to component schemas. 
 * 
 * @param {AsyncAPIDocument} doc 
 */
function assignUidToComponentSchemas(doc) {
  if (doc.hasComponents()) {
    for (const [key, s] of Object.entries(doc.components().schemas())) {
      s.json()[String(xParserSchemaId)] = key;
    }
  }
}

/**
 * Assign anonymous names to nameless messages.
 * 
 * @param {AsyncAPIDocument} doc 
 */
function assignNameToAnonymousMessages(doc) {
  let anonymousMessageCounter = 0;

  if (doc.hasChannels()) {
    doc.channelNames().forEach(channelName => {
      const channel = doc.channel(channelName);
      if (channel.hasPublish()) addNameToKey(channel.publish().messages(),++anonymousMessageCounter);
      if (channel.hasSubscribe()) addNameToKey(channel.subscribe().messages(),++anonymousMessageCounter);
    });
  }
}

/**
 * Add anonymous name to key if no name provided.
 * 
 * @param {messages} map of messages 
 */
function addNameToKey(messages, number) {
  messages.forEach(m => {
    if (m.name() === undefined) {
      m.json()[String(xParserMessageName)] = `<anonymous-message-${number}>`;
    }
  });
}

/**
 * Recursively go through each schema and execute callback.
 * 
 * @param {Schema} schema found.
 * @param {Function} callback(schema)
 *         the function that is called foreach schema found.
 *         schema {Schema}: the found schema.
 */
function recursiveSchema(schema, callback) {
  if (schema === null) return;
  callback(schema);
  
  if (schema.type() !== undefined) {
    switch (schema.type()) {
    case 'object':
      if (schema.additionalProperties() !== undefined && typeof schema.additionalProperties() !== 'boolean') {
        const additionalSchema = schema.additionalProperties();
        recursiveSchema(additionalSchema, callback);
      }
      if (schema.properties() !== null) {
        const props = schema.properties();
        for (const [, propertySchema] of Object.entries(props)) {
          recursiveSchema(propertySchema, callback);
        }
      }
      break;
    case 'array':
      if (schema.additionalItems() !== undefined) {
        const additionalArrayItems = schema.additionalItems();
        recursiveSchema(additionalArrayItems, callback);
      }

      if (schema.items() !== null) {
        if (Array.isArray(schema.items())) {
          schema.items().forEach(arraySchema => {
            recursiveSchema(arraySchema, callback);
          });
        } else {
          recursiveSchema(schema.items(), callback);
        }
      }
      break;
    }
  } else {
    //check for allOf, oneOf, anyOf
    const checkCombiningSchemas = (combineArray) => {
      if (combineArray !== null && combineArray.length > 0) {
        combineArray.forEach(combineSchema => {
          recursiveSchema(combineSchema, callback); ;
        });
      }
    };
    checkCombiningSchemas(schema.allOf());
    checkCombiningSchemas(schema.anyOf());
    checkCombiningSchemas(schema.oneOf());
  }
}

/**
 * Go through each channel and for each parameter, and message payload and headers recursively call the callback for each schema.
 * 
 * @param {AsyncAPIDocument} doc 
 * @param {Function} callback(schema)
 *         the function that is called foreach schema found.
 *         schema {Schema}: the found schema.
 */
function schemaDocument(doc, callback) {
  if (doc.hasChannels()) {
    doc.channelNames().forEach(channelName => {
      const channel = doc.channel(channelName);

      Object.values(channel.parameters()).forEach(p => {
        recursiveSchema(p.schema(), callback);
      });

      if (channel.hasPublish()) {
        channel.publish().messages().forEach(m => {
          recursiveSchema(m.headers(), callback);
          recursiveSchema(m.payload(), callback);
        });
      }
      if (channel.hasSubscribe()) {
        channel.subscribe().messages().forEach(m => {
          recursiveSchema(m.headers(), callback);
          recursiveSchema(m.payload(), callback);
        });
      }
    });
  }
}

/**
 * Gives schemas id to all anonymous schemas.
 * 
 * @param {AsyncAPIDocument} doc 
 */
function assignIdToAnonymousSchemas(doc) {
  let anonymousSchemaCounter = 0;
  const callback = (schema) => {
    if (!schema.uid()) {
      schema.json()[String(xParserSchemaId)] = `<anonymous-schema-${++anonymousSchemaCounter}>`;
    }
  };
  schemaDocument(doc, callback);
}

module.exports = mix(AsyncAPIDocument, MixinTags, MixinExternalDocs, MixinSpecificationExtensions);
