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

    @Column(name = "imageUuid")
    private String[] imageUuid;

    public ProductEntity() {

    }
    
    public ProductEntity(Integer id, BigDecimal price, String title, String description, String[] imageUuid) {
        this.id = id;
        this.price = price;
        this.title = title;
        this.description = description;
        this.imageUuid = imageUuid;
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

    public String[] getimageUuid() {
        return this.imageUuid;
    }

    public void setimageUuid(String[] imageUuid) {
        this.imageUuid = imageUuid;
    }

}

    
