import React, { useState, useEffect, useCallback } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMusic, FaHeadphones, FaCalendarAlt, FaStar, FaUsers } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission with improved state management & validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      form.classList.remove('was-validated');
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Animation on scroll with useCallback for better performance
  const observerCallback = useCallback((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleElements(prev => new Set([...prev, entry.target.id]));
      }
    });
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [observerCallback]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getAnimationClass = (id, animation = 'fadeIn', delay = 0) => {
    if (visibleElements.has(id)) {
      return `animate__animated animate__${animation} animate__delay-${delay}s`;
    }
    return '';
  };

  return (
    <div className="contact-page bg-dark text-white">
     
      {/* Hero Section with optimized parallax effect */}
      <section 
        className="hero-section position-relative py-5 overflow-hidden d-flex align-items-center"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8))',
          minHeight: '70vh',
        }}
        aria-label="Contact hero section"
      >
        <div 
          className="hero-background position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/random/1600x900/?concert")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.4',
            transform: 'scale(1.1)',
          }}
          aria-hidden="true"
        />
        
        <div className="container position-relative py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center text-lg-start animate__animated animate__fadeInLeft">
              <h1 className="display-3 fw-bold mb-4">
                <span className="text-white">GET IN </span>
                <span className="text-danger">TOUCH</span>
              </h1>
              <p className="lead text-light mb-5 fs-4">
                Let's create unforgettable music experiences that will resonate with your audience
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <a href="#contact-form" className="btn btn-danger btn-lg rounded-pill px-4 py-3 shadow-lg">
                  Message Us
                </a>
                <a href="#services" className="btn btn-outline-light btn-lg rounded-pill px-4 py-3">
                  Our Services
                </a>
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="img-wrapper position-relative animate__animated animate__fadeInRight" style={{height: '400px'}}>
                <div className="floating-cards position-absolute" style={{top: '0', right: '0'}}>
                  <div className="card bg-dark border-danger text-white p-4 shadow-lg mb-4" style={{maxWidth: '300px'}}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle bg-danger p-2 me-3">
                        <FaStar className="text-white" size={20} />
                      </div>
                      
                      <h5 className="m-0">Premium Experience</h5>
                    </div>
                    <p className="m-0">Our team brings together expertise from across the music industry to deliver exceptional events</p>
                  </div>
                  <div className="card bg-black text-white p-4 shadow-lg" style={{maxWidth: '300px', marginLeft: '50px'}}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle bg-warning p-2 me-3">
                        <FaCalendarAlt className="text-white" size={20} />
                      </div>
                      <h5 className="m-0">24/7 Support</h5>
                    </div>
                    <p className="m-0">We're available round the clock to ensure your event planning goes smoothly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="container py-5" aria-label="Contact information section">
        <div className="row g-4">
          <div className="col-lg-5 mb-5 mb-lg-0 order-2 order-lg-1">
            <div id="contact-info" className={`animate-on-scroll ${getAnimationClass('contact-info', 'fadeInLeft')}`}>
              <h2 className="mb-4 fw-bold position-relative d-inline-block">
                Connect With Us
                <span 
                  className="position-absolute start-0 bottom-0" 
                  style={{ height: '3px', width: '60px', backgroundColor: '#dc3545', display: 'block' }}
                  aria-hidden="true"
                />
              </h2>
              <p className="lead mb-5">
                Ready to bring your music event to life? Our team of experts is here to help you create extraordinary experiences.
              </p>
              
              <div className="contact-item d-flex align-items-center mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="bg-danger rounded-circle p-3 me-3 shadow-lg pulse-animation" aria-hidden="true">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Call Us</h5>
                  <p className="mb-0">
                    <a href="tel:+94760435188" className="text-white text-decoration-none hover-text-danger">+94 76 043 5188</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item d-flex align-items-center mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                <div className="bg-warning rounded-circle p-3 me-3 shadow-lg pulse-animation" aria-hidden="true">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Email Us</h5>
                  <p className="mb-0">
                    <a href="mailto:contact@soundwave.com" className="text-white text-decoration-none hover-text-danger">contact@soundwave.com</a>
                  </p>
                </div>
              </div>
              
              <div className="contact-item d-flex align-items-center mb-5 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="bg-primary rounded-circle p-3 me-3 shadow-lg pulse-animation" aria-hidden="true">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Visit Us</h5>
                  <address className="mb-0">123 Music Avenue, Colombo, Sri Lanka</address>
                </div>
              </div>
              
              <div className="social-section p-4 bg-black rounded-3 shadow-lg border border-secondary mt-5">
                <h4 className="mb-3 fw-bold animate__animated animate__fadeIn animate__delay-4s">Follow Our Journey</h4>
                <p className="text-muted mb-4">Stay connected with us on social media for the latest updates and event highlights</p>
                <div className="d-flex flex-wrap gap-3 social-icons-container animate__animated animate__fadeIn animate__delay-4s">
                  <a href="#" className="btn btn-outline-danger rounded-circle p-3 social-icon" aria-label="Facebook">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="btn btn-outline-danger rounded-circle p-3 social-icon" aria-label="Twitter">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="btn btn-outline-danger rounded-circle p-3 social-icon" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="btn btn-outline-danger rounded-circle p-3 social-icon" aria-label="YouTube">
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7 order-1 order-lg-2">
            <div id="contact-form" className={`bg-black p-4 p-lg-5 rounded-3 shadow-lg border border-secondary animate-on-scroll ${getAnimationClass('contact-form', 'fadeInRight')}`}>
              <h2 className="mb-4 fw-bold position-relative d-inline-block">
                Drop Us a Message
                <span 
                  className="position-absolute start-0 bottom-0" 
                  style={{ height: '3px', width: '60px', backgroundColor: '#dc3545', display: 'block' }}
                  aria-hidden="true"
                />
              </h2>
              <p className="text-muted mb-4">We'd love to hear about your project. Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {formSubmitted ? (
                <div className="alert alert-success animate__animated animate__fadeIn py-4 shadow-sm" role="alert">
                  <div className="d-flex">
                    <div className="rounded-circle bg-success bg-opacity-25 p-3 me-3 d-flex align-items-center justify-content-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                    </div>
                    <div>
                      <h5 className="mb-2 fw-bold">Thank you for reaching out!</h5>
                      <p className="mb-0">Your message has been received. Our team will contact you shortly.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input 
                          type="text" 
                          className="form-control bg-dark text-light border-secondary" 
                          id="name" 
                          placeholder="John Doe"
                          required 
                          value={formData.name}
                          onChange={handleChange}
                          aria-label="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                        <div className="invalid-feedback">Please enter your name</div>
                      </div>
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input 
                          type="email" 
                          className="form-control bg-dark text-light border-secondary" 
                          id="email" 
                          placeholder="john@example.com"
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          aria-label="Email Address"
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                        <label htmlFor="email">Email Address</label>
                        <div className="invalid-feedback">Please enter a valid email address</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="form-floating">
                      <select 
                        className="form-select bg-dark text-light border-secondary" 
                        id="subject" 
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        aria-label="Subject"
                      >
                        <option value="">Select a subject</option>
                        <option value="event_planning">Event Planning</option>
                        <option value="artist_booking">Artist Booking</option>
                        <option value="promotion">Promotion & Marketing</option>
                        <option value="partnership">Partnership</option>
                        <option value="general">General Inquiry</option>
                      </select>
                      <label htmlFor="subject">What can we help you with?</label>
                      <div className="invalid-feedback">Please select a subject</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="form-floating">
                      <textarea 
                        className="form-control bg-dark text-light border-secondary" 
                        id="message" 
                        style={{ height: '150px' }}
                        placeholder="Tell us about your project or inquiry..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        aria-label="Message"
                      />
                      <label htmlFor="message">Your Message</label>
                      <div className="invalid-feedback">Please enter your message</div>
                    </div>
                  </div>
                  
                  <div className="d-grid">
                    <button 
                      type="submit" 
                      className="btn btn-danger py-3 rounded-pill shadow-lg position-relative overflow-hidden"
                      disabled={isSubmitting}
                      aria-label="Send Message"
                    >
                      <span className="position-relative z-1 d-flex align-items-center justify-content-center">
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <FaEnvelope className="me-2" />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              )}

              <div className="card border-dark mt-4 text-center p-3 bg-dark bg-opacity-50">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">Need Urgent Assistance?</h5>
                  <p className="mb-3">Call our 24/7 event hotline for immediate support</p>
                  <a href="tel:+94760435188" className="btn btn-outline-light rounded-pill px-4">
                    <FaPhone className="me-2" /> +94 76 043 5188
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5" aria-label="Our services section">
        <div id="services" className={`text-center mb-5 animate-on-scroll ${getAnimationClass('services', 'fadeInUp')}`}>
          <h2 className="fw-bold mb-4 position-relative d-inline-block">
            Our Services
            <span 
              className="position-absolute start-50 bottom-0 translate-middle-x" 
              style={{ height: '3px', width: '60px', backgroundColor: '#dc3545', display: 'block' }}
              aria-hidden="true"
            />
          </h2>
          <p className="lead mb-5">Comprehensive music event solutions tailored to your needs</p>
        </div>
        
        <div className="row g-4">
          {/* Event Planning Card */}
          <div className="col-md-6 col-lg-4">
            <div 
              id="service-1" 
              className={`card bg-black h-100 border-0 shadow-lg service-card animate-on-scroll ${getAnimationClass('service-1', 'zoomIn')}`}
            >
              <div className="card-body text-center p-4">
                <div 
                  className="service-icon rounded-circle bg-danger mx-auto d-flex align-items-center justify-content-center mb-4" 
                  style={{width: '90px', height: '90px'}}
                  aria-hidden="true"
                >
                  <FaCalendarAlt size={35} className="text-white" />
                </div>
                <h4 className="card-title mb-3 fw-bold">Event Planning</h4>
                <p className="card-text text-muted">
                  We expertly manage every detail of your music events - from intimate venues to large-scale festivals, ensuring a seamless experience.
                </p>
                <a href="#" className="btn btn-outline-danger rounded-pill mt-3">Learn More</a>
              </div>
            </div>
          </div>
          
          {/* Artist Booking Card */}
          <div className="col-md-6 col-lg-4">
            <div 
              id="service-2" 
              className={`card bg-black h-100 border-0 shadow-lg service-card animate-on-scroll ${getAnimationClass('service-2', 'zoomIn', 0.2)}`}
            >
              <div className="card-body text-center p-4">
                <div 
                  className="service-icon rounded-circle bg-warning mx-auto d-flex align-items-center justify-content-center mb-4" 
                  style={{width: '90px', height: '90px'}}
                  aria-hidden="true"
                >
                  <FaUsers size={35} className="text-white" />
                </div>
                <h4 className="card-title mb-3 fw-bold">Artist Booking</h4>
                <p className="card-text text-muted">
                  Connect with our exclusive network of established performers and rising stars for your next event with tailored artist matching.
                </p>
                <a href="#" className="btn btn-outline-danger rounded-pill mt-3">Learn More</a>
              </div>
            </div>
          </div>
          
          {/* Promotion Card */}
          <div className="col-md-6 col-lg-4 mx-auto">
            <div 
              id="service-3" 
              className={`card bg-black h-100 border-0 shadow-lg service-card animate-on-scroll ${getAnimationClass('service-3', 'zoomIn', 0.4)}`}
            >
              <div className="card-body text-center p-4">
                <div 
                  className="service-icon rounded-circle bg-primary mx-auto d-flex align-items-center justify-content-center mb-4" 
                  style={{width: '90px', height: '90px'}}
                  aria-hidden="true"
                >
                  <FaHeadphones size={35} className="text-white" />
                </div>
                <h4 className="card-title mb-3 fw-bold">Promotion & Marketing</h4>
                <p className="card-text text-muted">
                  Strategic campaigns that amplify your event's visibility and attract your ideal audience through targeted digital and traditional channels.
                </p>
                <a href="#" className="btn btn-outline-danger rounded-pill mt-3">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn btn-danger btn-lg rounded-pill px-5 py-3 shadow-lg">View All Services</a>
        </div>
      </section>

     

      {/* Map Section with improved loading and accessibility */}
      <section className="container-fluid px-0 mb-5 position-relative" aria-label="Location map">
        <div 
          className="map-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark" 
          style={{ opacity: 0.2, zIndex: 1 }}
          aria-hidden="true"
        />
        <div 
          id="map" 
          className={`animate-on-scroll ${getAnimationClass('map', 'fadeIn')}`} 
          style={{height: '450px', position: 'relative'}}
        >
          <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575442540287!2d79.85711791477243!3d6.927079920194078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259251b57a431%3A0x8f44ddf4b95c3b66!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1616593232261!5m2!1sen!2sus" 
width="100%" 
height="100%" 
style={{border: 0, position: 'relative', zIndex: 0}} 
allowFullScreen="" 
loading="lazy"
title="SOUNDWAVE Location"
aria-label="Map showing SOUNDWAVE office location"
/>
</div>
</section>

{/* FAQ Section */}
<section className="container py-5 mb-5" aria-label="Frequently asked questions">
<div id="faq" className={`text-center mb-5 animate-on-scroll ${getAnimationClass('faq', 'fadeInUp')}`}>
<h2 className="fw-bold mb-4 position-relative d-inline-block">
Frequently Asked Questions
<span 
  className="position-absolute start-50 bottom-0 translate-middle-x" 
  style={{ height: '3px', width: '60px', backgroundColor: '#dc3545', display: 'block' }}
  aria-hidden="true"
/>
</h2>
<p className="lead mb-5">Find answers to common questions about our services</p>
</div>

<div className="row g-4">
<div className="col-lg-6">
<div className={`accordion accordion-flush animate-on-scroll ${getAnimationClass('faq-1', 'fadeIn')}`} id="faqAccordion">
  <div className="accordion-item bg-dark border border-secondary mb-3 rounded overflow-hidden">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
        How far in advance should I book your services?
      </button>
    </h3>
    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
      <div className="accordion-body text-light">
        We recommend booking our services at least 3-6 months in advance for larger events to ensure availability of your preferred dates and artists. For smaller events, 1-2 months notice is typically sufficient, but earlier is always better to secure your preferred options.
      </div>
    </div>
  </div>
  
  <div className="accordion-item bg-dark border border-secondary mb-3 rounded overflow-hidden">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
        What types of events do you specialize in?
      </button>
    </h3>
    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
      <div className="accordion-body text-light">
        We specialize in a wide range of music events including concerts, music festivals, album release parties, corporate events with musical entertainment, private parties, club events, and promotional music tours. Our team has experience across various music genres and event sizes.
      </div>
    </div>
  </div>
  
  <div className="accordion-item bg-dark border border-secondary rounded overflow-hidden">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
        Do you offer package deals for multiple services?
      </button>
    </h3>
    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
      <div className="accordion-body text-light">
        Yes, we offer customized package deals when you book multiple services with us. These packages can include event planning, artist booking, venue selection, marketing, and production services at competitive rates. Contact us to discuss a tailored package for your specific needs.
      </div>
    </div>
  </div>
</div>
</div>

<div className="col-lg-6">
<div className={`accordion accordion-flush animate-on-scroll ${getAnimationClass('faq-2', 'fadeIn', 0.2)}`} id="faqAccordion2">
  <div className="accordion-item bg-dark border border-secondary mb-3 rounded overflow-hidden">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
        What is your payment structure?
      </button>
    </h3>
    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
      <div className="accordion-body text-light">
        Our standard payment structure includes a 30% deposit to secure your date and begin work on your event, with the remaining balance typically due in installments as we reach key planning milestones. For larger events, we can create a custom payment schedule that works for your budget planning.
      </div>
    </div>
  </div>
  
  <div className="accordion-item bg-dark border border-secondary mb-3 rounded overflow-hidden">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
        Do you handle international events?
      </button>
    </h3>
    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
      <div className="accordion-body text-light">
        Yes, we have experience planning and executing music events internationally. Our team can navigate different market requirements, local regulations, and logistics for international venues. We have a network of global partners to ensure your event runs smoothly regardless of location.
      </div>
    </div>
  </div>
  
  <div className="accordion-item bg-dark border border-secondary rounded overflow-hidden">
    <h3 className="accordion-header">
      <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
        What happens if an artist cancels at the last minute?
      </button>
    </h3>
    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
      <div className="accordion-body text-light">
        We always have contingency plans in place for unforeseen circumstances. If an artist cancels at the last minute, we immediately activate our network to find a suitable replacement of similar caliber. Our contracts include provisions for such situations, and we work tirelessly to ensure your event continues without disruption.
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>

{/* Newsletter Section with improved design */}
<section className="py-5 bg-gradient" style={{background: 'linear-gradient(90deg, #111, #300)'}} aria-label="Newsletter signup">
<div className="container">
<div id="newsletter" className={`py-5 px-4 rounded-3 text-center animate-on-scroll ${getAnimationClass('newsletter', 'fadeInUp')}`}>
<div className="row justify-content-center">
  <div className="col-lg-8">
    <div className="mb-4">
      <FaMusic className="text-danger" size={40} />
    </div>
    <h3 className="display-5 fw-bold mb-3">Stay in the Loop</h3>
    <p className="lead mb-5">Subscribe to our newsletter for exclusive music industry insights, event tips, and special offers</p>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form className="newsletter-form d-flex flex-column flex-sm-row gap-2">
          <input 
            type="email" 
            className="form-control form-control-lg bg-dark text-light border-secondary" 
            placeholder="Your email address" 
            aria-label="Email address for newsletter"
            required
          />
          <button 
            className="btn btn-danger btn-lg px-4" 
            type="submit"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
        <p className="text-muted mt-3 small">By subscribing, you agree to our privacy policy and consent to receive updates from our company.</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>



{/* Back to Top Button */}
<a 
href="#" 
className="btn btn-danger rounded-circle position-fixed bottom-0 end-0 m-4 shadow-lg back-to-top" 
style={{width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}}
aria-label="Back to top"
>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>
</a>

<style jsx>{`
/* Enhanced animations with better performance */
.animate-on-scroll {
opacity: 0;
transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
will-change: opacity;
}

.animate-on-scroll.animate__animated {
opacity: 1;
}

/* Improved floating animation for service cards */
.service-card {
transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
          box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform, box-shadow;
backface-visibility: hidden;
}

.service-card:hover {
transform: translateY(-10px);
box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5) !important;
border-bottom: 3px solid #dc3545 !important;
}

/* Optimized glowing effect for service icons */
.service-icon {
transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
will-change: box-shadow, transform;
}

.service-card:hover .service-icon {
box-shadow: 0 0 25px rgba(220, 53, 69, 0.7);
transform: scale(1.1);
}

/* Improved social icons hover effect */
.social-icon {
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform, background-color, border-color, box-shadow;
}

.social-icon:hover {
background-color: #dc3545 !important;
border-color: #dc3545 !important;
transform: translateY(-3px);
box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
}

/* More efficient pulse animation */
.pulse-animation {
animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform, box-shadow;
}

@keyframes pulse {
0% {
transform: scale(1);
box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.4);
}

70% {
transform: scale(1.05);
box-shadow: 0 0 0 10px rgba(220, 53, 69, 0);
}

100% {
transform: scale(1);
box-shadow: 0 0 0 0 rgba(220, 53, 69, 0);
}
}

/* Enhanced form styles with focus states */
.form-control:focus, .form-select:focus {
border-color: #dc3545 !important;
box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25) !important;
}

/* Optimized button shine effect */
.btn-danger {
position: relative;
overflow: hidden;
z-index: 1;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform, box-shadow;
}

.btn-danger:before {
content: '';
position: absolute;
top: 0;
left: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
z-index: -1;
transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform;
}

.btn-danger:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

.btn-danger:hover:before {
transform: translateX(200%);
}

/* Hero section optimized parallax effect */
.hero-background {
transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
will-change: transform;
}

.hero-section:hover .hero-background {
transform: scale(1.15);
}

/* Floating animation for cards in hero */
.floating-cards .card:first-child {
animation: float 4s ease-in-out infinite;
}

.floating-cards .card:last-child {
animation: float 4s ease-in-out infinite 1s;
}

@keyframes float {
0% {
transform: translateY(0px);
}
50% {
transform: translateY(-15px);
}
100% {
transform: translateY(0px);
}
}

/* Additional hover effects */
.hover-text-danger:hover {
color: #dc3545 !important;
text-decoration: underline !important;
transition: all 0.3s ease;
}

/* Enhanced accordion styles */
.accordion-button:not(.collapsed) {
background-color: rgba(220, 53, 69, 0.1) !important;
color: #dc3545 !important;
box-shadow: none !important;
}

.accordion-button:focus {
box-shadow: none !important;
border-color: rgba(220, 53, 69, 0.5) !important;
}

/* Back to top button animation */
.back-to-top {
opacity: 0.7;
transition: all 0.3s ease;
}

.back-to-top:hover {
opacity: 1;
transform: translateY(-5px);
}



/* Responsive improvements */
@media (max-width: 991.98px) {
.hero-section {
min-height: 60vh;
text-align: center;
}

.pulse-animation {
animation: none; /* Disable pulse on mobile for better performance */
}

.navbar-collapse {
background-color: rgba(0, 0, 0, 0.95);
padding: 1rem;
border-radius: 0.5rem;
margin-top: 1rem;
}

.navbar-nav .nav-item {
padding: 0.5rem 0;
text-align: center;
}

/* Improve spacing on mobile */
.service-card, 
.contact-form, 
#contact-info, 
.social-section {
margin-bottom: 2rem;
}
}

@media (max-width: 767.98px) {
h1.display-3 {
font-size: 2.5rem;
}

.lead {
font-size: 1rem !important;
}

.social-icons-container {
justify-content: center;
}

.service-icon {
width: 70px !important;
height: 70px !important;
}

.hero-section {
text-align: center;
}
}
`}</style>
</div>
);
};

export default Contact;