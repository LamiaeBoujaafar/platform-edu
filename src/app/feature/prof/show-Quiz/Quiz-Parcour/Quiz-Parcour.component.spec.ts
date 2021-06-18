import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizParcourComponent } from './Quiz-Parcour.component';

describe('StudentProfileComponent', () => {
  let component: QuizParcourComponent;
  let fixture: ComponentFixture<QuizParcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizParcourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizParcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
