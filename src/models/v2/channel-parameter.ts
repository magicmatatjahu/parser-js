import { BaseModel } from '../base';
import { Schema } from './schema';

import { Mixin } from '../utils';
import { DescriptionMixin } from './mixins/description';
import { ExtensionsMixin } from './mixins/extensions';

import type { ModelMetadata } from "../base";
import type { ChannelParameterInterface } from '../channel-parameter';
import type { SchemaInterface } from 'models/schema';

export class ChannelParameter extends Mixin(BaseModel, DescriptionMixin, ExtensionsMixin) implements ChannelParameterInterface {
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

  hasLocation(): boolean {
    return !!this._json.location;
  }

  location(): string | undefined {
    return this._json.location;
  }

  schema(): SchemaInterface {
    return this.createModel(Schema, this._json.schema, { pointer: `${this._meta.pointer}/schema` });
  }
}