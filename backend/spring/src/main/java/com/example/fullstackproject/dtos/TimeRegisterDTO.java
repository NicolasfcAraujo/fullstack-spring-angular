package com.example.fullstackproject.dtos;

import java.time.LocalDateTime;
import java.util.UUID;

public record TimeRegisterDTO(UUID userId, LocalDateTime clockIn, LocalDateTime clockOut) {
}
