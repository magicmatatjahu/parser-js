import { BaseModel } from "../";

import { Mixin } from '../utils';
import { DescriptionMixin, ExtensionsMixin } from "./mixins";

import type { ExternalDocumentationInterface } from "../";

export class ExternalDocumentation 
  extends Mixin(BaseModel, DescriptionMixin, ExtensionsMixin) 
  implements ExternalDocumentationInterface {

  url(): string {
    return this._json.url;
  }
}
