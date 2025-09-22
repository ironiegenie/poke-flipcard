import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Typen } from './enum/typen';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('poke-flipcard');
  readonly type = signal(Typen.DRACHE);
}
