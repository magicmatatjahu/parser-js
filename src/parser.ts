import { Spectral } from '@stoplight/spectral-core';

import { parse } from './parse';
import { validate } from './validate';
import { registerSchemaParser } from './schema-parser';
import { AsyncAPISchemaParser } from './schema-parser/asyncapi-schema-parser';
import { configureSpectral } from './spectral';

import type { IConstructorOpts } from '@stoplight/spectral-core';
import type { ParseOptions } from './parse';
import type { ValidateOptions } from './validate';
import type { SchemaParser } from './schema-parser';
import type { ParserInput } from './types';

export interface ParserOptions {
  spectral?: Spectral | IConstructorOpts;
}

export class Parser {
  public readonly parserRegistry = new Map<string, SchemaParser>();
  public readonly spectral: Spectral;

  constructor(
    private readonly options?: ParserOptions
  ) {
    const { spectral } = this.options || {};
    if (spectral instanceof Spectral) {
      this.spectral = spectral;
    } else {
      this.spectral = new Spectral(spectral);
    }

    this.registerSchemaParser(AsyncAPISchemaParser());
    configureSpectral(this);
  }

  parse(asyncapi: ParserInput, options?: ParseOptions) {
    return parse(this, asyncapi, options);
  }

  validate(asyncapi: ParserInput, options?: ValidateOptions) {
    return validate(this, asyncapi, options);
  }

  registerSchemaParser(parser: SchemaParser) {
    return registerSchemaParser(this, parser);
  }
}
