package com.fashimpaurforgeworks.galleryGavel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fashimpaurforgeworks.galleryGavel.dtos.UserReqRes;
import com.fashimpaurforgeworks.galleryGavel.services.AuthService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<UserReqRes> register(@Valid @RequestBody UserReqRes registerReq, BindingResult result) {
        return ResponseEntity.ok(authService.register(registerReq, result));
    }

    @PostMapping("/login")
    public ResponseEntity<UserReqRes> login(@RequestBody UserReqRes loginReq) {
        return ResponseEntity.ok(authService.login(loginReq));
    }

    @PostMapping("/refresh")
    public ResponseEntity<UserReqRes> refreshToken(@RequestBody UserReqRes refreshReq) {
        return ResponseEntity.ok(authService.refreshToken(refreshReq));
    }

}
