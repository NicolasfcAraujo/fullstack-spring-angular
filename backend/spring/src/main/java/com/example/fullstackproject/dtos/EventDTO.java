package com.example.fullstackproject.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record EventDTO(String title, UUID hostId, LocalDateTime eventStart, LocalDateTime eventEnd) {
}
