

import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoCreateComponent } from '../todo/todo-create/todo-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TodoListComponent } from '../todo/todo-list/todo-list.component';

const layout = [TodoCreateComponent, TodoListComponent];


@NgModule({
    declarations: [TodoCreateComponent, TodoListComponent],
    imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule, FormsModule ],
    exports: [...layout]
})
export class TodoModule { }
