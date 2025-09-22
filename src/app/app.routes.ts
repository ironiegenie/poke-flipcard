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
    }
];
