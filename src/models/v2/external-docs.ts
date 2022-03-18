import { BaseModel } from "../";
import type { ExternalDocumentationInterface } from "../";

import { Mixin } from "../mixins";
import { DescriptionMixin, ExtensionsMixin } from "./mixins";

export class ExternalDocumentation 
  extends Mixin(BaseModel, DescriptionMixin, ExtensionsMixin) 
  implements ExternalDocumentationInterface {

  url(): string {
    return this._json.url;
  }
}
