package com.book.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.book.book.entities.User;
import com.book.book.service.UserService;
@CrossOrigin(origins = "http://localhost:3333")
@RestController
public class UserController {
    @Autowired
    private UserService service;

    @PostMapping(path = "/addUser")
    public User addUser(@RequestBody User User){
        return service.addUser(User);
    }

    
    @GetMapping(path="/allUsers")
    public List<User> showUsers(){
        return service.getAllUser();
    }

    @GetMapping(path="/User/{id}")
    public User showUser(@PathVariable int id){
        return service.getUser(id);
    }

    @GetMapping(path = "/deleteUser/{id}")
    public void deleteUser(@PathVariable int id){
        service.deleteUser(id);
    }
    @PutMapping(path = "/updateUser")
    public User updateUser(@RequestBody User User){
      return  service.addUser(User);
    }


}
