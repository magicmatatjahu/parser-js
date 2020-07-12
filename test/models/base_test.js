const { expect } = require('chai');
const Base = require('../../lib/models/base');

describe('Base', function() {
  describe('#json()', function() {
    it('should return the whole JSON object', function() {
      const doc = { test: 'testing' };
      const d = new Base(doc);
      expect(d.json()).to.be.deep.equal(doc);
    });

    it('should throw error when input is falsy value', function() {
      try {
        new Base();
      } catch(e) {
        expect(e.type).to.equal('https://github.com/asyncapi/parser-js/null-or-falsey-document');
        expect(e.title).to.equal('Invalid JSON to instantiate the Base object.');
      }
    });

    it('should return the value of a given key', function() {
      const doc = { test: 'testing' };
      const d = new Base(doc);
      expect(d.json('test')).to.be.equal(doc.test);
    });
    
    it('should return the value of a given key, even when this is falsy', function() {
      const doc = { 0: 'testing' };
      const d = new Base(doc);
      expect(d.json(0)).to.be.equal(doc[0]);
    });

    it('should return undefined if _json is falsy', function() {
      const doc = { test: 'testing' };
      const d = new Base(doc);
      d._json = undefined;
      expect(d.json('test')).to.be.undefined;
    });
  });
});
