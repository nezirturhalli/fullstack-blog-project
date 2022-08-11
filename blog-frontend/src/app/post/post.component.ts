import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../service/add-post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;
  postId:number;


  constructor(private router: ActivatedRoute, private postService: AddPostService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.postId = params['postId'];
    });

    this.postService.getPost(this.postId).subscribe((data:Post) => {
      this.post = data;
    },(err: any) => {
      console.log('Failure Response');
    })
  }

}
