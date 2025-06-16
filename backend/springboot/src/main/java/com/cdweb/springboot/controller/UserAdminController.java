package com.cdweb.springboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.service.UserService;
import com.cdweb.springboot.repository.UserRepository;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*") // cho phép gọi từ frontend React
public class UserAdminController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User userRequest) {
        UserRepository userRepository = null;
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User user = optionalUser.get();
        user.setEmail(userRequest.getEmail());
        user.setUserName(userRequest.getUserName());
        user.setFullName(userRequest.getFullName());
        user.setMobile(userRequest.getMobile());
        user.setRole(userRequest.getRole()); // ✅ cập nhật role

        userRepository.save(user);
        return ResponseEntity.ok(user);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        UserRepository userRepository = null;
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Người dùng không tồn tại");
        }

        userRepository.deleteById(id);
        return ResponseEntity.ok("Xóa người dùng thành công");
    }

}