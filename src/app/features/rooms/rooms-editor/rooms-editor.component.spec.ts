import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsEditorComponent } from './rooms-editor.component';

describe('RoomsEditorComponent', () => {
  let component: RoomsEditorComponent;
  let fixture: ComponentFixture<RoomsEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsEditorComponent]
    });
    fixture = TestBed.createComponent(RoomsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
