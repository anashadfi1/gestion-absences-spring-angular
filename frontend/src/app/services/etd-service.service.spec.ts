import { TestBed } from '@angular/core/testing';

import { EtdServiceService } from './etd-service.service';

describe('EtdServiceService', () => {
  let service: EtdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
