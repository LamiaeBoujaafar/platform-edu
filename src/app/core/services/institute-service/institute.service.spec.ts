import { TestBed } from '@angular/core/testing';

import { InstituteService } from './institute.service';

describe('InstituteServiceService', () => {
  let service: InstituteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
