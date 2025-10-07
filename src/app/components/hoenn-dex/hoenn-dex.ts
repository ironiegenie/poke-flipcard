import { Component, inject, signal } from '@angular/core';
import { NamePokedexNr } from '../../model/NamePokedexNr';
import { HoennDexService } from '../../services/hoenn-dex-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hoenn-dex',
  imports: [],
  templateUrl: './hoenn-dex.html',
  styleUrl: './hoenn-dex.scss'
})
export class HoennDex {
  hoennDexMap = new Map<number, NamePokedexNr>([]);
  hoennDexSignal = signal<Map<number, NamePokedexNr>>(this.hoennDexMap);
  // private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private hoennDexService: HoennDexService) {
    this.hoennDexMap = this.hoennDexService.getHoennDexMap();
    this.hoennDexSignal.set(this.hoennDexMap);
  }
  
  /**
   * Routing zu der Seite mit der Pokemon-Info-Karte
   * @param pokedexNr National-Pokedex Nummer des anzuzeigenden Pokemon
   */
  routeToPokecard(pokedexNr: number) {
    let url = "/national-dex/" + pokedexNr;
    this.router.navigateByUrl(url);
  }
}


