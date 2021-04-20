import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchControllerComponent } from './match-controller.component';

describe('MatchControllerComponent', () => {
  let component: MatchControllerComponent;
  let fixture: ComponentFixture<MatchControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
