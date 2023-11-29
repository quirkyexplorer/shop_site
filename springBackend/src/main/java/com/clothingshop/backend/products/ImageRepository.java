package com.clothingshop.backend.products;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository  // this 
public class ImageRepository {
    private final List<Image> images = List.of(
        new Image(1, "conjunto rosa", "a81fd0b4-e843-4102-af35-dc6b10ecfb03", 101, true),
        new Image(2, "falda", "d88007cf-12bb-48ca-ae86-497de71ed564", 101, false),
        new Image(3, "top", "ecb90950-3b4d-455c-b1c9-a09e5dcac403", 101, false),
        new Image(4, "vestido", "600ad34e-7128-44d4-b4f7-058f01bad750", 100, true),
        new Image(5, "angulo2", "5e707408-ffb2-4284-a5f3-332bc55cda41", 100, false),
        new Image(6, "angulo3", "f6c2a716-a25e-421a-b35d-c32e3ad34c36", 100, false),
        new Image(7, "conjunto azul", "7e1a4c7a-5087-4045-a645-50d2d93a89f6", 102, true),
        new Image(8, "top azul", "f9c069e2-e9d5-4c09-8aae-5d921eda73ca", 102, false),
        new Image(9, "leggins", "0772dde3-260f-42e6-a7ac-26b57bcf72d3", 102, false)
    );

    //  here wer are returning a list of images that have the same productId, or belong 
    // to the same product
    public List<Image> findByProductId(int productId) {
        return images.stream().filter(image -> image.productId() == productId).toList();
    }

    public List<Image> findByTitle(String title) {
        return images.stream().filter(image -> image.title().equals(title) && image.isMain()).toList();
    }

}
