package com.example.codeclan.project3_server.Controller;

import com.example.codeclan.project3_server.Models.Order;
import com.example.codeclan.project3_server.Models.Trainer;
import com.example.codeclan.project3_server.Repository.OrderRepository;
import com.example.codeclan.project3_server.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class TrainersController {

    @Autowired
    TrainerRepository trainerRepository;


    @GetMapping(value = "/trainers")
    public ResponseEntity<List<Trainer>> getAllTrainers(){
        return new ResponseEntity<>(trainerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/trainers/{id}")
    public ResponseEntity<Optional<Trainer>> getSpecificTrainer(@PathVariable Long id){
        return new ResponseEntity<>(trainerRepository.findById(id), HttpStatus.OK);
    }

    @PatchMapping(value = "/trainers/{id}")
    public ResponseEntity<Trainer> editSpecificTrainer(@RequestBody Trainer trainer){
        trainerRepository.save(trainer);
        return new ResponseEntity<>(trainer, HttpStatus.OK);
    }
}
