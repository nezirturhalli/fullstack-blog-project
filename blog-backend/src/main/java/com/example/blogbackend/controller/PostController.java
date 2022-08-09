package com.example.blogbackend.controller;

import com.example.blogbackend.dto.request.AddPostRequest;
import com.example.blogbackend.dto.request.UpdatePostRequest;
import com.example.blogbackend.dto.response.AddPostResponse;
import com.example.blogbackend.dto.response.UpdatePostResponse;
import com.example.blogbackend.service.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.List;

@RestController
@RequestMapping("/api/post")
@RequestScope
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> createPost(@RequestBody AddPostRequest postRequest) {
        postService.createPost(postRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<AddPostResponse>> showAllPosts() {
        return new ResponseEntity<>(postService.showAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/get/{postId}")
    public ResponseEntity<AddPostResponse> getSinglePost(@PathVariable Long postId) {
        return new ResponseEntity<>(postService.getSinglePost(postId), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<UpdatePostResponse> updatePost(@RequestBody UpdatePostRequest updatePostRequest) {
        return new ResponseEntity<>(postService.updatePost(updatePostRequest), HttpStatus.OK);
    }
}
