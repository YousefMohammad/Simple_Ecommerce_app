import React from "react";

import '../assests/css/header.css'


function Slider(params){
    return (
        <>
<div id="carouselExampleDark" className="carousel carousel-light-subtle slide" data-bs-ride="carousel"   >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src={params.img.slide_1} className=" w-100" alt="side-1"/>
      <div className="carousel-caption d-sm-block slide-1-content">
        <h2>All you need in one place</h2>
        <p class="d-none d-md-block">Skip the shopping spree! Find everything you need right here. From browsing to buying, we've got you covered.</p>
        <p class="d-md-none">Skip the shopping spree! Find everything you need right here.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={params.img.slide_2} className="d-block w-100" alt="slide-2"/>
      <div className="carousel-caption d-sm-block slide-2-content">
        <h2>Accessories and more</h2> 
        <p class="d-none d-md-block">Level up your style, ditch the store crawl! Our curated selection of accessories and more lets you find everything you need, from statement pieces to hidden gems. Shop smarter, accessorize effortlessly.</p>
        <p class="d-md-none">Our curated selection of accessories and more lets you find everything you need.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={params.img.slide_3} className="d-block w-100" alt="slide-3"/>
      <div className="carousel-caption d-sm-block slide-3-content">
        <h2>Week's Vibe</h2>
        <p className="d-none d-md-block">Skip the shopping spree! This week, find everything to complete your look with our amazing deals on accessories and more.
        From statement jewelry to tech must-haves, explore, compare, and shop smarter all in one place. Accessorize like a pro, effortlessly.</p>
        <p className="d-md-none">Our curated selection of accessories and more lets you find everything you need.</p>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Slider;