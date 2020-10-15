import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          id={2379834}
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={2379356}
            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life By Mark Mansion"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id={23797564}
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={2099.00}
            image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id={2379834534}
            title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
            price={64.98}
            image="https://m.media-amazon.com/images/I/41kaOFDXzSL._AC_SL260_.jpg"
            rating={4}
          />
          <Product
            id={234379834}
            title="Instant Pot Duo Crisp Pressure Cooker 11 in 1 with Air Fryer, 8 Qt"
            price="119.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61D3yOllH2L._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            image="https://m.media-amazon.com/images/I/618rOktgpLL._AC_UL480_FMwebp_QL65_.jpg"
            title='Tattoo Transfer Paper,New Star Tattoo Thermal Stencil Paper Tattoo Stencil Paper 100 Count Sheet 8 1/2" x 11" Transfer Paper for Tattoos'
            price={23.89}
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id={2345379834}
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
            price={517.65}
            image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
