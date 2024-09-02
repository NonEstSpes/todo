import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ListTodoService} from "../../services/list-todo.service";
import {Todo} from "../../interfaces/todo.interface";


@Component({
  selector: 'app-todo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit{
  typeFilter: string = "All"
  name: string = ""
  list: Todo[] = []

  constructor(
    public listTodos: ListTodoService
  ) {
  }

  onEnter(): void {
    if (this.name == "") {
      return
    }
    this.listTodos.Todos$.next(this.name)
    this.name = ""
  }

  renameTodo(newName: string, todo: Todo): void {
    if (newName == "") {
      return
    }
    todo.name = newName
    todo.readonlyFlag = true
  }

  ngOnInit() {
    this.listTodos.Todos$.subscribe(value => {
      this.list = value
    })
  }

}
