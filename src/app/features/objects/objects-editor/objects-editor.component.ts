import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import Room from 'src/app/models/room';
import { ObjectService } from 'src/app/services/object-service';
import { RoomService } from 'src/app/services/room-service';

@Component({
  selector: 'app-objects-editor',
  templateUrl: './objects-editor.component.html',
  styleUrls: ['./objects-editor.component.css']
})
export class ObjectsEditorComponent implements OnInit {
  objectId?: number;
  name?: string;
  roomId?: number;
  rooms: Room[] = [];

  get title() {
    return this.objectId
      ? 'Edit object #' + this.objectId
      : 'Add a new object'
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private objectService: ObjectService,
    private roomService: RoomService)
  {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (!params.has('id')) {
        return;
      }

      const objectId = parseInt(params.get('id')!);
      if (!objectId) {
        return;
      }

      this.objectId = objectId;
      this.objectService.getObjectById(objectId).subscribe((existing) => {
        this.name = existing?.name;
        this.roomId = existing?.roomId;
      });
    });

    this.roomService.getRoomList().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

  onSubmit() {
    if (!this.name || this.name.length < 1) {
      alert('Please enter a valid name');
      return;
    }

    const observable = this.objectId
      ? this.objectService.updateObject({ roomId: this.roomId, name: this.name, id: this.objectId })
      : this.objectService.createObject({ roomId: this.roomId, name: this.name });

    observable
      .pipe(
        catchError((error) => {
          alert('Object could not be saved');
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.resetAndNavigateBackToObjects();
      });
  }

  onCancel() {
    this.resetAndNavigateBackToObjects();
  }

  private resetAndNavigateBackToObjects() {
    this.name = undefined;
    this.roomId = undefined;
    this.router.navigate([ '/objects' ]);
  }
}
