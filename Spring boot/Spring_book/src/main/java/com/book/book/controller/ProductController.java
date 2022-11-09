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

import com.book.book.entities.Product;
import com.book.book.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:3333")

public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping(path = "/addProduct")
    public Product addProduct(@RequestBody Product product){
        return service.saveProduct(product);
    }
    @GetMapping(path="/allproducts")
    public List<Product> showProducts(){
        Thread.dumpStack();
        return service.allProduct();
    }
    @GetMapping(path="/product/{id}")
    public Product showProduct(@PathVariable int id){
        System.out.println(id);
        return service.showProduct(id);
    }
    @GetMapping(path = "/deleteProduct/{id}")
    public void deleteProduct(@PathVariable int id){
        service.deleteProduct(id);
    }
    @PutMapping(path = "/updateProduct")
    public Product updateProduct(@RequestBody Product product){
        return service.saveProduct(product);
    }
    
}
