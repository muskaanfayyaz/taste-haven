"use client";

import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="homepage">
       {/* Hero Section */}
       <section className="hero">
        <div className="heroText">
          <h1 className="heroTitle">Taste Heaven</h1>
          <p className="heroSubtitle">Delicious Food, Unmatched Ambiance</p>
        </div>
        <Image 
          src="/hero1.jpg" 
          alt="Taste Heaven Ambiance" 
          layout="fill" 
          objectFit="cover" 
          className="heroImage"
        />
      </section>

      {/* Featured Dishes Section */}
      <section className="featured">
        <h2 className="sectionTitle">Our Signature Dishes</h2>
        <div className="dishes">
          <div className="dish">
            <Image src="/dish1.jpeg" alt="Dish 1" width={300} height={200} />
            <h3>Grilled Chicken</h3>
            <p>Succulent grilled chicken served with a side of fresh vegetables.</p>
          </div>
          <div className="dish">
            <Image src="/dish2.jpg" alt="Dish 2" width={300} height={200} />
            <h3>Spicy Biryani</h3>
            <p>Flavored rice mixed with aromatic spices and tender meat.</p>
          </div>
          <div className="dish">
            <Image src="/dish3.jpeg" alt="Dish 3" width={300} height={200} />
            <h3>Pasta Alfredo</h3>
            <p>Rich and creamy pasta served with fresh herbs and garlic bread.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2 className="sectionTitle">About Us</h2>
        <p className="aboutText">
          Welcome to Taste Heaven, where we combine passion, quality, and innovation. We are a family-owned restaurant
          dedicated to bringing you unforgettable flavors and a cozy ambiance. From traditional recipes to new culinary
          trends, we have something for every palate. Join us for a meal and become part of our story.
        </p>
      </section>

      {/* Chef's Special Section */}
      <section className="specials">
        <h2 className="sectionTitle">Chef&apos;s Specials</h2>
        <div className="specialDishes">
          <div className="dish">
            <Image src="/special1.avif" alt="Special 1" width={300} height={200} />
            <h3>Lamb Chops with Mint Sauce</h3>
            <p>Tender lamb chops grilled to perfection, served with a refreshing mint sauce.</p>
          </div>
          <div className="dish">
            <Image src="/special2.jpeg" alt="Special 2" width={300} height={200} />
            <h3>Salmon with Citrus Glaze</h3>
            <p>Fresh salmon fillet glazed with zesty citrus flavors and herbs.</p>
          </div>
        </div>
      </section>

      {/* New Customer Reviews Section */}
<section className="reviews">
  <h2 className="sectionTitle">Customer Reviews</h2>
  <div className="reviewCards">
    <div className="reviewCard">
      <p className='reviewText'>The best dining experience I&apos;ve ever had. The food was beyond delicious!</p>
      <span className='reviewerName'>- John Doe</span>
    </div>
    <div className="reviewCard">
      <p className='reviewText'>Absolutely amazing ambiance and the service was top-notch.</p>
      <span className='reviewerName'>- Jane Smith</span>
    </div>
    <div className="reviewCard">
      <p className='reviewText'>The atmosphere is cozy, and the food is just perfection.</p>
      <span className='reviewerName'>- Michael Lee</span>
    </div>
    {/* New Customer Reviews */}
    <div className="reviewCard">
      <p className='reviewText'>A must-visit restaurant! The variety of dishes is incredible.</p>
      <span className='reviewerName'>- Sarah Johnson</span>
    </div>
    <div className="reviewCard">
      <p className='reviewText'>Delightful flavors and friendly staff. I can&apos;t wait to come back!</p>
      <span className='reviewerName'>- Chris Evans</span>
    </div>
    <div className="reviewCard">
      <p className='reviewText'>Excellent food and warm hospitality. Highly recommend this place.</p>
      <span className='reviewerName'>- Emily Watson</span>
    </div>
  </div>
</section>

<section className="gallery">
      <h2 className="sectionTitle">Our Gallery</h2>
      <div className="galleryImages">
        <div>
          <Image 
            src="/gallery2.avif" 
            alt="Gallery 1" 
            layout="responsive" 
            width={300} 
            height={200} 
          />
        </div>
        <div>
          <Image 
            src="/gallery1.avif" 
            alt="Gallery 2" 
            layout="responsive" 
            width={300} 
            height={200} 
          />
        </div>
        <div>
          <Image 
            src="/gallery3.jpg" 
            alt="Gallery 3" 
            layout="responsive" 
            width={300} 
            height={200} 
          />
        </div>
        <div>
          <Image 
            src="/gallery4.png" 
            alt="Gallery 4" 
            layout="responsive" 
            width={300} 
            height={200} 
          />
        </div>
      </div>
    </section>

    </div>
  );
}
