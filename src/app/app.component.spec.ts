import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture;
  let app;
  let titleService: Title;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        Title
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should be able to set title', () => {
    titleService = TestBed.inject(Title);
    const titleText = 'Test-Titel';
    app.setTitle(titleText);
    expect(titleService.getTitle()).toEqual(titleText);
  });
});
