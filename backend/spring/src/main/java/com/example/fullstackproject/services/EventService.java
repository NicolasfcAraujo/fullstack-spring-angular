package com.example.fullstackproject.services;

import com.example.fullstackproject.domain.event.Event;
import com.example.fullstackproject.dtos.event.EventDTO;
import com.example.fullstackproject.repositories.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    public Event findEventById(UUID id) throws Exception {
        Optional<Event> checkedEvent = eventRepository.findById(id);

        if (checkedEvent.isEmpty()) {
            throw new Exception(String.format("Event with ID %s not found", id));
        }

        return checkedEvent.get();
    }

    public void saveEvent(Event event) {
        eventRepository.save(event);
    }

    public void updateEvent(EventDTO event, UUID id) throws Exception {
        try {
            Event updatedEvent = findEventById(id);

            updatedEvent.setTitle(event.title());
            updatedEvent.setEventStart(event.eventStart());
            updatedEvent.setEventEnd(event.eventEnd());

            eventRepository.save(updatedEvent);
        } catch (Exception e) {
            throw new Exception(String.format("Event with ID %s not found", id));
        }
    }

    public void deleteEvent(UUID id) {
        eventRepository.deleteById(id);
    }
}
