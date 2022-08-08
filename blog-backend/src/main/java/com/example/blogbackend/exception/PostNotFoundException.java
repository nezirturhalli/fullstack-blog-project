package com.example.blogbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PostNotFoundException extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;

    public PostNotFoundException(String message) {
        super(message);
    }
}