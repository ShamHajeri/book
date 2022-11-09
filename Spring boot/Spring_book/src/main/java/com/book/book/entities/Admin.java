package com.book.book.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="adminUser")
public class Admin {
    @Id
    @GeneratedValue
    @Column(name="Id")
    private int id;
    @Column(name="Email")
    private String adminEmail;
    @Column(name="Password")
    private String adminPassword;

}
