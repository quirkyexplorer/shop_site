package com.clothingshop.backend.products;

import java.math.BigDecimal;

// record in java makes an immutable class
public record Product(
    int id,
    BigDecimal price,
    String title,
    String description,
    int[] imageId
) {
  
}
