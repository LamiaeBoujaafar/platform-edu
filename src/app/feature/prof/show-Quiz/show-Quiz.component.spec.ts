import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizComponent } from './show-Quiz.component';

describe('ShowProfileComponent', () => {
  let component: ShowQuizComponent;
  let fixture: ComponentFixture<ShowQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
