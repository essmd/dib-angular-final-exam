import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { RoomsListComponent } from './features/rooms/rooms-list/rooms-list.component';
import { RoomsEditorComponent } from './features/rooms/rooms-editor/rooms-editor.component';
import { ObjectsListComponent } from './features/objects/objects-list/objects-list.component';
import { ObjectsEditorComponent } from './features/objects/objects-editor/objects-editor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rooms',
    children: [
      { path: '', component: RoomsListComponent },
      { path: 'create', component: RoomsEditorComponent },
      { path: ':id/edit', component: RoomsEditorComponent },
    ],
  },
  {
    path: 'objects',
    children: [
      { path: '', component: ObjectsListComponent },
      { path: 'create', component: ObjectsEditorComponent },
      { path: ':id/edit', component: ObjectsEditorComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
