import { Component, OnInit } from '@angular/core';
import type { KartenDaten } from '../../model/kartenDaten.type';
import { CallingPokeapi } from '../../services/calling-pokeapi';
import { Randomizer } from '../../services/randomizer';

@Component({
  selector: 'app-random-card',
  imports: [],
  templateUrl: './random-card.html',
  styleUrl: './random-card.scss'
})
export class RandomCard implements OnInit {
  pokedexNumber: number = 0;
  pokemon: KartenDaten | null = null;

  constructor(private randomizer: Randomizer, private callingPokeApi: CallingPokeapi) {}

  ngOnInit() {
    console.log(this.pokedexNumber = this.randomizer.getRandomNationalDexNumber());
    
    this.pokemon = this.callingPokeApi.getNationalDexPokemon(this.pokedexNumber);
    if (this.pokemon == null) {
      console.error("Hey, hier wurde kein richtiges Pokemon rausgegeben! :(");
    }
    console.log(this.pokemon.name);
  }
  
}
