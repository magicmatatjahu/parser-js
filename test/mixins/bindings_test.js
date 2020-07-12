const { expect } = require('chai');
const { mix } = require('../../lib/utils');
const Base = require('../../lib/models/base');
const MixinBindings = require('../../lib/mixins/bindings');

describe('MixinBindings', function() {
  const Clazz = mix(class extends Base {}, MixinBindings);

  const doc1 = { bindings: { amqp: { test: 'test1' } } };
  const doc2 = { bindings: {} };
  const doc3 = {};
  const d1 = new Clazz(doc1);
  const d2 = new Clazz(doc2);
  const d3 = new Clazz(doc3);

  describe('#hasBindings()', function() {
    it('should return a boolean indicating if the object has bindings', function() {
      expect(d1.hasBindings()).to.be.true;
      expect(d2.hasBindings()).to.be.false;
      expect(d3.hasBindings()).to.be.false;
    });
  });

  describe('#bindings()', function() {
    it('should return a map of bindings', function() {
      expect(d1.bindings()).to.deep.equal(doc1.bindings);
    });
    it('should return a null', function() {
      expect(d2.bindings()).to.be.null;
      expect(d3.bindings()).to.be.null;
    });
  });

  describe('#bindingProtocols()', function() {
    it('should return an array of protocol names', function() {
      expect(d1.bindingProtocols()).to.deep.equal(['amqp']);
    });
    it('should return a null', function() {
      expect(d2.bindingProtocols()).to.be.null;
      expect(d3.bindingProtocols()).to.be.null;
    });
  });

  describe('#hasBinding()', function() {
    it('should return a boolean indicating if the bindings object has appropriate binding by name', function() {
      expect(d1.hasBinding("amqp")).to.be.true;
      expect(d1.hasBinding("http")).to.be.false;
      expect(d2.hasBinding("amqp")).to.be.false;
      expect(d3.hasBinding("amqp")).to.be.false;
    });
  });

  describe('#binding()', function() {
    it('should return a binding object', function() {
      expect(d1.binding("amqp")).to.deep.equal(doc1.bindings.amqp);
    });
    it('should return a null', function() {
      expect(d1.binding("http")).to.be.null;
      expect(d2.binding("amqp")).to.be.null;
      expect(d3.binding("amqp")).to.be.null;
    });
  });
});

function assertMixinBindingsInheritance(clazz) {
  describe('MixinBindings', function() {
    it('check if class has inherited methods from MixinBindings', function() {
      expect(clazz.prototype.hasBindings).not.to.be.undefined;
      expect(clazz.prototype.bindings).not.to.be.undefined;
      expect(clazz.prototype.hasBinding).not.to.be.undefined;
      expect(clazz.prototype.binding).not.to.be.undefined;
    });
  });
}

module.exports = {
  assertMixinBindingsInheritance,
};
