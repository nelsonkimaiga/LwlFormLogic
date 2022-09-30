package com.lwala.formlogic.service;

import com.lwala.formlogic.model.User;

import java.util.ArrayList;
import java.util.List;

public interface UserService {

    User addUser(User user);

    User authUser(User user) throws Exception;

    User fetchFacilities(User user);
}
