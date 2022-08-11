import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { AddPostService } from '../service/add-post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post: Post;
  posts: Observable<Post[]>;
  postId: number;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private postService: AddPostService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.postId = params['postId'];
    });
    this.postService.getPost(this.postId).subscribe(
      (data) => {
        this.post = data;
      },
      (err: any) => {
        console.log('Failure Response');
      }
    );
   
  }

  deletePost(postId: number) {
    this.postService.removePost(postId).subscribe(
      (data) => {
        console.log(data);
        this.goHomePage();
      },
      (error) => console.log(error)
    );
  }

  goHomePage() {
    this.route.navigate(['home']);
  }

  updatePost(postId: number) {
    this.route.navigate(['update', postId]);
  }
}
