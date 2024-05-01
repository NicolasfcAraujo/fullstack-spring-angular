package com.example.fullstackproject.repositories;

import com.example.fullstackproject.domain.timeregister.TimeRegister;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TimeRegisterRepository extends JpaRepository<TimeRegister, UUID> {
}
