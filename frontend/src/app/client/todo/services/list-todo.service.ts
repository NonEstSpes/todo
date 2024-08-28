import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {

  count: number = 0
  todos: Todo[] = []

  addTodo(name: string): void {
    this.todos.push({name: name, state: false, readonlyFlag: true})
    this.count++
  }

  allCompleted(): void {
    this.todos.forEach((todo: Todo) => todo.state = !todo.state)
  }

  clearCompleted(): void {
    this.todos = Object.assign([], this.todos.filter( (todo: Todo) => !todo.state))
    this.count = this.todos.length
  }
}
