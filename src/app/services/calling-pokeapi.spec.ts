import { TestBed } from '@angular/core/testing';

import { CallingPokeapi } from './calling-pokeapi';

describe('CallingPokeapi', () => {
  let service: CallingPokeapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallingPokeapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
