import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalDexPokemon } from './national-dex-pokemon';

describe('NationalDexPokemon', () => {
  let component: NationalDexPokemon;
  let fixture: ComponentFixture<NationalDexPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalDexPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalDexPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
