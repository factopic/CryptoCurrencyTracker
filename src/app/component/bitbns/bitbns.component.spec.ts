import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitbnsComponent } from './bitbns.component';

describe('BitbnsComponent', () => {
  let component: BitbnsComponent;
  let fixture: ComponentFixture<BitbnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitbnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitbnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
