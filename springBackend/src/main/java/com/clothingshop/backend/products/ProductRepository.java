package com.clothingshop.backend.products;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {
    private final List<Product> products = List.of(
            new Product(100, new BigDecimal("200.00"), "vestido peach", "vestido de una pieza" , new int[] {4, 5, 6}),
            new Product(101, new BigDecimal("75.00"), "conjunto rosa", "falda con top para ejercicio", new int[] {1, 2, 3}),
            new Product(102, new BigDecimal("150.00"), "conjunto azul", "conjunto de leggins y top azul para el frio", new int[] {7, 8, 9}));

    public List<Product> findAll() {
        return products;
    }

    public List<Product> findById(int id) {
        return products.stream().filter(product -> product.id() == id).toList();
    }

}
