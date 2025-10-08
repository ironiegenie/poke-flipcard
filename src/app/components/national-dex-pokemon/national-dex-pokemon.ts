import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallingPokeapi } from '../../services/calling-pokeapi';
import { KartenDaten } from '../../model/kartenDaten.type';
import { KartenDatenBuilder } from '../../classes/karten-daten-builder';
import { FarbenService } from '../../services/farben-service';

@Component({
  selector: 'app-national-dex-pokemon',
  imports: [],
  templateUrl: './national-dex-pokemon.html',
  styleUrl: './national-dex-pokemon.scss'
})
export class NationalDexPokemon implements OnInit {
  private route = inject(ActivatedRoute);
  nummer = signal(0);
  pokemon: KartenDaten = new KartenDatenBuilder().build();
  datenSignal = signal(this.pokemon);
  akzentFarbe = signal("");

  constructor(private pokeapiService: CallingPokeapi,
              private farbenService: FarbenService) {}

  /**
   * 
   */
  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.nummer.set(params['nr']);
    });
    console.log(this.nummer());
    
    this.pokemon = await this.pokeapiService.getNationalDexPokemon(this.nummer());
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
