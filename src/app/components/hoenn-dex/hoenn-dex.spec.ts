import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennDex } from './hoenn-dex';

describe('HoennDex', () => {
  let component: HoennDex;
  let fixture: ComponentFixture<HoennDex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoennDex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoennDex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
