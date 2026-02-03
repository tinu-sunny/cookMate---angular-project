import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReciipe } from './view-reciipe';

describe('ViewReciipe', () => {
  let component: ViewReciipe;
  let fixture: ComponentFixture<ViewReciipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReciipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReciipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
