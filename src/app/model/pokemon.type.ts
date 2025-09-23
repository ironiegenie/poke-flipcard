import type { Ability } from "./ability.type"
import type { Cries } from "./Cries"
import type { GameIndex } from "./GameIndex"
import type { HeldItem } from "./HeldItem"
import type { Move } from "./Move"
import type { NameUrl } from "./NameString"
import type { PastAbilities } from "./PastAbilities"
import type { Type } from "./Type"


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
    order: number,
    past_abilities: PastAbilities[],
    past_types: null,
    species: NameUrl,
    types: Type[],
    weight: number
}