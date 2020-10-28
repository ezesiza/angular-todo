import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { NgForm } from '@angular/forms';
import { TodoModel } from '../todo.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent implements OnInit {
  isDone: boolean;
  constructor(public todoService: TodoService, public router: Router, public route: ActivatedRoute) {
    this.isDone = false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
    });
  }

  onCreateTodo(items: NgForm): any {
    const todoData: TodoModel = {
      title: items.value.title,
      // dateCreated: items.value.dateCreated,
      // dateCompleted: items.value.dateCompleted,
      description: items.value.description,
      done: this.isDone,
    };
    this.todoService.createTodo(todoData);
    this.router.navigate(['/list']);
  }

  setDone(): void{
    this.isDone = !this.isDone;
  }
}
