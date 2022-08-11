import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddPostService } from '../service/add-post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: Observable<Array<Post>>;
  constructor(private postService: AddPostService) {}

  ngOnInit() {
    this.posts = this.postService.getAllPosts();
  }
}
