import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TodoModel } from './todo.model';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoValue = new Subject();
  allTodos: Array<any>;
  todoSubject = new Subject<any>();
  todoIndex: number;

  constructor(private http: HttpClient) {
    this.allTodos = [];
    this.todoIndex = 0;
  }

  createTodo(todos: TodoModel): void {
    const newDate = new Date();
    let todosLen = this.getTodos() === null ? new Array() : this.getTodos();

    const todoData = {
      id: todosLen.length +  this.todoIndex++,
      // DateCompleted: todos.dateCompleted,
      dateCreated: newDate.toISOString(),
      description: todos.description,
      done: todos.done,
      title: todos.title,
    };
    this.allTodos = [...todosLen];
    this.allTodos.push(todoData);
    localStorage.setItem('todoData', JSON.stringify(this.allTodos));
  }

  deleteTodos(id: any): void {
    let now = this.getTodos();
    now = now.filter((item) => item.id !== id);
    localStorage.setItem('todoData', JSON.stringify(now));
    this.getTodos();
    location.reload();
  }

  getTodos(): any {
    const items = localStorage.getItem('todoData');
    if (items === undefined) {
      return this.allTodos;
    }

    if (!Array.isArray(items)) {
      return JSON.parse(items);
    }
  }
  getAllTodos(): any {
    const items = JSON.parse(localStorage.getItem('todoData'));
    const newTodos = new Observable(items).subscribe((data) => {
      return this.todoSubject.next(data);
    });
    return newTodos;
  }
}
