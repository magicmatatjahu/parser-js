import type { BaseModel } from "./base";
import type { ContactInterface } from "./contact";
import type { LicenseInterface } from "./license";

export interface InfoInterface extends BaseModel {
    title(): string;
    version(): string;
    description(): string;
    termsOfService(): string;
    contact(): ContactInterface | undefined;
    license(): LicenseInterface | undefined;
}