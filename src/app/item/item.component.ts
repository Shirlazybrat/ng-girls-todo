import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p class="todo-item">
      <input type="checkbox" (click)="completeItem()"/>
    <span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
      {{ todoItem.title }}
    </span>
    <button class="btn-red" (click)="removeItem()">
        remove
      </button>
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter <any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }

}
