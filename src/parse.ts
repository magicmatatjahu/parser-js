import { AsyncAPIDocumentInterface, newAsyncAPIDocument } from './models';

import { customOperations } from './custom-operations';
import { validate } from './validate';
import { unfreeze } from './stringify';
import { toAsyncAPIDocument } from './document';
import { createDetailedAsyncAPI, mergePatch } from './utils';

import { xParserSpecParsed } from './constants';

import type { Parser } from './parser';
import type { ValidateOptions } from './validate';
import type { ParserInput, Diagnostic } from './types';

export interface ParseOutput {
  document: AsyncAPIDocumentInterface | undefined;
  diagnostics: Diagnostic[]; 
}

export interface ParseOptions {
  source?: string;
  applyTraits?: boolean;
  parseSchemas?: boolean;
  validateOptions?: Omit<ValidateOptions, 'source'>;
}

const defaultOptions: ParseOptions = {
  applyTraits: true,
  parseSchemas: true,
};

export async function parse(parser: Parser, asyncapi: ParserInput, options: ParseOptions = {}): Promise<ParseOutput> {
  const maybeDocument = toAsyncAPIDocument(asyncapi);
  if (maybeDocument) {
    return { 
      document: maybeDocument,
      diagnostics: [],
    };
  }

  options = mergePatch<ParseOptions>(defaultOptions, options);

  const { raw, unparsed, validated, diagnostics } = await validate(parser, asyncapi, { ...(options.validateOptions || {}), source: options.source });
  if (validated === undefined) {
    return {
      document: undefined,
      diagnostics,
    };
  }

  // unfreeze the object - Spectral makes resolved document "freezed" 
  const parsed = unfreeze(validated as Record<string, any>);
  parsed[String(xParserSpecParsed)] = true;
  
  const detailed = createDetailedAsyncAPI(parsed, unparsed, raw, options.source);
  await customOperations(parser, detailed, options);
  const document = newAsyncAPIDocument(detailed);

  return { 
    document,
    diagnostics,
  };
}
