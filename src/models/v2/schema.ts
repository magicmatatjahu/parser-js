import { BaseModel } from '../base';

import { Mixin } from '../utils';
import { ExtensionsMixin } from './mixins/extensions';

import type { ModelMetadata } from "../base";
import type { SchemaInterface } from '../schema';

export class Schema extends Mixin(BaseModel, ExtensionsMixin) implements SchemaInterface {
  constructor(
    private readonly _id: string,
    _json: Record<string, any>,
    _meta: ModelMetadata = {} as any,
  ) {
    super(_json, _meta);
  }

  id(): string {
    return this._id;
  }
}