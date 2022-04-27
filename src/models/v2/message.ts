import { BaseModel } from '../base';
import { Channels } from './channels';
import { Channel } from './channel';
import { Operation } from './operation';
import { Operations } from './operations';
import { Servers } from './servers';

import { Mixin } from '../utils';
import { BindingsMixin } from './mixins/bindings';
import { DescriptionMixin } from './mixins/description';
import { ExtensionsMixin } from './mixins/extensions';
import { ExternalDocumentationMixin } from './mixins/external-docs';

import type { ModelMetadata } from "../base";
import type { MessageInterface } from '../message';
import type { ChannelsInterface } from '../channels';
import type { ChannelInterface } from '../channel';
import type { OperationsInterface } from '../operations';
import type { OperationInterface } from '../operation';
import type { ServersInterface } from '../servers';
import type { ServerInterface } from '../server';

export class Message extends Mixin(BaseModel, BindingsMixin, DescriptionMixin, ExtensionsMixin, ExternalDocumentationMixin) implements MessageInterface {
  private _channels: ChannelsInterface | undefined;
  private _operations: OperationsInterface | undefined;
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

  channels(): ChannelsInterface {
    if (this._channels) {
      return this._channels;
    }
    const channels: ChannelInterface[] = [];

    const channelsData: any[] = [];
    this.operations().all().forEach(operation => {
      operation.channels().forEach(channel => {
        if (!channelsData.includes(channel.json())) {
          channelsData.push(channel.json());
          channels.push(channel);
        }
      })
    });

    return this._channels = new Channels(channels);
  }

  operations(): OperationsInterface {
    if (this._operations) {
      return this._operations;
    }
    const operations: OperationInterface[] = [];
    const documentChannels = this._meta.asyncapi.parsed.channels || {};

    Object.entries(documentChannels).forEach(([channelAddress, channel]: [string, any]) => {
      const subscribe = channel.subscribe;
      if (
        subscribe && (
          subscribe.message === this._json ||
          (subscribe.message.oneOf || []).includes(this._json)
        )
      ) {
        operations.push(
          this.createModel(Operation, subscribe, { pointer: `/channels/${channelAddress}/subscribe` })
        );
      }

      const publish = channel.publish;
      if (
        publish && (
          publish.message === this._json ||
          (publish.message.oneOf || []).includes(this._json)
        )
      ) {
        operations.push(
          this.createModel(Operation, publish, { pointer: `/channels/${channelAddress}/publish` })
        );
      }
    });

    return this._operations = new Operations(operations);
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
