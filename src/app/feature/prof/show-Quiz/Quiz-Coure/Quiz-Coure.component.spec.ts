import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCoureComponent } from './Quiz-Coure.component';

describe('ProfProfileComponent', () => {
  let component: QuizCoureComponent;
  let fixture: ComponentFixture<QuizCoureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCoureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCoureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
