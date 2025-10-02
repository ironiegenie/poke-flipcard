import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyFlip } from './shiny-flip';

describe('ShinyFlip', () => {
  let component: ShinyFlip;
  let fixture: ComponentFixture<ShinyFlip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShinyFlip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShinyFlip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
