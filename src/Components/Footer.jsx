import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMusic } from 'react-icons/fa';
import img2 from "./images/webeats.jpg"


const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Initialize AOS animation library with optimized settings
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic',
      disable: 'mobile' // Disable animations on mobile for better performance
    });

    // Debounced resize handler for better performance
    const debouncedRefresh = debounce(() => {
      AOS.refresh();
    }, 250);

    window.addEventListener('resize', debouncedRefresh);

    // Show/hide back-to-top button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedRefresh);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Debounce function to improve performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Social media links data for DRY code
  const socialLinks = [
    { name: 'facebook', icon: 'bi-facebook', url: '#' },
    { name: 'twitter', icon: 'bi-twitter-x', url: '#' },
    { name: 'instagram', icon: 'bi-instagram', url: '#' },
    { name: 'spotify', icon: 'bi-spotify', url: '#' },
    { name: 'youtube', icon: 'bi-youtube', url: '#' }
  ];

  // Quick links data
  const quickLinks = [
    { name: 'Home', url: '/Home' },
    { name: 'Services', url: '/Services' },
    { name: 'Events', url: '/Events' },
    { name: 'Artists', url: '#artists' },
    { name: 'About', url: '/About' },
    { name: 'Contact', url: '/Contact' }
  ];

  // Services data
  const services = [
    { name: 'AI Composition', url: '#' },
    { name: 'Music Analytics', url: '#' },
    { name: 'Distribution', url: '#' },
    { name: 'Artist Promotion', url: '#' },
    { name: 'Live Events', url: '#' },
    { name: 'Workshops', url: '#' }
  ];

  return (
    <footer className="footer-section bg-dark text-white pt-5" role="contentinfo">
      {/* Wave separator at the top of footer */}
      <div className="wave-separator" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
          <path
            fill="#f8f9fa"
            fillOpacity="1"
            d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,96C672,96,768,64,864,48C960,32,1056,32,1152,48C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container pb-5">
        <div className="row g-4 justify-content-center">
          {/* Brand Column */}
          <div className="col-12 col-md-10 col-lg-4" data-aos="fade-up">
            <div className="footer-brand text-center text-lg-start">
            <h2 className="text-primary fw-bold d-inline-block footer-logo">
  <span className="animate__animated animate__pulse animate__infinite animate__faster">
    <img
      src={img2}
      alt="icon"
      className="icon-size"
      style={{ 
        width: "42px", 
        height: "42px", 
        verticalAlign: "middle",
        transform: "translateY(-2px)",
        filter: "drop-shadow(0 0 3px rgba(0,123,255,0.5))"
      }}
    />
    
    
    <span className="text-primary fw-bold">WE</span>
  </span>
  <span className="text-white fw-bold">BEATS</span>
</h2>
              <p className="my-4 px-3 px-lg-0 pe-lg-5">
                Revolutionizing the music industry with AI-powered tools and experiences. Join us in shaping the future of music creation, distribution, and consumption.
              </p>
              <div className="social-icons d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className={`social-icon ${social.name}-icon`}
                    aria-label={`Follow us on ${social.name}`}
                    rel="noopener"
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-6 col-md-5 col-lg-2" data-aos="fade-up" data-aos-delay="100">
            <h5 className="footer-title position-relative mb-4">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="footer-link">
                    <i className="bi bi-chevron-right me-2 link-arrow"></i>{link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-6 col-md-5 col-lg-2" data-aos="fade-up" data-aos-delay="200">
            <h5 className="footer-title position-relative mb-4">Our Services</h5>
            <ul className="footer-links list-unstyled">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.url} className="footer-link">
                    <i className="bi bi-chevron-right me-2 link-arrow"></i>{service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */} 
          <div className="col-12 col-md-10 col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <br></br>
            <h5 className="footer-title position-relative mb-4">Newsletter</h5>
            <p className="text-center text-lg-start">Subscribe to get the latest updates on our services and events</p>
            <form className="newsletter-form position-relative mt-4" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-input" className="visually-hidden">Your email address</label>
              <input 
                id="email-input"
                type="email" 
                className="form-control bg-transparent py-3" 
                placeholder="Your email address"
                aria-label="Your email address"
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary subscribe-btn"
                aria-label="Subscribe to newsletter"
              >
                <i className="bi bi-send-fill"></i>
              </button>
            </form>
            <div className="music-equalizer justify-content-center justify-content-lg-start" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="equalizer-bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-section py-3 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0 text-white">
              © {currentYear} WeBeats. All rights reserved.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <ul className="list-inline mb-0 text-center text-lg-end policy-links">
              <li className="list-inline-item">
                <a href="/PrivacyPolicy" className="link-light link-hover-effect mx-2">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/TermsOfService" className="link-light link-hover-effect mx-2">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <a href="/CookiePolicy" className="link-light link-hover-effect mx-2">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-center">
            <p className="text-white-50 small mb-0">
              Design & Developed by <a href="https://januda.com" className="text-white-50 text-decoration-underline" target="_blank" rel="noopener noreferrer">Januda J Kodithuwakku</a>
            </p>
          </div>
        </div>
      </div>
    </div>

      {/* Back to top button - conditionally visible */}
      {isVisible && (
        <button 
          className="btn btn-primary back-to-top" 
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}

      <style jsx>{`
        /* Footer Styles */
        .footer-section {
          position: relative;
          overflow: hidden;
        }
        
        /* Wave separator */
        .wave-separator {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          overflow: hidden;
        }
        
        .wave-separator svg {
          display: block;
          width: 100%;
          height: 140px;
        }
        
        /* Footer logo animation */
        .footer-logo {
          font-size: 2.5rem;
          background: linear-gradient(45deg, #0d6efd, #0a58ca);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          display: inline-block;
        }
        
        .footer-logo::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #0d6efd, transparent);
          animation: borderPulse 3s infinite;
        }
        
        @keyframes borderPulse {
          0%, 100% { width: 0; left: 50%; }
          50% { width: 100%; left: 0; }
        }
        
        /* Footer titles with custom underline */
        .footer-title {
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 30px;
          height: 3px;
          background: #0d6efd;
          transition: width 0.3s ease;
        }
        
        .footer-title:hover::after {
          width: 100%;
        }
        
        /* Social icons with hover effects */
        .social-icons {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }
        
        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .social-icon:focus-visible {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }
        
        .social-icon:hover::before {
          opacity: 1;
        }
        
        .facebook-icon:hover {
          background: #3b5998;
        }
        
        .twitter-icon:hover {
          background: #1da1f2;
        }
        
        .instagram-icon:hover {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }
        
        .spotify-icon:hover {
          background: #1db954;
        }
        
        .youtube-icon:hover {
          background: #ff0000;
        }
        
        /* Footer links with hover animation */
        .footer-links {
          padding-left: 0;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          display: block;
          padding: 8px 0;
          transition: all 0.3s ease;
          position: relative;
          font-size: 0.95rem;
        }
        
        .footer-link:hover {
          color: white;
          transform: translateX(5px);
        }
        
        .footer-link:focus-visible {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
          color: white;
        }
        
        .link-arrow {
          font-size: 12px;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        
        .footer-link:hover .link-arrow,
        .footer-link:focus-visible .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Newsletter form design */
        .newsletter-form {
          margin-top: 20px;
          max-width: 100%;
        }
        
        .newsletter-form .form-control {
          height: 50px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding-left: 20px;
          padding-right: 60px;
          color: white;
          transition: all 0.3s ease;
          background-color: rgba(0, 0, 0, 0.2);
        }
        
        .newsletter-form .form-control:focus {
          box-shadow: 0 0 15px rgba(13, 110, 253, 0.3);
          border-color: #0d6efd;
        }
        
        .newsletter-form .form-control::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .subscribe-btn {
          position: absolute;
          right: 5px;
          top: 5px;
          bottom: 5px;
          width: 50px;
          height: 40px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .subscribe-btn:hover {
          transform: translateX(3px);
        }
        
        .subscribe-btn:focus-visible {
          outline: 2px solid white;
          outline-offset: 2px;
        }
        
        /* Copyright section */
        .copyright-section {
          background-color: rgba(0, 0, 0, 0.2);
        }
        
        .link-hover-effect {
          position: relative;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .link-hover-effect::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: white;
          transition: width 0.3s ease;
        }
        
        .link-hover-effect:hover::after,
        .link-hover-effect:focus-visible::after {
          width: 100%;
        }
        
        .link-hover-effect:focus-visible {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }
        
        /* Back to top button */
        .back-to-top {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          opacity: 0.8;
          transition: all 0.3s ease;
          animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 0.8; transform: translateY(0); }
        }
        
        .back-to-top:hover {
          opacity: 1;
          transform: translateY(-5px);
        }
        
        .back-to-top:focus-visible {
          opacity: 1;
          outline: 2px solid white;
          outline-offset: 2px;
        }
        
        /* Music equalizer animation */
        .music-equalizer {
          margin-top: 20px;
          display: flex;
          align-items: flex-end;
          height: 40px;
          gap: 3px;
        }
        
        .equalizer-bar {
          background: linear-gradient(to top, #0d6efd, rgba(13, 110, 253, 0.3));
          width: 4px;
          height: 10px;
          border-radius: 4px;
          animation: equalizerAnimation 1.5s infinite ease-in-out;
          will-change: height; /* Performance optimization */
        }
        
        @keyframes equalizerAnimation {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .footer-logo {
            font-size: 2.2rem;
          }
          
          .footer-title {
            font-size: 1.1rem;
          }
          
          .policy-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
          }
          
          .policy-links .list-inline-item {
            margin-right: 0;
          }
        }
        
        @media (max-width: 768px) {
          .footer-title {
            text-align: center;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          
          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-title:hover::after {
            width: 50px;
          }
          
          .music-equalizer {
            justify-content: center;
          }
          
          .footer-link {
            text-align: center;
          }
          
          .footer-link:hover {
            transform: translateY(-2px);
          }
        }
        
        @media (max-width: 576px) {
          .wave-separator svg {
            height: 70px;
          }
          
          .footer-section {
            padding-top: 4rem !important;
          }
          
          .social-icons {
            justify-content: center;
            margin-bottom: 20px;
          }
          
          .social-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
          
          .footer-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
          
          .footer-link {
            padding: 6px 0;
            font-size: 0.9rem;
          }
          
          .newsletter-form .form-control {
            height: 45px;
            font-size: 0.9rem;
          }
          
          .subscribe-btn {
            width: 45px;
            height: 35px;
          }
          
          .back-to-top {
            width: 40px;
            height: 40px;
            right: 15px;
            bottom: 15px;
          }
          
          .copyright-section p,
          .link-hover-effect {
            font-size: 0.8rem;
          }
        }
        
        /* Dynamic spacing adjustments for tiny screens */
        @media (max-width: 375px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
          
          .social-icons {
            gap: 10px;
          }
          
          .social-icon {
            width: 32px;
            height: 32px;
          }
          
          .footer-link {
            font-size: 0.85rem;
          }
          
          .newsletter-form .form-control {
            padding-left: 15px;
          }
          
          .footer-title::after {
            width: 25px;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .wave-separator svg path {
            fill: #212529;
          }
        }
        
        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .footer-logo::after,
          .social-icon:hover,
          .footer-link:hover,
          .link-arrow,
          .back-to-top:hover,
          .subscribe-btn:hover,
          .equalizer-bar,
          .back-to-top {
            transition: none;
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;