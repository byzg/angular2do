import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component'
import { Todo } from './todo/todo'

@Component({
  selector: 'todo-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [TodoListComponent]
})
export class AppComponent {
  title: string;
  todos: Todo[];

  constructor() {
    this.title = 'Angular 2To';
    this.todos = ['Изучить Angular 2', 'Изучить TypeScript', 'Изучить Node'].map((title)=> new Todo(title) );
  }

  addTodo(input: HTMLInputElement) {
    this.todos.push(new Todo(input.value));
    input.value = '';
  }
}
