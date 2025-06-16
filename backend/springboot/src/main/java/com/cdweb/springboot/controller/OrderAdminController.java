package com.cdweb.springboot.controller;


import com.cdweb.springboot.entities.Order;
import com.cdweb.springboot.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*") // Cho phép gọi từ frontend
public class OrderAdminController {

    @Autowired
    private OrderRepository orderRepository;

    // GET tất cả đơn hàng
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return ResponseEntity.ok(orders);
    }

    // GET đơn hàng theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        return ResponseEntity.ok(order);
    }

    // PUT xác nhận đơn hàng (ví dụ)
    @PutMapping("/{id}/confirm")
    public ResponseEntity<?> confirmOrder(@PathVariable Long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        order.setOrderStatus(1); // 1 = confirmed
        orderRepository.save(order);
        return ResponseEntity.ok().build();
    }
}

