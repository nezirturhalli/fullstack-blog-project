package com.example.blogbackend.controller;

import com.example.blogbackend.dto.request.CreatePostRequest;
import com.example.blogbackend.dto.response.GenericPostResponse;
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
    public ResponseEntity<?> createPost(@RequestBody CreatePostRequest postRequest) {
        postService.createPost(postRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<GenericPostResponse>> showAllPosts() {
        return new ResponseEntity<>(postService.showAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/get/{postId}")
    public ResponseEntity<GenericPostResponse> getSinglePost(@PathVariable Long postId) {
        return new ResponseEntity<>(postService.getSinglePost(postId), HttpStatus.OK);
    }
}
