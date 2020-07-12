const { getMapValueByKey } = require('../utils');

/**
 * Implements functions to deal with the Bindings object.
 * @mixin MixinBindings
 */
const MixinBindings = {
  /**
   * @returns {boolean}
   */
  hasBindings() {
    return !!(this._json.bindings && Object.keys(this._json.bindings).length);
  },

  /**
   * @returns {(Object|null)}
   */
  bindings() {
    return this.hasBindings() ? this._json.bindings : null;
  },

  /**
   * @returns {(string[]|null)}
   */
  bindingProtocols() {
    return this.hasBindings() ? Object.keys(this._json.bindings) : null;
  },

  /**
   * @param {string} name - Name of the binding.
   * @returns {boolean}
   */
  hasBinding(name) {
    return this.hasBindings() && !!this._json.bindings[String(name)];
  },

  /**
   * @param {string} name - Name of the binding.
   * @returns {(Object|null)}
   */
  binding(name) {
    return getMapValueByKey(this._json.bindings, name);
  },
};

module.exports = MixinBindings;
