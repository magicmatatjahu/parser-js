import { BaseModel } from "../../base";
import { Binding } from "../binding";
import { Bindings } from "../bindings";

import type { BindingsMixinInterface } from "../../mixins";
import type { BindingsInterface } from "../../bindings";

export abstract class BindingsMixin extends BaseModel implements BindingsMixinInterface {
  bindings(): BindingsInterface {
    const bindings: Record<string, any> = this._json.bindings || {};
    return new Bindings(
      Object.entries(bindings).map(([protocol, binding]) => new Binding(protocol, binding))
    );
  }
}
