import type { NameUrl } from "./NameString"
import type { FlavorTextEntry } from "./FlavorTextEntry"
import type { Url } from "./Url"
import type { Variety } from "./Variety"
import type { PokedexNumber } from "./PokedexNumber"
import type { PalParkEncounter } from "./PalParkEncounter"
import type { Name } from "./Name"
import type { Genus } from "./Genus"

export type Spezies = {
    base_happiness: number,
    capture_rate: number,
    color: NameUrl,
    egg_groups: NameUrl[],
    evolution_chain: Url,
    evolves_from_species: NameUrl,
    flavor_text_entries: FlavorTextEntry[],
    form_descriptions: null,
    forms_switchable: boolean,
    gender_rate: number,
    genera: Genus[],
    generation: NameUrl,
    growth_rate: NameUrl,
    habitat: NameUrl,
    has_gender_differences: boolean,
    hatch_counter: number,
    id: number,
    is_baby: boolean,
    is_legendary: boolean,
    is_mythical: boolean,
    name: string,
    names: Name[],
    order: number,
    pal_park_encounters: PalParkEncounter[],
    pokedex_numbers: PokedexNumber[],
    shape: NameUrl,
    varieties: Variety[]
}