const { expect } = require('chai');
const ExternalDocs = require('../../lib/models/external-docs');
const js = { url: 'somewhere' };

const { assertMixinDescriptionInheritance } = require('../mixins/description_test');
const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('ExternalDocs', function() {  
  describe('#url()', function() {
    it('should return a string', function() {
      const d = new ExternalDocs(js);
      expect(d.url()).to.be.equal(js.url);
    });
  });

  assertMixinDescriptionInheritance(ExternalDocs);
  assertMixinSpecificationExtensionsInheritance(ExternalDocs);
});
