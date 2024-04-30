package com.example.fullstackproject.controllers;

import com.example.fullstackproject.domain.event.Event;
import com.example.fullstackproject.dtos.event.EventDTO;
import com.example.fullstackproject.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("")
    public ResponseEntity<List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable String id) {
        return new ResponseEntity<>(eventService.findEventById(UUID.fromString(id)), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Event> createEvent(@RequestBody EventDTO event) {
        return new ResponseEntity<>(eventService.saveEvent(event), HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable String id, @RequestBody EventDTO event) throws Exception{
        return new ResponseEntity<>(eventService.updateEvent(event, UUID.fromString(id)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEvent(@PathVariable String id) {
        try {
            eventService.deleteEvent(UUID.fromString(id));
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
