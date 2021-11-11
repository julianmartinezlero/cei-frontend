import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUploadResourceComponent } from './test-upload-resource.component';

describe('TestUploadResourceComponent', () => {
  let component: TestUploadResourceComponent;
  let fixture: ComponentFixture<TestUploadResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUploadResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUploadResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
