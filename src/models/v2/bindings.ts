import { Collection } from '../';

import type { BindingsInterface, BindingInterface } from "../";

export class Bindings extends Collection<BindingInterface> implements BindingsInterface {
  override get(name: string): BindingInterface | undefined {
    return this.collections.find(binding => binding.protocol() === name);
  };

  override has(name: string): boolean {
    return this.collections.some(binding => binding.protocol() === name);
  };
}
