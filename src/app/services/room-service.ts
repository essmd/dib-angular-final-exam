import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AppEnvironment from './environment';
import Room from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient: HttpClient) {
  }

  getRoomById(id: number) : Observable<Room|undefined> {
    return this.httpClient.get<Room>(AppEnvironment.databaseEndpointRoomsById(id));
  }

  getRoomList() : Observable<Room[]> {
    return this.httpClient.get<Room[]>(AppEnvironment.databaseEndpointRooms);
  }

  createRoom(room: Room) : Observable<Room> {
    return this.httpClient.post<Room>(AppEnvironment.databaseEndpointRooms, room);
  }

  updateRoom(room: Room) : Observable<Room> {
    return this.httpClient.put<Room>(AppEnvironment.databaseEndpointRoomsById(room.id!), room);
  }
}
