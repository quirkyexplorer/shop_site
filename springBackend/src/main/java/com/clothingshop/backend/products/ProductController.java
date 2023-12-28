package com.clothingshop.backend.products;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    private final ImageRepository imageRepository;
    private final ProductRepository productRepository;

    public ProductController(ImageRepository imageRepository,
            ProductRepository productRepository) {
        this.imageRepository = imageRepository;
        this.productRepository = productRepository;
    }

    @GetMapping(path = "/images/productImages/{productId}")
    public List<Image> getImagesByProduct(@PathVariable("productId") int productId) {
        return imageRepository.findAllImagesOfProduct(productId);
    }

    // @GetMapping(path = "/images/image/{productId}")
    // public List<Image> getMainImage(@PathVariable("productId") int productId) {
    // return imageRepository.findMainImageOfProduct(productId);
    // }

    // @GetMapping(path = "/images/{title}")
    // public List<Image> getImagesByTitle(@PathVariable("title") String title) {
    // return imageRepository.findByTitle(title);
    // }

    @GetMapping(path = "/products")
    public List<Product> getAllProuducts() {
        return productRepository.findAll();
    }

    @GetMapping(path = "/products/product/{id}")
    public List<Product> getProduct(@PathVariable("id") int id) {
        return productRepository.findById(id);
    }
}
