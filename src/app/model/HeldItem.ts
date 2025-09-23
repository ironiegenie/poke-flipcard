import type { NameUrl } from "./NameString";
import type { VersionDetail } from "./VersionDetail";

export interface HeldItem {
    item: NameUrl;
    version_details: VersionDetail[];
}
