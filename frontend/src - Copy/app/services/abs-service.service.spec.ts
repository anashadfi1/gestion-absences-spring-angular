import { TestBed } from '@angular/core/testing';

import { AbsServiceService } from './abs-service.service';

describe('AbsServiceService', () => {
  let service: AbsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
