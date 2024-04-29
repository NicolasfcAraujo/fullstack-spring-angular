package com.example.fullstackproject.domain.event;

import com.example.fullstackproject.domain.user.User;
import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity(name = "events")
@Table(name = "events")
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    @Column(name = "event_start")
    private LocalDateTime eventStart;
    @Column(name = "event_end")
    private LocalDateTime eventEnd;
    @ManyToOne
    @JoinColumn(name = "host_id")
    private User host;

    @ManyToMany
    @JoinTable(
            name = "event_participants",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> participants;

}
