package com.lwala.formlogic.repository;


import com.lwala.formlogic.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("select u from User u where u.email=?1 and u.password=?2 and u.userType=?3")
    User findByUsernameAndPasswordAndUserType(String email, String password, String userType);


    @Query("select u from User u where u.userType='CHA' and u.facility=?1")
    User findAllFacilities(String facility);
}
