package com.fashimpaurforgeworks.galleryGavel.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fashimpaurforgeworks.galleryGavel.dtos.ReqRes;
import com.fashimpaurforgeworks.galleryGavel.entities.User;
import com.fashimpaurforgeworks.galleryGavel.repositories.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public ReqRes getUser(String email) {
        ReqRes res = new ReqRes();

        try {
            Optional<User> optionalUser = userRepo.findByEmail(email);

            if (optionalUser.isPresent()) {
                User foundUser = optionalUser.get();
                res.setUser(foundUser);
                res.setStatusCode(200);
                res.setMessage("User successfully found.");
            } else {
                res.setStatusCode(404);
                res.setMessage("User not found.");
            }
        } catch (Exception e) {
            res.setStatusCode(500);
            res.setMessage("Error occured while retrieving User info: " + e.getMessage());
        }
        return res;
    }
}
