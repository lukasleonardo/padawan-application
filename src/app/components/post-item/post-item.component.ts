import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/Post';
import { ServiceManagerService } from 'src/app/service/service-manager.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  dataSource = new MatTableDataSource;
  displayedColumns = ['idPost','titlePost','bodyPost','userIdPost'];

  constructor(private serviceManager:ServiceManagerService) { }

  ngOnInit(): void {
    this.serviceManager.getPosts().subscribe((data:Post[])=>this.dataSource.data=data);
  }

}
