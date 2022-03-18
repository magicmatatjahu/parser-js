import { BaseModel } from "../../base";
import { Extension } from "../extension";
import { Extensions } from "../extensions";

import type { ExtensionsMixinInterface } from "../../mixins";
import type { ExtensionsInterface } from "../../extensions";

import { EXTENSION_REGEX } from '../../../constants';

export abstract class ExtensionsMixin extends BaseModel implements ExtensionsMixinInterface {
  extensions(): ExtensionsInterface {
    const extensions: Extension[] = [];
    Object.entries(this._json).forEach(([key, value]) => {
      if (EXTENSION_REGEX.test(key)) {
        extensions.push(new Extension(key, value));
      }
    });
    return new Extensions(extensions);
  };
}
