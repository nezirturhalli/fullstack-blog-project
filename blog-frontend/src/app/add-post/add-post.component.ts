import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostService } from '../service/add-post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  post: Post;
  title = new FormControl('');
  body = new FormControl('');

  constructor(private addpostService: AddPostService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body,
    });
    this.post = {
      postId: 0,
      content: '',
      title: '',
      username: '',
    };
  }

  ngOnInit(): void {}
  addPost() {
    this.post.content = this.addPostForm.get('body')!.value;
    this.post.title = this.addPostForm.get('title')!.value;
    this.addpostService.addPost(this.post).subscribe(
      (data) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log('Failure Response');
      }
    );
  }
}
