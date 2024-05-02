package com.example.fullstackproject.repositories;

import com.example.fullstackproject.domain.user.User;
import com.example.fullstackproject.dtos.user.UserSummaryDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    @Query("SELECT new com.example.fullstackproject.dtos.user.UserSummaryDTO(u.fullName, u.department, u.role) FROM users u")
    List<UserSummaryDTO> getAllUsersSummaries();

    List<User> findByIdIn(List<UUID> participantsIds);

    User findByEmail(String email);
}
