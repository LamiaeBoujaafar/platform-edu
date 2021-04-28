import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutComponent } from './institute.component';

describe('InstitutComponent', () => {
  let component: InstitutComponent;
  let fixture: ComponentFixture<InstitutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
