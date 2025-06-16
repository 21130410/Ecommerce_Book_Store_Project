package com.cdweb.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cdweb.springboot.entities.Category;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.repository.CategoryRespository;
import com.cdweb.springboot.repository.ProductRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/productss")
public class ProductAdminController {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRespository categoryRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // ✅ Thêm sản phẩm mới
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        if (product.getCategory() != null && product.getCategory().getId() != null) {
            Category category = categoryRepository.findById(product.getCategory().getId())
                    .orElseThrow(() -> new RuntimeException("Không tìm thấy danh mục!"));
            product.setCategory(category);
        } else {
            throw new RuntimeException("Thiếu category ID");
        }
        return productRepository.save(product);
    }

    // ✅ Sửa sản phẩm
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        Product existing = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sản phẩm"));

        existing.setProductName(updatedProduct.getProductName());
        existing.setImageUrl(updatedProduct.getImageUrl());
        existing.setDescription(updatedProduct.getDescription());
        existing.setPrice(updatedProduct.getPrice());
        existing.setDiscountedPrice(updatedProduct.getDiscountedPrice());
        existing.setQuantity(updatedProduct.getQuantity());
        existing.setBrand(updatedProduct.getBrand());

        if (updatedProduct.getCategory() != null && updatedProduct.getCategory().getId() != null) {
            Category category = categoryRepository.findById(updatedProduct.getCategory().getId())
                    .orElseThrow(() -> new RuntimeException("Không tìm thấy danh mục!"));
            existing.setCategory(category);
        }

        return productRepository.save(existing);
    }
    // ✅ Xoá sản phẩm
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Không tìm thấy sản phẩm để xoá");
        }
        productRepository.deleteById(id);
    }
}
