import { Injectable } from '@angular/core';
import {Todo} from "../class/todo";
import {A} from "@angular/cdk/keycodes";

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {

  count: number = 0
  todos: Todo[] = []

  addTodo(name: string): void {
    this.todos.push(new Todo(name))
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
