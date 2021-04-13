import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEventDetailsComponent } from './child-event-details.component';

describe('ChildEventDetailsComponent', () => {
  let component: ChildEventDetailsComponent;
  let fixture: ComponentFixture<ChildEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
