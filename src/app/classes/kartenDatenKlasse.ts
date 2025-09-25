import { Typen } from "../enum/typen";
import { KartenDaten } from "../model/kartenDaten.type";
import { KartenDatenBuilder } from "./karten-daten-builder";


export class KartenDatenKlasse implements KartenDaten {
    bildUrl: string;
    shinyUrl: string;
    name: string;
    hp: number;
    beschreibung: string;
    typen: string[];
    farbe: string;

    constructor(builder: KartenDatenBuilder) {
        this.bildUrl = builder.bildUrl;
        this.shinyUrl = builder.shinyUrl;
        this.name = builder.name;
        this.hp = builder.hp;
        this.beschreibung = builder.beschreibung;
        this.typen = builder.typen;
        this.farbe = builder.farbe;
    }
}