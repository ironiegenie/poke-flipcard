import { NameUrl } from "./NameString";
import { VersionGroupDetail } from "./VersionGroupDetail";

export interface Move {
    move: NameUrl;
    version_group_details: VersionGroupDetail[];
}
