package com.clothingshop.backend.products.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;


@Entity
@Table(name = "product")
public class ProductEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productId")
    private Integer id;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "imageId")
    private int[] imageId;

    public ProductEntity() {

    }
    
    public ProductEntity(Integer id, BigDecimal price, String title, String description, int[] imageId) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.description = description;
        this.imageId = imageId;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public BigDecimal getPrice() {
        return this.price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int[] getImageId() {
        return this.imageId;
    }

    public void setImageId(int[] imageId) {
        this.imageId = imageId;
    }

}

    
