package com.example.fullstackproject.domain.user;

import com.example.fullstackproject.domain.timeregister.TimeRegister;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity(name = "users")
@Table(name = "users")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "full_name")
    private String fullName;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String document;
    private String password;
    private String role;
    private String department;
    @Enumerated(EnumType.STRING)
    private UserType type;

    @OneToMany(mappedBy = "user")
    @JoinColumn(name = "user_id")
    private List<TimeRegister> timeRegisters;
}
