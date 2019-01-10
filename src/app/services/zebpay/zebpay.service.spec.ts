import { TestBed, inject } from '@angular/core/testing';

import { ZebpayService } from './zebpay.service';

describe('ZebpayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZebpayService]
    });
  });

  it('should be created', inject([ZebpayService], (service: ZebpayService) => {
    expect(service).toBeTruthy();
  }));
});
