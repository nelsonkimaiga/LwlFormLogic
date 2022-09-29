package com.lwala.formlogic.controller;

import com.lwala.formlogic.model.User;
import com.lwala.formlogic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.MediaType.ALL_VALUE;

@CrossOrigin(origins = "http://127.0.0.1:8000", maxAge = 3600)
@RestController
@RequestMapping(value = "lwala", produces = "application/json")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(path = "/add-cha", consumes = ALL_VALUE)
    public ResponseEntity<User> addCha(@Valid @RequestBody User user) {
        System.out.println("User" +user);
        return ResponseEntity.status(HttpStatus.OK).body(userService.addUser(user));
    }
}
