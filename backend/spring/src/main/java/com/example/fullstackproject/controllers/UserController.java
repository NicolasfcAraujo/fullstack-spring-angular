package com.example.fullstackproject.controllers;

import com.example.fullstackproject.domain.user.User;
import com.example.fullstackproject.dtos.user.UserDTO;
import com.example.fullstackproject.dtos.user.UserLoginDTO;
import com.example.fullstackproject.dtos.user.UserSummaryDTO;
import com.example.fullstackproject.services.UserService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.findUsers(), HttpStatus.OK);
    }

    @GetMapping("/summaries")
    public ResponseEntity<List<UserSummaryDTO>> getAllUsersSummaries() {
        return new ResponseEntity<>(userService.findUserSummaries(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        return new ResponseEntity<>(userService.findUserById(UUID.fromString(id)), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserLoginDTO user) throws Exception {
        return new ResponseEntity<>(userService.login(user), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<User> createUser(@RequestBody UserDTO user) {
        User newUser = userService.createUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody UserDTO user) throws Exception {
       return new ResponseEntity<>(userService.updateUser(user, UUID.fromString(id)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable String id) {
        try {
            userService.deleteUser(UUID.fromString(id));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
