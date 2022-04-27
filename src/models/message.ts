import type { BaseModel } from "./base";
import type { ChannelsInterface } from './channels';
import type { OperationsInterface } from './operations';
import type { ServersInterface } from './servers';
import type { BindingsMixinInterface, DescriptionMixinInterface, ExtensionsMixinInterface, ExternalDocumentationMixinInterface } from './mixins';

export interface MessageInterface extends BaseModel, DescriptionMixinInterface, BindingsMixinInterface, ExtensionsMixinInterface, ExternalDocumentationMixinInterface {
  id(): string;
  channels(): ChannelsInterface;
  operations(): OperationsInterface;
  servers(): ServersInterface;
}
