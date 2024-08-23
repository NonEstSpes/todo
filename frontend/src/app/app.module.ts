import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {TodoModule} from "./client/todo/todo.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    TodoModule,
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
