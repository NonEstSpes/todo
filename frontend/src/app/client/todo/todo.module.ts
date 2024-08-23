import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "./components/todo/todo.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";



@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
  ],
  exports: [
    TodoComponent,
  ],
})
export class TodoModule { }
