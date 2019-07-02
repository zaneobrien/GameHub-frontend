import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCheckoutComponent } from './game-checkout.component';

describe('GameCheckoutComponent', () => {
  let component: GameCheckoutComponent;
  let fixture: ComponentFixture<GameCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
