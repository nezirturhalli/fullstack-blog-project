import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { AddPostService } from '../service/add-post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  updatePostForm: FormGroup;
  post: Post;

  constructor(
    private router: Router,
    private postService: AddPostService
  ) {
    
  }

  ngOnInit(): void {}
  updatePost() {
    this.postService.updatePost(this.post).subscribe(
      (data) => {
        console.log(data);
        this.post = new Post();
        this.goHomePage();
      },
      (error) => console.log(error)
    );
    
  }
  onSubmit() {
    this.updatePost();
  }
  goHomePage() {
    this.router.navigate(['home']);
  }
}
