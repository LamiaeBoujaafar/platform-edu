import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizStudentProgressComponent } from './show-quiz-student-progress.component';

describe('ShowQuizStudentProgressComponent', () => {
  let component: ShowQuizStudentProgressComponent;
  let fixture: ComponentFixture<ShowQuizStudentProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuizStudentProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuizStudentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
