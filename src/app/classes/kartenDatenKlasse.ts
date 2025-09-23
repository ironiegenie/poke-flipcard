import { Typen } from "../enum/typen";
import { KartenDaten } from "../model/kartenDaten.type";


export class KartenDatenKlasse implements KartenDaten {
    constructor(
        public bildUrl: string,
        public shinyUrl: string,
        public name: string,
        public hp: number,
        public beschreibung: string,
        public typen: Typen[]
    ) {}
}