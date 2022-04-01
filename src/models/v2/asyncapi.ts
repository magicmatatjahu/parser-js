import { Info } from "./info";
import { Servers } from "./servers";
import { Server } from "./server";

import { Mixin } from '../utils';
import { ExtensionsMixin } from './mixins/extensions';

import type { AsyncAPIDocumentInterface } from "../../models/asyncapi";
import type { InfoInterface } from "../../models/info";
import type { ServersInterface } from "../../models/servers";

import type { AsyncAPIObject } from "../../interfaces/v2";

export class AsyncAPIDocument
  extends Mixin<AsyncAPIObject, ExtensionsMixin>(ExtensionsMixin)
  implements AsyncAPIDocumentInterface {

  version(): string {
    return this._json.asyncapi;
  }

  info(): InfoInterface {
    return this.createModel(Info, this._json.info, { pointer: '/info' });
  }

  servers(): ServersInterface {
    return new Servers(
      Object.entries(this._json.servers || {}).map(([serverName, server]) => 
        this.createModel(Server, server, { id: serverName, pointer: `/servers/${serverName}` })
      )
    );
  }
}
