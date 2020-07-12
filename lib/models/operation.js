const OperationTraitable = require('./operation-traitable');
const Message = require('./message');

/**
 * Implements functions to deal with an Operation object.
 * @class Operation
 * @extends OperationTraitable
 * @returns {Operation}
 */
class Operation extends OperationTraitable {
  /**
   * @returns {boolean}
   */
  hasSingleMessage() {
    return !!(this._json.message && Object.keys(this._json.message) && !this._json.message.hasOwnProperty('oneOf'));
  }

  /**
   * @returns {boolean}
   */
  hasMultipleMessages() {
    if (this._json.message && Array.isArray(this._json.message.oneOf) && this._json.message.oneOf.length) return true;
    return false;
  }
  
  /**
   * @returns {(Message[]|null)}
   */
  messages() {
    if (!this._json.message) return null;

    if (this.hasMultipleMessages()) return this._json.message.oneOf.map(m => new Message(m));
    if (this.hasSingleMessage()) return [new Message(this._json.message)];
    return null;
  }
  
  /**
   * @returns {(Message|null)}
   */
  message(index) {
    if (typeof index !== 'number') return null;
    if (this.hasSingleMessage()) return new Message(this._json.message);
    if (index > this._json.message.oneOf.length - 1) return null;
    return new Message(this._json.message.oneOf[+index]);
  }
}

module.exports = Operation;
