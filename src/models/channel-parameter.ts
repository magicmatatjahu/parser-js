import type { BaseModel } from './base';
import type { SchemaInterface } from './schema';
import type { DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';

export interface ChannelParameterInterface extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface {
  id(): string;
  location(): string | undefined;
  hasLocation(): boolean;
  schema(): SchemaInterface;
}
