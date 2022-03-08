import { AsyncAPIDocument } from "./models";

import { toAsyncAPIDocument, isURL, fetchURL } from "./utils";

import { customOperations } from './custom-operations';
import { LintOptions, validate } from "./lint";

export type ParserInput = string | { asyncapi: string } | AsyncAPIDocument;

export interface ParseOptions {
  path?: string;
  applyTraits?: boolean;
  fetchOptions?: any;
  validateOptions?: LintOptions;
}

export async function parse(asyncapi: ParserInput, options?: ParseOptions): Promise<AsyncAPIDocument> {
  let maybeDocument = toAsyncAPIDocument(asyncapi);
  if (maybeDocument) {
    return maybeDocument;
  }

  let document: string | Record<string, any> = asyncapi;
  if (isURL(asyncapi)) {
    document = fetchURL(asyncapi);
  }

  options = normalizeOptions(options);
  try {
    const { resolved, results } = await validate(document, options.validateOptions);
    if (results.length > 0) {
      // throw error
    }

    await customOperations(resolved, options);
    return new AsyncAPIDocument(resolved);
  } catch(err) {
    throw Error();
  }
}

function normalizeOptions(options?: ParseOptions): ParseOptions {
  if (typeof options !== 'object') {
    return { applyTraits: true };
  }

  options = { ...options };
  if (options.applyTraits === undefined) {
    options.applyTraits = true;
  }
  return options;
}
