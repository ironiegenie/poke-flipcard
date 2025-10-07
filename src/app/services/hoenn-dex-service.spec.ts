import { TestBed } from '@angular/core/testing';

import { HoennDexService } from './hoenn-dex-service';

describe('HoennDexService', () => {
  let service: HoennDexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennDexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
