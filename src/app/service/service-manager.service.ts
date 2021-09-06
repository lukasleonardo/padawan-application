import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { Post } from '../models/Post';
import { Album } from '../models/Album';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagerService {

  private apiUrl='https://jsonplaceholder.typicode.com/'
  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}todos`)
   }

   getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}posts`)
   }


   getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}albums`)
   }
}
