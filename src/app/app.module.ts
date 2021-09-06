import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';


const appRoutes:Routes=[
  {
    path:'',
    redirectTo:'todos',
    pathMatch:'full',
  },
  {
      path:'posts',
      component:PostItemComponent
  },
  {
    path:'albums',
    component:AlbumItemComponent
},{
  path:'**',
  component:TodoItemComponent
}
]



@NgModule({
  declarations: [
    AppComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing: true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
