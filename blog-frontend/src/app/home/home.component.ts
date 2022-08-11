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
  posts: Post[];
  constructor(private postService: AddPostService) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe((data) => (this.posts = data));
  }
}
