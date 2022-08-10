import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from './post';

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

  constructor() {}

  ngOnInit(): void {}
}
