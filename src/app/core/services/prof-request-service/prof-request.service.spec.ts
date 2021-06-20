import { TestBed } from '@angular/core/testing';

import { ProfRequestService } from './prof-request.service';

describe('ProfRequestService', () => {
  let service: ProfRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
