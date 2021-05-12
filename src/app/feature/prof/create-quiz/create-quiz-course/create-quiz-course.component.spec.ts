import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizCourseComponent } from './create-quiz-course.component';

describe('CreateQuizCourseComponent', () => {
  let component: CreateQuizCourseComponent;
  let fixture: ComponentFixture<CreateQuizCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuizCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
