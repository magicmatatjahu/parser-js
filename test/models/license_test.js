const { expect } = require('chai');
const License = require('../../lib/models/license');
const js = { name: 'Apache 2.0', url: 'https://www.apache.org/licenses/LICENSE-2.0' };

const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('License', function() {
  describe('#name()', function() {
    it('should return a string', function() {
      const d = new License(js);
      expect(d.name()).to.be.equal(js.name);
    });
  });

  describe('#hasUrl()', function() {
    it('should return a boolean indicating if the License has url', function() {
      const d = new License({ url: 'https://www.apache.org/licenses/LICENSE-2.0' });
      const d2 = new License({ name: 'Apache 2.0' });
      expect(d.hasUrl()).to.be.true;
      expect(d2.hasUrl()).to.be.false;
    });
  });
  
  describe('#url()', function() {
    it('should return a string', function() {
      const d = new License(js);
      expect(d.url()).to.be.equal(js.url);
    });
    it('should return a null', function() {
      const d = new License({ url: '' });
      expect(d.url()).to.be.null;
    });
  });

  assertMixinSpecificationExtensionsInheritance(License);
});
