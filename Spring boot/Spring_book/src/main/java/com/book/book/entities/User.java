package com.book.book.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue
    @Column(name="Id")
    private int id;
    @Column(name="Name")
    private String userName;
    @Column(name="Email")
    private String userEmail;
    @Column(name="Password")
    private String userPassword;
    @Column(name="Address")
    private String userAddress;
    @Column(name="Mobile_Number")
    private String userMobile_No;
    @Column(name = "Cart")
    private String cart;
    
}
