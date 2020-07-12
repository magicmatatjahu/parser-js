const ExternalDocs = require('../models/external-docs');

/**
 * Implements functions to deal with the ExternalDocs object.
 * @mixin MixinExternalDocs
 */
const MixinExternalDocs = {
  /**
   * @returns {boolean}
   */
  hasExternalDocs() {
    return !!(this._json.externalDocs && Object.keys(this._json.externalDocs).length);
  },

  /**
   * @returns {(ExternalDocs|null)}
   */
  externalDocs() {
    return this._json.externalDocs ? new ExternalDocs(this._json.externalDocs) : null;
  },
};

module.exports = MixinExternalDocs;
