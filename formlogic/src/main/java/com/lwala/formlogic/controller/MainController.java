package com.lwala.formlogic.controller;

import com.lwala.formlogic.model.Request;
import com.lwala.formlogic.model.User;
import com.lwala.formlogic.service.RequestService;
import com.lwala.formlogic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

import static org.springframework.http.MediaType.ALL_VALUE;

@CrossOrigin(origins = "http://127.0.0.1:8000", maxAge = 3600)
@RestController
@RequestMapping(value = "lwala", produces = "application/json")
public class MainController {

    @Autowired
    UserService userService;
    @Autowired
    RequestService requestService;

    @PostMapping(path = "/add-cha", consumes = ALL_VALUE)
    public ResponseEntity<User> addCha(@Valid @RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(user));
    }

    @PostMapping(path = "/login", consumes = ALL_VALUE)
    public ResponseEntity<User> loginUser(@Valid @RequestBody User user) throws Exception{
        return ResponseEntity.status(HttpStatus.OK).body(userService.authUser(user));
    }

    @PostMapping(path = "/fetchChaByFacility", consumes = ALL_VALUE)
    public ResponseEntity<User> fetchFacilities(@Valid @RequestBody User user){
        return ResponseEntity.status(HttpStatus.OK).body(userService.fetchFacilities(user));
    }

    @PostMapping(path = "/make-request", consumes = ALL_VALUE)
    public ResponseEntity<Request> makeRequest(@Valid @RequestBody Request request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(requestService.addRequest(request));
    }

    @GetMapping(path = "/fetch-requests", consumes = ALL_VALUE)
    public ResponseEntity<List<Request>> fetchRequest() {
        return ResponseEntity.status(HttpStatus.CREATED).body(requestService.fetchRequest());
    }




}
