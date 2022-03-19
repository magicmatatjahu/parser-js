import { BaseModel } from "../";
import type { TagInterface } from "../";

import { Mixin } from '../utils';
import { DescriptionMixin, ExtensionsMixin, ExternalDocumentationMixin } from "./mixins";

export class Tag 
  extends Mixin(BaseModel, DescriptionMixin, ExtensionsMixin, ExternalDocumentationMixin) 
  implements TagInterface {

  name(): string {
    return this._json.name;
  }
}
