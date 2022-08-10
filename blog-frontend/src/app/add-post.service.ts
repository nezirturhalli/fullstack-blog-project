import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './add-post/post';

@Injectable({
  providedIn: 'root',
})
export class AddPostService {
  private url = 'http://localhost:12120/api/post/';

  constructor(private httpClient: HttpClient) {}
  addPost(post: Post): Observable<Object> {
    return this.httpClient.post(this.url + 'add', post);
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(this.url + 'all');
  }

  getPost(postId: Number): Observable<Post> {
    return this.httpClient.get<Post>(this.url +'get/'+ postId);
  }

  updatePost(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.url + 'update', post);
  }

  removePost(postId: Number): Observable<Post> {
    return this.httpClient.delete<Post>(this.url + postId);
  }
}
