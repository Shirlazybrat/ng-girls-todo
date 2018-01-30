import { Injectable } from '@angular/core';
import {TodoListStorageService} from './todo-list-storage.service';

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListService {

  private todoList;
  constructor(private storage:TodoListStorageService) {
  }
  getTodoList() {
    return this.storage.get();
  }

  addItem(item) {
    return this.storage.post(item);
  }
  removeItem(item) {
    return this.storage.destroy(item);
  }
}
