package com.clothingshop.backend.products;

// so these images might belong to only one product
// therefore each image stores the id of the product 
// they belong to 

public record Image(
    int id,
    String title,
    String uuid,
    int productId,
    boolean isMain
) {
    
}
