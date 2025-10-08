import { Injectable, WritableSignal } from '@angular/core';
import { KartenDaten } from '../model/kartenDaten.type';

@Injectable({
  providedIn: 'root'
})
export class FarbenService {
  /**
   * tauscht die Bilder von shiny zu normal und wieder zurück, wenn es erneut ausgelöst wird
   */
  public switchPictures(pokemon: KartenDaten): KartenDaten {
    let newShiny = pokemon.bildUrl;
    let newBild = pokemon.shinyUrl;

    pokemon.shinyUrl = newShiny;
    pokemon.bildUrl = newBild;
    return pokemon;
  }

  /**
   * 
   * @param pokemon 
   * @param akzentFarbe 
   * @returns 
   */
  public setzeFarben(pokemon: KartenDaten, akzentFarbe: string) {
    switch (pokemon.farbe) {
      case "green":
        pokemon.farbe = "rgb(33, 148, 73)";
        akzentFarbe = "rgb(159, 242, 188)";
        break;

      case "white":
        pokemon.farbe = "rgba(197, 197, 197, 1)";
        akzentFarbe = "rgb(255, 255, 255)";
        break;

      case "brown":
        pokemon.farbe = "rgb(125, 80, 0)";
        akzentFarbe = "rgb(242, 205, 140)";
        break;

      case "yellow":
        pokemon.farbe = "rgb(237, 169, 0)";
        akzentFarbe = "rgb(255, 225, 149)";
        break;

      case "red":
        pokemon.farbe = "rgb(181, 34, 0)";
        akzentFarbe = "rgb(255, 174, 156)";
        break;

      case "blue":
        pokemon.farbe = "rgb(19, 101, 179)";
        akzentFarbe = "rgb(127, 192, 252)";
        break;

      case "pink":
        pokemon.farbe = "rgb(191, 81, 173)";
        akzentFarbe = "rgb(255, 208, 247)";
        break;

      case "purple":
        pokemon.farbe = "rgb(104, 24, 186)";
        akzentFarbe = "rgb(197, 138, 255)";
        break;

      case "gray":
        pokemon.farbe = "rgba(85, 85, 85, 1)";
        akzentFarbe = "rgba(197, 197, 197, 1)";
        break;

      case "black":
        pokemon.farbe = "rgb(42, 42, 42)";
        akzentFarbe = "rgba(197, 197, 197, 1)";
        break;

      default:
        break;
    }
    return {pokemon, akzentFarbe};
  }

}
