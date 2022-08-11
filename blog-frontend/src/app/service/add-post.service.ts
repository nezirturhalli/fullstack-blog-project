import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class AddPostService {
  private url = 'http://localhost:12120/api/post/';

  constructor(private httpClient: HttpClient) {}
  addPost(post: Post): Observable<Object> {
    return this.httpClient.post(this.url + 'add', post);
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Array<Post>>(this.url + 'all');
  }

  getPost(postId: number): Observable<Post> {
    return this.httpClient.get<Post>(this.url + 'get/' + postId);
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.url + 'update', post);
  }

  removePost(postId: number): Observable<Post> {
    return this.httpClient.delete<Post>(this.url + postId);
  }
}
