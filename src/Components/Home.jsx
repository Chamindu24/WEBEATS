import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "./images/web.png"
import img2 from "./images/pre1.jpg"
import img3 from "./images/pre2.jpg"
import img4 from "./images/pre3.jpg"
import img5 from "./images/webeats.jpg"
import img6 from "./images/w.png"
import img7 from "./images/shirt.jpg"
import img8 from "./images/kandypre.jpg"


const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroSectionRef = useRef(null);

  // Hero section images
  const heroImages = [
    img2,
    img3,
    img4,
    img7,
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea"
  ];

  // Music service features with icons
  const serviceFeatures = [
    {
      icon: "bi-calendar-event",
      title: "Event Planning",
      description: "Create unique tracks with our cutting-edge AI composition technology.",
      link: "/EventPlanning"
    },
    {
      icon: "bi-people",
      title: "Fan Engagement",
      description: "Track your music performance with real-time AI-powered analytics.",
      link: "/FanEngagement"
    },
    {
      icon: "bi-megaphone",
      title: "Artist Promotion",
      description: "Let our AI algorithms optimize your music distribution across platforms.",
      link: "/ArtistPromotion"
    }
  ];
  

  // Upcoming events data
  const upcomingEvents = [
    {
      title: "Premathma",
      date: "June 15, 2025",
      location: "Kandy",
      image: img8,
      badge: "UPCOMING",
      buttonText: "Get Access"
    },
    {
      title: "AI DJ Masterclass",
      date: "April 8, 2025",
      location: "Digital Hub, SF",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
      badge: "HOT",
      buttonText: "Get Tickets"
    },
    {
      title: "Music Tech Summit",
      date: "May 22, 2025",
      location: "Tech Center, NYC",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
      badge: "FEATURED",
      buttonText: "Register"
    }
  ];

  // Featured artists
  const featuredArtists = [
    {
      name: "SynthWave AI",
      genre: "Electronic",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
    },
    {
      name: "Neural Beats",
      genre: "Hip Hop",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
    },
    {
      name: "Quantum Sound",
      genre: "Ambient",
      image: "https://images.unsplash.com/photo-1551659725-49e048a8f11e"
    }
  ];

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });

    // Refresh AOS on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    // Handle scroll for navbar effect and parallax
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Calculate scroll progress for hero section
      if (heroSectionRef.current) {
        const heroHeight = heroSectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const progress = Math.min(scrollPosition / heroHeight, 1);
        setScrollProgress(progress);
      }
    };

    // Auto-rotate hero images
    const imageInterval = setInterval(() => {
      setActiveHeroImage(prev => (prev + 1) % heroImages.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', AOS.refresh);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, [heroImages.length]);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroSectionRef}
        className="hero-section position-relative overflow-hidden bg-dark text-white" 
        style={{ height: '100vh' }}
      >
        {/* Dynamic background with basic transition */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`position-absolute w-100 h-100 hero-bg-slide ${activeHeroImage === index ? 'active-slide' : ''}`}
            style={{ 
              backgroundImage: `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: '50% 50%',
              filter: `brightness(${0.7 - scrollProgress * 0.3})`,
              opacity: activeHeroImage === index ? 1 : 0,
              transform: `scale(${1 + scrollProgress * 0.2}) translateY(${-scrollProgress * 150}px)`, // Images move up on scroll
            }}
          ></div>
        ))}
        
        {/* Enhanced overlay with gradient that changes with scroll */}
        <div 
          className="position-absolute w-100 h-100" 
          style={{ 
            background: `linear-gradient(to bottom, 
              rgba(0,0,0,${0.2 + scrollProgress * 0.6}), 
              rgba(13,110,253,${0.2 + scrollProgress * 0.3}), 
              rgba(0,0,0,${0.5 + scrollProgress * 0.5})
            )`,
            pointerEvents: 'none',
            zIndex: 2
          }}
        ></div>
        
        {/* Enhanced mouse scroll indicator with dynamic animation */}
        <div 
          className="mouse-scroll-indicator"
          style={{
            opacity: 1 - scrollProgress * 3,
            transform: `translateY(${scrollProgress * 100}px) scale(${1 - scrollProgress * 0.5})`
          }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow-scroll">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        {/* Enhanced audio wave visualization effect with scroll interactivity */}
        <div 
          className="audio-wave-container"
          style={{
            transform: `translateY(${scrollProgress * 80}px) scale(${1 + scrollProgress * 0.3})`,
            opacity: 1 - scrollProgress * 0.7
          }}
        >
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="audio-wave"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                height: `${40 + Math.sin(i * 0.5) * 20 - scrollProgress * 20}px`,
                backgroundColor: i % 3 === 0 ? '#0d6efd' : i % 3 === 1 ? '#6610f2' : '#6f42c1',
                filter: `brightness(${1 + scrollProgress * 0.5})`,
                transform: `scaleY(${1 - scrollProgress * 0.3 + (i % 3) * 0.1})`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container position-relative py-5" style={{ zIndex: 3 }}>
          <div className="row min-vh-100 align-items-center">
            <div 
              className="col-lg-8 col-md-10 py-5"
              style={{
                transform: `translateY(${scrollProgress * -120}px)`,
                opacity: 1 - scrollProgress * 1.2
              }}
              data-aos="fade-up"
            >
              <h1 className="display-1 fw-bold mb-0 hero-title">
                <span 
                  className="text-primary animate__animated animate__backInLeft animate__delay-1s"
                  style={{ display: 'inline-block' }}
                >WE</span>
                <span 
                  className="animate__animated animate__backInRight animate__delay-1s"
                  style={{ display: 'inline-block' }}
                >BEATS</span>
              </h1>
              <p 
                className="display-6 my-4 animate__animated animate__fadeInUp animate__delay-2s"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="text-primary">AI-Powered</span> Music Experiences
              </p>
              <div 
                className="mt-5 animate__animated animate__bounceIn animate__delay-3s"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <button className="btn btn-primary btn-lg me-3 px-4 py-3 rounded-pill pulse-btn">
                  <i className="bi bi-music-note-list me-2 icon-pulse"></i>Discover AI Music
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill hover-float">
                  <i className="bi bi-calendar-event me-2"></i>View Events
                </button>
              </div>
            </div>
          </div>
          
          {/* Enhanced interactive scroll indicator */}
          <div 
            className="position-absolute bottom-0 start-50 translate-middle-x mb-4 animate__animated animate__bounce animate__infinite cursor-pointer scroll-indicator"
            style={{
              opacity: 1 - scrollProgress * 3,
              transform: `scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`
            }}
          >
            <a href="#services" className="text-white fs-1">
              <i className="bi bi-chevron-down"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Icon Animations */}
      <section id="services" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row mb-5 text-center">
            <div className="col-lg-8 mx-auto">
              <h2 
                className="display-4 fw-bold" 
                data-aos="fade-up"
              >
                AI-Powered Music Services
              </h2>
              <p 
                className="lead text-muted" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Revolutionary tools reshaping the future of music
              </p>
            </div>
          </div>
          <div className="row g-5">
            {serviceFeatures.map((service, index) => (
              <div key={index} className="col-lg-4" data-aos="flip-up" data-aos-delay={100 * (index + 1)}>
                <div className="card border-0 shadow-lg h-100 hover-scale service-card">
                  <div className="card-body text-center p-5">
                    <div className="icon-container mb-4">
                      <div className="hexagon">
                        <div className="hexagon-content">
                          <i className={`bi ${service.icon} text-primary icon-3d`}></i>
                        </div>
                      </div>
                    </div>
                    <h3 className="card-title mb-3">{service.title}</h3>
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                    <div className="mt-4">
                    <a href={service.link} className="btn btn-outline-primary rounded-pill px-4 learn-more-btn">
                      Learn More <i className="bi bi-arrow-right ms-2"></i>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section id="events" className="py-5 bg-dark text-white">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8">
              <h2 
                className="display-4 fw-bold" 
                data-aos="fade-right"
              >
                AI Music Events
              </h2>
              <p 
                className="lead" 
                data-aos="fade-right" 
                data-aos-delay="200"
              >
                Experience the future of music at our AI-powered showcases
              </p>
            </div>
            <div 
              className="col-lg-4 text-lg-end align-self-center" 
              data-aos="fade-left"
            >
              <button className="btn btn-outline-light rounded-pill px-4 py-2 btn-hover-pulse">
                View All Events <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
          
          <div className="row g-4">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className={index === 2 ? "col-12" : "col-lg-6"} 
                data-aos="zoom-in" 
                data-aos-delay={100 * (index + 1)}
              >
                <div className="card bg-dark text-white border-0 overflow-hidden event-card">
                  <img src={event.image} className="card-img" alt={event.title} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end" style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 70%)' }}>
                    <span className="badge bg-primary mb-2 animate__animated animate__pulse animate__infinite">{event.badge}</span>
                    <h3 className="card-title">{event.title}</h3>
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-calendar me-2 icon-subtle-shake"></i>
                      <span>{event.date}</span>
                      <i className="bi bi-geo-alt ms-4 me-2 icon-subtle-shake"></i>
                      <span>{event.location}</span>
                    </div>
                    <button className="btn btn-primary rounded-pill w-100 mt-2 btn-ripple">{event.buttonText}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section id="artists" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row mb-5 text-center">
            <div className="col-lg-8 mx-auto">
              <h2 
                className="display-4 fw-bold" 
                data-aos="fade-up"
              >
                Featured Artists
              </h2>
              <p 
                className="lead text-muted" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >
                Discover AI-enhanced talent revolutionizing the music industry
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {featuredArtists.map((artist, index) => (
              <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="artist-card">
                  <div className="artist-image">
                    <img src={artist.image} alt={artist.name} className="img-fluid" />
                    <div className="artist-overlay">
                      <button className="btn btn-primary rounded-circle play-btn">
                        <i className="bi bi-play-fill"></i>
                      </button>
                    </div>
                  </div>
                  <div className="artist-info text-center py-3">
                    <h4 className="mb-1">{artist.name}</h4>
                    <p className="text-muted mb-2">{artist.genre}</p>
                    <button className="btn btn-outline-primary btn-sm rounded-pill px-3">
                      <i className="bi bi-music-note me-1"></i> Listen Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="about" className="py-5 bg-primary text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="display-4 fw-bold mb-4">Join the AI Music Revolution</h2>
              <p className="lead mb-4">Get early access to our innovative AI music tools and exclusive event invitations. Be part of the future of music creation and distribution.</p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-light btn-lg rounded-pill px-4">
                  <i className="bi bi-person-plus me-2"></i>Sign Up
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4">
                  <i className="bi bi-info-circle me-2"></i>Learn More
                </button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="music-player-mockup">
                <div className="player-circle"></div>
                <div className="player-bars">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="player-bar" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-4 fw-bold mb-4" data-aos="fade-up">Get In Touch</h2>
              <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
                Have questions about our services or upcoming events? Reach out to our team.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-item text-center p-4 rounded shadow-sm">
                <div className="icon-circle mb-3">
                  <i className="bi bi-envelope-fill text-primary"></i>
                </div>
                <h5>Email Us</h5>
                <p className="mb-0">info@webeats.com</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="contact-item text-center p-4 rounded shadow-sm">
                <div className="icon-circle mb-3">
                  <i className="bi bi-telephone-fill text-primary"></i>
                </div>
                <h5>Call Us</h5>
                <p className="mb-0">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="contact-item text-center p-4 rounded shadow-sm">
                <div className="icon-circle mb-3">
                  <i className="bi bi-geo-alt-fill text-primary"></i>
                </div>
                <h5>Visit Us</h5>
                <p className="mb-0">123 Music Ave, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Custom CSS with Advanced Animations */}
      <style jsx>{`
        /* Base animations */
        .hover-scale {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .hover-scale:hover {
          transform: translateY(-15px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        .hover-float {
          transition: transform 0.3s ease;
        }
        
        .hover-float:hover {
          transform: translateY(-5px);
        }
        
        /* Enhanced Hero section */
        .hero-section {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
        }
        
        /* Enhanced hero background slide with advanced transition effect */
        .hero-bg-slide {
          opacity: 0;
          transition: 
            opacity 1s ease-out, 
            transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), 
            filter 0.5s ease-out;
          will-change: opacity, transform, filter;
        }
        
        .hero-bg-slide.active-slide {
          opacity: 1;
          animation: zoomInEffect 5s forwards;
        }
        
        @keyframes zoomInEffect {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }
        
        /* Enhanced mouse scroll indicator */
        .mouse-scroll-indicator {
          position: absolute;
          left: 50%;
          bottom: 120px;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: transform, opacity;
        }
        
        .scroll-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 10px;
          animation: fadeInOut 2s infinite;
        }
        
        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          position: relative;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }
        
        .wheel {
          width: 4px;
          height: 8px;
          background: #fff;
          position: absolute;
          top: 7px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 4px;
          animation: wheelScroll 1.5s infinite;
        }
        
        @keyframes wheelScroll {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(15px);
            opacity: 0;
          }
        }
        
        .arrow-scroll {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }
        
        .arrow-scroll span {
          display: block;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid rgba(255, 255, 255, 0.7);
          border-right: 2px solid rgba(255, 255, 255, 0.7);
          transform: rotate(45deg);
          margin: -5px;
          animation: arrowDown 1.5s infinite;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .arrow-scroll span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .arrow-scroll span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes arrowDown {
          0% {
            opacity: 0;
            transform: rotate(45deg) translate(-5px, -5px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(45deg) translate(5px, 5px);
          }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        .hero-title {
          position: relative;
          z-index: 10;
          text-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }

        /* Enhanced audio wave animation */
        .audio-wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          z-index: 3;
          padding: 0 5%;
          transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s ease;
          will-change: transform, opacity;
        }
        
        .audio-wave {
          background: linear-gradient(to top, #0d6efd, rgba(13, 110, 253, 0.2));
          width: 4px;
          margin: 0 5px;
          border-radius: 5px;
          animation: soundWave 1.5s infinite ease-in-out;
          transition: height 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          will-change: height, transform;
          box-shadow: 0 0 10px rgba(13, 110, 253, 0.4);
        }
        
        .audio-wave:nth-child(odd) {
          animation-duration: 1.7s;
        }
        
        .audio-wave:nth-child(3n) {
          animation-duration: 1.9s;
        }
        
        .audio-wave:nth-child(3n+1) {
          animation-duration: 2.1s;
        }
        
        @keyframes soundWave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
        
        /* Enhanced Scroll indicator animation */
        .scroll-indicator {
          animation-duration: 2s;
          opacity: 0.8;
          transition: all 0.3s ease;
          cursor: pointer;
          will-change: transform, opacity;
        }
        
        .scroll-indicator:hover {
          opacity: 1;
          animation-play-state: paused;
          transform: scale(1.2);
        }
        
        /* Button animations */
        .pulse-btn {
          position: relative;
          overflow: hidden;
        }
        
        .pulse-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 0;
          border-radius: 50%;
          z-index: 1;
          animation: btnPulse 2s infinite;
          transform: translate(-50%, -50%);
        }
        
        @keyframes btnPulse {
          0% {
            width: 0;
            height: 0;
            opacity: 0.5;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
        
        .icon-pulse {
          animation: iconPulse 1.5s infinite;
        }
        
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        /* Service cards with hexagon icon container */
        .service-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        
        .service-card:before {
          content: '';
          position: absolute;
          top: -10px;
          right: -10px;
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.2), transparent);
          border-radius: 50%;
          z-index: 0;
        }
        
        .hexagon {
          position: relative;
          width: 100px;
          height: 115px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: transform 0.5s, box-shadow 0.5s;
        }
        
        .hexagon:before {
          content: '';
          position: absolute;
          inset: 3px;
          background: white;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          z-index: 1;
        }
        
        .hexagon-content {
          position: relative;
          z-index: 2;
        }
        
        .icon-container:hover .hexagon {
          transform: rotate(30deg) scale(1.1);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.3);
        }
        
        .icon-container:hover .icon-3d {
          transform: rotate(-30deg) scale(1.2);
        }
        
        .icon-3d {
          font-size: 3rem;
          transform-style: preserve-3d;
          transition: transform 0.5s ease, color 0.3s;
          will-change: transform;
        }
        
        /* Event card styling */
        .event-card {
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.5s;
          height: 300px;
        }
        
        .event-card:hover {
          transform: scale(1.03);
        }
        
        .event-card .card-img {
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        
        .event-card:hover .card-img {
          transform: scale(1.1);
        }
        
        .icon-subtle-shake {
          animation: subtleShake 3s infinite;
        }
        
        @keyframes subtleShake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-1px); }
          20%, 40%, 60%, 80% { transform: translateX(1px); }
        }
        
        /* Artist cards */
        .artist-card {
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .artist-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .artist-image {
          position: relative;
          overflow: hidden;
          height: 300px;
        }
        
        .artist-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .artist-card:hover .artist-image img {
          transform: scale(1.1);
        }
        
        .artist-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .artist-card:hover .artist-overlay {
          opacity: 1;
        }
        
        .play-btn {
          width: 60px;
          height: 60px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0);
          transition: transform 0.3s ease 0.1s;
        }
        
        .play-btn i {
          font-size: 2rem;
        }
        
        .artist-card:hover .play-btn {
          transform: scale(1);
        }
        
        /* Music player mockup */
        .music-player-mockup {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          height: 300px;
        }
        
        .player-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd, #0a58ca);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 30px;
        }
        
        .player-circle:after {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          background: white;
          border-radius: 50%;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .player-bars {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 60px;
          width: 200px;
          gap: 5px;
        }
        
        .player-bar {
          background: linear-gradient(to top, #0d6efd, rgba(255, 255, 255, 0.8));
          width: 12px;
          height: 20%;
          border-radius: 6px;
          animation: barPlay 1.8s infinite ease-in-out;
        }
        
        @keyframes barPlay {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        
        /* Contact section */
        .contact-item {
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .icon-circle {
          width: 70px;
          height: 70px;
          background: #f8f9fa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: transform 0.3s ease;
        }
        
        .contact-item:hover .icon-circle {
          transform: rotateY(180deg);
        }
        
        .icon-circle i {
          font-size: 1.75rem;
          transition: transform 0.3s ease;
        }
        
        .contact-item:hover .icon-circle i {
          transform: rotateY(180deg);
        }
        
        /* Social icons */
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: #0d6efd;
          color: white;
          transform: translateY(-5px);
        }
        
        /* Media queries for responsiveness */
        @media (max-width: 992px) {
          .hero-title {
            font-size: 3.5rem;
          }
          
          .event-card {
            height: 250px;
          }
          
          .artist-image {
            height: 250px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .player-circle {
            width: 80px;
            height: 80px;
          }
          
          .player-bars {
            width: 160px;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .audio-wave {
            width: 3px;
            margin: 0 3px;
          }
          
          .event-card {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default Home;