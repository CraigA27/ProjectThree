package com.example.codeclan.project3_server.Controller;


import com.example.codeclan.project3_server.Models.Administrator;
import com.example.codeclan.project3_server.Models.Customer;
import com.example.codeclan.project3_server.Repository.AdministratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class AdministratorController  {

    @Autowired
    AdministratorRepository administratorRepository;

    @GetMapping(value = "/administrators")
    public ResponseEntity<List<Administrator>> getAlladministrators(){
        return new ResponseEntity<>(administratorRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/administrators/{id}")
    public ResponseEntity<Optional<Administrator>> getAdministrator(@PathVariable Long id){
        return new ResponseEntity<>(administratorRepository.findById(id), HttpStatus.OK);
    }

    @PatchMapping(value = "/administrators/{id}")
    public ResponseEntity<Administrator> updateAdministrator(@RequestBody Administrator administrator){
        administratorRepository.save(administrator);
        return new ResponseEntity<>(administrator, HttpStatus.OK);
    }


}
