import { Typen } from "../enum/typen"

export type KartenDaten = {
    bildUrl: string,
    name: string,
    hp: number,
    beschreibung: string,
    typen: Typen[]
}