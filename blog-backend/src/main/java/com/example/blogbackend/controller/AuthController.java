package com.example.blogbackend.controller;

import com.example.blogbackend.dto.request.LoginRequest;
import com.example.blogbackend.dto.request.RegisterRequest;
import com.example.blogbackend.dto.response.AuthenticationResponse;
import com.example.blogbackend.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

@RestController
@RequestMapping("/api/auth")
@RequestScope
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/sign-up")
    public ResponseEntity<?> signUp(@RequestBody RegisterRequest registerRequest) {
        authService.signUp(registerRequest);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/sign-in")
    public AuthenticationResponse singIn(@RequestBody LoginRequest loginRequest) {
        return authService.singIn(loginRequest);
    }
}
