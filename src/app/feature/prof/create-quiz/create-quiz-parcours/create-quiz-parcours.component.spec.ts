import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizParcoursComponent } from './create-quiz-parcours.component';

describe('CreateQuizParcoursComponent', () => {
  let component: CreateQuizParcoursComponent;
  let fixture: ComponentFixture<CreateQuizParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizParcoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
