import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "./components/todo/todo.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton, MatFabButton} from "@angular/material/button";



@NgModule({
  declarations: [
    TodoComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatCheckbox,
    MatButton,
    MatFabButton,
  ],
  exports: [
    TodoComponent,
  ],
})
export class TodoModule { }
