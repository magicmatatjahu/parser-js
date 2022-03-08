import { xParserOriginalSchema, xParserOriginalSchemaFormat } from "./constants";

export interface ValidateSchemaData {
  asyncapi: Record<string, any>;
  originalAsyncapi: string;
  versionAsyncapi: string;
  data: unknown;
  path: Array<string | number>;
  schemaFormat: string;
  defaultSchemaFormat: string;
}

export interface ParseSchemaData {
  asyncapi: Record<string, any>;
  originalAsyncapi: string;
  versionAsyncapi: string;
  data: unknown;
  path: Array<string | number>;
  schemaFormat: string;
  defaultSchemaFormat: string;
}

export interface SchemaParser {
  validate: (data: ValidateSchemaData) => any;
  parse: (data: ParseSchemaData) => any;
  getMimeTypes: () => Array<string>;
}

const PARSERS = new Map<string, SchemaParser>();

export async function parseSchema(data: ParseSchemaData, schemaFormat: string) {
  const parser = getSchemaParser(schemaFormat);
  if (parser === undefined) {
    // throw error
  }
}

export function registerSchemaParser(parserModule: SchemaParser) {
  if (
    typeof parserModule !== 'object' 
      || typeof parserModule.validate !== 'function' 
      || typeof parserModule.parse !== 'function' 
      || typeof parserModule.getMimeTypes !== 'function'
  ) {
    throw new Error('custom parser must have "parse()", "validate()" and "getMimeTypes()" functions.');
  }

  parserModule.getMimeTypes().forEach((schemaFormat) => {
    PARSERS.set(String(schemaFormat), parserModule);
  });
}

export function getSchemaParser(mimeType: string) {
  return PARSERS.get(mimeType);
}

export function getDefaultSchemaFormat(asyncapiVersion: string) {
  return `application/vnd.aai.asyncapi;version=${asyncapiVersion}`;
};
