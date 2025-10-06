import { Component, inject, OnInit, signal } from '@angular/core';
import { CallingPokeapi } from '../../services/calling-pokeapi';
import { Randomizer } from '../../services/randomizer';
import { KartenDaten } from '../../model/kartenDaten.type';
import { KartenDatenBuilder } from '../../classes/karten-daten-builder';
import { NgOptimizedImage } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-random-card',
  imports: [NgOptimizedImage],
  templateUrl: './random-card.html',
  styleUrl: './random-card.scss'
})
export class RandomCard implements OnInit {
  pokedexNumber: number = 0;
  pokemon: KartenDaten = new KartenDatenBuilder().build();
  datenSignal = signal(this.pokemon);
  akzentFarbe = "rgb(255, 255, 255)";
  // private route = inject(ActivatedRoute);
  // private router = inject(Router);
  
  constructor(private randomizer: Randomizer, private callingPokeApi: CallingPokeapi) { };
  

  async ngOnInit() {
    await this.getRandomNationalDexPokemon();
  }


  async getRandomNationalDexPokemon() {
    console.log(this.pokedexNumber = this.randomizer.getRandomNationalDexNumber());

    this.pokemon = await this.callingPokeApi.getNationalDexPokemon(this.pokedexNumber);
    if (this.pokemon.name == "") {
      console.error("Hey, hier wurde kein richtiges Pokemon rausgegeben! :(");
    }
    this.setzeFarben();
    
    this.datenSignal.set(this.pokemon);
    
  }

  /**
   * tauscht die Bilder von shiny zu normal und wieder zurück, wenn es erneut ausgelöst wird
   */
  switchPictures() {
    let newShiny = this.pokemon.bildUrl;
    let newBild = this.pokemon.shinyUrl;

    this.pokemon.shinyUrl = newShiny;
    this.pokemon.bildUrl = newBild;
    this.datenSignal.set(this.pokemon);
  }

  private setzeFarben() {
    switch (this.pokemon.farbe) {
      case "green":
        this.pokemon.farbe = "rgb(33, 148, 73)";
        this.akzentFarbe = "rgb(159, 242, 188)";
        break;

      case "white":
        this.pokemon.farbe = "rgba(197, 197, 197, 1)";
        this.akzentFarbe = "rgb(255, 255, 255)";
        break;

      case "brown":
        this.pokemon.farbe = "rgb(125, 80, 0)";
        this.akzentFarbe = "rgb(242, 205, 140)";
        break;

      case "yellow":
        this.pokemon.farbe = "rgb(237, 169, 0)";
        this.akzentFarbe = "rgb(255, 225, 149)";
        break;

      case "red":
        this.pokemon.farbe = "rgb(181, 34, 0)";
        this.akzentFarbe = "rgb(255, 174, 156)";
        break;

      case "blue":
        this.pokemon.farbe = "rgb(19, 101, 179)";
        this.akzentFarbe = "rgb(127, 192, 252)";
        break;

      case "pink":
        this.pokemon.farbe = "rgb(191, 81, 173)";
        this.akzentFarbe = "rgb(255, 208, 247)";
        break;

      case "purple":
        this.pokemon.farbe = "rgb(104, 24, 186)";
        this.akzentFarbe = "rgb(197, 138, 255)";
        break;

      case "gray":
        this.pokemon.farbe = "rgba(85, 85, 85, 1)";
        this.akzentFarbe = "rgba(197, 197, 197, 1)";
        break;

      case "black":
        this.pokemon.farbe = "rgb(42, 42, 42)";
        this.akzentFarbe = "rgba(197, 197, 197, 1)";
        break;

      default:
        break;
    }
  }
}
