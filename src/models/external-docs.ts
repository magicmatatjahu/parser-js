import { BaseModel } from "./base";

import { DescriptionMixinInterface, ExtensionsMixinInterface } from './mixins'

export interface ExternalDocumentationInterface 
  extends BaseModel, DescriptionMixinInterface, ExtensionsMixinInterface {

  url(): string;
}
