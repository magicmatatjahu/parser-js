const { expect } = require('chai');
const ChannelParameter = require('../../lib/models/channel-parameter');
const js = { location: '$message.headers#/x-param1', schema: { type: 'string' } };

const { assertMixinDescriptionInheritance } = require('../mixins/description_test');
const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('ChannelParameter', function() {
  describe('#hasLocation()', function() {
    it('should return a boolean indicating if the ChannelParameter has location', function() {
      const d = new ChannelParameter(js);
      const d2 = new ChannelParameter({ location: '' });
      expect(d.hasLocation()).to.be.true;
      expect(d2.hasLocation()).to.be.false;
    });
  });

  describe('#location()', function() {
    it('should return a string', function() {
      const d = new ChannelParameter(js);
      expect(d.location()).to.be.equal(js.location);
    });
    it('should return a null', function() {
      const d = new ChannelParameter({ location: '' });
      expect(d.location()).to.be.null;
    });
  });

  describe('#hasSchema()', function() {
    it('should return a boolean indicating if the ChannelParameter has schema', function() {
      const d = new ChannelParameter(js);
      const d2 = new ChannelParameter({ schema: '' });
      expect(d.hasSchema()).to.be.true;
      expect(d2.hasSchema()).to.be.false;
    });
  });
   
  describe('#schema()', function() {
    it('should return a Schema object', function() {
      const d = new ChannelParameter(js);
      expect(d.schema().constructor.name).to.be.equal('Schema');
      expect(d.schema().json()).to.equal(js.schema);
    });
    it('should return a null', function() {
      const d = new ChannelParameter({ schema: {} });
      expect(d.schema()).to.be.null;
    });
  });

  assertMixinDescriptionInheritance(ChannelParameter);
  assertMixinSpecificationExtensionsInheritance(ChannelParameter);
});
