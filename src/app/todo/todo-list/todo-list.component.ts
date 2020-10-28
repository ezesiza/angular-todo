import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoModel } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  allTodos: any;
  isLoading = false;
  isDone = false;

  constructor(public todoService: TodoService, public router: Router) {
    this.allTodos = [];
  }

  ngOnInit(): void {
    this.isLoading = true;
    const todoData = this.todoService.getTodos();
    if (todoData === null) {
      return this.allTodos;
    }
    this.allTodos = [...todoData];
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodos(id);
  }
  checkDone(item) {}

  setDone(item: TodoModel): void {
    item.done = !item.done;
    this.allTodos = [...this.allTodos];
    console.log(this.allTodos);
    // this.allTodos.find((data) => data.id === item.id);
  }

  editTodo(todo) {}
}
