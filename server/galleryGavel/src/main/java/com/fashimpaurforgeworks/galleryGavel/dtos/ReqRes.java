package com.fashimpaurforgeworks.galleryGavel.dtos;

import java.util.List;

import com.fashimpaurforgeworks.galleryGavel.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReqRes {

    private int statusCode;
    private String error;
    private String message;
    private String token;
    private String refreshToken;
    private String expirationTime;
    private String name;
    private String email;
    private String streetAddress;
    private String city;
    private String state;
    private String zipCode;
    private String role;
    private String password;
    private String confirm;
    private User user;
    private List<User> userList;

}
