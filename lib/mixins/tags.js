const Tag = require('../models/tag');

/**
 * Implements functions to deal with the Tags object.
 * @mixin MixinTags
 */
const MixinTags = {
  /**
   * @returns {boolean}
   */
  hasTags() {
    return !!(Array.isArray(this._json.tags) && this._json.tags.length);
  },

  /**
   * @returns {(Tag[]|null)}
   */
  tags() {
    return this.hasTags() ? this._json.tags.map(t => new Tag(t)) : null;
  },

  /**
   * @returns {(string[]|null)}
   */
  tagNames() {
    return this.hasTags() ? this._json.tags.map(t => t.name) : null;
  },

  /**
   * @param {string} name - Name of the tag.
   * @returns {boolean}
   */
  hasTag(name) {
    return this.hasTags() && this._json.tags.some(t => t.name === name);
  },

  /**
   * @param {string} name - Name of the tag.
   * @returns {(Tag|null)}
   */
  tag(name) {
    const t = this.hasTags() && this._json.tags.find(t => t.name === name);
    return t ? new Tag(t) : null;
  },
};

module.exports = MixinTags;
