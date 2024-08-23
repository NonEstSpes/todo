import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ListTodos} from "../../class/list-todos";

@Component({
  selector: 'app-todo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  typeFilter: string = "All"
  name: string = ""
  listTodos: ListTodos = new ListTodos()

  onEnter(): void {
    if (this.name == "") {
      return
    }
    this.listTodos.addTodo(this.name)
    this.name = ""
  }
}
