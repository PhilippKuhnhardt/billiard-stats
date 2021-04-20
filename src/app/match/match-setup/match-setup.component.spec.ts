import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSetupComponent } from './match-setup.component';

describe('GameSetupComponent', () => {
  let component: MatchSetupComponent;
  let fixture: ComponentFixture<MatchSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
