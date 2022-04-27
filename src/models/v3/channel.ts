import { BaseModel } from '../base';
import { Operations } from './operations';
import { Operation } from './operation';
import { Messages } from './messages';
import { Servers } from './servers';
import { Server } from './server';
import { ChannelParameters } from './channel-parameters';
import { ChannelParameter } from './channel-parameter';
import { OperationKind } from '../operation';

import { Mixin } from '../utils';
import { BindingsMixin } from './mixins/bindings';
import { DescriptionMixin } from './mixins/description';
import { ExtensionsMixin } from './mixins/extensions';

import type { ModelMetadata } from "../base";
import type { ChannelInterface } from '../channel';
import type { OperationsInterface } from '../operations';
import type { OperationInterface } from '../operation';
import type { MessagesInterface } from '../messages';
import type { MessageInterface } from '../message';
import type { ServersInterface } from '../servers';
import type { ServerInterface } from '../server';
import type { ChannelParametersInterface } from '../channel-parameters';

export class Channel extends Mixin(BaseModel, BindingsMixin, DescriptionMixin, ExtensionsMixin) implements ChannelInterface {
  private _operations: OperationsInterface | undefined;
  private _messages: MessagesInterface | undefined;
  private _servers: ServersInterface | undefined;
  private _parameters: ChannelParametersInterface | undefined;

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

  address(): string {
    return this._id;
  }

  operations(): OperationsInterface {
    if (this._operations) {
      return this._operations;
    }
    const operations: OperationInterface[] = []

    if (this._json.subscribe) {
      operations.push(
        this.createModel(Operation, this._json.subscribe, { kind: OperationKind.SUBSCRIBE, pointer: `${this._meta.pointer}/subscribe` }),
      );
    }
    if (this._json.publish) {
      operations.push(
        this.createModel(Operation, this._json.publish, { kind: OperationKind.PUBLISH, pointer: `${this._meta.pointer}/publish` }),
      );
    }

    return this._operations = new Operations(operations);
  }

  messages(): MessagesInterface {
    if (this._messages) {
      return this._messages;
    }
    const messages: MessageInterface[] = [];

    this.operations().all().forEach(operation => {
      messages.push(...operation.messages().all());
    })

    return this._messages = new Messages(messages);
  }

  servers(): ServersInterface {
    if (this._servers) {
      return this._servers;
    }
    const servers: ServerInterface[] = [];
    const allowedServers: string[] = this._json.servers || [];

    Object.entries(this._meta.asyncapi.parsed.servers || {}).map(([serverName, server]) => {
      if (allowedServers.length === 0 || allowedServers.includes(serverName)) {
        this.createModel(Server, server, { id: serverName, pointer: `/servers/${serverName}` })
      }
    });

    return this._servers = new Servers(servers);
  }

  parameters(): ChannelParametersInterface {
    if (this._parameters) {
      return this._parameters;
    }

    return this._parameters = new ChannelParameters(
      Object.entries(
        this._json.parameters || {}
      ).map(
        ([parameterName, parameter]) => this.createModel(
          ChannelParameter, parameter, {
            id: parameterName,
            pointer: `${this._meta.pointer}/parameters/${parameterName}`
        }),
      ));
  }
}