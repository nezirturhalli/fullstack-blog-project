package com.example.blogbackend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdatePostResponse {
    private Long postId;
    private String username;
    private String title;
    private String content;
    private Instant updatedOn;

}
