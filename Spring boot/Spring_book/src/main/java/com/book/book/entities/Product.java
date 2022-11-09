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
@Table(name="products")
public class Product {
    @Id
	@GeneratedValue
	@Column(name="ProductId")
	private int productId;
	@Column(name="ProductName")
	private String productName;
	@Column(name="ProductCategory")
	private String productCategory;
	@Column(name="ProductDes")
	private String productDes;
	@Column(name="ProductImg")
	private String productImg;
    @Column(name="Price")
	private String price;
}
