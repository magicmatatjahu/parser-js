import { BaseModel } from "../base";

import type { ContactInterface } from "../../models/contact";

export class Contact extends BaseModel implements ContactInterface {
    name(): string {
        return this.json("name");
    }

    url(): string {
        return this.json("url");
    }

    email(): string {
        return this.json("email");
    }
}