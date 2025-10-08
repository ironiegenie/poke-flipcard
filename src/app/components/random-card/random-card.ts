import { Component, inject, OnInit, signal } from '@angular/core';
import { CallingPokeapi } from '../../services/calling-pokeapi';
import { Randomizer } from '../../services/randomizer';
import { KartenDaten } from '../../model/kartenDaten.type';
import { KartenDatenBuilder } from '../../classes/karten-daten-builder';
import { FarbenService } from '../../services/farben-service';

@Component({
  selector: 'app-random-card',
  imports: [],
  templateUrl: './random-card.html',
  styleUrl: './random-card.scss'
})
export class RandomCard implements OnInit {
  pokedexNumber: number = 0;
  pokemon: KartenDaten = new KartenDatenBuilder().build();
  datenSignal = signal(this.pokemon);
  akzentFarbe = signal("");
  
  constructor(private randomizer: Randomizer, 
              private callingPokeApi: CallingPokeapi,
              private farbenService: FarbenService
            ) {};
  
  /**
   * 
   */
  async ngOnInit() {
    await this.getRandomNationalDexPokemon();
  }

  /**
   * 
   */
  async getRandomNationalDexPokemon() {
    console.log(this.pokedexNumber = this.randomizer.getRandomNationalDexNumber());

    this.pokemon = await this.callingPokeApi.getNationalDexPokemon(this.pokedexNumber);
    if (this.pokemon.name == "") {
      console.error("Hey, hier wurde kein richtiges Pokemon rausgegeben! :(");
    }
    let pokemonUndAkzent = this.farbenService.setzeFarben(this.pokemon, this.akzentFarbe());
    this.pokemon = pokemonUndAkzent.pokemon;
    this.akzentFarbe.set(pokemonUndAkzent.akzentFarbe);
    this.datenSignal.set(this.pokemon);
  }

  /**
   * tauscht die Bilder von shiny zu normal und wieder zurück, wenn es erneut ausgelöst wird
   */
  switchPictures() {
    this.datenSignal.set(this.farbenService.switchPictures(this.pokemon));
  }
}
