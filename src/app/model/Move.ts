import type { NameUrl } from "./NameString";
import type { VersionGroupDetail } from "./VersionGroupDetail";

export interface Move {
    move: NameUrl;
    version_group_details: VersionGroupDetail[];
}
