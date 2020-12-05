package com.example.codeclan.project3_server.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CollectionId;
import org.hibernate.annotations.CollectionType;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @ManyToOne
    @JsonIgnoreProperties({"previousOrders"})
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToMany
    @JsonIgnoreProperties({"orders"})
    @JoinTable(
            name = "trainers_orders",
            joinColumns = {
                    @JoinColumn(
                            name = "order_id",
                            updatable = false
                    )

            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "trainer_id",
                            updatable = false
                    )
            }
    )
    List<Trainer> shoes;




    public Order(String date, Customer customer) {
        this.date = date;
        this.customer = customer;
        this.shoes = new ArrayList<>();
    }



    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Trainer> getShoes() {
        return shoes;
    }

    public void setShoes(List<Trainer> shoes) {
        this.shoes = shoes;
    }

    public void setShoesForOrder(List<Trainer> shoes){
        List<Trainer> temShoes = new ArrayList<>();
        for(Trainer trainer : shoes){
            if(!this.getShoes().contains(trainer)){
                temShoes.add(trainer);
            }
        }
        this.setShoes(temShoes);

    }
}
