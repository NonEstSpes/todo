import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ListTodoService} from "../../services/list-todo.service";
import {ITodo} from "../../interfaces/todo.interface";


@Component({
  selector: 'app-todo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  typeFilter: string = "All"
  name: string = ""

  constructor(
    public listTodos: ListTodoService
  ) {
  }

  onEnter(): void {
    if (this.name == "") {
      return
    }
    this.listTodos.addTodo(this.name)
    this.name = ""
  }

  renameTodo(newName: string, todo: ITodo): void {
    if (newName == "") {
      return
    }
    todo.name = newName
    todo.readonlyFlag = true
  }
}
