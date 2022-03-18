import { Collection } from '../';
import type { ExtensionsInterface, ExtensionInterface } from "../";

export class Extensions extends Collection<ExtensionInterface> implements ExtensionsInterface {
  override get(name: string): ExtensionInterface | undefined {
    return this.collections.find(ext => ext.id() === name);
  };

  override has(name: string): boolean {
    return this.collections.some(ext => ext.id() === name);
  };
}
