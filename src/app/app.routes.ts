import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: ''
        , pathMatch: 'full'
        , loadComponent: () => {
            return import('./components/home/home')
            .then((m) => m.Home)
            ;
        }
    }
    , {
        path: 'random-national'
        , loadComponent: () => {
            return import('./components/random-card/random-card')
            .then((m) => m.RandomCard)
            ;
        }
    }, {
        path: 'hoenn-dex'
        , loadComponent: () => {
            return import('./components/hoenn-dex/hoenn-dex')
            .then((m) => m.HoennDex)
            ;
        }
    }, {
        path: 'national-dex/:nr'
        , loadComponent: () => {
            return import('./components/national-dex-pokemon/national-dex-pokemon')
            .then((m) => m.NationalDexPokemon)
            ;
        }
    }
];
