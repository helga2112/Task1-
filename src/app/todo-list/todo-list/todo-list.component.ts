import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../todo-list-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoItems:TodoListItem[] = [
    {
      id:1,
      title:"Todo item #1"
    },
    {
      id:2,
      title:"Todo item #2"
    },
    {
      id:3,
      title:"Todo item #3"
    },
    {
      id:4,
      title:"Todo item #4"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
