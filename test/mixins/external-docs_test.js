const { expect } = require('chai');
const { mix } = require('../../lib/utils');
const Base = require('../../lib/models/base');
const ExternalDocs = require('../../lib/models/external-docs');
const MixinExternalDocs = require('../../lib/mixins/external-docs');

describe('MixinExternalDocs', function() {
  const Clazz = mix(class extends Base {}, MixinExternalDocs);

  const doc1 = { externalDocs: { url: 'test.com' } };
  const doc2 = { externalDocs: undefined };
  const doc3 = {};
  const d1 = new Clazz(doc1);
  const d2 = new Clazz(doc2);
  const d3 = new Clazz(doc3);

  describe('#hasExternalDocs()', function() {
    it('should return a boolean indicating if the object has externalDocs', function() {
      expect(d1.hasExternalDocs()).to.be.true;  
      expect(d2.hasExternalDocs()).to.be.false;  
      expect(d3.hasExternalDocs()).to.be.false;  
    });
  });

  describe('#externalDocs()', function() {
    it('should return a externalDocs object', function() {
      expect(d1.externalDocs() instanceof ExternalDocs).to.be.true;
      expect(d1.externalDocs().constructor.name).to.be.equal('ExternalDocs');
      expect(d1.externalDocs().json()).to.deep.equal(doc1.externalDocs);
    });
    it('should return a null', function() {
      expect(d2.externalDocs()).to.be.null;  
      expect(d3.externalDocs()).to.be.null;  
    });
  });
});

function assertMixinExternalDocsInheritance(clazz) {
  describe('MixinExternalDocs', function() {
    it('check if class has inherited methods from MixinExternalDocs', function() {
      expect(clazz.prototype.hasExternalDocs).not.to.be.undefined;
      expect(clazz.prototype.externalDocs).not.to.be.undefined;
    });
  });
}

module.exports = {
  assertMixinExternalDocsInheritance,
};
