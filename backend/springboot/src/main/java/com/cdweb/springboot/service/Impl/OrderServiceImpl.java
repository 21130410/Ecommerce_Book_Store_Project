package com.cdweb.springboot.service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdweb.springboot.dto.OrderDTO;
import com.cdweb.springboot.entities.Order;
import com.cdweb.springboot.entities.OrderItem;
import com.cdweb.springboot.entities.Product;
import com.cdweb.springboot.entities.User;
import com.cdweb.springboot.repository.OrderItemRepository;
import com.cdweb.springboot.repository.OrderRepository;
import com.cdweb.springboot.repository.ProductRepository;
import com.cdweb.springboot.repository.UserRepository;
import com.cdweb.springboot.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public Order saveOrder(Order order) {
    // for (OrderItem item : order.getOrderItems()) {
    // item.setOrder(order);
    // }
    return orderRepository.save(order);
    }

    @Override
    public List<Order> getOrderByUser(Long userId) {
        // TODO Auto-generated method stub
        User u = new User();
        u.setId(userId);
        return orderRepository.findByUser(u);
    }

    @Transactional
    @Override
    public Order saveOrder(OrderDTO orderDTO) {
        Order order = new Order();
        order.setCustomerName(orderDTO.getCustomerName());
        order.setCustomerEmail(orderDTO.getCustomerEmail());
        order.setCustomerMobile(orderDTO.getCustomerMobile());
        order.setShippingAddress(orderDTO.getShippingAddress());
        order.setTotalPrice(orderDTO.getTotalPrice());
        order.setPaymentTime(orderDTO.getPaymentTime());
        order.setTransactionId(orderDTO.getTransactionId());
        order.setPaymentStatus(orderDTO.getPaymentStatus());
        order.setOrderStatus(orderDTO.getOrderStatus());

        // Lấy user từ userId
        User user = userRepository.findById(orderDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("Không tìm thấy người dùng với ID: " + orderDTO.getUserId()));
        order.setUser(user);

        // Mapping OrderItemDTO -> OrderItem
        List<OrderItem> items = orderDTO.getOrderItems().stream().map(itemDTO -> {
            OrderItem item = new OrderItem();
            item.setOrder(order);

            Product product = productRepository.findById(itemDTO.getProductId())
                    .orElseThrow(
                            () -> new RuntimeException("Không tìm thấy sản phẩm với ID: " + itemDTO.getProductId()));
            item.setProduct(product);

            item.setQuantity(itemDTO.getQuantity());
            return item;
        }).collect(Collectors.toList());

        order.setOrderItems(items);

        return orderRepository.save(order);
    }
}
