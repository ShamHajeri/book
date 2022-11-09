package com.book.book.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.book.entities.Product;

public interface ProductRepo extends JpaRepository<Product,Integer> {
    
}
