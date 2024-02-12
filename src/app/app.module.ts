import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomsListComponent } from './features/rooms/rooms-list/rooms-list.component';
import { RoomsEditorComponent } from './features/rooms/rooms-editor/rooms-editor.component';
import { HomeComponent } from './features/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { ObjectsListComponent } from './features/objects/objects-list/objects-list.component';
import { ObjectsEditorComponent } from './features/objects/objects-editor/objects-editor.component';
import { ButtonComponent } from './features/shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsListComponent,
    RoomsEditorComponent,
    HomeComponent,
    ObjectsListComponent,
    ObjectsEditorComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
