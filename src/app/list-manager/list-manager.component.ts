import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
      <h1>
        {{title}}
      </h1>
      <p *ngIf="!authService.authenticated">
        You must log in to access the todo app!
      </p>
      <ng-template [ngIf]="authService.authenticated">
        <div class="todo-add">
          <todo-input (submit)="addItem($event)"></todo-input>
        </div>
        <ul>
          <li *ngFor="let item of todoList">
            <todo-item
              [todoItem]="item"
              (remove)="removeItem($event)"></todo-item>
          </li>
        </ul>
      </ng-template>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: any;

  constructor(private todoListService: TodoListService, public authService: AuthService) { }

  userLoggedIn = true;


  title = 'todo App';
  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  addItem(title:string) {
    this.todoList = this.todoListService.addItem({ title });
  }
  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
