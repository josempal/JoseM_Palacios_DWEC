import { TestBed } from '@angular/core/testing';

import { VaccinationServiceService } from './vaccination-service.service';

describe('VaccinationServiceService', () => {
  let service: VaccinationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
