import type { BaseModel } from "./base";
import type { OperationsInterface } from './operations';
import type { MessagesInterface } from './messages';
import type { ServersInterface } from './servers';
import type { ChannelParametersInterface } from './channel-parameters';
import type { BindingsMixinInterface, DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins';

export interface ChannelInterface extends BaseModel, DescriptionMixinInterface, BindingsMixinInterface, ExtensionsMixinInterface {
  id(): string
  address(): string;
  operations(): OperationsInterface;
  messages(): MessagesInterface;
  servers(): ServersInterface;
  parameters(): ChannelParametersInterface;
}
