package com.example.codeclan.project3_server;

import com.example.codeclan.project3_server.Models.Customer;
import com.example.codeclan.project3_server.Models.Trainer;
import com.example.codeclan.project3_server.Repository.CustomerRepository;
import com.example.codeclan.project3_server.Repository.TrainerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class Project3ServerApplicationTests {

	@Autowired
	TrainerRepository trainerRepository;

	@Autowired
	CustomerRepository customerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveTrainers(){
		Trainer jordans = new Trainer("https://static.highsnobiety.com/thumbor/6vgipAH4vfoc0_avcLXtiwgFOTs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/03/03111612/nike-air-jordan-3-unc-release-date-price-02.jpg",
				"Jordan Mecurial", "Jordans", 4.1, 20, 40.67);

		jordans.getColours().add("red");
		jordans.getColours().add("green");

		trainerRepository.save(jordans);

		assertEquals(2, jordans.getColours().size());
	}

	@Test
	public void canSaveCustomer(){
		Trainer jordans = new Trainer("https://static.highsnobiety.com/thumbor/6vgipAH4vfoc0_avcLXtiwgFOTs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/03/03111612/nike-air-jordan-3-unc-release-date-price-02.jpg",
				"Jordan Mecurial", "Jordans", 4.1, 20, 40.67);

		trainerRepository.save(jordans);

		Customer cyril = new Customer("Cyril Ishabiyi", "cyril@outlook.com", "comeUp", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg");

		cyril.getCart().add(jordans);

		customerRepository.save(cyril);

	}

//	@Test
//	public void canCreateNewOrder(){
//
//		Trainer jordans = new Trainer("https://static.highsnobiety.com/thumbor/6vgipAH4vfoc0_avcLXtiwgFOTs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/03/03111612/nike-air-jordan-3-unc-release-date-price-02.jpg",
//				"Jordan Mecurial", "Jordans", 4.1, 20, 40.67);
//
//		trainerRepository.save(jordans);
//
//		Customer cyril = new Customer("Cyril Ishabiyi", "cyril@outlook.com", "comeUp", "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg");
//
//		customerRepository.save(cyril);
//
//		cyril.addToCart(jordans);
//		cyril.addToCart(jordans);
//		cyril.buy();
//
//		customerRepository.save(cyril);
//
//		assertEquals("Cyril Ishabiyi", cyril.getPreviousOrders().get(1).getCustomer().getName());
//		assertEquals(2, cyril.getPreviousOrders().size());
//
//
//
//	}

}
