import { Ability } from "./ability.type"
import { Cries } from "./Cries"
import { GameIndex } from "./GameIndex"
import { HeldItem } from "./HeldItem"
import { Move } from "./Move"
import { NameUrl } from "./NameString"
import { PastAbilities } from "./PastAbilities"
import { Type } from "./Type"


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