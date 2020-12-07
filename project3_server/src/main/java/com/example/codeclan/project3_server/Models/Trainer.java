package com.example.codeclan.project3_server.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trainers")
public class Trainer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "image")
    private String image;

    @Column(name = "name")
    private String name;

    @Column(name="brand")
    private String brand;

    @Column(name="rating")
    private double rating;

    @Column(name="quantity_available")
    private int quantityAvailable;

    @Column(name="price")
    private double price;

    @ElementCollection
    @CollectionTable(name = "colours", joinColumns = @JoinColumn(name = "trainer_id"))
    @JsonIgnoreProperties({"colours", "shoes"})
    private List<String> colours;

    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "customers_trainers",
            joinColumns = {
                    @JoinColumn(
                            name = "trainer_id",
                            updatable = false
                    )

            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "customer_id",
                            updatable = false
                    )
            }
    )
    private List<Customer> customers;


    @ManyToMany
    @JsonIgnore
    @JsonIgnoreProperties({"orders", "shoes"})
    @JoinTable(
            name = "trainers_orders",
            joinColumns = {
                    @JoinColumn(
                            name = "trainer_id",
                            updatable = false
                    )

            },
            inverseJoinColumns = {
                    @JoinColumn(
                            name = "order_id",
                            updatable = false
                    )
            }
    )
    private List<Order> orders;

    public Trainer(String image, String name, String brand, double rating, int quantityAvailable, double price) {
        this.image = image;
        this.name = name;
        this.brand = brand;
        this.rating = rating;
        this.quantityAvailable = quantityAvailable;
        this.price = price;
        this.colours = new ArrayList<>();
        this.orders = new ArrayList<>();

    }

    public Trainer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getQuantityAvailable() {
        return quantityAvailable;
    }

    public void setQuantityAvailable(int quantityAvailable) {
        this.quantityAvailable = quantityAvailable;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<String> getColours() {
        return colours;
    }

    public void setColours(List<String> colours) {
        this.colours = colours;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public void addColours(String colour){
        this.getColours().add(colour);
    }
}
