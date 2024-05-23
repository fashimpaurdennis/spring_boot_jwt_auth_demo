package com.fashimpaurforgeworks.galleryGavel.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fashimpaurforgeworks.galleryGavel.dtos.UserReqRes;
import com.fashimpaurforgeworks.galleryGavel.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/info")
    public ResponseEntity<UserReqRes> getUserInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String email = authentication.getName();
        UserReqRes res = userService.getUserRes(email);

        return ResponseEntity.status(res.getStatusCode()).body(res);
    }
}
