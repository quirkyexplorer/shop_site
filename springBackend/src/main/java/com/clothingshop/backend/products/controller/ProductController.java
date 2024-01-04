package com.clothingshop.backend.products.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;
//import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;

// import com.clothingshop.backend.products.Image;
// import com.clothingshop.backend.products.ImageRepository;
// import com.clothingshop.backend.products.Product;

// import com.clothingshop.backend.products.repository.ProductRepository;

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
    // @GetMapping(path = "/images/productImages/{productId}")
    // public List<Image> getImagesByProduct(@PathVariable("productId") int productId) {
    //     return imageRepository.findAllImagesOfProduct(productId); // here we would call postgresql instead 
    // }

    // @GetMapping(path = "/images/image/{productId}")
    // public List<Image> getMainImage(@PathVariable("productId") int productId) {
    // return imageRepository.findMainImageOfProduct(productId);
    // }

    // @GetMapping(path = "/images/{title}")
    // public List<Image> getImagesByTitle(@PathVariable("title") String title) {
    // return imageRepository.findByTitle(title);
    // }

   

    


    // @PostMapping("path")
    // public SomeEnityData postProduct(@RequestBody SomeEnityData entity) {
    //     //TODO: process POST request
        
    //     return entity;
    // }
    

