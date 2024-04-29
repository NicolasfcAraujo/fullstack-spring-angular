package com.example.fullstackproject.services;

import com.example.fullstackproject.domain.timeregister.TimeRegister;
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

    public void saveTimeRegister(TimeRegister timeRegister) {
        timeRegisterRepository.save(timeRegister);
    }

    public void updateTimeRegister(TimeRegisterDTO timeRegister, UUID id) throws Exception {
        try {
            TimeRegister updatedTimeRegister = findTimeRegisterById(id);

            updatedTimeRegister.setClockIn(timeRegister.clockIn());
            updatedTimeRegister.setClockOut(timeRegister.clockOut());

            timeRegisterRepository.save(updatedTimeRegister);
        } catch(Exception e) {
            throw new Exception(String.format("Time register with ID %s not found! Try to update again", id));
        }
    }

    public void deleteTimeRegister(UUID id) {
        timeRegisterRepository.deleteById(id);
    }
}
