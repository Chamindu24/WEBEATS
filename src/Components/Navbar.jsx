import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import img2 from "./images/webeats.jpg"



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Navigation menu items
  const menuItems = [
    { label: "Home", href: "/Home" },
    { label: "Services", href: "/Services" },
    { label: "Events", href: "/Events" },
    { label: "Artists", href: "#artists" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" }
  ];

  useEffect(() => {
    // Handle scroll for navbar effect
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Set scrolled state for background change
      if (currentScrollPos > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Show/hide based on scroll direction
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Only hide when scrolling down and past the initial threshold
      if (isScrollingDown && currentScrollPos > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''} ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="container">
        <a className="navbar-brand animate__animated animate__fadeIn" href="https://twitter.com/username">
       
        <span className="text-primary fw-bold" style={{ marginRight: "4px" }}>WE</span>
  <span className="text-white fw-bold" style={{ marginRight: "10px" }}>BEATS</span>
  <img
    src={img2}
    alt="icon"
    className="icon-size animate__animated animate__pulse animate__infinite animate__duration-2s"
    style={{
      width: "42px",
      height: "42px",
      verticalAlign: "middle",
      transform: "translateY(-2px)",
      filter: "drop-shadow(0 0 3px rgba(0,123,255,0.5))",
      transition: "all 0.3s ease"
    }}
  />


        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'} text-white fs-3`}></i>
        </button>
        
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  className="nav-link text-white px-3"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Link to="/TryNow">
  <button className="btn btn-primary rounded-pill ms-lg-3 pulse-btn">
    <i className="bi bi-headphones me-2 icon-pulse"></i>Try Now
  </button>
</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;