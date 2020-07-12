const { createMapOfType, getMapValueOfType, mix } = require('../utils');

const Base = require('./base');
const ServerVariable = require('./server-variable');
const ServerSecurityRequirement = require('./server-security-requirement');

const MixinDescription = require('../mixins/description');
const MixinBindings = require('../mixins/bindings');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with a Server object.
 * @class Server
 * @extends Base
 * @mixes MixinDescription
 * @mixes MixinBindings
 * @mixes MixinSpecificationExtensions
 * @returns {Server}
 */
class Server extends Base {
  /**
   * @returns {string}
   */
  url() {
    return this._json.url;
  }

  /**
   * @returns {string}
   */
  protocol() {
    return this._json.protocol;
  }

  /**
   * @returns {boolean}
   */
  hasProtocolVersion() {
    return !!this._json.protocolVersion;
  }

  /**
   * @returns {(string|null)}
   */
  protocolVersion() {
    return this.hasProtocolVersion() ? this._json.protocolVersion : null;
  }

  /**
   * @returns {boolean}
   */
  hasVariables() {
    return !!(this._json.variables && Object.keys(this._json.variables).length);
  }

  /**
   * @returns {(Object<string, ServerVariable>|null)}
   */
  variables() {
    return createMapOfType(this._json.variables, ServerVariable);
  }

  /**
   * @param {string} name - Name of the server variable.
   * @returns {boolean}
   */
  hasVariable(name) {
    return this.hasVariables() && !!this._json.variables[String(name)];
  }

  /**
   * @param {string} name - Name of the server variable.
   * @returns {(ServerVariable|null)}
   */
  variable(name) {
    return getMapValueOfType(this._json.variables, name, ServerVariable);
  }

  /**
   * @returns {boolean}
   */
  hasSecurity() {
    return !!(Array.isArray(this._json.security) && this._json.security.length);
  }

  /**
   * @returns {(ServerSecurityRequirement[]|null)}
   */
  security() {
    return this.hasSecurity() ? this._json.security.map(sec => new ServerSecurityRequirement(sec)) : null;
  }
}

module.exports = mix(Server, MixinDescription, MixinBindings, MixinSpecificationExtensions);
