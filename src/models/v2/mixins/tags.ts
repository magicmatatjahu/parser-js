import { BaseModel } from "../../base";
import { Tag } from "../tag";
import { Tags } from "../tags";

import type { TagsMixinInterface } from "../../mixins";
import type { TagsInterface } from "../../tags";

export abstract class TagsMixin extends BaseModel implements TagsMixinInterface { 
  tags(): TagsInterface {
    const tags = this._json.tags || [];
    return new Tags(tags.map((tag: any) => new Tag(tag)));
  }
}
