package com.clothingshop.backend.products.service.implementation;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.clothingshop.backend.products.entity.ProductEntity;
import com.clothingshop.backend.products.repository.ProductRepository;
import com.clothingshop.backend.products.service.ProductServiceInterface;

@Service
public class ProductService implements ProductServiceInterface {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
    }

    @Override
    public List<ProductEntity> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Optional<ProductEntity> findById(Integer id) {
        return productRepository.findById(id);
    }

    @Override
    public ProductEntity saveProduct(ProductEntity productEntity) {
        if (productEntity.getimageUuid() == null) {
          productEntity.setimageUuid(new String[]{});
          }
        return productRepository.save(productEntity);
    }

     //FIX ME   will probaly have to change since updating should only require some data not all 
     // and id needs to be provided
    @Override  
    public ProductEntity updateProduct(Integer id, ProductEntity productEntity) {

        // Check if the product with the given id exists
        Optional<ProductEntity> existingProductOptional = productRepository.findById(id);
        if (existingProductOptional.isPresent()) {
            // The product exists, update its data
            ProductEntity existingProduct = existingProductOptional.get();
            existingProduct.setPrice(productEntity.getPrice());
            existingProduct.setTitle(productEntity.getTitle());
            existingProduct.setDescription(productEntity.getDescription());
            existingProduct.setimageUuid(productEntity.getimageUuid());

            // Save the updated product
            return productRepository.save(existingProduct);
        } else {
        // Product with the given id does not exist
        throw new NoSuchElementException("Product with ID " + id + " not found");
        }
    }

    @Override
    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
}
