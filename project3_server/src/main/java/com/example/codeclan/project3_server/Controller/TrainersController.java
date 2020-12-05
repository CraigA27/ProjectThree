package com.example.codeclan.project3_server.Controller;

import com.example.codeclan.project3_server.Models.Order;
import com.example.codeclan.project3_server.Models.Trainer;
import com.example.codeclan.project3_server.Repository.OrderRepository;
import com.example.codeclan.project3_server.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class TrainersController {

    @Autowired
    TrainerRepository trainerRepository;

    @Autowired
    OrderRepository orderRepository;


    @GetMapping(value = "/orders")
    public ResponseEntity<List<Order>> getAllTrainers(){
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }
}
