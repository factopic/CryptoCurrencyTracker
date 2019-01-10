import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoindeltaComponent } from './coindelta.component';

describe('CoindeltaComponent', () => {
  let component: CoindeltaComponent;
  let fixture: ComponentFixture<CoindeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoindeltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoindeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
