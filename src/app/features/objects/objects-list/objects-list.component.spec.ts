import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsListComponent } from './objects-list.component';

describe('ObjectsListComponent', () => {
  let component: ObjectsListComponent;
  let fixture: ComponentFixture<ObjectsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectsListComponent]
    });
    fixture = TestBed.createComponent(ObjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
