const { expect } = require('chai');
const { mix } = require('../../lib/utils');
const Base = require('../../lib/models/base');
const Tag = require('../../lib/models/tag');
const MixinTags = require('../../lib/mixins/tags');

describe('MixinTags', function() {
  const Clazz = mix(class extends Base {}, MixinTags);

  const doc1 = { tags: [{ name: 'test1' }, { name: 'test2' }] };
  const doc2 = { tags: [] };
  const doc3 = {};
  const d1 = new Clazz(doc1);
  const d2 = new Clazz(doc2);
  const d3 = new Clazz(doc3);

  describe('#hasTags()', function() {
    it('should return a boolean indicating if the object has tags', function() {
      expect(d1.hasTags()).to.be.true;
      expect(d2.hasTags()).to.be.false;
      expect(d3.hasTags()).to.be.false;
    });
  });

  describe('#tags()', function() {
    it('should return an array of tag objects', function() {
      expect(Array.isArray(d1.tags())).to.be.true;
      d1.tags().forEach((tag, i) => {
        expect(tag instanceof Tag).to.be.true;
        expect(tag.constructor.name).to.be.equal('Tag');
        expect(tag.json()).to.deep.equal(doc1.tags[i]);
      });
    });
    it('should return an null', function() {
      expect(d2.tags()).to.be.null;  
      expect(d3.tags()).to.be.null;  
    });
  });

  describe('#tagNames()', function() {
    it('should return an array of tag names', function() {
      expect(d1.tagNames()).to.deep.equal(['test1', 'test2']);
    });
    it('should return a null', function() {
      expect(d2.tagNames()).to.be.null;
      expect(d3.tagNames()).to.be.null;
    });
  });

  describe('#hasTag()', function() {
    it('should return a boolean indicating if the tags object has appropriate tag by name', function() {
      expect(d1.hasTag("test1")).to.be.true;
      expect(d1.hasTag("test2")).to.be.true;
      expect(d1.hasTag("test3")).to.be.false;
      expect(d2.hasTag("test1")).to.be.false;
      expect(d3.hasTag("test1")).to.be.false;
    });
  });

  describe('#tag()', function() {
    it('should return a tag object', function() {
      expect(d1.tag("test1")).not.to.be.null;
      expect(d1.tag("test1") instanceof Tag).to.be.true;
      expect(d1.tag("test2")).not.to.be.null;
      expect(d1.tag("test2") instanceof Tag).to.be.true;
    });
    it('should return a null', function() {
      expect(d1.tag("test3")).to.be.null;
      expect(d1.tag("test3") instanceof Tag).not.to.be.true;
      expect(d2.tag("test1")).to.be.null;
      expect(d2.tag("test1") instanceof Tag).not.to.be.true;
      expect(d3.tag("test1")).to.be.null;
      expect(d3.tag("test1") instanceof Tag).not.to.be.true;
    });
  });
});

function assertMixinTagsInheritance(clazz) {
  describe('MixinTags', function() {
    it('check if class has inherited methods from MixinTags', function() {
      expect(clazz.prototype.hasTags).not.to.be.undefined;
      expect(clazz.prototype.tags).not.to.be.undefined;
      expect(clazz.prototype.hasTag).not.to.be.undefined;
      expect(clazz.prototype.tag).not.to.be.undefined;
    });
  });
}

module.exports = {
  assertMixinTagsInheritance,
};
