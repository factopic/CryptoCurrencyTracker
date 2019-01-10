import { TestBed, inject } from '@angular/core/testing';

import { CoindeltaService } from './coindelta.service';

describe('CoindeltaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoindeltaService]
    });
  });

  it('should be created', inject([CoindeltaService], (service: CoindeltaService) => {
    expect(service).toBeTruthy();
  }));
});
