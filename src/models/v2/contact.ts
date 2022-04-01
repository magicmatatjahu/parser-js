import { Mixin } from '../utils';
import { ExtensionsMixin } from './mixins/extensions';

import type { ContactInterface } from "../../models/contact";

import type { ContactObject } from "../../interfaces/v2";

export class Contact 
  extends Mixin<ContactObject, ExtensionsMixin>(ExtensionsMixin) 
  implements ContactInterface {
    
  hasName(): boolean {
    return !!this._json.name;
  }

  name(): string | undefined {
    return this._json.name;
  }

  hasUrl(): boolean {
    return !!this._json.url;
  }

  url(): string | undefined {
    return this._json.url;
  }

  hasEmail(): boolean {
    return !!this._json.email;
  }

  email(): string | undefined {
    return this._json.email;
  }
}
