package com.cdweb.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdweb.springboot.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findByEmail(String email);
	public User findById(long id);
	public User findByEmailAndPassword(String email, String password);
}
