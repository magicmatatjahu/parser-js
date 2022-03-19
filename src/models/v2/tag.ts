import { BaseModel } from "../base";

import { Mixin } from "../utils";
import { DescriptionMixin, ExtensionsMixin, ExternalDocumentationMixin } from "./mixins";

import type { TagInterface } from "../";

export class Tag 
  extends Mixin(BaseModel, DescriptionMixin, ExtensionsMixin, ExternalDocumentationMixin) 
  implements TagInterface {

  name(): string {
    return this._json.name;
  }
}
