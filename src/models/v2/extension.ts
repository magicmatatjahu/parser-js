import { BaseModel } from "../";
import type { ExtensionInterface } from "../";

export class Extension extends BaseModel implements ExtensionInterface {
  constructor(
    private readonly _id: string,
    _json: Record<string, any>,
  ) {
    super(_json);
  }

  id(): string {
    return this._id;
  }

  version(): string {
    return 'to implement';
  }

  value(): any {
    return this._json;
  }
}
