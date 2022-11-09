package com.book.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookApplication {
	public static void main(String[] args) {
		System.out.println("hi");
		Thread.dumpStack();
		SpringApplication.run(BookApplication.class, args);
	}

}
