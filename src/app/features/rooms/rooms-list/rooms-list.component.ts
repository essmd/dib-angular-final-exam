import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room-service';
import Room from 'src/app/models/room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  rooms: Room[] = []

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.roomService.getRoomList().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }
}
