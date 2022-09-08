import { Document } from '@stoplight/spectral-core';
import { Yaml } from '@stoplight/spectral-parsers';
import { normalizeInput, hasWarningDiagnostic, hasErrorDiagnostic, mergePatch } from './utils';

import type { IRunOpts } from '@stoplight/spectral-core';
import type { Parser } from './parser';
import type { AsyncAPIDocumentInterface } from './models/asyncapi';
import type { ParserInput, Diagnostic, MaybeAsyncAPI, AsyncAPIObject } from './types';

export interface ValidateOptions extends IRunOpts {
  source?: string;
  allowedSeverity?: {
    warning?: boolean;
    info?: boolean;
    hint?: boolean;
  };
}

export interface ValidateOutput {
  raw: string | MaybeAsyncAPI;
  unparsed: AsyncAPIObject,
  validated: unknown;
  diagnostics: Diagnostic[];
}

const defaultOptions: ValidateOptions = {
  allowedSeverity: {
    warning: true,
    info: true,
    hint: true,
  }
};

export async function validate(parser: Parser, asyncapi: ParserInput, options: ValidateOptions = {}): Promise<ValidateOutput> {
  const { allowedSeverity } = mergePatch<ValidateOptions>(defaultOptions, options);

  const stringifiedDocument = normalizeInput(asyncapi as Exclude<ParserInput, AsyncAPIDocumentInterface>);
  const document = new Document(stringifiedDocument, Yaml, options.source);
  (document as any).rawInput = asyncapi;
  // eslint-disable-next-line prefer-const
  let { resolved: validated, results } = await parser.spectral.runWithResolved(document);

  if (
    hasErrorDiagnostic(results) ||
    (!allowedSeverity?.warning && hasWarningDiagnostic(results))
  ) {
    validated = undefined;
  }

  return {
    raw: asyncapi as string | MaybeAsyncAPI,
    unparsed: document.data as AsyncAPIObject,
    validated, 
    diagnostics: results,
  };
}
