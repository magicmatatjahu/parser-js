import { ParseOptions } from "./parse";

import { mergePatch } from "./utils";

import { xParserOriginalTraits } from './constants';

export async function customOperations(asyncapi: Record<string, any>, options: ParseOptions) {
  if (asyncapi.version.startsWith('2')) {
    return v2Operations(asyncapi, options);
  }
  return v3Operations(asyncapi, options);
}

async function v2Operations(asyncapi: Record<string, any>, options: ParseOptions) {
  if (options.applyTraits) {
    v2ApplyTraits(asyncapi);
  }
}

async function v3Operations(asyncapi: Record<string, any>, options: ParseOptions) {
  if (options.applyTraits) {
    v3ApplyTraits(asyncapi);
  }
}

function v2ApplyTraits(asyncapi: Record<string, any>) {
  // apply message traits
  if (!asyncapi.components || !asyncapi.components.messages) return;

  // apply message traits
}

function v2ParseSchemas(asyncapi: Record<string, any>) {
  // apply message traits
  if (!asyncapi.components || !asyncapi.components.messages) return;

  // apply message traits
}

function v3ApplyTraits(asyncapi: Record<string, any>) {
  // apply message traits
  if (!asyncapi.components || !asyncapi.components.messages) return;

  // apply message traits
}

function applyTraits(dest: Record<string, any>) {
  if (Array.isArray(dest.traits)) {
    for (const trait of dest.traits) {
      for (const key in trait) {
        dest[String(key)] = mergePatch(dest[String(key)], trait[String(key)]);
      }
    }

    dest[xParserOriginalTraits] = dest.traits;
    delete dest.traits;
  }
}