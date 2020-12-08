package com.example.codeclan.project3_server.Controller;

import com.example.codeclan.project3_server.Models.Customer;
import com.example.codeclan.project3_server.Models.Order;
import com.example.codeclan.project3_server.Models.Trainer;
import com.example.codeclan.project3_server.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @GetMapping(value = "/orders")
    public ResponseEntity<List<Order>> getGetAllOrders(){
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/orders/{id}")
    public ResponseEntity<Optional<Order>> getSpecificTrainer(@PathVariable Long id){
        return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/orders")
    public ResponseEntity<Order> postOrder(@RequestBody Order order){
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/orders/{id}")
    public ResponseEntity<Order> deleteOrder(@PathVariable Long id){
        Order found = orderRepository.getOne(id);
        orderRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
