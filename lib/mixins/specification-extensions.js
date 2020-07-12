const extensionError = 'Extension key is not prefixed. Please ensure you prefix it with `x-`.';

/**
 * Implements functions to deal with the SpecificationExtensions object.
 * @mixin MixinSpecificationExtensions
 */
const MixinSpecificationExtensions = {
  /**
   * @returns {boolean}
   */
  hasExtensions() {
    return !!this.extensions();
  },

  /**
   * @returns {(Object<string, Any>|null)}
   */
  extensions() {
    const result = {};
    Object.entries(this._json).forEach(([key, value]) => {
      if ((/^x-[\w\d\.\-\_]+$/).test(key)) {
        result[String(key)] = value;
      }
    });
    return Object.keys(result).length ? result : null;
  },

  /**
   * @returns {(string[]|null)}
   */
  extensionKeys() {
    const exts = this.extensions();
    return exts ? Object.keys(exts) : null;
  },

  /**
   * @returns {(string[]|null)}
   */
  extKeys() {
    return this.extensionKeys();
  },

  /**
   * @param {string} key - Extension key. Must start with `x-` prefix. Otherwise function throw an error.
   * @returns {boolean}
   */
  hasExtension(key) {
    if (!key.startsWith('x-')) {
      throw new Error(extensionError);
    };
    return !!this._json[String(key)];
  },

  /**
   * @param {string} key - Extension key. Must start with `x-` prefix. Otherwise function throw an error.
   * @returns {Any}
   */
  extension(key) {
    if (!key.startsWith('x-')) {
      throw new Error(extensionError);
    };
    return this._json[String(key)];
  },

   /**
   * @param {string} key - Extension key. Must start with `x-` prefix. Otherwise function throw an error.
   * @returns {boolean}
   */ 
  hasExt(key) {
    return this.hasExtension(key);
  },

  /**
   * @param {string} key - Extension key. Must start with `x-` prefix. Otherwise throw an error.
   * @returns {Any}
   */
  ext(key) {
    return this.extension(key);
  },
};

module.exports = MixinSpecificationExtensions;
