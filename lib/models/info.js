const { mix } = require('../utils');

const Base = require('./base');
const License = require('./license');
const Contact = require('./contact');

const MixinDescription = require('../mixins/description');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with the Info object.
 * @class Info
 * @extends Base
 * @mixes MixinDescription
 * @mixes MixinSpecificationExtensions
 * @returns {Info}
 */
class Info extends Base {
  /**
   * @returns {string}
   */
  title() {
    return this._json.title;
  }
  
  /**
   * @returns {string}
   */
  version() {
    return this._json.version;
  }

  /**
   * @returns {boolean}
   */
  hasTermsOfService() {
    return !!this._json.termsOfService;
  }

  /**
   * @returns {(string|null)}
   */
  termsOfService() {
    return this.hasTermsOfService() ? this._json.termsOfService : null;
  }

  /**
   * @returns {boolean}
   */
  hasLicense() {
    return !!(this._json.license && Object.keys(this._json.license).length);
  }

  /**
   * @returns {(License|null)}
   */
  license() {
    return this.hasLicense() ? new License(this._json.license) : null;
  }

  /**
   * @returns {boolean}
   */
  hasContact() {
    return !!(this._json.contact && Object.keys(this._json.contact).length);
  }

  /**
   * @returns {(Contact|null)}
   */
  contact() {
    return this.hasContact() ? new Contact(this._json.contact) : null;
  }
}

module.exports = mix(Info, MixinDescription, MixinSpecificationExtensions);
