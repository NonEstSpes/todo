import {Todo} from "./todo";

export class ListTodos {
  count: number = 0
  todos: Todo[] = []

  addTodo(name: string): void {
    this.todos.push(new Todo(name))
    this.count++
  }

  allCompleted(): void {
    this.todos.forEach((todo: Todo) => todo.state = true)
  }

  cleatCompleted(): void {
    this.todos = this.todos.filter( (todo: Todo) => !todo.state)
    this.count = this.todos.length
  }
}
