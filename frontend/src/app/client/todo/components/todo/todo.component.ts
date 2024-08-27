import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ListTodoService} from "../../services/list-todo.service";


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
}
