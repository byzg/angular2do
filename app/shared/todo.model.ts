export interface ITodo {
  title: string;
  done: boolean;
  id: number;
}

export class Todo implements ITodo{
  title: string;
  done: boolean;
  id: number;

  constructor(title: string) {
    this.title = title;
    this.done = false
  }
}