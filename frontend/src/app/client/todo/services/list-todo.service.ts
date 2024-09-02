import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/todo.interface";
import {observable, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {

  private todos: Todo[] = []

  public get Todos$(): Observable<Todo[]> {
    return of(this.todos)
  }

  addTodo(name: string): void {
    this.todos.push({name: name, state: false, readonlyFlag: true})
  }

  allCompleted(): void {
    this.todos.forEach((todo: Todo) => todo.state = !todo.state)
  }

  clearCompleted(): void {
    this.todos = Object.assign([], this.todos.filter( (todo: Todo) => !todo.state))
  }
}
