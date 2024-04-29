package com.example.fullstackproject.dtos.event;

import java.time.LocalDateTime;
import java.util.UUID;

public record EventDTO(String title, LocalDateTime eventStart, LocalDateTime eventEnd) {
}
