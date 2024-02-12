import { catchError, throwError } from 'rxjs';
import { RoomService } from './../../../services/room-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-rooms-editor',
  templateUrl: './rooms-editor.component.html',
  styleUrls: ['./rooms-editor.component.css']
})
export class RoomsEditorComponent implements OnInit {
  roomId?: number;
  name?: string;

  get title() {
    return this.roomId
      ? 'Edit room #' + this.roomId
      : 'Add a new room'
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService)
  {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (!params.has('id')) {
        return;
      }

      const roomId = parseInt(params.get('id')!);
      if (!roomId) {
        return;
      }

      this.roomId = roomId;
      this.roomService.getRoomById(roomId).subscribe((existing) => {
        this.name = existing?.name;
      });
    });
  }

  onSubmit() {
    if (!this.name || this.name.length < 1) {
      alert('Please enter a valid name');
      return;
    }

    const observable = this.roomId
      ? this.roomService.updateRoom({ name: this.name, id: this.roomId })
      : this.roomService.createRoom({ name: this.name });

    observable
      .pipe(
        catchError((error) => {
          alert('Room could not be saved');
          return throwError(() => error);
        })
      )
      .subscribe(() => {
        this.resetAndNavigateBackToRooms();
      });
  }

  onCancel() {
    this.resetAndNavigateBackToRooms();
  }

  private resetAndNavigateBackToRooms() {
    this.name = undefined;
    this.router.navigate([ '/rooms' ]);
  }
}
