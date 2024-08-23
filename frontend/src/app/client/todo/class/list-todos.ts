import {Todo} from "./todo";

export class ListTodos {
  count: number = 0
  todos: Todo[] = []

  addTodo(name: string): void {
    this.todos.push(new Todo(name))
    this.count++
  }

  allCompleted(): void {

  }

  cleatCompleted(): void {

  }
}
