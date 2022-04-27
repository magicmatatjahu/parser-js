import { BaseModel } from '../base';
import { OperationKind } from '../operation';
import { Channels } from './channels';
import { Channel } from './channel';
import { Messages } from './messages';
import { Message } from './message';
import { Servers } from './servers';
import { Server } from './server';

import { Mixin } from '../utils';
import { BindingsMixin } from './mixins/bindings';
import { DescriptionMixin } from './mixins/description';
import { ExtensionsMixin } from './mixins/extensions';
import { ExternalDocumentationMixin } from './mixins/external-docs';

import type { ModelMetadata } from "../base";
import type { OperationInterface } from '../operation';
import type { ChannelsInterface } from '../channels';
import type { ChannelInterface } from '../channel';
import type { MessagesInterface } from '../messages';
import type { MessageInterface } from '../message';
import type { ServersInterface } from '../servers';
import type { ServerInterface } from '../server';

export class Operation extends Mixin(BaseModel, BindingsMixin, DescriptionMixin, ExtensionsMixin, ExternalDocumentationMixin) implements OperationInterface {
  private _channels: ChannelsInterface | undefined;
  private _messages: MessagesInterface | undefined;
  private _servers: ServersInterface | undefined;

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

  kind(): OperationKind {
    return this._meta.kind;
  }

  hasSummary(): boolean {
    return !!this._json.summary;
  }

  summary(): string | undefined {
    return this._json.summary;
  }

  channels(): ChannelsInterface {
    if (this._channels) {
      return this._channels;
    }
    const channels: ChannelInterface[] = [];

    const documentChannels = this._meta.asyncapi.parsed.channels || {};
    Object.entries(documentChannels).forEach(([channelAddress, channel]: [string, any]) => {
      if (channel.subscribe === this._json || channel.publish === this._json) {
        channels.push(
          this.createModel(Channel, channel, { id: channelAddress, pointer: `/channels/${channelAddress}` })
        );
      }
    });

    return this._channels = new Channels(channels);
  }

  messages(): MessagesInterface {
    if (this._messages) {
      return this._messages;
    }
    const messages: MessageInterface[] = [];

    const message = this._json.message || {};
    if (Array.isArray(message.oneOf)) {
      message.oneOf.map((msg: any, index: number) => {
        messages.push(
          this.createModel(Message, msg, { pointer: `${this._meta.pointer}/message/oneOf/${index}` }),
        );
      });
    } else {
      messages.push(
        this.createModel(Message, message, { pointer: `${this._meta.pointer}/message` }),
      );
    }

    return this._messages = new Messages(messages);
  }

  servers(): ServersInterface {
    if (this._servers) {
      return this._servers;
    }
    const servers: ServerInterface[] = [];

    const serversData: any[] = [];
    this.channels().all().forEach(channel => {
      channel.servers().forEach(server => {
        if (!serversData.includes(server.json())) {
          serversData.push(server.json());
          servers.push(server);
        }
      })
    });

    return this._servers = new Servers(servers);
  }
}
