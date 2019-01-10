import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebpayComponent } from './zebpay.component';

describe('ZebpayComponent', () => {
  let component: ZebpayComponent;
  let fixture: ComponentFixture<ZebpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZebpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZebpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
