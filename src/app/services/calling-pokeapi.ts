import { inject, Injectable } from '@angular/core';
import type { KartenDaten } from '../model/kartenDaten.type';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/pokemon.type';
import { Spezies } from '../model/spezies.type';
import { firstValueFrom } from 'rxjs';
import { KartenDatenBuilder } from '../classes/karten-daten-builder';

@Injectable({
  providedIn: 'root'
})
export class CallingPokeapi {
  private http = inject(HttpClient);
  pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";
  speciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";

  /**
   * Hier finden die Http-Calls zur Poké-Api statt, mit dessen Ergebnissen 
   * unser Datentyp zusammen gebastelt wird
   * 
   * @param pokedexNumber Nummer des Pokemon im Nationalen Pokedex, was wir suchen
   */
  async getNationalDexPokemon(pokedexNumber: number): Promise<KartenDaten> {
    let pokemon: Pokemon | null = null;
    let spezies: Spezies | null = null;

    pokemon = await this.getPokemon(pokedexNumber);
    spezies = await this.getSpezies(pokedexNumber);

    if (pokemon == null || spezies == null) {
      throw new Error("Es wurde kein Pokemon oder keine Spezies zu der Nummer "
        + pokedexNumber + " gefunden\n Pokemon: " + pokemon + "\n Spezies: " + spezies);
    }

    return this.readKartenDaten(pokemon, spezies);
  }

  /**
   * Hier wird der {@link Pokemon | Pokemon} Typ aus der PokeApi ausgegeben, wenn man nur nach dem Pokemon sucht {@link https://pokeapi.co/api/v2/pokemon/ditto | Hier wird z.B. nach Pokemon Ditto gesucht}
   * @param pokedexNumber PokedexNummer im NationalDex
   * @returns der zurückgegebene Pokemon Type von der PokeApi aus dem wir später Infos ziehen
   */
  async getPokemon(pokedexNumber: number): Promise<Pokemon | null> {
    let pokemon: Pokemon | null = null;
    let url = this.pokemonUrl + pokedexNumber;
    console.log(url);
    try {
      pokemon = await firstValueFrom(this.http.get<Pokemon>(url));
    } catch (err) {
      console.error(err);
    }
    return pokemon;
  }

  /**
   * Hier wird der {@link Spezies | Spezies} Typ aus der PokeApi, wenn man nur nach dem Spezies sucht {@link https://pokeapi.co/api/v2/pokemon-species/3 | Hier wird z.B. nach Spezies für Bisaflor gesucht}
   * @param pokedexNumber PokedexNummer im NationalDex
   * @returns der zurückgegebene Spezies Type von der PokeApi aus dem wir später Infos ziehen
   */
  async getSpezies(pokedexNumber: number): Promise<Spezies | null> {
    let spezies: Spezies | null = null;
    let url = this.speciesUrl + pokedexNumber;
    console.log(url);

    try {
      spezies = await firstValueFrom(this.http.get<Spezies>(url));
    } catch (err) {
      console.error(err);
    }
    return spezies;
  }

  /**
   * Liest die relevanten Informationen aus den gegebenen Pokemon und Spezies Typen,
   *  um die Karten basteln zu können
   * @param pokemon der {@link Pokemon | Pokemon} Typ aus der PokeApi, wenn man nur nach dem Pokemon sucht {@link https://pokeapi.co/api/v2/pokemon/ditto | Hier wird nach Pokemon Ditto gesucht} 
   * @param spezies der {@link Spezies | Spezies} Typ aus der PokeApi, wenn man nur nach dem Spezies sucht {@link https://pokeapi.co/api/v2/pokemon-species/3 | Hier wird nach Spezies für Bisaflor gesucht}
   * @returns die {@link KartenDaten | KartenDaten} für die Darstellung im Fenster 
   */
  readKartenDaten(pokemon: Pokemon, spezies: Spezies): KartenDaten {
    let kartenDatenBuilder: KartenDatenBuilder = new KartenDatenBuilder();
    let typen: string[] = [];
    pokemon.types.forEach(type => {
      typen.push(type.type.name);
    });

    kartenDatenBuilder
      .setBeschreibung(spezies.flavor_text_entries.filter(entry => entry.language.name == "de")[0]?.flavor_text || "Dieses Pokemon ist zu neu für die Poké-API.")
      .setName(spezies.names.filter(name => name.language.name == "de")[0].name)
      .setHp(pokemon.stats.filter(stat => stat.stat.name == "hp")[0].base_stat)
      .setFarbe(spezies.color.name)
      .setTypen(typen)
      .setBildUrl(pokemon.sprites.other["official-artwork"].front_default)
      .setShinyUrl(pokemon.sprites.other["official-artwork"].front_shiny);

    console.log(kartenDatenBuilder.toString());

    return kartenDatenBuilder.build();
  }

}
