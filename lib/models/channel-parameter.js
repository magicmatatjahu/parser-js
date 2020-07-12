const { mix } = require('../utils');

const Base = require('./base');
const Schema = require('./schema');

const MixinDescription = require('../mixins/description');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with a ChannelParameter object.
 * @class ChannelParameter
 * @extends Base
 * @mixes MixinDescription
 * @mixes MixinSpecificationExtensions
 * @returns {ChannelParameter}
 */
class ChannelParameter extends Base {
  /**
   * @returns {boolean}
   */
  hasLocation() {
    return !!this._json.location;
  }

  /**
   * @returns {(string|null)}
   */
  location() {
    return this.hasLocation() ? this._json.location : null;
  }
  
  /**
   * @returns {boolean}
   */
  hasSchema() {
    return !!(this._json.schema && Object.keys(this._json.schema).length);
  }

  /**
   * @returns {(Schema|null)}
   */
  schema() {
    return this.hasSchema() ? new Schema(this._json.schema) : null;
  }
}

module.exports = mix(ChannelParameter, MixinDescription, MixinSpecificationExtensions);
