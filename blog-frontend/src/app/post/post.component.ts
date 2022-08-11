import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { AddPostService } from '../service/add-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;
  postId: Number;

  constructor(
    private router: ActivatedRoute,
    private postService: AddPostService
  ) {}

  ngOnInit() {
    // this.postId = this.router.snapshot.params['id'];
    this.router.params.subscribe((params) => {
      this.postId = params['id'];
    });
    this.postService.getPost(this.postId).subscribe(
      (data: Post) => {
        this.post = data;
      },
      (err: any) => {
        console.log('Failure Response');
      }
    );
  }
}
