import { Injectable } from '@angular/core';
import {ITodo} from "../interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {

  count: number = 0
  todos: ITodo[] = []

  addTodo(name: string): void {
    this.todos.push({name: name, state: false, readonlyFlag: true})
    this.count++
  }

  allCompleted(): void {
    this.todos.forEach((todo: ITodo) => todo.state = !todo.state)
  }

  clearCompleted(): void {
    this.todos = Object.assign([], this.todos.filter( (todo: ITodo) => !todo.state))
    this.count = this.todos.length
  }
}
