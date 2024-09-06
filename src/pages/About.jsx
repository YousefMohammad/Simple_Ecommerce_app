import React from "react";

import e_store_logo from '../assests/images/e-store-logo.png';

import '../assests/css/About.css'

function About() {

    return (
        <>
            <h1 className="text-center about-title"> About Us </h1>
            
            <div className="about me-5 mb-5  container d-flex">
                <div className="content col-6">E-store is your go-to online shopping destination, offering a wide range of products at your fingertips. From electronics to fashion, home goods, and more, we have everything you need in one convenient place. With easy browsing and secure checkout, shopping with E-store is quick and hassle-free. Explore our collection today and experience the joy of online shopping with E-store!</div>
                <img className="col-6" src={e_store_logo} alt="e-store-logo" />
            </div>
        </>
    )

}

export default About;