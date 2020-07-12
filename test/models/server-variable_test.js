const { expect } = require('chai');
const ServerVariable = require('../../lib/models/server-variable');
const js = { enum: ['value1', 'value2'], default: 'value1', description: 'test1', examples: ['value2'], 'x-test': 'testing' };

const { assertMixinDescriptionInheritance } = require('../mixins/description_test');
const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('ServerVariable', function() {
  describe('#hasAllowedValues()', function() {
    it('should return a true when enum is present', function() {
      const d = new ServerVariable(js);
      expect(d.hasAllowedValues()).to.be.true;
    });
    it('should return a false when enum is not present', function() {
      const d = new ServerVariable({});
      expect(d.hasAllowedValues()).to.be.false;
    });
  });

  describe('#allowedValues()', function() {
    it('should return values when enum is present', function() {
      const d = new ServerVariable(js);
      expect(d.allowedValues()).to.deep.equal(js.enum);
    });
    it('should return null', function() {
      const d = new ServerVariable({ enum: [] });
      expect(d.allowedValues()).to.be.null;
    });
  });
  
  describe('#allows()', function() {
    it('should return true if the value is in the enum', function() {
      const d = new ServerVariable(js);
      expect(d.allows('value1')).to.be.true;
    });
    it('should return false if the value is not in the enum', function() {
      const d = new ServerVariable(js);
      expect(d.allows('not found')).to.be.false;
    });
  });

  describe('#hasDefaultValue()', function() {
    it('should return true if default is present', function() {
      const d = new ServerVariable(js);
      expect(d.hasDefaultValue()).to.be.true;
    });
    it('should return false if the value is not in the enum', function() {
      const d = new ServerVariable({});
      expect(d.hasDefaultValue()).to.be.false;
    });
  });
  
  describe('#defaultValue()', function() {
    it('should return a string', function() {
      const d = new ServerVariable(js);
      expect(d.defaultValue()).to.be.equal(js.default);
    });
    it('should return null', function() {
      const d = new ServerVariable({});
      expect(d.defaultValue()).to.be.null;
    });
  });

  describe('#hasExamples()', function() {
    it('should return true if examples are present', function() {
      const d = new ServerVariable(js);
      expect(d.hasExamples()).to.be.true;
    });
    it('should return false if there are not examples', function() {
      const d = new ServerVariable({ examples: [] });
      expect(d.hasExamples()).to.be.false;
    });
  });
  
  describe('#examples()', function() {
    it('should return an array of strings', function() {
      const d = new ServerVariable(js);
      expect(d.examples()).to.be.equal(js.examples);
    });
    it('should return null', function() {
      const d = new ServerVariable({ examples: [] });
      expect(d.examples()).to.be.null;
    });
  });

  assertMixinDescriptionInheritance(ServerVariable);
  assertMixinSpecificationExtensionsInheritance(ServerVariable);
});
