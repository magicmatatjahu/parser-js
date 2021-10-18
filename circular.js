function refReplacer() {
  const modelPaths = new Map();
  const paths = new Map();
  let init = null;

  return function(field, value) {
    // `this` points to parent object of given value - some object or array
    const pathPart = modelPaths.get(this) + (Array.isArray(this) ? `[${field}]` : '.' + field);

    // check if `objOrPath` has "reference"
    const isComplex = value === Object(value);
    if (isComplex) {
      modelPaths.set(value, pathPart);
    }
    
    const savedPath = paths.get(value) || '';
    if(!savedPath && isComplex) {
      const valuePath = pathPart.replace(/undefined\.\.?/,'');
      paths.set(value, valuePath);
    }

    const prefixPath = savedPath[0] == '[' ? '$' : '$.'
    let val = savedPath ? `$ref:${prefixPath}${savedPath}` : value;
    if (init === null) {
      init = value;
    } else {
      val === init ? val = "$ref:$" : 0;
    }
    return val;
  }
}

function parseReferencedJSON(json) {
  const objToPath = new Map();
  const pathToObj = new Map();
  const parsedJson = JSON.parse(json);
  
  function traverse(parent, field) {
    let objOrPath = parent;
    let path = '$ref:$';

    if (field !== undefined) {
      // here can be string with `$ref` prefix or normal value 
      objOrPath = parent[field];
      path = objToPath.get(parent) + (Array.isArray(parent) ? `[${field}]` : `${field ? '.' + field : ''}`);
    }

    objToPath.set(objOrPath, path);
    pathToObj.set(path, objOrPath);
    
    let ref = pathToObj.get(objOrPath);
    if (ref) {
      parent[field] = ref;
    }
    if (objOrPath === '$ref:$' || ref === '$ref:$') {
      parent[field] = parsedJson;
    }

    // traverse all keys, only if object is array/object
    if (objOrPath === Object(objOrPath)) {
      for (let f in objOrPath) {
        traverse(objOrPath, f);
      }
    }
  }
  
  traverse(parsedJson);
  return parsedJson;
}

function getCircularReferences(json) {
  const objToPath = new Map();
  const cache = new Set();
  const circularRefs = {};
  
  function traverse(parent, field) {
    let obj = parent;
    let path = '$';

    if (field !== undefined) {
      obj = parent[field];
      path = objToPath.get(parent) + (Array.isArray(parent) ? `[${field}]` : `${field ? '.' + field : ''}`);
    }
    if (cache.has(obj)) {
      circularRefs[path] = objToPath.get(obj);
      return;
    }
    objToPath.set(obj, path);

    // traverse all keys, only if object is array/object
    if (obj === Object(obj)) {
      cache.add(obj)
      for (let f in obj) {
        traverse(obj, f);
      }
      objToPath.delete(obj);
      cache.delete(obj);
    }
  }
  
  traverse(json);
  return circularRefs;
}

// ---------------
// TEST
// ---------------

// gen obj with duplicate references
let a = { a1: 1, a2: 2 };
let b = { b1: 3, b2: "4" };
let obj = { o1: { o2: a }, b, a }; // duplicate reference
a.a3 = [1,2,b];                      // circular reference
b.b3 = a;                            // circular reference


// const stringifiedObject = JSON.stringify(obj, refReplacer(), 4);

// console.log(stringifiedObject);

// const parsedObj = parseReferencedJSON(stringifiedObject);

// console.log(parsedObj);


// another object
const object = {
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

object.RecursiveSelf.properties.selfChildren = object.RecursiveSelf;
object.RecursiveSelf.properties.selfObjectChildren.properties.test = object.RecursiveSelf;
object.RecursiveSelf.properties.selfSomething.properties.test = object.RecursiveAncestor;
object.RecursiveAncestor.properties.ancestorChildren = object.RecursiveSelf;
object.RecursiveComplex.patternProperties["^foo"] = object.RecursiveSelf;
object.RecursiveComplex.contains = object.RecursiveComplex;
object.RecursiveComplex.if = object.RecursiveAncestor;
object.RecursiveArray[0] = object.RecursiveSelf;
object.RecursiveArray[1].properties.items = object.RecursiveArray;
object.Root = object;
object.NestedRoot.properties.items = object;
object.NestedRoot.properties.properties.prop = object;
object.Property = object.RecursiveSelf;
object.NestedProperty.properties.prop = object.RecursiveSelf;

const output = JSON.stringify(object, refReplacer(), 4);

console.log(output);

const input = parseReferencedJSON(output);

console.log(input);

console.log(getCircularReferences(object))

