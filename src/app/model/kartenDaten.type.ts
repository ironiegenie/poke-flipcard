import { Typen } from "../enum/typen"

export type KartenDaten = {
    // kommt von Pokemon Type aus dem Sprites Attribut
    // >>> pokemon.sprites.other.official_artwork.front_default
    bildUrl: string,
    // >>> pokemon.sprites.other.official_artwork.front_shiny
    shinyUrl: string,
    // der deutsche Name kommt aus dem Spezies Type im Names Attribut 
    // >>> where spezies.names.language.name = "de"
    name: string,
    hp: number,
    // kommt von Spezies Type aus dem flavor_text_entries Attribut
    // >>> where spezies.flavor_text_entries.language.name = "de"
    beschreibung: string,
    // >>> where pokemon.types.type.name = 
    typen: Typen[]
}