import React from "react";
import "../components/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="banner__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_3000x1200_CV59._CB403490035_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="12321342"
            title="PlayStation 4 Slim 1TB Console "
            price={314.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71PGvPXpk5L._AC_SL1500_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
           id="12321343"
           title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
           price={47.60}
           image="https://images-na.ssl-images-amazon.com/images/I/81lsA5v8EIL._AC_SL1500_.jpg"
           rating={4} 
           />
          <Product 
            id="12321344"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, 
                  & Xbox - 1-year Rescue Service (STGX2000400)"
            price={62.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SX679_.jpg"
            rating={3} 
          />
          <Product 
            id="12321345"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, 
                  Windows 10 in S Mode, A515-43-R19L, Silver"
            price={364.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
            rating={5} 
          />
        </div>

        <div className="home__row">
          <Product 
            id="12321346"
            title="HP OfficeJet Pro 6978 All-in-One Wireless Printer, HP Instant Ink, Works with Alexa (T0F29A)"
            price={139.99}
            image="https://images-na.ssl-images-amazon.com/images/I/711wDPzdjvL._AC_SL1500_.jpg"
            rating={1} 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
