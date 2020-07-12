const { mix } = require('../utils');

const Base = require('./base');

const MixinDescription = require('../mixins/description');
const MixinExternalDocs = require('../mixins/external-docs');
const MixinTags = require('../mixins/tags');
const MixinBindings = require('../mixins/bindings');
const MixinSpecificationExtensions = require('../mixins/specification-extensions');

/**
 * Implements functions to deal with the common properties Operation and OperationTrait object have.
 * @class OperationTraitable
 * @extends Base
 * @mixes MixinDescription
 * @mixes MixinExternalDocs
 * @mixes MixinTags
 * @mixes MixinBindings
 * @mixes MixinSpecificationExtensions
 * @returns {OperationTraitable}
 */
class OperationTraitable extends Base {
  /**
   * @returns {boolean}
   */
  hasId() {
    return !!this._json.operationId;
  }
  
  /**
   * @returns {(string|null)}
   */
  id() {
    return this.hasId() ? this._json.operationId : null;
  }

  /**
   * @returns {boolean}
   */
  hasSummary() {
    return !!this._json.summary;
  }
  
  /**
   * @returns {(string|null)}
   */
  summary() {
    return this.hasSummary() ? this._json.summary : null;
  }
}

module.exports = mix(OperationTraitable, MixinDescription, MixinExternalDocs, MixinTags, MixinBindings, MixinSpecificationExtensions);
