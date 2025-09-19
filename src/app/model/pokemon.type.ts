import { Ability } from "./ability.type"
import { NameUrl } from "./NameString"


interface Cries {
    latest: string,
    legacy: string
}

interface GameIndex {
    game_index: number,
    version: NameUrl
}

interface VersionDetail {
    rarity: number,
    version: NameUrl
}

interface HeldItem {
    item: NameUrl,
    version_details: VersionDetail[]
}

interface VersionGroupDetail{
    level_learned_at: number,
    move_learn_method: NameUrl,
    order: null,
    version_group: NameUrl
}

interface Move {
    move: NameUrl
    version_group_details: VersionGroupDetail[]
}

export type Pokemon = {
    abilities: Ability[],
    base_experience: number,
    cries: Cries[],
    forms: NameUrl[],
    game_indices: GameIndex[],
    height: number,
    held_items: HeldItem[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Move[],
    name: string,
    
}