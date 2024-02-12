import { Component, OnInit } from '@angular/core';
import { ObjectService } from 'src/app/services/object-service';
import { RoomService } from 'src/app/services/room-service';
import { Observable, forkJoin } from 'rxjs';
import ObjectsListItemModel from './objects-list-item-model';

@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {
  objects: ObjectsListItemModel[] = []

  constructor(
    private objectService: ObjectService,
    private roomService: RoomService)
  {
  }

  ngOnInit(): void {
    const observables = {
      rooms: this.roomService.getRoomList(),
      objects: this.objectService.getObjectList()
    };

    forkJoin(observables).subscribe((results) => {
      this.objects = results.objects.map((object) => {
        const room = results.rooms.find((room) => room.id === object.roomId);
        return {
          object: object,
          room: room
        };
      });
    });
  }
}
