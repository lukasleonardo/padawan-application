
import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/Todo';



import { MatTableDataSource } from '@angular/material/table';
import { ServiceManagerService } from 'src/app/service/service-manager.service';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  displayedColumns =['id','title','userId'];
  dataSource = new MatTableDataSource<Todo>();


  constructor(private serviceManager:ServiceManagerService) {   
   }

  ngOnInit(): void {
    this.serviceManager.getTodos().subscribe((data:Todo[])=>this.dataSource.data=data);
  }

  

}
