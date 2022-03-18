import { BaseModel } from "../../base";
import { ExternalDocumentation } from "../external-docs";

import type { ExternalDocumentationInterface } from '../../external-docs';
import type { ExternalDocumentationMixinInterface } from "../../mixins";

export abstract class ExternalDocumentationMixin extends BaseModel implements ExternalDocumentationMixinInterface {
  hasExternalDocs(): boolean {
    return Object.keys(this._json.externalDocs || {}).length > 0;
  };

  externalDocs(): ExternalDocumentationInterface | undefined { 
    if (this.hasExternalDocs()) {
      return new ExternalDocumentation(this._json.externalDocs);
    }
  };
}
