import { BaseModel } from "../base";

import type { LicenseInterface } from "../../models/license";

export class License extends BaseModel implements LicenseInterface {
    name(): string {
        return this.json("name");
    }

    url(): string {
        return this.json("url");
    }
}