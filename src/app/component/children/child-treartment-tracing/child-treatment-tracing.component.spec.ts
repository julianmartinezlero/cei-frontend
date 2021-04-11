import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTreatmentTracingComponent } from './child-treatment-tracing.component';

describe('ChildTreartmentTracingComponent', () => {
  let component: ChildTreatmentTracingComponent;
  let fixture: ComponentFixture<ChildTreatmentTracingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTreatmentTracingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTreatmentTracingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
