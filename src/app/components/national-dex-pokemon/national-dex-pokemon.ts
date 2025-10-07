import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-national-dex-pokemon',
  imports: [],
  templateUrl: './national-dex-pokemon.html',
  styleUrl: './national-dex-pokemon.scss'
})
export class NationalDexPokemon implements OnInit {

  private route = inject(ActivatedRoute);
  nummer = signal(0);

  ngOnInit() {
    console.log(this.route.params.toSignal());
  }

}
