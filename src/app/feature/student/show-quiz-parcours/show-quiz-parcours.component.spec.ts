import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizParcoursComponent } from './show-quiz-parcours.component';

describe('ShowQuizParcoursComponent', () => {
  let component: ShowQuizParcoursComponent;
  let fixture: ComponentFixture<ShowQuizParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuizParcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuizParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
