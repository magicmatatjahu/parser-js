import { BaseModel } from "./base";

import { DescriptionMixinInterface, ExtensionsMixinInterface, ExternalDocumentationMixinInterface } from './mixins'

export interface TagInterface 
  extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface, ExternalDocumentationMixinInterface {

  name(): string;
}
