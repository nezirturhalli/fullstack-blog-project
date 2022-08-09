package com.example.blogbackend.service;

import com.example.blogbackend.dto.request.AddPostRequest;
import com.example.blogbackend.dto.request.UpdatePostRequest;
import com.example.blogbackend.dto.response.AddPostResponse;
import com.example.blogbackend.dto.response.UpdatePostResponse;
import com.example.blogbackend.exception.PostNotFoundException;
import com.example.blogbackend.exception.UserNotFoundException;
import com.example.blogbackend.model.Post;
import com.example.blogbackend.repository.PostRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final AuthService authService;
    private final ModelMapper modelMapper;

    public PostService(PostRepository postRepository, AuthService authService, ModelMapper modelMapper) {
        this.postRepository = postRepository;
        this.authService = authService;
        this.modelMapper = modelMapper;
    }

    public void createPost(AddPostRequest postRequest) {
        var loggedInUser = authService.getCurrentUser().orElseThrow(() -> new UserNotFoundException("User not found!"));
        var post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setContent(postRequest.getContent());
        post.setCreatedOn(Instant.now());
        post.setUsername(loggedInUser.getUsername());
        postRepository.save(post);
    }

    public List<AddPostResponse> showAllPosts() {
        return postRepository.findAll().stream()
                .map(post -> modelMapper.map(post, AddPostResponse.class))
                .toList();
    }

    public AddPostResponse getSinglePost(Long postId) {
        var post = postRepository.findById(postId).orElseThrow(() -> new PostNotFoundException("Post not found!" + postId));
        return modelMapper.map(post, AddPostResponse.class);
    }

    public UpdatePostResponse updatePost(UpdatePostRequest updatePostRequest) {
        var loggedInUser = authService.getCurrentUser().orElseThrow(() -> new UserNotFoundException("User not found!"));
        var post = new Post();
        post.setPostId(updatePostRequest.getPostId());
        post.setTitle(updatePostRequest.getTitle());
        post.setContent(updatePostRequest.getContent());
        post.setUsername(loggedInUser.getUsername());
        post.setUpdatedOn(Instant.now());
        var updatedPost = postRepository.saveAndFlush(post);
        return modelMapper.map(updatedPost, UpdatePostResponse.class);

    }
}
