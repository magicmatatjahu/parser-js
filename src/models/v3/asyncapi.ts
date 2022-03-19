import { AsyncAPIDocumentInterface } from "../../models/asyncapi";
import { BaseModel } from "../base";
import { Info } from "./info";

import { Mixin } from '../utils';
import { ExtensionsMixin, ExternalDocumentationMixin, TagsMixin } from './mixins';

export class AsyncAPIDocument 
  extends Mixin(BaseModel, ExtensionsMixin, ExternalDocumentationMixin, TagsMixin) 
  implements AsyncAPIDocumentInterface {
		
  version(): string {
    return this.json("asyncapi");
  }

  info(): Info {
    return new Info(this.json("info"));
  }
}
