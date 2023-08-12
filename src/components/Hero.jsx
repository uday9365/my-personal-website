import React from 'react'
import './Hero.css'
import hero1 from '../images/hero1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-content'>
        <div className='hero-content_info'>
          <h1>Buy and sell goods effortlessly with Shopify</h1>
          <p>Discover the convenience of using Shopify for all your buying and selling
            needs.With our user-friendly platform you can easily list your products, connect with potential buyers and complet transition securely.
          </p>
          <div className='hero-content_btn'>
            <button className='hero-content_signup'>Sign Up</button>
            <button className='hero-content_learn'>Learn More</button>
          </div>
        </div>
      </div>
      
      <div className='hero-content_img'>
        <img src={hero1} alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero