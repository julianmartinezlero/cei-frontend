import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenReportComponent } from './children-report.component';

describe('ChildrenReportComponent', () => {
  let component: ChildrenReportComponent;
  let fixture: ComponentFixture<ChildrenReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
