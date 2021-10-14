import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChildrenComponent } from './group-children.component';

describe('GroupChildrenComponent', () => {
  let component: GroupChildrenComponent;
  let fixture: ComponentFixture<GroupChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
