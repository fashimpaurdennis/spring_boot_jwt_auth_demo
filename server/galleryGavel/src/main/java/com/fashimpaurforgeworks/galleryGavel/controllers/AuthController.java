package com.fashimpaurforgeworks.galleryGavel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fashimpaurforgeworks.galleryGavel.dtos.ReqRes;
import com.fashimpaurforgeworks.galleryGavel.services.AuthService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<ReqRes> register(@Valid @RequestBody ReqRes registerReq, BindingResult result) {
        return ResponseEntity.ok(authService.register(registerReq, result));
    }

    @PostMapping("/login")
    public ResponseEntity<ReqRes> login(@RequestBody ReqRes loginReq) {
        return ResponseEntity.ok(authService.login(loginReq));
    }

    @PostMapping("/refresh")
    public ResponseEntity<ReqRes> refreshToken(@RequestBody ReqRes refreshReq) {
        return ResponseEntity.ok(authService.refreshToken(refreshReq));
    }

}
