import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInstituteComponent } from './delete-institute.component';

describe('DeleteInstituteComponent', () => {
  let component: DeleteInstituteComponent;
  let fixture: ComponentFixture<DeleteInstituteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInstituteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
