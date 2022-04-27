import type { BaseModel } from "./base";
import type { ServerVariablesInterface } from "./server-variables";
import type { BindingsMixinInterface, DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';

export interface ServerInterface extends BaseModel, DescriptionMixinInterface, BindingsMixinInterface, ExtensionsMixinInterface {
  id(): string;
  url(): string;
  protocol(): string | undefined;
  protocolVersion(): string;
  hasProtocolVersion(): boolean;
  variables(): ServerVariablesInterface;
}
