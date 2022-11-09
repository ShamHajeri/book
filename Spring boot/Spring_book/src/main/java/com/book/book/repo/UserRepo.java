package com.book.book.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.book.entities.User;

public interface UserRepo extends JpaRepository<User,Integer>{
    
}
