const { mix } = require('../utils');

const Base = require('./base');

const MixinDescription = require('../mixins/description');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with a ServerVariable object.
 * @class ServerVariable
 * @extends Base
 * @mixes MixinDescription
 * @mixes MixinSpecificationExtensions
 * @returns {ServerVariable}
 */
class ServerVariable extends Base {
  /**
   * @returns {boolean}
   */
  hasAllowedValues() {
    return !!(Array.isArray(this._json.enum) && this._json.enum.length);
  }

  /**
   * @returns {(Any[]|null)}
   */
  allowedValues() {
    return this.hasAllowedValues() ? this._json.enum : null;
  }

  /**
   * @param {string} name - Name of the variable.
   * @returns {boolean}
   */
  allows(name) {
    return this.hasAllowedValues() && this._json.enum.includes(name);
  }

  /**
   * @returns {boolean}
   */
  hasDefaultValue() {
    return this._json.hasOwnProperty('default');
  }

  /**
   * @returns {(string|null)}
   */
  defaultValue() {
    return this.hasDefaultValue() ? this._json.default : null;
  }

  /**
   * @returns {boolean}
   */
  hasExamples() {
    return !!(Array.isArray(this._json.examples) && this._json.examples.length);
  }

  /**
   * @returns {(string[]|null)}
   */
  examples() {
    return this.hasExamples() ? this._json.examples : null;
  }
}

module.exports = mix(ServerVariable, MixinDescription, MixinSpecificationExtensions);
