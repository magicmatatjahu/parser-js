const { createMapOfType, getMapValueOfType, mix } = require('../utils');

const Base = require('./base');
const ChannelParameter = require('./channel-parameter');
const PublishOperation = require('./publish-operation');
const SubscribeOperation = require('./subscribe-operation');

const MixinDescription = require('../mixins/description');
const MixinBindings = require('../mixins/bindings');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with a Channel object.
 * @class Channel
 * @extends Base
 * @mixes MixinDescription
 * @mixes MixinBindings
 * @mixes MixinSpecificationExtensions
 * @returns {Channel}
 */
class Channel extends Base {
  /**
   * @returns {boolean}
   */
  hasParameters() {
    return !!this._json.parameters;
  }

  /**
   * @returns {(Object<string, ChannelParameter>|null)}
   */
  parameters() {
    return createMapOfType(this._json.parameters, ChannelParameter);
  }

  /**
   * @param {string} name - Name of the parameter.
   * @returns {boolean}
   */
  hasParameter(name) {
    return this.hasParameters() && !!this._json.parameters[String(name)];
  }

  /**
   * @param {string} name - Name of the parameter.
   * @returns {(ChannelParameter|null)}
   */
  parameter(name) {
    return getMapValueOfType(this._json.parameters, name, ChannelParameter);
  }

  /**
   * @returns {boolean}
   */
  hasPublish() {
    return !!(this._json.publish && Object.keys(this._json.publish).length);
  }

  /**
   * @returns {(PublishOperation|null)}
   */
  publish() {
    return this.hasPublish() ? new PublishOperation(this._json.publish) : null;
  }

  /**
   * @returns {boolean}
   */
  hasSubscribe() {
    return !!(this._json.subscribe && Object.keys(this._json.subscribe).length);
  }

  /**
   * @returns {(SubscribeOperation|null)}
   */
  subscribe() {
    return this.hasSubscribe() ? new SubscribeOperation(this._json.subscribe) : null;
  }
}

module.exports = mix(Channel, MixinDescription, MixinBindings, MixinSpecificationExtensions);
