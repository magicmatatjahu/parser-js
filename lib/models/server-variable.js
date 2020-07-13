const { isNotEmptyArray, addExtensions } = require('../utils');
const Base = require('./base');

/**
 * Implements functions to deal with a ServerVariable object.
 * @class
 * @extends Base
 * @returns {ServerVariable}
 */
class ServerVariable extends Base {
  /**
   * @returns {any[]}
   */
  allowedValues() {
    return this._json.enum;
  }

  /**
   * @param {string} name - Name of the variable.
   * @returns {boolean}
   */
  allows(name) {
    if (this._json.enum === undefined) return true;
    return this._json.enum.includes(name);
  }

  /**
   * @returns {boolean}
   */
  hasAllowedValues() {
    return isNotEmptyArray(this._json.enum);
  }

  /**
   * @returns {string}
   */
  defaultValue() {
    return this._json.default;
  }

  /**
   * @returns {boolean}
   */
  hasDefaultValue() {
    return this._json.default !== undefined;
  }

  /**
   * @returns {string}
   */
  description() {
    return this._json.description;
  }

  /**
   * @returns {boolean}
   */
  hasExamples() {
    return isNotEmptyArray(this._json.examples);
  }

  /**
   * @returns {string[]}
   */
  examples() {
    return this._json.examples;
  }
}

module.exports = addExtensions(ServerVariable);
