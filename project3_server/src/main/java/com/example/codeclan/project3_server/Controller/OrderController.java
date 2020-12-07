package com.example.codeclan.project3_server.Controller;

import com.example.codeclan.project3_server.Models.Customer;
import com.example.codeclan.project3_server.Models.Order;
import com.example.codeclan.project3_server.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @GetMapping(value = "/orders")
    public ResponseEntity<List<Order>> getGetAllOrders(){
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/orders")
    public ResponseEntity<Order> postOrder(@RequestBody Order order){
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
}
