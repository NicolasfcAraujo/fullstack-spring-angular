package com.example.fullstackproject.dtos.user;

import com.example.fullstackproject.domain.user.UserType;

public record UserDTO(String fullName, String email, String document, String password, String department, String role, UserType type) {
}
