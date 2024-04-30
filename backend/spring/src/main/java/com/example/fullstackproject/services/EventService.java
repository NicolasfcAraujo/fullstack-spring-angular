package com.example.fullstackproject.services;

import com.example.fullstackproject.domain.event.Event;
import com.example.fullstackproject.domain.user.User;
import com.example.fullstackproject.dtos.event.EventDTO;
import com.example.fullstackproject.repositories.EventRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private UserService userService;

    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    public Event findEventById(UUID id) throws EntityNotFoundException {
        Optional<Event> checkedEvent = eventRepository.findById(id);

        if (checkedEvent.isEmpty()) {
            throw new EntityNotFoundException(String.format("Event with ID %s not found", id));
        }

        return checkedEvent.get();
    }

    public Event saveEvent(EventDTO event) {
        List<User> participants = userService.findUsersByIdList(event.participantsIds());
        User host = userService.findUserById(event.hostId());

        Event newEvent = new Event();
        newEvent.setHost(host);
        newEvent.setTitle(event.title());
        newEvent.setEventStart(event.eventStart());
        newEvent.setEventEnd(event.eventEnd());
        newEvent.setParticipants(participants);

        return eventRepository.save(newEvent);
    }

    public Event updateEvent(EventDTO event, UUID id) throws Exception {
        try {
            Event updatedEvent = findEventById(id);
            User host = userService.findUserById(event.hostId());
            List<User> participants = userService.findUsersByIdList(event.participantsIds());

            updatedEvent.setTitle(event.title());
            updatedEvent.setHost(host);
            updatedEvent.setEventStart(event.eventStart());
            updatedEvent.setEventEnd(event.eventEnd());
            updatedEvent.setParticipants(participants);

            return eventRepository.save(updatedEvent);
        } catch (Exception e) {
            throw new Exception(String.format("Event with ID %s not found! Try to update again", id));
        }
    }

    public void deleteEvent(UUID id) {
        eventRepository.deleteById(id);
    }
}
