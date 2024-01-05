package com.clothingshop.backend.products.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

import com.clothingshop.backend.products.service.implementation.ProductService;
import com.clothingshop.backend.products.entity.ProductEntity;

@RestController
@RequestMapping("/api/products")
public class ProductController {
   // private final ImageRepository imageRepository;
    private final ProductService productService;

    public ProductController(ProductService productService) {
       // this.imageRepository = imageRepository;
        this.productService = productService;
    }

    @GetMapping
    public List<ProductEntity> findAllProducts() {
        return productService.findAll();
    }

    @GetMapping(path = "/{id}")
    public Optional<ProductEntity> findProduct(@PathVariable("id") int id) {
        return productService.findById(id);
    }

    @PostMapping
    public ProductEntity saveProduct(@RequestBody ProductEntity productEntity) {
        
        return productService.saveProduct(productEntity);
    }

    @PutMapping(path = "/{id}") // FIX ME   needs id to be passed inside to match the service
    public ProductEntity updateProduct(@PathVariable("id") int id, @RequestBody ProductEntity productEntity) {
        return productService.updateProduct( id, productEntity);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") int id) {
        productService.deleteProduct(id);
    }
}    

