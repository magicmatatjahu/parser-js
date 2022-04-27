import { Collection } from '../collection';

import type { ServersInterface } from '../servers';
import type { ServerInterface } from '../server';

export class Servers extends Collection<ServerInterface> implements ServersInterface {
  override get(id: string): ServerInterface | undefined {
    return this.collections.find(server => server.id() === id);
  }

  override has(id: string): boolean {
    return this.collections.some(server => server.id() === id);
  }
}
