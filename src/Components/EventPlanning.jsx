import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMusic, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventPlanning = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Beat Festival",
      date: "June 15, 2025",
      location: "Riverside Park",
      image: "https://via.placeholder.com/400x250",
      description: "A day filled with the hottest electronic music artists and DJs from around the world."
    },
    {
      id: 2,
      title: "Jazz in the City",
      date: "July 8, 2025",
      location: "Downtown Plaza",
      image: "https://via.placeholder.com/400x250",
      description: "Smooth jazz performances under the stars with renowned jazz musicians."
    },
    {
      id: 3,
      title: "Rock Revolution",
      date: "August 22, 2025",
      location: "Metro Arena",
      image: "https://via.placeholder.com/400x250",
      description: "The ultimate rock experience featuring legendary bands and upcoming talents."
    }
  ];

  // Sample services data
  const services = [
    {
      icon: <FaMusic size={36} className="text-primary mb-3" />,
      title: "Artist Booking",
      description: "We handle all aspects of booking the perfect artists for your event."
    },
    {
      icon: <FaCalendarAlt size={36} className="text-primary mb-3" />,
      title: "Event Planning",
      description: "Full-service planning from concept development to execution."
    },
    {
      icon: <FaMapMarkerAlt size={36} className="text-primary mb-3" />,
      title: "Venue Selection",
      description: "Access to exclusive venues tailored to your event needs."
    },
    {
      icon: <FaUsers size={36} className="text-primary mb-3" />,
      title: "Audience Engagement",
      description: "Interactive experiences to keep your audience engaged and excited."
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Event Manager, SoundWave Productions",
      quote: "WEBEATS transformed our annual music festival into an unforgettable experience. Their attention to detail and understanding of what makes a great music event is unparalleled.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Marketing Director, Harmony Records",
      quote: "From concept to execution, the WEBEATS team delivered beyond our expectations. Our album launch party was the talk of the industry for weeks!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Independent Artist",
      quote: "As an independent artist, I was amazed at how WEBEATS could create such an impactful tour with my limited budget. Professional, creative, and incredibly supportive.",
      rating: 4
    }
  ];

  // Animation setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    
    // Simulate loading for animation effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your event inquiry has been submitted! Our team will contact you shortly.");
    e.target.reset();
  };

  if (isLoading) {
    return (
      <div className="loading-container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="ms-3 text-primary">WEBEATS</h3>
      </div>
    );
  }

  return (
    <div className="event-planning-container">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-dark text-white position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <div className="container position-relative" data-aos="fade-up">
          <div className="py-5">
            <h1 className="display-3 fw-bold mb-3">WEBEATS EVENT PLANNING</h1>
            <h2 className="fs-4 mb-4">Creating Unforgettable Music Experiences</h2>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-lg me-3">Get Started</button>
              <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mt-5">
        <ul className="nav nav-pills justify-content-center mb-4" id="eventTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} 
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'services' ? 'active' : ''}`} 
              onClick={() => setActiveTab('services')}
            >
              Our Services
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'events' ? 'active' : ''}`} 
              onClick={() => setActiveTab('events')}
            >
              Upcoming Events
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} 
              onClick={() => setActiveTab('contact')}
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Tab Contents */}
        <div className="tab-content py-4">
          {/* Overview Tab */}
          <div className={`tab-pane fade ${activeTab === 'overview' ? 'show active' : ''}`}>
            <div className="row g-4">
              <div className="col-md-6" data-aos="fade-right">
                <div className="p-4 h-100">
                  <h2 className="fw-bold mb-4">The WEBEATS Experience</h2>
                  <p className="lead">We specialize in creating powerful music events that resonate with audiences and elevate artist brands.</p>
                  <p>With over a decade of experience in the music industry, WEBEATS has become synonymous with exceptional event planning and execution. We understand the unique requirements of music events and deliver experiences that leave lasting impressions.</p>
                  <div className="d-flex mt-4">
                    <div className="me-4">
                      <h3 className="fw-bold text-primary">250+</h3>
                      <p>Events Completed</p>
                    </div>
                    <div className="me-4">
                      <h3 className="fw-bold text-primary">50k+</h3>
                      <p>Happy Attendees</p>
                    </div>
                    <div>
                      <h3 className="fw-bold text-primary">98%</h3>
                      <p>Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">Why Choose WEBEATS?</h3>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaStar />
                    </div>
                    <div>
                      <h5>Industry Expertise</h5>
                      <p>Our team consists of music industry veterans who understand the nuances of creating successful events.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaStar />
                    </div>
                    <div>
                      <h5>Artist Connections</h5>
                      <p>Direct relationships with artists, labels, and managers ensure seamless booking processes.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaStar />
                    </div>
                    <div>
                      <h5>Technical Excellence</h5>
                      <p>State-of-the-art sound, lighting, and stage design for exceptional production quality.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaStar />
                    </div>
                    <div>
                      <h5>Full-Service Solutions</h5>
                      <p>From concept to tear-down, we handle every aspect of your music event.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-5 pt-4" data-aos="fade-up">
              <h2 className="text-center mb-5">What Our Clients Say</h2>
              <div className="row">
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <div className="mb-3">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < testimonial.rating ? "text-warning" : "text-muted"} />
                          ))}
                        </div>
                        <p className="card-text fst-italic">"{testimonial.quote}"</p>
                        <div className="d-flex align-items-center mt-3">
                          <div className="bg-primary text-white rounded-circle p-3 me-3">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <h6 className="mb-0">{testimonial.name}</h6>
                            <small className="text-muted">{testimonial.position}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Tab */}
          <div className={`tab-pane fade ${activeTab === 'services' ? 'show active' : ''}`}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="fw-bold">Our Comprehensive Services</h2>
              <p className="lead">We offer end-to-end solutions for all your music event needs</p>
            </div>
            
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      {service.icon}
                      <h4 className="mb-3">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="row mt-5 g-4">
              <div className="col-md-6" data-aos="fade-right">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">Event Types We Specialize In</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent d-flex align-items-center">
                      <FaMusic className="text-primary me-3" /> Music Festivals
                    </li>
                    <li className="list-group-item bg-transparent d-flex align-items-center">
                      <FaMusic className="text-primary me-3" /> Album Release Parties
                    </li>
                    <li className="list-group-item bg-transparent d-flex align-items-center">
                      <FaMusic className="text-primary me-3" /> Artist Tours
                    </li>
                    <li className="list-group-item bg-transparent d-flex align-items-center">
                      <FaMusic className="text-primary me-3" /> Corporate Music Events
                    </li>
                    <li className="list-group-item bg-transparent d-flex align-items-center">
                      <FaMusic className="text-primary me-3" /> Private Concerts
                    </li>
                    <li className="list-group-item bg-transparent d-flex align-items-center">
                      <FaMusic className="text-primary me-3" /> DJ Shows & Electronic Events
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="bg-primary text-white p-4 rounded-3 h-100">
                  <h3 className="mb-4">Our Planning Process</h3>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-white text-primary rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Consultation & Vision</h5>
                      <p>We start by understanding your goals, audience, and artistic vision.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-white text-primary rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>Creative Development</h5>
                      <p>Our team develops a comprehensive event concept aligned with your brand.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-white text-primary rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Logistics & Planning</h5>
                      <p>Meticulous planning of all event details, from venue to technical requirements.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-white text-primary rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Flawless Execution</h5>
                      <p>Our experienced team ensures smooth operation throughout your event.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events Tab */}
          <div className={`tab-pane fade ${activeTab === 'events' ? 'show active' : ''}`}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="fw-bold">Upcoming WEBEATS Events</h2>
              <p className="lead">Join us at our upcoming music events</p>
            </div>

            <div className="row g-4">
              {upcomingEvents.map((event, index) => (
                <div key={event.id} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 shadow">
                    <img src={event.image} className="card-img-top" alt={event.title} />
                    <div className="card-body">
                      <h4 className="card-title">{event.title}</h4>
                      <div className="d-flex align-items-center mb-2">
                        <FaCalendarAlt className="text-primary me-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <FaMapMarkerAlt className="text-primary me-2" />
                        <span>{event.location}</span>
                      </div>
                      <p className="card-text">{event.description}</p>
                      <button className="btn btn-outline-primary">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5 pt-3" data-aos="fade-up">
              <h3>Create Your Own Music Event</h3>
              <p className="mb-4">Let WEBEATS help you plan your next unforgettable music experience</p>
              <button className="btn btn-primary btn-lg" onClick={() => setActiveTab('contact')}>
                Start Planning
              </button>
            </div>
          </div>

          {/* Contact Us Tab */}
          <div className={`tab-pane fade ${activeTab === 'contact' ? 'show active' : ''}`}>
            <div className="row g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <h2 className="fw-bold mb-4">Get In Touch</h2>
                <p className="lead mb-4">Ready to create an unforgettable music event? Fill out the form and our team will contact you within 24 hours.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eventType" className="form-label">Event Type</label>
                    <select className="form-select" id="eventType">
                      <option selected>Select event type</option>
                      <option value="festival">Music Festival</option>
                      <option value="concert">Concert</option>
                      <option value="tour">Artist Tour</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="private">Private Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Tell Us About Your Event</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Submit Inquiry</button>
                </form>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">Why Plan Your Music Event With Us</h3>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaClock />
                    </div>
                    <div>
                      <h5>Quick Response Time</h5>
                      <p>Our team responds to all inquiries within 24 hours to get your planning started right away.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaUsers />
                    </div>
                    <div>
                      <h5>Dedicated Event Manager</h5>
                      <p>You'll work with a dedicated event manager who will guide you through the entire process.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaMusic />
                    </div>
                    <div>
                      <h5>Music Industry Connections</h5>
                      <p>Leverage our extensive network of artists, venues, and vendors for your event.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaStar />
                    </div>
                    <div>
                      <h5>Proven Track Record</h5>
                      <p>With hundreds of successful music events, we have the experience to make yours exceptional.</p>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <h4 className="mb-3">Contact Information</h4>
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="text-primary me-2" />
                      <span>123 Music Street, Rhythm City, RC 10000</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-envelope text-primary me-2"></i>
                      <span>events@webeats.com</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-telephone text-primary me-2"></i>
                      <span>(555) 123-4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white text-center py-5 mt-5" data-aos="fade-up">
        <div className="container py-3">
          <h2 className="mb-4">Ready to Create Unforgettable Music Experiences?</h2>
          <p className="lead mb-4">Let WEBEATS transform your music event vision into reality</p>
          <button className="btn btn-light btn-lg" onClick={() => setActiveTab('contact')}>
            Start Your Event Planning
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background-image: url('https://via.placeholder.com/1600x800');
          background-size: cover;
          background-position: center;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        
        .nav-pills .nav-link {
          border-radius: 50px;
          padding: 8px 20px;
          margin: 0 5px;
          font-weight: 500;
        }
        
        .nav-pills .nav-link.active {
          background-color: var(--bs-primary);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 40vh;
          }
          
          .nav-pills .nav-link {
            padding: 6px 12px;
            margin: 0 2px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EventPlanning;