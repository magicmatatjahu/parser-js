import { AsyncAPIDocument } from './models';

import { isAsyncAPIDocument, isStringifiedDocument } from './utils';
import { xParserSpecStringified } from './constants';

export function stringify(document: unknown, space?: string | number): string | undefined {
  if (!isAsyncAPIDocument(document)) {
    return;
  }

  return JSON.stringify({ 
    ...document.json(),
    [String(xParserSpecStringified)]: true,
  }, refReplacer(), space);
}

export function unstringify(document: Record<string, any>): AsyncAPIDocument | undefined {
  if (!isStringifiedDocument(document)) {
    return;
  }

  // shall copy of whole JSON
  document = { ...document };
  // remove `x-parser-spec-stringified` extension
  delete document[String(xParserSpecStringified)];

  traverseStringifiedDoc(document, undefined, document, new Map(), new Map());
  return new AsyncAPIDocument(document);
}

function refReplacer() {
  const modelPaths = new Map();
  const paths = new Map();
  let init: any = null;

  return function(this: any, field: string, value: any) {
    // `this` points to parent object of given value - some object or array
    const pathPart = modelPaths.get(this) + (Array.isArray(this) ? `[${field}]` : `.${field}`);

    // check if `objOrPath` has "reference"
    const isComplex = value === Object(value);
    if (isComplex) {
      modelPaths.set(value, pathPart);
    }
    
    const savedPath = paths.get(value) || '';
    if (!savedPath && isComplex) {
      const valuePath = pathPart.replace(/undefined\.\.?/,'');
      paths.set(value, valuePath);
    }

    const prefixPath = savedPath[0] === '[' ? '$' : '$.';
    let val = savedPath ? `$ref:${prefixPath}${savedPath}` : value;
    if (init === null) {
      init = value;
    } else if (val === init) {
      val = '$ref:$';
    }
    return val;
  };
}

function traverseStringifiedDoc(parent: any, field: string | undefined, root: any, objToPath: Map<any, any>, pathToObj: Map<any, any>) {
  let objOrPath = parent;
  let path = '$ref:$';

  if (field !== undefined) {
    // here can be string with `$ref` prefix or normal value 
    objOrPath = parent[String(field)];
    const concatenatedPath = field ? `.${field}` : '';
    path = objToPath.get(parent) + (Array.isArray(parent) ? `[${field}]` : concatenatedPath);
  }

  objToPath.set(objOrPath, path);
  pathToObj.set(path, objOrPath);
  
  const ref = pathToObj.get(objOrPath);
  if (ref) {
    parent[String(field)] = ref;
  }
  if (objOrPath === '$ref:$' || ref === '$ref:$') { // NOSONAR
    parent[String(field)] = root;
  }

  // traverse all keys, only if object is array/object
  if (objOrPath === Object(objOrPath)) {
    for (const f in objOrPath) {
      traverseStringifiedDoc(objOrPath, f, root, objToPath, pathToObj);
    }
  }
}
