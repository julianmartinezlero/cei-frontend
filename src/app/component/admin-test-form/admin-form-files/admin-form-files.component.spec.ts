import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormFilesComponent } from './admin-form-files.component';

describe('AdminFormFilesComponent', () => {
  let component: AdminFormFilesComponent;
  let fixture: ComponentFixture<AdminFormFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFormFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
