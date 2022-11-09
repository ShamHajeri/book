package com.book.book.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.book.entities.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
    
}
