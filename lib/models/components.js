const { createMapOfType, getMapValueOfType, isNotEmptyObject, addExtensions } = require('../utils');
const Base = require('./base');
const Message = require('./message');
const Schema = require('./schema');
const SecurityScheme = require('./security-scheme');
const ChannelParameter = require('./channel-parameter');
const CorrelationId = require('./correlation-id');
const OperationTrait = require('./operation-trait');
const MessageTrait = require('./message-trait');

/**
 * Implements functions to deal with a Components object.
 * @class
 * @extends Base
 * @returns {Components}
 */
class Components extends Base {
  /**
   * @returns {boolean}
   */
  hasMessages() {
    return isNotEmptyObject(this._json.messages);
  }

  /**
   * @returns {Object<string, Message>}
   */
  messages() {
    return createMapOfType(this._json.messages, Message);
  }

  /**
   * @returns {Message}
   */
  message(name) {
    return getMapValueOfType(this._json.messages, name, Message);
  }
  
  /**
   * @returns {boolean}
   */
  hasSchemas() {
    return isNotEmptyObject(this._json.schemas);
  }

  /**
   * @returns {Object<string, Schema>}
   */
  schemas() {
    return createMapOfType(this._json.schemas, Schema);
  }

  /**
   * @returns {Schema}
   */
  schema(name) {
    return getMapValueOfType(this._json.schemas, name, Schema);
  }

  /**
   * @returns {boolean}
   */
  hasSecuritySchemas() {
    return isNotEmptyObject(this._json.securitySchemes);
  }
  
  /**
   * @returns {Object<string, SecurityScheme>}
   */
  securitySchemes() {
    return createMapOfType(this._json.securitySchemes, SecurityScheme);
  }
  
  /**
   * @returns {SecurityScheme}
   */
  securityScheme(name) {
    return getMapValueOfType(this._json.securitySchemes, name, SecurityScheme);
  }

  /**
   * @returns {boolean}
   */
  hasParameters() {
    return isNotEmptyObject(this._json.parameters);
  }
  
  /**
   * @returns {Object<string, ChannelParameter>}
   */
  parameters() {
    return createMapOfType(this._json.parameters, ChannelParameter);
  }

  /**
   * @returns {ChannelParameter}
   */
  parameter(name) {
    return getMapValueOfType(this._json.parameters, name, ChannelParameter);
  }

  /**
   * @returns {boolean}
   */
  hasCorrelationIds() {
    return isNotEmptyObject(this._json.correlationIds);
  }
  
  /**
   * @returns {Object<string, CorrelationId>}
   */
  correlationIds() {
    return createMapOfType(this._json.correlationIds, CorrelationId);
  }

  /**
   * @returns {CorrelationId}
   */
  correlationId(name) {
    return getMapValueOfType(this._json.correlationIds, name, CorrelationId);
  }

  /**
   * @returns {boolean}
   */
  hasOperationTraits() {
    return isNotEmptyObject(this._json.operationTraits);
  }
  
  /**
   * @returns {Object<string, OperationTrait>}
   */
  operationTraits() {
    return createMapOfType(this._json.operationTraits, OperationTrait);
  }

  /**
   * @returns {OperationTrait}
   */
  operationTrait(name) {
    return getMapValueOfType(this._json.operationTraits, name, OperationTrait);
  }

  /**
   * @returns {boolean}
   */
  hasMessageTraits() {
    return isNotEmptyObject(this._json.messageTraits);
  }
  
  /**
   * @returns {Object<string, MessageTrait>}
   */
  messageTraits() {
    return createMapOfType(this._json.messageTraits, MessageTrait);
  }

  /**
   * @returns {MessageTrait}
   */
  messageTrait(name) {
    return getMapValueOfType(this._json.messageTraits, name, MessageTrait);
  }
}

module.exports = addExtensions(Components);
