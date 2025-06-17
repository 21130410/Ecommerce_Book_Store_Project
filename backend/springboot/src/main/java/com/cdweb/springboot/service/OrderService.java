package com.cdweb.springboot.service;

import java.util.List;

import com.cdweb.springboot.dto.OrderDTO;
import com.cdweb.springboot.entities.Order;

public interface OrderService {
    public Order saveOrder(OrderDTO order);
    public List<Order> getOrderByUser(Long userId);
}
