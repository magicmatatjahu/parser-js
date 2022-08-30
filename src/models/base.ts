import { getDeepValue } from "../utils";

import type { Constructor } from "./utils";
import type { DetailedAsyncAPI } from "../types";

export interface ModelMetadata {
  asyncapi: DetailedAsyncAPI;
  pointer: string;
  [key: string]: any;
}

export abstract class BaseModel {
  constructor(
    protected readonly _json: Record<string, any>,
    protected readonly _meta: ModelMetadata = {} as any,
  ) {}

  json<T = Record<string, any>>(): T;
  json<T = any>(key: string | number): T;
  json(key?: string | number) {
    if (key === undefined) return this._json;
    if (!this._json) return;
    return this._json[String(key)];
  }

  meta(): ModelMetadata {
    return this._meta!;
  }

  jsonPath(field?: string): string | undefined {
    if (typeof field !== 'string') {
      return this._meta?.pointer;
    }
    return `${this._meta?.pointer}/${field}`;
  }

  $ref(): string | undefined {
    const possibleValue = getDeepValue(this._meta.asyncapi.unparsed, this._meta.pointer);
    if (possibleValue && typeof possibleValue === 'object' && typeof possibleValue.$ref === 'string') {
      return possibleValue.$ref;
    }
  }

  protected createModel<T extends BaseModel>(Model: Constructor<T>, value: any, { pointer, ...rest }: { pointer: string | number, [key: string]: any }): T {
    return new Model(value, { ...rest, asyncapi: this._meta.asyncapi, pointer });
  }
}
