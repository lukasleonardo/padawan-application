import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { HeaderComponent } from './header/header.component'
import { TodoItemComponent } from './todo-item/todo-item.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AlbumItemComponent } from './album-item/album-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoItemComponent,
    PostItemComponent,
    AlbumItemComponent,
    
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule
    
  ],exports:[
    HeaderComponent,
    MatToolbarModule,
    MatTableModule,
    TodoItemComponent,
    PostItemComponent,
  ]
})
export class ComponentsModule { }
