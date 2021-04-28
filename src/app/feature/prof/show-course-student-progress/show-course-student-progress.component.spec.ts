import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourseStudentProgressComponent } from './show-course-student-progress.component';

describe('ShowCourseStudentProgressComponent', () => {
  let component: ShowCourseStudentProgressComponent;
  let fixture: ComponentFixture<ShowCourseStudentProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCourseStudentProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCourseStudentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
