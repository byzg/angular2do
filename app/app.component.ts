import { Component } from '@angular/core';
import { TodoFormComponent } from './components/todo-form.component'
import { TodoListComponent } from './components/todo-list.component'
import { Todo } from './components/todo'

@Component({
  selector: 'todo-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [TodoFormComponent, TodoListComponent]
})
export class AppComponent {
  title: string;
  todos: Todo[];

  constructor() {
    this.title = 'Angular 2To';
    this.todos = ['Изучить Angular 2', 'Изучить TypeScript', 'Изучить Node'].map((title)=> new Todo(title) );
  }

  onTodoAdded(todo: Todo) {
    this.todos.push(todo);
    // input.value = '';
  }
}
