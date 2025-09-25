import { Component, OnInit, signal } from '@angular/core';
import { CallingPokeapi } from '../../services/calling-pokeapi';
import { Randomizer } from '../../services/randomizer';
import { KartenDaten } from '../../model/kartenDaten.type';
import { KartenDatenBuilder } from '../../classes/karten-daten-builder';

@Component({
  selector: 'app-random-card',
  imports: [],
  templateUrl: './random-card.html',
  styleUrl: './random-card.scss'
})
export class RandomCard implements OnInit {
  pokedexNumber: number = 0;
  constructor(private randomizer: Randomizer, private callingPokeApi: CallingPokeapi) { };
  pokemon: KartenDaten = new KartenDatenBuilder().build();
  datenSignal = signal(this.pokemon);

  async ngOnInit() {
    await this.getRandomNationalDexPokemon();
  }


  async getRandomNationalDexPokemon() {
    console.log(this.pokedexNumber = this.randomizer.getRandomNationalDexNumber());

    this.pokemon = await this.callingPokeApi.getNationalDexPokemon(this.pokedexNumber);
    if (this.pokemon.name == "") {
      console.error("Hey, hier wurde kein richtiges Pokemon rausgegeben! :(");
    }
    this.datenSignal.set(this.pokemon);
  }
}
