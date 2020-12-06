package com.example.codeclan.project3_server.Models;

import com.example.codeclan.project3_server.Repository.OrderRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String passWord;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "loggedIn")
    private Boolean loggedIn;

    @JsonIgnoreProperties({"customer"})
    @OneToMany(mappedBy = "customer")
    private List<Card> cards;

    @ElementCollection
    @CollectionTable(name = "carts", joinColumns = @JoinColumn(name = "customer_id"))
    @JsonIgnoreProperties({"orders"})
    private List<Trainer> cart;

    @JsonIgnoreProperties({"customer"})
    @OneToMany(mappedBy = "customer")
    private List<Order> previousOrders;


    public Customer(String name, String email, String passWord, String avatar) {
        this.name = name;
        this.email = email;
        this.passWord = passWord;
        this.avatar = avatar;
        this.cards = new ArrayList<>();
        this.cart = new ArrayList<>();
        this.previousOrders = new ArrayList<>();
        this.loggedIn = false;
    }

    public Customer() {
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    public List<Trainer> getCart() {
        return cart;
    }

    public void setCart(List<Trainer> cart) {
        this.cart = cart;
    }

    public List<Order> getPreviousOrders() {
        return previousOrders;
    }

    public void setPreviousOrders(List<Order> previousOrders) {
        this.previousOrders = previousOrders;
    }

    public Boolean getLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(Boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public void addCard(Card card){
        this.getCards().add(card);
    }

    public void addToCart(Trainer trainer){
        this.getCart().add(trainer);
    }

    public void removeFromCart(Trainer trainer){
        this.getCart().remove(trainer);
    }

    public Order buy(){
        List<Trainer> trainersTobeBought = new ArrayList<>();
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime currentDate = LocalDateTime.now();
        Order currentOrder = new Order(String.valueOf(currentDate), this);
        currentOrder.setShoes(this.getCart());
        this.setCart(trainersTobeBought);
        return currentOrder;
    }

//    public void addOrder(Order order){
//        Order currentOrder = order;
//        this.getPreviousOrders().add(currentOrder);
//
//
////        order.getTrainers().clear();
//
//    }



}
