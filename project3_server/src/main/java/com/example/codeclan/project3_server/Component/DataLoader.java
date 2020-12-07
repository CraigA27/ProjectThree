package com.example.codeclan.project3_server.Component;

import com.example.codeclan.project3_server.Models.Card;
import com.example.codeclan.project3_server.Models.Customer;
import com.example.codeclan.project3_server.Models.Order;
import com.example.codeclan.project3_server.Models.Trainer;
import com.example.codeclan.project3_server.Repository.CardRepository;
import com.example.codeclan.project3_server.Repository.CustomerRepository;
import com.example.codeclan.project3_server.Repository.OrderRepository;
import com.example.codeclan.project3_server.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TrainerRepository trainerRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CardRepository cardRepository;

    @Autowired
    OrderRepository orderRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args){

        Trainer jordans = new Trainer("https://static.highsnobiety.com/thumbor/6vgipAH4vfoc0_avcLXtiwgFOTs=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/03/03111612/nike-air-jordan-3-unc-release-date-price-02.jpg",
                "Jordan Mecurial", "Jordans", 4.1, 20, 40.67);

        jordans.addColours("red");
        jordans.addColours("green");


        Trainer nike = new Trainer("https://image.shutterstock.com/image-photo/chisinau-moldova-february-7-2017-260nw-622954634.jpg",
                "Nike ShutterShock", "Nike", 3.9, 10, 32);

        nike.addColours("blue");
        nike.addColours("white");

        Trainer adidas = new Trainer("https://footwearnews.com/wp-content/uploads/2018/03/yeezy-wave-runner-feature.jpg", "Adidas Yeezy Boost 700", "Adidas",
                3.5, 5, 26);

        adidas.addColours("green");
        adidas.addColours("blue");
        trainerRepository.save(adidas);

       trainerRepository.save(nike);
       trainerRepository.save(jordans);


       Trainer puma = new Trainer("https://i8.amplience.net/i/office/3513014312_ld1.jpg?$newhighres$", "Rs-98", "Puma"
       ,4.2, 21, 28.99);
       puma.addColours("white");
       puma.addColours("black");
       trainerRepository.save(puma);


       Trainer reebok = new Trainer("https://assets.reebok.com/images/w_600,f_auto,q_auto/199e0823259d4f518204ab9e0014fe2a_9366/Club_C_85_Pride_Shoes_Multicolour_FX4772.jpg",
               "Reebok Club C 85", "Reebok", 4.1, 50, 17.99);

       puma.addColours("red");
       puma.addColours("purple");
       puma.addColours("green");
       trainerRepository.save(reebok);

       Trainer nikeConverse = new Trainer("https://s3.amazonaws.com/nikeinc/assets/94445/All_Star_Disrupt_CX_Elevated_Black_square_1600.jpg?1583820644",
               "Nike Converse", "Nike", 4.9, 26, 32.99);

       nikeConverse.addColours("black");
       nikeConverse.addColours("grey");
       nikeConverse.addColours("brown");
       trainerRepository.save(nikeConverse);

       Trainer adidasGazelle = new Trainer("https://www.80scasualclassics.co.uk/blog/wp-content/uploads/2019/01/adidas-Gazelle-Main.jpg",
               "Gazelle", "Adidas", 3.8, 35, 27.89);

       adidasGazelle.addColours("Navy blue");
       adidasGazelle.addColours("black");
       trainerRepository.save(adidasGazelle);

       Trainer airJordan = new Trainer("https://cdn.runrepeat.com/i/jordan/26046/nike-men-s-air-jordan-trainer-1-low-black-infrared-23-white-845403-006-shoe-mens-black-infrared-23-white-3dcc-600.jpg",
               "Air Jordan 1", "Jordans", 4.6, 26, 26.77);

       airJordan.addColours("red");
       airJordan.addColours("red");
       trainerRepository.save(airJordan);


       Trainer balenciaga = new Trainer("https://images.flannels.com/images/imgzoom/11/11402780_xxl.jpg",
               "Triple S trainers", "Balenciaga", 4.2, 55, 640);

       balenciaga.addColours("brown");
       balenciaga.addColours("grey");
       trainerRepository.save(balenciaga);

       Trainer gucci = new Trainer("https://www.designerchildrenswear.com/images/gucci-trainers-white-p97668-174525_image.jpg",
               "Gucci Trainers White", "Gucci", 3.8, 20, 209.92);

       gucci.addColours("white");
       gucci.addColours("blue");
       trainerRepository.save(gucci);

       Trainer balenciagaSpeeders = new Trainer("https://www.balenciaga.com/66/11/11153244ma_12_a_f.jpg",
               "Speed Trainers", "Balenciaga", 4.0, 22, 350);

       balenciagaSpeeders.addColours("black");
       balenciagaSpeeders.addColours("white");
       trainerRepository.save(balenciagaSpeeders);

       Trainer umbro = new Trainer("https://www.umbro.co.uk/uploads/images/products/large/umbro_djogger_1556638238UMFL0064Z1D_1.jpg",
               "Umbro D Jogger", "Umbro", 3.9, 56, 59.90);

       umbro.addColours("yellow");
       umbro.addColours("light blue");
       trainerRepository.save(umbro);


        Customer cyril = new Customer("Cyril Ishabiyi", "cyril@outlook.com", "comeUp", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwiNUolGE_ybMJdnOfdtkwG0knyyporBK6A&usqp=CAU");
        customerRepository.save(cyril);


        cyril.addToCart(jordans);
        Order newOrder = cyril.buy();
        orderRepository.save(newOrder);

        cyril.addToCart(adidas);
        cyril.addToCart(nike);
        Order thirdOrder = cyril.buy();
        orderRepository.save(thirdOrder);



        Card hsbcCard = new Card("Visa", "4678845", "07/22", 129, cyril);
        cardRepository.save(hsbcCard);
        cyril.getCards().add(hsbcCard);

        cyril.addToCart(gucci);
        cyril.addToCart(balenciaga);
        cyril.removeFromCart(balenciaga);
        Order gucciOrder = cyril.buy();
        orderRepository.save(gucciOrder);
        customerRepository.save(cyril);


        Customer craig = new Customer("Craig Alexander", "craig@outlook.com", "come",
                "https://fiverr-res.cloudinary.com/images/ct_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg");

        customerRepository.save(craig);

        Card metroCard = new Card("Metro", "475634767", "09/22", 129, craig);
        cardRepository.save(metroCard);
        craig.addCard(metroCard);


        craig.addToCart(adidas);
        Order craigOrder = craig.buy();
        orderRepository.save(craigOrder);
        customerRepository.save(craig);





        Customer cam = new Customer("Campbell Murray", "campbell@outlook.com", "Up",
                "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg");
        customerRepository.save(cam);

        Card payPal = new Card("PayPal", "45876567", "09/26", 567, cam);
        cardRepository.save(payPal);
        cam.addCard(payPal);

        cam.addToCart(jordans);
        Order camOrder = cam.buy();
        orderRepository.save(camOrder);
        cam.addToCart(nike);
        Order camNikeOrder = cam.buy();
        orderRepository.save(camNikeOrder);
        customerRepository.save(cam);













    }
}
