import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInstitutePageComponent } from './login-institute-page.component';

describe('LoginInstitutePageComponent', () => {
  let component: LoginInstitutePageComponent;
  let fixture: ComponentFixture<LoginInstitutePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginInstitutePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInstitutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
