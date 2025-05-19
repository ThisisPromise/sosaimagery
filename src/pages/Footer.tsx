
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/sosa.imagery_?igsh=MTFuc29jeTYweTMxeA==', icon: 'instagram' },
    { name: 'Whatsapp', url: 'https://wa.link/uyps7e', icon: 'whatsapp' }
  
  ];

  return (
    <footer className="footer-section">
      <div className="footer-content container">
        <div className="footer-brand">
          <h2>Sosa Imagery</h2>
          <p>Strike a pose and we would take a picture</p>
          
          <div className="social-links">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="social-icon"
              >
                {social.icon === 'instagram' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )}
                {social.icon === 'facebook' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                )}
             {social.icon === 'whatsapp' && (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.003 3C9.384 3 4 8.383 4 15c0 2.623.861 5.045 2.313 7.007L4 29l7.211-2.298A11.942 11.942 0 0016.003 27C22.62 27 28 21.617 28 15S22.62 3 16.003 3zm0 2c5.528 0 10 4.47 10 10 0 5.53-4.472 10-10 10-1.792 0-3.467-.483-4.91-1.322l-.347-.205-4.062 1.296 1.306-3.677-.223-.35A9.95 9.95 0 016 15c0-5.53 4.472-10 10.003-10zm-2.66 5.542c-.235-.527-.48-.54-.7-.55-.182-.009-.392-.01-.602-.01-.209 0-.55.08-.837.383-.287.304-1.1 1.075-1.1 2.62 0 1.544 1.127 3.036 1.284 3.245.157.21 2.225 3.42 5.47 4.66 2.71 1.047 3.26.84 3.85.79.59-.05 1.89-.77 2.16-1.51.27-.74.27-1.377.19-1.507-.08-.13-.287-.209-.6-.366-.313-.157-1.854-.916-2.14-1.02-.287-.105-.496-.157-.705.157-.209.313-.81 1.02-.99 1.23-.182.21-.365.236-.677.079-.313-.157-1.32-.487-2.515-1.55-.93-.828-1.558-1.85-1.738-2.163-.182-.313-.02-.48.136-.63.14-.138.313-.365.47-.548.157-.183.21-.314.313-.523.104-.21.053-.394-.025-.55-.078-.157-.695-1.681-.965-2.295z"/>
  </svg>
)}


              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>
          
          
          <div className="footer-links-column">
            <h3>Contact Us</h3>
            <address className="contact-info">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
                Lagos, Nigeria
              </p>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                </svg>
                <a href="tel:+13125551234">(+234) 815-244-1353</a>
              </p>
            </address>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Sosa Imagery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;