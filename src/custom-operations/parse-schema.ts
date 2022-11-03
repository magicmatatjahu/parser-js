import { JSONPath } from 'jsonpath-plus';

import { xParserOriginalPayload } from '../constants';
import { parseSchema as coreParseSchema, getSchemaFormat, getDefaultSchemaFormat } from '../schema-parser';

import type { Parser } from '../parser';
import type { ParseSchemaInput } from '../schema-parser';
import type { DetailedAsyncAPI } from '../types';

interface ToParseItem {
  input: ParseSchemaInput;
  value: any;
}

const customSchemasPathsV2 = [
  // operations
  '$.channels.*.[publish,subscribe].message',
  '$.channels.*.[publish,subscribe].message.oneOf.*',
  '$.components.channels.*.[publish,subscribe].message',
  '$.components.channels.*.[publish,subscribe].message.oneOf.*',
  // messages
  '$.components.messages.*',
];

export async function parseSchemasV2(parser: Parser, detailed: DetailedAsyncAPI) {
  return parseSchemas(parser, detailed, customSchemasPathsV2);
}

const customSchemasPathsV3 = [
  // channels
  '$.channels.*.messages.*',
  '$.components.channels.*.messages.*',
  // messages
  '$.components.messages.*',
];

export async function parseSchemasV3(parser: Parser, detailed: DetailedAsyncAPI) {
  return parseSchemas(parser, detailed, customSchemasPathsV3);
}

async function parseSchemas(parser: Parser, detailed: DetailedAsyncAPI, paths: string[]) {
  const defaultSchemaFormat = getDefaultSchemaFormat(detailed.semver.version);
  const parseItems: Array<ToParseItem> = [];

  const visited: Set<unknown> = new Set();
  paths.forEach(path => {
    JSONPath({
      path,
      json: detailed.parsed,
      resultType: 'all',
      callback(result) {
        const value = result.value;
        if (visited.has(value)) {
          return;
        }
        visited.add(value);

        const payload = value.payload;
        if (!payload) {
          return;
        }

        const schemaFormat = getSchemaFormat(value.schemaFormat, detailed.semver.version);
        parseItems.push({
          input: {
            asyncapi: detailed,
            data: payload,
            meta: {
              message: value,
            },
            path: [...splitPath(result.path), 'payload'],
            schemaFormat,
            defaultSchemaFormat,
          },
          value,
        });
      },
    });
  });

  return Promise.all(parseItems.map(item => parseSchema(parser, item)));
}

async function parseSchema(parser: Parser, item: ToParseItem) {
  const originalData = item.input.data;
  const parsedData = item.value.payload = await coreParseSchema(parser, item.input);
  // save original payload only when data is different (returned by custom parsers)
  if (originalData !== parsedData) {
    item.value[xParserOriginalPayload] = originalData;
  }
}

function splitPath(path: string): string[] {
  // remove $[' from beginning and '] at the end and split by ']['
  return path.slice(3).slice(0, -2).split('\'][\'');
}
