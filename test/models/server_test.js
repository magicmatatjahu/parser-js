const { expect } = require('chai');
const Server = require('../../lib/models/server');
const js = { url: 'test.com', protocol: 'amqp', protocolVersion: '0-9-1', description: 'test', variables: { test1: { enum: ['value1', 'value2'], default: 'value1', description: 'test1', examples: ['value2'] } }, security: [{ oauth2: ['user:read'] }], bindings: { amqp: 'test' }, 'x-test': 'testing' };

const { assertMixinDescriptionInheritance } = require('../mixins/description_test');
const { assertMixinBindingsInheritance } = require('../mixins/bindings_test');
const { assertMixinSpecificationExtensionsInheritance } = require('../mixins/specification-extensions_test');

describe('Server', function() {
  describe('#url()', function() {
    it('should return a string', function() {
      const d = new Server(js);
      expect(d.url()).to.be.equal(js.url);
    });
  });
  
  describe('#protocol()', function() {
    it('should return a string', function() {
      const d = new Server(js);
      expect(d.protocol()).to.be.equal(js.protocol);
    });
  });

  describe('#protocolVersion()', function() {
    it('should return a string', function() {
      const d = new Server(js);
      expect(d.protocolVersion()).to.be.equal(js.protocolVersion);
    });
    it('should return a null', function() {
      const d = new Server({ protocol: '' });
      expect(d.protocolVersion()).to.be.null;
    });
  });
  
  describe('#hasProtocolVersion()', function() {
    it('should return a boolean indicating if a server has protocol version', function() {
      const d = new Server(js);
      const d2 = new Server({ protocol: 'amqp' });
      expect(d.hasProtocolVersion()).to.be.true;
      expect(d2.hasProtocolVersion()).to.be.false;
    });
  });

  describe('#hasVariables()', function() {
    it('should return a boolean indicating if a server URL has variables', function() {
      const doc = { url: 'test1:{port}', variables: { port: { desc: 'test1' } } };
      const docNoServerVariables = { url: 'test' };
      const d = new Server(doc);
      const d2 = new Server(docNoServerVariables);
      expect(d.hasVariables()).to.equal(true);
      expect(d2.hasVariables()).to.equal(false);
    });
  });

  describe('#variables()', function() {
    it('should return a map of ServerVariable objects', function() {
      const d = new Server(js);
      expect(typeof d.variables()).to.be.equal('object');
      expect(d.variables().test1.constructor.name).to.equal('ServerVariable');
      expect(d.variables().test1.json()).to.equal(js.variables.test1);
    });
  });
  
  describe('#hasVariable()', function() {
    it('should return a boolean indicating if a server has a appropriate variable by name', function() {
      const d = new Server(js);
      expect(d.hasVariable('test1')).to.be.true;
      expect(d.hasVariable('test2')).to.be.false;
    });
  });

  describe('#variable()', function() {
    it('should return a specific ServerVariable object', function() {
      const d = new Server(js);
      expect(d.variable('test1').constructor.name).to.equal('ServerVariable');
      expect(d.variable('test1').json()).to.equal(js.variables.test1);
    });
  });

  describe('#hasSecurity()', function() {
    it('should return a boolean indicating if a server has a security', function() {
      const d = new Server(js);
      const d2 = new Server({ security: {} });
      expect(d.hasSecurity()).to.be.true;
      expect(d2.hasSecurity()).to.be.false;
    });
  });
  
  describe('#security()', function() {
    it('should return an array of security requirements objects', function() {
      const d = new Server(js);
      expect(Array.isArray(d.security())).to.equal(true);
      d.security().forEach((s, i) => {
        expect(s.constructor.name).to.equal('ServerSecurityRequirement');
        expect(s.json()).to.equal(js.security[i]);
      });
    });
    it('should return null', function() {
      const d = new Server({ security: {} });
      expect(d.security()).to.be.null;
    });
  });

  assertMixinDescriptionInheritance(Server);
  assertMixinBindingsInheritance(Server);
  assertMixinSpecificationExtensionsInheritance(Server);
});
