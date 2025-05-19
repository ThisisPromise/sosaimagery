
import ScatteredGallery from '../components/GalleryPreview'
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import BookingPage from './BookingPage';
import Footer from './Footer';


const HomePage: React.FC = () => {

  const heroImages = [
    'src/assets/sosa1.jpg',  
    'src/assets/sosa5.jpg',  
    'src/assets/sosa11.jpg', 
  ];

 
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home-page">
      <section className="hero" id='home'>
        <div className="hero-carousel">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-content">
          <h1>Strike A Pose And We Would Take A Picture</h1>
          <p>Exploring the beauty of simplicity</p>
          <a href="#gallery" className="cta-button">View Gallery</a>
        </div>
      </section>

      <section className="about-brief" id='about'>
        <h2 className='her'>About Sosa Imagery</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              At Sosa Imagery, we're dedicated to exceeding your photography needs. 
              With meticulous attention to detail, we help bring your vision to life through stunning images.
              Inspired by our faith, we strive to deliver exceptional results that surpass your expectations.
            </p>
            <a href="#gallery" className="text-link">Explore our work</a>
          </div>
          <div className="about-image">
            <img src="src/assets/sosa2.jpg" alt="Photographer at work" />
          </div>
        </div>
      </section>



      <section id='gallery'>
        {<ScatteredGallery /> }
      </section>

      <section id='booking'>
        {<BookingPage /> }
      </section>

      <section id='footer'>
        {<Footer /> }
      </section>
    </div>
  );
};

export default HomePage;

