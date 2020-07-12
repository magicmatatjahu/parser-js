const { expect } = require('chai');
const { mix } = require('../../lib/utils');
const Base = require('../../lib/models/base');
const MixinDescription = require('../../lib/mixins/description');

describe('MixinDescription', function() {
  const Clazz = mix(class extends Base {}, MixinDescription);

  const doc1 = { description: 'Testing' };
  const doc2 = { description: '' };
  const doc3 = {};
  const d1 = new Clazz(doc1);
  const d2 = new Clazz(doc2);
  const d3 = new Clazz(doc3);

  describe('#hasDescription()', function() {
    it('should return a boolean indicating if the object has description', function() {
      expect(d1.hasDescription()).to.be.true;  
      expect(d2.hasDescription()).to.be.false;  
      expect(d3.hasDescription()).to.be.false;  
    });
  });

  describe('#description()', function() {
    it('should return a value', function() {
      expect(d1.description()).to.be.equal(doc1.description);  
    });
    it('should return a null', function() {
      expect(d2.description()).to.be.null;  
      expect(d3.description()).to.be.null;  
    });
  });
});

function assertMixinDescriptionInheritance(clazz) {
  describe('MixinDescription', function() {
    it('check if class has inherited methods from MixinDescription', function() {
      expect(clazz.prototype.hasDescription).not.to.be.undefined;
      expect(clazz.prototype.description).not.to.be.undefined;
    });
  });
}

module.exports = {
  assertMixinDescriptionInheritance,
};
