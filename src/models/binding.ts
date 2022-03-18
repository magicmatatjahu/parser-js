import { BaseModel } from "./base";

import { ExtensionsMixinInterface } from './mixins';

export interface BindingInterface extends BaseModel, ExtensionsMixinInterface {
  protocol(): string;
  version(): string;
  value(): any;
}
