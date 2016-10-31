export class TodoSeedData {
  createDb() {
    let todos = [
      { id: 1, title: 'Изучить Angular 2', done: false },
      { id: 2, title: 'Изучить TypeScript', done: false },
      { id: 3, title: 'Изучить Node', done: false }
    ];

    return todos
  }
}