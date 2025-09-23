import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Randomizer {  
  getRandomNumberWithCeilings(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomNationalDexNumber(): number {
    return this.getRandomNumberWithCeilings(ONE, MAX_NATIONAL_DEX_NUMBER);
  }
  
}

const MAX_NATIONAL_DEX_NUMBER = 1025;
const ONE = 1;

