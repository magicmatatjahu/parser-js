I think I managed to figure out how to solve the problem with circular references throughout our document, and surprisingly it is not that difficult, but it requires a fix in the `Base` model class. 

Before I go into the proposal, I'll give an example of a scheme (very complex) and describe what is circular. 

```js
{
  RecursiveSelf: {
    properties: {
      selfChildren: '#/RecursiveSelf',
      selfObjectChildren: {
        properties: {
          test: '#/RecursiveSelf',
          nonRecursive: {
            type: "string"
          }
        }
      },
      selfSomething: {
        properties: {
          test: '#/RecursiveAncestor',
        }
      }
    }
  },
  RecursiveAncestor: {
    properties: {
      ancestorChildren: '#/RecursiveSelf',
      ancestorSomething: {
        type: "string"
      }
    }
  },
  RecursiveComplex: {
    patternProperties: {
      "^foo": '#/RecursiveSelf',
    },
    contains: '#/RecursiveComplex',
    if: '#/RecursiveAncestor'
  },
  RecursiveArray: [
    '#/RecursiveSelf',
    {
      properties: {
        items: '#/RecursiveArray',
      }
    }
  ],
  Root: '#',
  NestedRoot: {
    properties: {
      items: '#',
      properties: {
        prop: '#',
      },
    }
  },
  Property: '#/RecursiveSelf',
  NestedProperty: {
    properties: {
      prop: '#/RecursiveSelf',
    }
  },
}
```

What I see, which is circular - gives the json pointer notation, the key is the value where the cyclicality occurs and the key value is the object that is cyclic relative to the key:

```text
'$.RecursiveSelf.properties.selfChildren' -> '$.RecursiveSelf',
'$.RecursiveSelf.properties.selfObjectChildren.properties.test' -> '$.RecursiveSelf',
'$.RecursiveSelf.properties.selfSomething.properties.test.properties.ancestorChildren' -> '$.RecursiveSelf',
'$.RecursiveAncestor.properties.ancestorChildren.properties.selfChildren' -> '$.RecursiveAncestor.properties.ancestorChildren',
'$.RecursiveAncestor.properties.ancestorChildren.properties.selfObjectChildren.properties.test' -> '$.RecursiveAncestor.properties.ancestorChildren',
'$.RecursiveAncestor.properties.ancestorChildren.properties.selfSomething.properties.test' -> '$.RecursiveAncestor',
...
```

I think the first two items are understandable - RecursiveSelf is circular in these areas, but the third item may seem strange. It goes to the `RecursiveAncestor` object and then indicates that the circular object is in `RecursiveSelf`.

But what about 4-6 elements. They show that we have 3 circular elements. First two is for `RecursiveSelf` element, but relative to the `$.RecursiveAncestor.properties.ancestorChildren` object - here we look at the circularity with respect to `RecursiveAncestor` object and not `RecursiveSelf` like the previous one. The 6th element shows circularity with respect to `$.RecursiveAncestor` - we start with `RecursiveAncestor` and end with `$.RecursiveAncestor`.

Here is the whole scheme with all circular items - see that the circularity against root is also checked:

```text
'$.RecursiveSelf.properties.selfChildren' -> '$.RecursiveSelf',
'$.RecursiveSelf.properties.selfObjectChildren.properties.test' -> '$.RecursiveSelf',
'$.RecursiveSelf.properties.selfSomething.properties.test.properties.ancestorChildren' -> '$.RecursiveSelf',
'$.RecursiveAncestor.properties.ancestorChildren.properties.selfChildren' -> '$.RecursiveAncestor.properties.ancestorChildren',
'$.RecursiveAncestor.properties.ancestorChildren.properties.selfObjectChildren.properties.test' -> '$.RecursiveAncestor.properties.ancestorChildren',
'$.RecursiveAncestor.properties.ancestorChildren.properties.selfSomething.properties.test' -> '$.RecursiveAncestor',
'$.RecursiveComplex.patternProperties.^foo.properties.selfChildren' -> '$.RecursiveComplex.patternProperties.^foo',
'$.RecursiveComplex.patternProperties.^foo.properties.selfObjectChildren.properties.test' -> '$.RecursiveComplex.patternProperties.^foo',
'$.RecursiveComplex.patternProperties.^foo.properties.selfSomething.properties.test.properties.ancestorChildren' -> '$.RecursiveComplex.patternProperties.^foo',
'$.RecursiveComplex.contains' -> '$.RecursiveComplex',
'$.RecursiveComplex.if.properties.ancestorChildren.properties.selfChildren' -> '$.RecursiveComplex.if.properties.ancestorChildren',
'$.RecursiveComplex.if.properties.ancestorChildren.properties.selfObjectChildren.properties.test' -> '$.RecursiveComplex.if.properties.ancestorChildren',
'$.RecursiveComplex.if.properties.ancestorChildren.properties.selfSomething.properties.test' -> '$.RecursiveComplex.if',
'$.RecursiveArray[0].properties.selfChildren' -> '$.RecursiveArray[0]',
'$.RecursiveArray[0].properties.selfObjectChildren.properties.test' -> '$.RecursiveArray[0]',
'$.RecursiveArray[0].properties.selfSomething.properties.test.properties.ancestorChildren' -> '$.RecursiveArray[0]',
'$.RecursiveArray[1].properties.items' -> '$.RecursiveArray',
'$.Root' -> '$',
'$.NestedRoot.properties.items' -> '$',
'$.NestedRoot.properties.properties.prop' -> '$',
'$.Property.properties.selfChildren' -> '$.Property',
'$.Property.properties.selfObjectChildren.properties.test' -> '$.Property',
'$.Property.properties.selfSomething.properties.test.properties.ancestorChildren' -> '$.Property',
'$.NestedProperty.properties.prop.properties.selfChildren' -> '$.NestedProperty.properties.prop',
'$.NestedProperty.properties.prop.properties.selfObjectChildren.properties.test' -> '$.NestedProperty.properties.prop',
'$.NestedProperty.properties.prop.properties.selfSomething.properties.test.properties.ancestorChildren' -> '$.NestedProperty.properties.prop'
```

If anyone does not understand that (or something is broken), please write :)

My suggestion:

- save object above with circular references saved as json pointer in `x-parser-circular-refs` in the root of parsed AsyncAPI document.
- update [`Base` model class](https://github.com/asyncapi/parser-js/blob/master/lib/models/base.js) to:

```js
class Base {
  constructor (json, {
    asyncapi, // parsed AsyncAPI document
    parent, // parent element, for example - for example `ExternalDocs` model created by `.info` path will have `Info` instance as parent
    path, // json pointer of given element - for example `externalDocs` created in `.info` path will have value `$.info.externalDocs`
  }) {
    ...
  }

  // check if given element is circular using `x-parser-circular-refs` of asyncapi doc
  isCircular(): boolean {
    const circularRefs = asyncapi.ext(`x-parser-circular-refs`);
    // check if `x-parser-circular-refs` has path of given element, if yes element is circular
    if (circularRefs.hasOwnProperty(this.path)) {
      return true;
    }
    return false;
  }

  // get circular element of given element
  getCirularObject(): any {
    if (this.isCircular() === false) {
      return;
    }

    const circularRefs = asyncapi.ext(`x-parser-circular-refs`);
    const circularRefPath = circularRefs[this.path];
    if (circularRefPath === undefined) {
      return;
    }

    let el = this.parent;
    while (el && el.path !=== circularRefPath) {
      el = el.parent;
    }
    return el;
  }
}
```

Notes:

- this works for every case, even in bindings and extensions.
- `x-parser-circular` extension in prop and `x-parser-circular-props` extension in object element are no longer needed.
- we should handle all circular schemas in [`iterators`](https://github.com/asyncapi/parser-js/blob/master/lib/iterators.js) - see issue https://github.com/asyncapi/generator/issues/666

What do you think? The solution is not as complicated as it seems, just parsing and mapping the circular elements takes 30 lines (I habe worked POC), more work will be done with passing the parents and paths in the elements, so we will have to update each model constructor.

cc if you are not interested in the topic, you don't have to write back, but maybe it will interest you :)