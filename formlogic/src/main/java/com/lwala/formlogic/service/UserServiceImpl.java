package com.lwala.formlogic.service;

import com.lwala.formlogic.model.User;
import com.lwala.formlogic.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;



    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User authUser(User user) throws Exception {
        return userRepository.findByUsernameAndPasswordAndUserType(user.getEmail(), user.getPassword(), user.getUserType());
    }

    @Override
    public User fetchFacilities(User user) {
        return userRepository.findAllFacilities(user.getFacility());
    }


}
