package com.example.blogbackend.service;

import com.example.blogbackend.dto.request.CreatePostRequest;
import com.example.blogbackend.dto.response.GenericPostResponse;
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

    public void createPost(CreatePostRequest postRequest) {
        var loggedInUser = authService.getCurrentUser().orElseThrow(() -> new UserNotFoundException("User not found!"));
        var post = new Post();
        post.setTitle(postRequest.getTitle());
        post.setContent(postRequest.getContent());
        post.setCreatedOn(Instant.now());
        post.setUpdatedOn(Instant.now());
        post.setUsername(loggedInUser.getUsername());
        postRepository.save(post);
    }

    public List<GenericPostResponse> showAllPosts() {
        return postRepository.findAll().stream()
                .map(post -> modelMapper.map(post, GenericPostResponse.class))
                .toList();
    }

    public GenericPostResponse getSinglePost(Long postId) {
        var post = postRepository.findById(postId).orElseThrow(() -> new PostNotFoundException("Post not found!" + postId));
        return modelMapper.map(post, GenericPostResponse.class);
    }
}
