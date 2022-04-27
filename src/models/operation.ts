import type { BaseModel } from "./base";
import type { ChannelsInterface } from './channels';
import type { MessagesInterface } from './messages';
import type { ServersInterface } from './servers';
import type { BindingsMixinInterface, DescriptionMixinInterface, ExtensionsMixinInterface, ExternalDocumentationMixinInterface } from './mixins';

export enum OperationKind {
  SEND = 'send',
  RECEIVE = 'receive',
  SUBSCRIBE = 'send',
  PUBLISH = 'receive',
}

export interface OperationInterface extends BaseModel, DescriptionMixinInterface, BindingsMixinInterface, ExtensionsMixinInterface, ExternalDocumentationMixinInterface {
  id(): string;
  kind(): OperationKind;
  hasSummary(): boolean;
  summary(): string | undefined;
  channels(): ChannelsInterface;
  messages(): MessagesInterface;
  servers(): ServersInterface;
}
