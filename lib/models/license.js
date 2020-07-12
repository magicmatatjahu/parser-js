const { mix } = require('../utils');

const Base = require('./base');

const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with the License object.
 * @class License
 * @extends Base
 * @mixes MixinSpecificationExtensions
 * @returns {License}
 */
class License extends Base {
  /**
   * @returns {string}
   */
  name() {
    return this._json.name;
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
}

module.exports = mix(License, MixinSpecificationExtensions);
