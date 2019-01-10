import { TestBed, inject } from '@angular/core/testing';

import { BitbnsService } from './bitbns.service';

describe('BitbnsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitbnsService]
    });
  });

  it('should be created', inject([BitbnsService], (service: BitbnsService) => {
    expect(service).toBeTruthy();
  }));
});
