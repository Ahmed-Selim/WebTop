import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  newItem = '' ;
  items: {title: string, isChecked: boolean}[] = [ ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  add(event: string) {
    this.items.push({title: event, isChecked: false});
    this.newItem = '' ;
  }

  remove (index: number) {
    this.items.splice(index, 1) ;
  }

  mark(index: number) {
    this.items[index].isChecked = ! this.items[index].isChecked ;
  }

}
