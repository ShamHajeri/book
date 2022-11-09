package com.book.book.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.book.book.entities.Product;
import com.book.book.repo.ProductRepo;

@Service
public class ProductService {
    @Autowired
    private ProductRepo repo;
  //save product
    public Product saveProduct(Product product){
        return repo.save((product));
    }

  // show All product 
    public Product showProduct(int productId){
        return repo.findById(productId).orElse(null);
    }

    // get individual product
    public List<Product> allProduct(){
        return repo.findAll();
    }

    // delete the product
    public void deleteProduct(int productId){
         repo.deleteById(productId);
    }

    
}
