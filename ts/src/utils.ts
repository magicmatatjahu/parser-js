import { load } from 'js-yaml';

import { AsyncAPIDocument } from './models';
import { unstringify } from './stringify';

import { 
  xParserSpecParsed,
  xParserSpecStringified,
} from './constants';

export function toAsyncAPIDocument(maybeDoc: unknown): AsyncAPIDocument | undefined {
  if (isAsyncAPIDocument(maybeDoc)) {
    return maybeDoc;
  }
  if (!isParsedDocument(maybeDoc)) {
    return;
  }
  if (isStringifiedDocument(maybeDoc)) {
    return unstringify(maybeDoc);
  }
  return new AsyncAPIDocument(maybeDoc);
}

export function serializeInput(maybeDoc: unknown): { format: 'json' | 'yaml', value: Record<string, any> } {
  if (!maybeDoc) {
    throw new Error('Document can\'t be null or falsey.');
  }
  if (typeof maybeDoc === 'object') {
    return {
      format: 'json',
      value: maybeDoc,
    };
  }
  if (typeof maybeDoc !== 'string') {
    throw new Error('The AsyncAPI document has to be either a string or a JS object.');
  }

  try {
    const maybeJSON = JSON.parse(maybeDoc);
    if (typeof maybeJSON === 'object') {
      return {
        format: 'json',
        value: maybeJSON,
      };
    }

    // if `maybeJSON` is object, then we have 100% sure that we operate on JSON, 
    // but if it's `string` then we have option that it can be YAML but it doesn't have to be
    return {
      format: 'yaml',
      value: load(maybeDoc) as Record<string, any>,
    };
  } catch (e) {
    try {
      // try to parse again YAML, because the text itself may not have a JSON representation and cannot be represented as a JSON object/string
      return {
        format: 'yaml',
        value: load(maybeDoc) as Record<string, any>,
      };
    } catch (err) {
      throw new Error('AsyncAPI document must be a valid JSON or YAML document.');
    }
  }
};

export function isAsyncAPIDocument(maybeDoc: unknown): maybeDoc is AsyncAPIDocument {
  if (typeof maybeDoc !== 'object' || maybeDoc === null) {
    return false;
  }
  return true;
}

export function isParsedDocument(maybeDoc: unknown): maybeDoc is Record<string, any> {
  if (typeof maybeDoc !== 'object' || maybeDoc === null) {
    return false;
  }
  return Boolean((maybeDoc as Record<string, any>)[xParserSpecParsed]);
}

export function isStringifiedDocument(maybeDoc: unknown): maybeDoc is Record<string, any> {
  if (typeof maybeDoc !== 'object' || maybeDoc === null) {
    return false;
  }
  return Boolean((maybeDoc as Record<string, any>)[xParserSpecStringified]);
}

export function isURL(maybeUrl: unknown): maybeUrl is string {
  if (typeof maybeUrl !== 'string') {
    return false;
  }
  try {
    const url = new URL(maybeUrl);
    return url.protocol.startsWith('http');
  } catch (_) {
    return false;
  }
}

export async function fetchURL(url: string): Promise<string> {
  return '';
}

export function mergePatch(origin: unknown, patch: unknown) {
  if (!isObject(patch)) {
    // If the patch is not an object, it replaces the origin.
    return patch;
  }

  const result = !isObject(origin)
    ? // Non objects are being replaced.
      {}
    : // Make sure we never modify the origin.
      Object.assign({}, origin);

  Object.keys(patch).forEach(key => {
    const patchVal = patch[key];
    if (patchVal === null) {
      delete result[key];
    } else {
      result[key] = mergePatch(result[key], patchVal);
    }
  });
  return result;
}

export function cloneDeep(data: unknown) {

}

function isObject(val: unknown): val is Record<string, any> {
  return typeof val === 'object' && Array.isArray(val) === false && val !== null;
}