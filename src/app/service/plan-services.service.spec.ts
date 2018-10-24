import { TestBed, inject } from '@angular/core/testing';

import { PlanServicesService } from './plan-services.service';

describe('PlanServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanServicesService]
    });
  });

  it('should be created', inject([PlanServicesService], (service: PlanServicesService) => {
    expect(service).toBeTruthy();
  }));
});
