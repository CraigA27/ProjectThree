package com.example.codeclan.project3_server.Repository;

import com.example.codeclan.project3_server.Models.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long> {
}
