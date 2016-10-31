import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/todo.model'
import {TodoService} from "../../shared/todo.service";

@Component({
  selector: 'todo-item',
  templateUrl: './app/components/todo-item/todo-item.component.html',
  styleUrls: ['./app/components/todo-item/todo-item.component.css']
})

export class TodoItem {
  @Input() todo: Todo;
  @Output() deleted = new EventEmitter();

  toggleDone() {
    this.todo.done = !this.todo.done;
  }

  delete() {
    this.deleted.emit(this.todo)
  }
}