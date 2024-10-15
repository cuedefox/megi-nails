import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Carousel = () => {
    return <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3600">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/X2YPEFWMAREMBF5W72PPIHFU54.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3600">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJN-vU3YCrG0yubfohitCanF8MsQ4R3Ly-nQ&s" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3600">
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/X2YPEFWMAREMBF5W72PPIHFU54.jpg" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
}