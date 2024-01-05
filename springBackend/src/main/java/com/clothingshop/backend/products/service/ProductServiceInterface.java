package com.clothingshop.backend.products.service;

import java.util.List;
import java.util.Optional;

import com.clothingshop.backend.products.entity.ProductEntity;

public interface ProductServiceInterface {

    List<ProductEntity> findAll();

    Optional<ProductEntity> findById(Integer id);

    ProductEntity saveProduct(ProductEntity productEntity);

    ProductEntity updateProduct(Integer id, ProductEntity productEntity);

    void deleteProduct(Integer id);
    
}   
