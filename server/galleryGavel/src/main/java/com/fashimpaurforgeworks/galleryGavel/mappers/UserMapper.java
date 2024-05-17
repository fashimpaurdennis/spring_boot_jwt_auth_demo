package com.fashimpaurforgeworks.galleryGavel.mappers;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.fashimpaurforgeworks.galleryGavel.dtos.ReqRes;
import com.fashimpaurforgeworks.galleryGavel.entities.User;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserMapper {

    private final PasswordEncoder passwordEncoder;

    public User convertToEntity(ReqRes userInfo) {
        User newUser = new User();

        newUser.setName(userInfo.getName());
        newUser.setEmail(userInfo.getEmail());
        newUser.setStreetAddress(userInfo.getStreetAddress());
        newUser.setCity(userInfo.getCity());
        newUser.setState(userInfo.getState());
        newUser.setZipCode(userInfo.getZipCode());
        newUser.setPassword(passwordEncoder.encode(userInfo.getPassword()));
        newUser.setConfirm(userInfo.getConfirm());
        newUser.setRole(userInfo.getRole());

        return newUser;
    }

}