import { BaseModel } from "../base";
import { Info } from "./info";
import { Channels } from "./channels";
import { Channel } from "./channel";
import { Servers } from "./servers";
import { Server } from "./server";

import { Mixin } from '../utils';
import { ExtensionsMixin } from './mixins/extensions';

import type { AsyncAPIDocumentInterface, InfoInterface } from "../../models";
import type { ChannelsInterface } from "models/channels";
import type { ServersInterface } from "models/servers";

export class AsyncAPIDocument
  extends Mixin(BaseModel, ExtensionsMixin)
  implements AsyncAPIDocumentInterface {

  version(): string {
    return this._json.asyncapi;
  }

  info(): InfoInterface {
    return this.createModel(Info, this._json.info, { pointer: '/info' });
  }

  channels(): ChannelsInterface {
    return new Channels(
      Object.entries(this._json.channels || {}).map(([channelAddress, channel]) => 
        this.createModel(Channel, channel, { id: channelAddress, pointer: `/channels/${channelAddress}` })
      )
    );
  }

  servers(): ServersInterface {
    return new Servers(
      Object.entries(this._json.servers).map(([serverName, server]) => 
        this.createModel(Server, server, { id: serverName, pointer: `/servers/${serverName}` })
      )
    );
  }
}
