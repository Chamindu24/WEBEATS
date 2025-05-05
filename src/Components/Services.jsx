import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMusic, FaCalendarAlt, FaMicrophone, FaVideo, FaAd, FaUsers, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css'; // Make sure to create this CSS file for additional styling

const Services = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  // Service data
  const services = [
    {
      id: 1,
      icon: <FaMusic size={50} />,
      title: "Music Production",
      description: "Professional studio services with state-of-the-art equipment and experienced producers to bring your musical vision to life.",
      animation: "fade-right"
    },
    {
      id: 2,
      icon: <FaCalendarAlt size={50} />,
      title: "Event Planning",
      description: "Comprehensive event planning for concerts, album launches, tours, and music festivals. We handle everything from venue selection to artist coordination.",
      animation: "fade-up",
      link: "/EventPlanning"
    },
    {
      id: 3,
      icon: <FaMicrophone size={50} />,
      title: "Artist Promotion",
      description: "Strategic promotion services to increase your visibility and grow your audience through targeted campaigns and industry connections.",
      animation: "fade-left"
    },
    {
      id: 4,
      icon: <FaVideo size={50} />,
      title: "Music Video Production",
      description: "Creative and high-quality music video production with expert directors, cinematographers, and editing professionals.",
      animation: "fade-right"
    },
    {
      id: 5,
      icon: <FaAd size={50} />,
      title: "Digital Marketing",
      description: "Specialized digital marketing for musicians and events, including social media management, content creation, and targeted ad campaigns.",
      animation: "fade-up"
    },
    {
      id: 6,
      icon: <FaUsers size={50} />,
      title: "Fan Engagement",
      description: "Innovative strategies to build and maintain genuine connections with fans, including merchandise design, fan clubs, and interactive experiences.",
      animation: "fade-left"
    }
  ];

  return (
    <section id="services" className="services-section py-5">
      {/* Animated background with music theme */}
      <div className="music-bg-animation">
        <div className="music-note-1"></div>
        <div className="music-note-2"></div>
        <div className="music-note-3"></div>
      </div>
      <br></br>
      <br></br>
      <div className="container">
        {/* Header with animation */}
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="zoom-in">
            <h2 className="section-title">Our <span className="text-primary">Services</span></h2>
            <div className="title-underline"></div>
            <p className="lead">Elevate your music career with our premium services</p>
          </div>
        </div>
        
        {/* Services Cards */}
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4" data-aos={service.animation}>
              <div className="service-card h-100">
                <div className="icon-wrapper mb-4">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="btn btn-outline-primary mt-3">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Service Banner */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up">
            <div className="featured-service p-4 text-center">
              <div className="featured-icon mb-3">
                <FaStar size={60} />
              </div>
              <h2>Upcoming Music Festival Planning</h2>
              <p className="lead">Special 20% discount on complete festival planning packages booked this month!</p>
              <button className="btn btn-lg btn-primary mt-3">Get Special Offer</button>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-4" data-aos="fade-up">
            <h2 className="section-title">Client <span className="text-primary">Feedback</span></h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="col-md-6" data-aos="fade-right">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Their event planning services transformed our album launch into an unforgettable experience. Professional, creative, and detail-oriented!"</p>
                <div className="client-info">
                  <h5>Sarah Johnson</h5>
                  <p>Independent Artist</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6" data-aos="fade-left">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The digital marketing campaign increased our ticket sales by 200%. Their industry knowledge and strategic approach made all the difference."</p>
                <div className="client-info">
                  <h5>Mark Davis</h5>
                  <p>Event Manager, Soundwave Festival</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call To Action */}
        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="zoom-in">
            <div className="cta-section p-5">
              <h2>Ready to amplify your music career?</h2>
              <p className="lead">Let's create something extraordinary together</p>
              <button className="btn btn-lg btn-primary me-3">Get Started</button>
              <button className="btn btn-lg btn-outline-light">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;