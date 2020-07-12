const { expect } = require('chai');
const Contact = require('../../lib/models/contact');
const js = { name: 'Fran', url: 'https://www.asyncapi.com', email: 'fmvilas@gmail.com' };

const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('Contact', function() {
  describe('#hasName()', function() {
    it('should return a boolean indicating if the Contact has name', function() {
      const d = new Contact({ name: 'Fran' });
      const d2 = new Contact({ url: 'https://www.asyncapi.com' });
      expect(d.hasName()).to.be.true;
      expect(d2.hasName()).to.be.false;
    });
  });

  describe('#name()', function() {
    it('should return a string', function() {
      const d = new Contact(js);
      expect(d.name()).to.be.equal(js.name);
    });
    it('should return a null', function() {
      const d = new Contact({ name: '' });
      expect(d.name()).to.be.null;
    });
  });

  describe('#hasUrl()', function() {
    it('should return a boolean indicating if the Contact has url', function() {
      const d = new Contact({ url: 'https://www.asyncapi.com' });
      const d2 = new Contact({ name: 'Fran' });
      expect(d.hasUrl()).to.be.true;
      expect(d2.hasUrl()).to.be.false;
    });
  });
  
  describe('#url()', function() {
    it('should return a string', function() {
      const d = new Contact(js);
      expect(d.url()).to.be.equal(js.url);
    });
    it('should return a null', function() {
      const d = new Contact({ url: '' });
      expect(d.url()).to.be.null;
    });
  });

  describe('#hasEmail()', function() {
    it('should return a boolean indicating if the Contact has email', function() {
      const d = new Contact({ email: 'fmvilas@gmail.com' });
      const d2 = new Contact({ name: 'Fran' });
      expect(d.hasEmail()).to.be.true;
      expect(d2.hasEmail()).to.be.false;
    });
  });
  
  describe('#email()', function() {
    it('should return a string', function() {
      const d = new Contact(js);
      expect(d.email()).to.be.equal(js.email);
    });
    it('should return a null', function() {
      const d = new Contact({ email: '' });
      expect(d.email()).to.be.null;
    });
  });

  assertMixinSpecificationExtensionsInheritance(Contact);
});
