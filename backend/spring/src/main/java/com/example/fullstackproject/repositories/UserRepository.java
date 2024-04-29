package com.example.fullstackproject.repositories;

import com.example.fullstackproject.domain.user.User;
import com.example.fullstackproject.dtos.user.UserSummaryDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    @Query("SELECT u.fullName, u.department, u.role FROM users")
    List<UserSummaryDTO> getAllUsersSummaries();
}
