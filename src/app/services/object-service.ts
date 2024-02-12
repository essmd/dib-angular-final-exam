import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AppEnvironment from './environment';
import Object from '../models/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private httpClient: HttpClient) {
  }

  getObjectById(id: number) : Observable<Object|undefined> {
    return this.httpClient.get<Object>(AppEnvironment.databaseEndpointObjectsById(id));
  }

  getObjectList() : Observable<Object[]> {
    return this.httpClient.get<Object[]>(AppEnvironment.databaseEndpointObjects);
  }

  createObject(object: Object) : Observable<Object> {
    return this.httpClient.post<Object>(AppEnvironment.databaseEndpointObjects, object);
  }

  updateObject(object: Object) : Observable<Object> {
    return this.httpClient.put<Object>(AppEnvironment.databaseEndpointObjectsById(object.id!), object);
  }
}
