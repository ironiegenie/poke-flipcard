import type { DreamWorld } from "./DreamWorld";
import type { Home } from "./Home";
import type { OfficialArtwork } from "./OfficialArtwork";
import type { Showdown } from "./Showdown";

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
    showdown: Showdown;
}
