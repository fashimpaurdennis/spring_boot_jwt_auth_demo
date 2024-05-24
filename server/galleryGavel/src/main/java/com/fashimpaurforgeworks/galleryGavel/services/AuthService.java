package com.fashimpaurforgeworks.galleryGavel.services;

import java.util.HashMap;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.fashimpaurforgeworks.galleryGavel.dtos.UserReqRes;
import com.fashimpaurforgeworks.galleryGavel.entities.User;
import com.fashimpaurforgeworks.galleryGavel.mappers.UserMapper;
import com.fashimpaurforgeworks.galleryGavel.repositories.UserRepo;

@Service
public class AuthService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    public UserReqRes register(UserReqRes registerReq, BindingResult result) {
        UserReqRes res = new UserReqRes();

        Optional<User> optionalUser = userRepo.findByEmail(registerReq.getEmail());
        if (optionalUser.isPresent()) {
            result.rejectValue("email", "Unique", "Email is already in use.");
        }

        if (!registerReq.getPassword().equals(registerReq.getConfirm())) {
            result.rejectValue("confirm", "Matches", "Password and Confirm Password must match.");
        }

        if (result.hasErrors()) {
            res.setStatusCode(500);
            res.setError(result.getAllErrors().toString());
            return res;
        }

        try {
            User newUser = userMapper.convertToEntity(registerReq);
            User registeredUser = userRepo.save(newUser);

            if (registeredUser.getId() > 0) {
                res.setUser(registeredUser);
                res.setMessage("Successfully saved new user.");
                res.setStatusCode(200);
            } 
        } catch (Exception e) {
                res.setStatusCode(500);
                res.setError(e.getMessage());
        }
        return res;
    }

    public UserReqRes login(UserReqRes loginReq) {
        UserReqRes res = new UserReqRes();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginReq.getEmail(), loginReq.getPassword()));

            User user = userRepo.findByEmail(loginReq.getEmail()).orElseThrow();
            String jwt = jwtUtils.generateToken(user);
            String refreshJwt = jwtUtils.generateRefreshToken(new HashMap<>(), user);

            res.setStatusCode(200);
            res.setToken(jwt);
            res.setRole(user.getRole());
            res.setRefreshToken(refreshJwt);
            res.setExpirationTime("24 hours");
            res.setMessage("Successfully Logged In User.");
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setMessage(e.getMessage());
        }
        return res;
    }

    public UserReqRes refreshToken(UserReqRes refreshReq) {
        UserReqRes res = new UserReqRes();

        try {
            String email = jwtUtils.getUsername(refreshReq.getToken());
            User user = userRepo.findByEmail(email).orElseThrow();

            if (jwtUtils.isTokenValid(refreshReq.getToken(), user)) {
                String jwt = jwtUtils.generateToken(user);
                res.setStatusCode(200);
                res.setToken(jwt);
                res.setRole(user.getRole());
                res.setRefreshToken(refreshReq.getToken());
                res.setExpirationTime("24 hours");
                res.setMessage("Successfully Logged In User.");
            }
            res.setStatusCode(200);
            return res;
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setMessage(e.getMessage());
            return res;
        }
    }

}
