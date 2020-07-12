/**
 * Implements functions to deal with the description field.
 * @mixin MixinDescription
 */
const MixinDescription = {
  /**
   * @returns {boolean}
   */
  hasDescription() {
    return !!this._json.description;
  },

  /**
   * @returns {(string|null)}
   */
  description() {
    return this.hasDescription() ? this._json.description : null;
  },
};

module.exports = MixinDescription;
