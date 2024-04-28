package com.example.fullstackproject.domain.timeregister;

import com.example.fullstackproject.domain.user.User;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity(name = "time_registers")
@Table(name = "time_registers")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class TimeRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    @Column(name = "clock_in")
    private LocalDateTime clockIn;
    @Column(name = "clock_out")
    private LocalDateTime clockOut;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
