package com.example.fullstackproject.dtos.event;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public record EventDTO(String title, UUID hostId, LocalDateTime eventStart, LocalDateTime eventEnd, List<UUID> participantsIds) {
}
