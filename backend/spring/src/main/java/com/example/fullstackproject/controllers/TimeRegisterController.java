package com.example.fullstackproject.controllers;

import com.example.fullstackproject.domain.timeregister.TimeRegister;
import com.example.fullstackproject.dtos.timeregister.TimeRegisterDTO;
import com.example.fullstackproject.services.TimeRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/time-registers")
public class TimeRegisterController {

    @Autowired
    private TimeRegisterService timeRegisterService;

    @GetMapping("")
    public ResponseEntity<List<TimeRegister>> getAllTimeRegister() {
        return new ResponseEntity<>(timeRegisterService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TimeRegister> getTimeRegisterById(@PathVariable String id) {
        return new ResponseEntity<>(timeRegisterService.findTimeRegisterById(UUID.fromString(id)), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<TimeRegister> createTimeRegister(@RequestBody TimeRegisterDTO timeRegister) {
        return new ResponseEntity<>(timeRegisterService.saveTimeRegister(timeRegister), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<TimeRegister> updateTimeRegister(@PathVariable String id, @RequestBody TimeRegisterDTO timeRegister) throws Exception {
        return new ResponseEntity<>(timeRegisterService.updateTimeRegister(timeRegister, UUID.fromString(id)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTimeRegister(@PathVariable String id) {
        try {
            timeRegisterService.deleteTimeRegister(UUID.fromString(id));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
