package com.example.fullstackproject.services;

import com.example.fullstackproject.domain.user.User;
import com.example.fullstackproject.dtos.user.UserDTO;
import com.example.fullstackproject.dtos.user.UserSummaryDTO;
import com.example.fullstackproject.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findUsers(){
        return userRepository.findAll();
    }

    public List<UserSummaryDTO> findUserSummaries() {
        List<UserSummaryDTO> summaries = userRepository.getAllUsersSummaries();
        System.out.println(summaries);
        return summaries;
    }

    public List<User> findUsersByIdList(List<UUID> participants) {
        return userRepository.findByIdIn(participants);
    }

    public User findUserById(UUID id) throws EntityNotFoundException {
        Optional<User> checkedUser = userRepository.findById(id);

        if (checkedUser.isEmpty()) {
            throw new EntityNotFoundException(String.format("User with ID %s not found", id));
        }

        return checkedUser.get();
    }

    public void saveUser(User user) {
        this.userRepository.save(user);
    }

    public User createUser(UserDTO data) {
        User newUser = new User(data);
        this.saveUser(newUser);
        return newUser;
    }

    public User updateUser(UserDTO user, UUID id) throws Exception {
        try {
            User updatedUser = findUserById(id);

            updatedUser.setFullName(user.fullName());
            updatedUser.setEmail(user.email());
            updatedUser.setDocument(user.document());
            updatedUser.setPassword(user.password());
            updatedUser.setDepartment(user.department());
            updatedUser.setRole(user.role());
            updatedUser.setType(user.type());

            this.saveUser(updatedUser);

            return updatedUser;
        } catch (Exception e) {
            throw new Exception(String.format("User with ID %s not found! Try to update again", id));
        }
    }

    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}
