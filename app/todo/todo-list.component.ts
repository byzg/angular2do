import { Component, Input } from '@angular/core';
import { TodoItemComponent } from './todo-item.component'

@Component({
  selector: 'todo-list',
  templateUrl: './app/todo/todo-list.component.html',
  styleUrls: ['./app/todo/todo-list.component.css'],
  directives: [TodoItemComponent]
})

export class TodoListComponent {
  @Input() todos: string[]
}