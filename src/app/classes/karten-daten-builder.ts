import { KartenDatenKlasse } from "./kartenDatenKlasse";

export class KartenDatenBuilder {
    bildUrl!: string;
    shinyUrl!: string;
    name!: string;
    hp!: number;
    beschreibung!: string;
    typen!: string[];
    farbe!: string;
    
    
    public setBildUrl(value: string) {
        this.bildUrl = value;
        return this;
    }

    public setShinyUrl(value: string) {
        this.shinyUrl = value;
        return this;
    }

    public setName(value: string) {
        this.name = value;
        return this;
    }

    public setHp(value: number) {
        this.hp = value;
        return this;
    }

    public setBeschreibung(value: string) {
        this.beschreibung = value;
        return this;
    }

    public setTypen(value: string[]) {
        this.typen = value;
        return this;
    }

    public setFarbe (value: string) {
        this.farbe = value;
        return this;
    }

    build(): KartenDatenKlasse {
        return new KartenDatenKlasse(this);
    }

    toString(): string {
        let string = [];
        string.push(
            "Name: ", this.name,
            "\nTypen: ", this.typen.join(", "),
            "\nBeschreibung: ", this.beschreibung,
            "\nFarbe: ", this.farbe,
            "\nHP: ", this.hp,
            "\nBild-URL: ", this.bildUrl,
            "\nShinybild-URL: ", this.shinyUrl,
        );
        
        return string.join(""); 
    }
}
