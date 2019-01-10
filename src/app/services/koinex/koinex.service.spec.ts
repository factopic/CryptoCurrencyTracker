import { TestBed, inject } from '@angular/core/testing';

import { KoinexService } from './koinex.service';

describe('KoinexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KoinexService]
    });
  });

  it('should be created', inject([KoinexService], (service: KoinexService) => {
    expect(service).toBeTruthy();
  }));
});
