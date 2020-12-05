package com.example.codeclan.project3_server.Models;


import javax.persistence.*;

@Entity
@Table(name = "cards")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column (name="card_number")
    private String cardNumber;

    @Column (name = "expiryDate" )
    private String expiryDate;

    @Column(name = "security_code")
    private int securityCode;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = true)
    private Customer customer;


    public Card(String name, String cardNumber, String expiryDate, int securityCode, Customer customer) {
        this.name = name;
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.securityCode = securityCode;
        this.customer = customer;
    }

    public Card() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public int getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(int securityCode) {
        this.securityCode = securityCode;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
