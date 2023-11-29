package com.clothingshop.backend.user;

public record Admin(
  int id,
  String userName,
  String name,
  String lastName,
  String password,
  boolean isAdmin
) {
} 
