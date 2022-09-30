package com.lwala.formlogic.service;

import com.lwala.formlogic.model.User;

public interface UserService {

    User addUser(User user);

    User authUser(User user) throws Exception;
}
