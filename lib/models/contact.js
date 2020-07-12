const { mix } = require('../utils');

const Base = require('./base');

const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with the Contact object.
 * @class Contact
 * @extends Base
 * @mixes MixinSpecificationExtensions
 * @returns {Contact}
 */
class Contact extends Base {
  /**
   * @returns {boolean}
   */
  hasName() {
    return !!this._json.name;
  }

  /**
   * @returns {(string|null)}
   */
  name() {
    return this.hasName() ? this._json.name : null;
  }

  /**
   * @returns {boolean}
   */
  hasUrl() {
    return !!this._json.url;
  }
  
  /**
   * @returns {(string|null)}
   */
  url() {
    return this.hasUrl() ? this._json.url : null;
  }

  /**
   * @returns {boolean}
   */
  hasEmail() {
    return !!this._json.email;
  }
  
  /**
   * @returns {(string|null)}
   */
  email() {
    return this.hasEmail() ? this._json.email : null;
  }
}

module.exports = mix(Contact, MixinSpecificationExtensions);
