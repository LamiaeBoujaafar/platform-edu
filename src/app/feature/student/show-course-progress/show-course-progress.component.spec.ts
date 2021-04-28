import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourseProgressComponent } from './show-course-progress.component';

describe('ShowCourseProgressComponent', () => {
  let component: ShowCourseProgressComponent;
  let fixture: ComponentFixture<ShowCourseProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCourseProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCourseProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
