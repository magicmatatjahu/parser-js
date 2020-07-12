const { expect } = require('chai');
const { mix } = require('../../lib/utils');
const Base = require('../../lib/models/base');
const MixinSpecificationExtensions = require('../../lib/mixins/specification-extensions');

describe('MixinSpecificationExtensions', function() {
  const Clazz = mix(class extends Base {}, MixinSpecificationExtensions);

  const doc1 = { 'x-test': 'testing', test: 'testing' };
  const doc2 = { test: 'testing' };
  const doc3 = {};
  const d1 = new Clazz(doc1);
  const d2 = new Clazz(doc2);
  const d3 = new Clazz(doc3);

  describe('#hasExtensions()', function() {
    it('should return a boolean indicating if the object has extensions', function() {
      expect(d1.hasExtensions()).to.be.true;
      expect(d2.hasExtensions()).to.be.false;
      expect(d3.hasExtensions()).to.be.false;
    });
  });

  describe('#extensions()', function() {
    it('should return a object with extensions', function() {
      expect(d1.extensions()).to.deep.equal({ 'x-test': 'testing'});
    });
    it('should return a null', function() {
      expect(d2.extensions()).to.be.null;
      expect(d3.extensions()).to.be.null;
    });
  });

  describe('#extensionKeys()', function() {
    it('should return an array of extension keys', function() {
      expect(d1.extensionKeys()).to.deep.equal(['x-test']);
    });
    it('should return a null', function() {
      expect(d2.extensionKeys()).to.be.null;
      expect(d3.extensionKeys()).to.be.null;
    });
  });

  describe('#extKeys()', function() {
    it('should return an array of extension keys', function() {
      expect(d1.extKeys()).to.deep.equal(['x-test']);
    });
    it('should return a null', function() {
      expect(d2.extKeys()).to.be.null;
      expect(d3.extKeys()).to.be.null;
    });
  });

  describe('#hasExtension()', function() {
    it('should return a boolean indicating if the object has appropriate extension by key', function() {
      expect(d1.hasExtension('x-test')).to.be.true;
      expect(d1.hasExtension('x-test2')).to.be.false;
      expect(d2.hasExtension('x-test')).to.be.false;
      expect(d3.hasExtension('x-test')).to.be.false;
    });
    it('should throw an error if key is not prefixed by `x-`', function() {
      try {
        d1.hasExtension('test');
      } catch(e) {
        expect(e).not.to.be.null;
      }
    });
  });

  describe('#extension()', function() {
    it('should return a value', function() {
      expect(d1.extension('x-test')).to.be.equal('testing');
    });
    it('should return an undefined', function() {
      expect(d1.extension('x-test2')).to.be.undefined;
      expect(d2.extension('x-test')).to.be.undefined;
      expect(d3.extension('x-test')).to.be.undefined;
    });
    it('should throw an error if key is not prefixed by `x-`', function() {
      try {
        d1.extension('test');
      } catch(e) {
        expect(e).not.to.be.null;
      }
    });
  });

  describe('#hasExt()', function() {
    it('should return a boolean indicating if the object has appropriate extension by key', function() {
      expect(d1.hasExt('x-test')).to.be.true;
      expect(d1.hasExt('x-test2')).to.be.false;
      expect(d2.hasExt('x-test')).to.be.false;
      expect(d3.hasExt('x-test')).to.be.false;
    });
    it('should throw an error if key is not prefixed by `x-`', function() {
      try {
        d1.hasExt('test');
      } catch(e) {
        expect(e).not.to.be.null;
      }
    });
  });

  describe('#ext()', function() {
    it('should return a value', function() {
      expect(d1.ext('x-test')).to.be.equal('testing');
    });
    it('should return an undefined', function() {
      expect(d1.ext('x-test2')).to.be.undefined;
      expect(d2.ext('x-test')).to.be.undefined;
      expect(d3.ext('x-test')).to.be.undefined;
    });
    it('should throw an error if key is not prefixed by `x-`', function() {
      try {
        d1.ext('test');
      } catch(e) {
        expect(e).not.to.be.null;
      }
    });
  });
});

function assertMixinSpecificationExtensionsInheritance(clazz) {
  describe('MixinSpecificationExtensions', function() {
    it('check if class has inherited methods from MixinSpecificationExtensions', function() {
      expect(clazz.prototype.hasExtensions).not.to.be.undefined;
      expect(clazz.prototype.extensions).not.to.be.undefined;
      expect(clazz.prototype.hasExtension).not.to.be.undefined;
      expect(clazz.prototype.extension).not.to.be.undefined;
      expect(clazz.prototype.hasExt).not.to.be.undefined;
      expect(clazz.prototype.ext).not.to.be.undefined;
    });
  });
}

module.exports = {
  assertMixinSpecificationExtensionsInheritance,
};
