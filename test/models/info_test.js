const { expect } = require('chai');
const Info = require('../../lib/models/info');
const js = { title: 'Test', version: '1.2.3', license: { name: 'Apache 2.0', url: 'https://www.apache.org/licenses/LICENSE-2.0' }, contact: { name: 'Fran', url: 'https://www.asyncapi.com', email: 'fmvilas@gmail.com' } };

const { assertMixinDescriptionInheritance } = require('../mixins/description_test');
const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('Info', function() {
  describe('#title()', function() {
    it('should return a string', function() {
      const d = new Info(js);
      expect(d.title()).to.be.equal(js.title);
    });
  });
  
  describe('#version()', function() {
    it('should return a string', function() {
      const d = new Info(js);
      expect(d.version()).to.be.equal(js.version);
    });
  });
  
  describe('#hasTermsOfService()', function() {
    it('should return a boolean indicating if the Info has termsOfService', function() {
      const d = new Info({ termsOfService: 'termsOfService' });
      const d2 = new Info({ title: 'Test' });
      expect(d.hasTermsOfService()).to.be.true;
      expect(d2.hasTermsOfService()).to.be.false;
    });
  });

  describe('#termsOfService()', function() {
    it('should return a string', function() {
      const d = new Info({ termsOfService: 'termsOfService' });
      expect(d.termsOfService()).to.be.equal('termsOfService');
    });
    it('should return a null', function() {
      const d = new Info(js);
      expect(d.termsOfService()).to.be.null;
    });
  });
  
  describe('#hasLicense()', function() {
    it('should return a boolean indicating if the Info has license', function() {
      const d = new Info(js);
      const d2 = new Info({ license: {} });
      const d3 = new Info({ title: 'Test' });
      expect(d.hasLicense()).to.be.true;
      expect(d2.hasLicense()).to.be.false;
      expect(d3.hasLicense()).to.be.false;
    });
  });

  describe('#license()', function() {
    it('should return a license object', function() {
      const d = new Info(js);
      expect(d.license().constructor.name).to.be.equal('License');
      expect(d.license().json()).to.be.equal(js.license);
    });
    
    it('should return null if a license object is not given', function() {
      const d = new Info({});
      expect(d.license()).to.be.equal(null);
    });
  });

  describe('#hasContact()', function() {
    it('should return a boolean indicating if the Info has contact', function() {
      const d = new Info(js);
      const d2 = new Info({ contact: {} });
      const d3 = new Info({ title: 'Test' });
      expect(d.hasContact()).to.be.true;
      expect(d2.hasContact()).to.be.false;
      expect(d3.hasContact()).to.be.false;
    });
  });
  
  describe('#contact()', function() {
    it('should return a license object', function() {
      const d = new Info(js);
      expect(d.contact().constructor.name).to.be.equal('Contact');
      expect(d.contact().json()).to.be.equal(js.contact);
    });

    it('should return null if a contact object is not given', function() {
      const d = new Info({});
      expect(d.contact()).to.be.equal(null);
    });
  });

  assertMixinDescriptionInheritance(Info);
  assertMixinSpecificationExtensionsInheritance(Info);
});
