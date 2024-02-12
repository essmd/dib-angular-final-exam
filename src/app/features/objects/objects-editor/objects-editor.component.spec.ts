import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsEditorComponent } from './objects-editor.component';

describe('ObjectsEditorComponent', () => {
  let component: ObjectsEditorComponent;
  let fixture: ComponentFixture<ObjectsEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectsEditorComponent]
    });
    fixture = TestBed.createComponent(ObjectsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
