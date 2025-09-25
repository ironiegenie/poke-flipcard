import type { GenI } from "./GenI";
import type { GenII } from "./GenII";
import type { GenIII } from "./GenIII";
import type { GenIV } from "./GenIV";
import type { GenV } from "./GenV";
import type { GenVI } from "./GenVI";
import type { GenVII } from "./GenVII";
import type { GenVIII } from "./GenVIII";

export interface SpriteVersion {
    "generation-i": GenI;
    "generation-ii": GenII;
    "generation-iii": GenIII;
    "generation-iv": GenIV;
    "generation-v": GenV;
    "generation-vi": GenVI;
    "generation-vii": GenVII;
    "generation-viii": GenVIII;
}
