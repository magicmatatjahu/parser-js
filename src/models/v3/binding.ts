import { BaseModel } from "../";
import type { BindingInterface } from "../";

import { Mixin } from "../mixins";
import { ExtensionsMixin } from "./mixins";

export class Binding extends Mixin(BaseModel, ExtensionsMixin) implements BindingInterface {
  constructor(
    private readonly _protocol: string,
    _json: Record<string, any>,
  ) {
    super(_json);
  }

  protocol(): string {
    return this._protocol;
  }

  version(): string {
    return this._json.bindingVersion;
  }

  value(): any {
    return this._json;
  }
}
