import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Album } from 'src/app/models/Album';
import { ServiceManagerService } from 'src/app/service/service-manager.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  
  dataSource = new MatTableDataSource;
  displayedColumns = ['idAlbum','titleAlbum','userIdAlbum'];
  constructor(private serviceManager:ServiceManagerService) {

   }

  ngOnInit(): void {
    this.listarAlbums();
  }

  listarAlbums(){
    this.serviceManager.getAlbums().subscribe((data:Album[])=>this.dataSource.data=data);
  }

}
