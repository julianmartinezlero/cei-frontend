import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShowResultComponent } from './test-show-result.component';

describe('TestShowResultComponent', () => {
  let component: TestShowResultComponent;
  let fixture: ComponentFixture<TestShowResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShowResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShowResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
