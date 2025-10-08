import { TestBed } from '@angular/core/testing';

import { FarbenService } from './farben-service';

describe('FarbenService', () => {
  let service: FarbenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarbenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
