import { inject, Injectable } from '@angular/core';
import type { KartenDaten } from '../model/kartenDaten.type';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon.type';
import { Spezies } from '../model/spezies.type';
import { KartenDatenKlasse } from '../classes/kartenDatenKlasse';
import { Typen } from '../enum/typen';

@Injectable({
  providedIn: 'root'
})
export class CallingPokeapi {
  private http = inject(HttpClient);
  pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";
  kartenDaten = new KartenDatenKlasse(
      "",
      "",
      "",
      0,
      "",
      [Typen.DRACHE, Typen.DRACHE]
    );
  
  pokemon: Pokemon | null = null;
  spezies: Spezies | null = null;

  /**
   * Hier finden die Http-Calls zur Poké-Api statt, mit dessen Ergebnissen 
   * unser Datentyp zusammen gebastelt wird
   * 
   * @param pokedexNumber Nummer des Pokemon im Nationalen Pokedex, was wir suchen
   */
  async getNationalDexPokemon(pokedexNumber: number): Promise<KartenDaten> {
    let url = this.pokemonUrl + pokedexNumber;
    console.log(url);

    await this.http.get<Pokemon>(url).subscribe(mon => {
      console.log("Pokemon:");
      console.log(mon);
      this.pokemon = mon;
      return mon;
    });
    
    url = this.speciesUrl + pokedexNumber;

    await this.http.get<Spezies>(url).subscribe(spec => {
      console.log("Spezies:");
      console.log(spec);
      this.spezies = spec;
      ///////////////////// ???????????????????????? ///////////////////////////////
      this.kartenDaten.beschreibung = spec.flavor_text_entries.filter(
        entry => entry.language.name == "de"
      )[0].flavor_text
      ///////////////////// ???????????????????????? ///////////////////////////////
    });

    if (this.pokemon === null || this.spezies === null) {
      throw new Error("Es wurde kein Pokemon oder keine Spezies zu der Nummer " 
        + pokedexNumber + " gefunden\n Pokemon: " + this.pokemon + "\n Spezies: " + this.spezies);
    }

    return this.readKartenDaten(this.pokemon, this.spezies);
  }

  readKartenDaten(pokemon: Pokemon, spezies: Spezies): KartenDaten {
    



    return this.kartenDaten;
  }
  
}
