import { Injectable } from '@angular/core';
import {Todo} from "../interfaces/todo.interface";
import {BehaviorSubject, filter, from, map, observable, Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListTodoService {

  readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  public addTodo(name: string) {
    this.todos$.next([...this.todos$.getValue(), {name: name, state: false, readonlyFlag: true}])
  }

  allSwitch(flagSwitching: boolean) {
    let allCompletedTodos: Todo[] = []
    for (let item of this.todos$.getValue()) {
      item.state = flagSwitching
      allCompletedTodos.push(item)
    }
    this.todos$.next(allCompletedTodos)
  }

  clearCompleted() {
    this.todos$.next(this.todos$.getValue().filter( (todo: Todo) => !todo.state))
  }

  deleteElement(index: number) {
    this.todos$.getValue().splice(index, 1)
    this.todos$.next(this.todos$.getValue())
  }
}
