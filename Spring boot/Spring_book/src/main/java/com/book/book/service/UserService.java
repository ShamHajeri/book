package com.book.book.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.book.entities.User;
import com.book.book.repo.UserRepo;
@Service
public class UserService {
    @Autowired
    private UserRepo repo;

    public User addUser(User user){
        return repo.save((user));
    }

    public List<User> getAllUser(){
        return repo.findAll();
    }
    public User getUser(int Id){
        return repo.findById(Id).orElse(null);
    }

    public void deleteUser(int id){
        repo.deleteById(id);
    }

   

}
