package com.cdweb.springboot.service.Impl;//package com.cdweb.springboot.service.Impl;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import com.cdweb.springboot.entities.User;
//import com.cdweb.springboot.repository.UserRepository;
//import com.cdweb.springboot.service.UserService;
//
//public class UserServiceImpl implements UserService{
//
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Override
//	public User getUserById(Long userld) {
//		// TODO Auto-generated method stub
//		
//		return null;
//	}
//
//	@Override
//	public User getUserProfileByJwt(String jwt) {
//		// TODO Auto-generated method stub
//		
//		return null;
//	}
//
//	@Override
//	public User getUserByEmailAndPassword(String email, String password) {
//		// TODO Auto-generated method stub
//		return userRepository.f;
//	}
//}
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserById(Long userld) {
        return null;
    }

    @Override
    public User getUserProfileByJwt(String jwt) {
        return null;
    }

    @Override
    public User getUserByEmailAndPassword(String email, String password) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}