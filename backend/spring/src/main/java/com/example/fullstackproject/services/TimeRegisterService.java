package com.example.fullstackproject.services;

import com.example.fullstackproject.domain.timeregister.TimeRegister;
import com.example.fullstackproject.domain.user.User;
import com.example.fullstackproject.dtos.timeregister.TimeRegisterDTO;
import com.example.fullstackproject.repositories.TimeRegisterRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TimeRegisterService {
    @Autowired
    private TimeRegisterRepository timeRegisterRepository;

    @Autowired
    private UserService userService;

    public List<TimeRegister> findAll() {
        return timeRegisterRepository.findAll();
    }

    public TimeRegister findTimeRegisterById(UUID id) throws EntityNotFoundException {
        Optional<TimeRegister> checkedTimeRegister = timeRegisterRepository.findById(id);

        if (checkedTimeRegister.isEmpty()) {
            throw new EntityNotFoundException(String.format("Time register with ID %s not found", id));
        }

        return checkedTimeRegister.get();
    }

    public TimeRegister saveTimeRegister(TimeRegisterDTO timeRegisterDTO) {
        User user = userService.findUserById(timeRegisterDTO.userId());

        TimeRegister timeRegister = new TimeRegister();
        timeRegister.setUser(user);
        timeRegister.setClockIn(timeRegisterDTO.clockIn());
        timeRegister.setClockOut(timeRegisterDTO.clockOut());

        return timeRegisterRepository.save(timeRegister);
    }

    public TimeRegister updateTimeRegister(TimeRegisterDTO timeRegister, UUID id) throws Exception {
        try {
            TimeRegister updatedTimeRegister = findTimeRegisterById(id);

            updatedTimeRegister.setClockIn(timeRegister.clockIn());
            updatedTimeRegister.setClockOut(timeRegister.clockOut());

            return timeRegisterRepository.save(updatedTimeRegister);
        } catch(Exception e) {
            throw new Exception(String.format("Time register with ID %s not found! Try to update again", id));
        }
    }

    public void deleteTimeRegister(UUID id) {
        timeRegisterRepository.deleteById(id);
    }
}
