import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorChildComponent } from './tutor-child.component';

describe('TutorChildComponent', () => {
  let component: TutorChildComponent;
  let fixture: ComponentFixture<TutorChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
