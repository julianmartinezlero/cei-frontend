import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenDialogReportComponent } from './children-dialog-report.component';

describe('ChildrenDialogReportComponent', () => {
  let component: ChildrenDialogReportComponent;
  let fixture: ComponentFixture<ChildrenDialogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenDialogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenDialogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
