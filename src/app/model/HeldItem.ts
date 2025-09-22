import { NameUrl } from "./NameString";
import { VersionDetail } from "./VersionDetail";

export interface HeldItem {
    item: NameUrl;
    version_details: VersionDetail[];
}
