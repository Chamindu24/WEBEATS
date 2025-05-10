import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaAward, 
  FaNewspaper, 
  FaMicrophone, 
  FaGraduationCap, 
  FaGlobeAmericas,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTimes
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import admin from "./images/admin.jpg"

const AdminPortfolio = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    
    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="admin-portfolio position-relative">
      {/* Contact Modal */}
      {isContactModalOpen && (
        <div 
          className="contact-modal position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
          data-aos="fade-in"
        >
          <div 
            className="contact-content bg-white p-5 rounded-4 text-center position-relative"
            data-aos="zoom-in"
          >
            <button 
              className="btn-close position-absolute top-4 end-4" 
              onClick={handleCloseModal}
            >
              <FaTimes />
            </button>
            <h2 className="mb-4">Contact Information</h2>
            
            <div className="contact-methods mb-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaEnvelope className="me-3 text-primary" size={30} />
                <a href="mailto:ranidu@webeats.com" className="text-decoration-none">
                  ranidu@webeats.com
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaPhone className="me-3 text-success" size={30} />
                <a href="tel:+1-555-123-4567" className="text-decoration-none">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            
            <div className="social-links d-flex justify-content-center gap-4">
              <a href="https://linkedin.com/in/ranidu" target="_blank" rel="noopener noreferrer" className="text-primary">
                <FaLinkedin size={40} />
              </a>
              <a href="https://twitter.com/ranidu" target="_blank" rel="noopener noreferrer" className="text-info">
                <FaTwitter size={40} />
              </a>
              <a href="https://instagram.com/ranidu" target="_blank" rel="noopener noreferrer" className="text-danger">
                <FaInstagram size={40} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-section bg-dark text-white py-5">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4 text-center text-lg-start">
                Ranidu Rochitha Pradeeshan
                <br />
                <span className="text-primary">Founder & CEO</span>
              </h1>
              <p className="lead mb-4 text-center text-lg-start">Music Event Visionary & Innovative Entrepreneur</p>
              <p className="mb-4 text-center text-lg-start">
                Transforming the music event landscape through creative leadership, strategic innovation, and a passion for connecting people through extraordinary experiences.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <button className="btn btn-primary btn-lg rounded-pill px-4">Download CV</button>
                <button 
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                  onClick={handleContactClick}
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-left">
              <div className="position-relative text-center">
                <br></br>
                <br></br>
                <img 
                  src={admin} 
                  alt="Ranidu" 
                  className="img-fluid rounded-circle shadow-lg mx-auto" 
                  style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Journey Section */}
      <div className="professional-journey py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold" data-aos="fade-up">Professional Journey</h2>
              <div className="divider mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px' }} data-aos="zoom-in" data-aos-delay="100"></div>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">
                A path of innovation, leadership, and musical passion
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="service-icon bg-primary text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-4">
                    <FaAward size={24} />
                  </div>
                  <h4 className="card-title mb-3">Entrepreneurial Milestones</h4>
                  <p className="card-text">
                    Founded WEBEATS in 2015, growing from a startup to a leading music event company with over 500 successful events.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="service-icon bg-danger text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-4">
                    <FaNewspaper size={24} />
                  </div>
                  <h4 className="card-title mb-3">Media Recognition</h4>
                  <p className="card-text">
                    Featured in Forbes, Billboard, and EventTech Magazine for innovative approach to music event production.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="service-icon bg-success text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-4">
                    <FaGlobeAmericas size={24} />
                  </div>
                  <h4 className="card-title mb-3">Global Impact</h4>
                  <p className="card-text">
                    Expanded WEBEATS operations internationally, producing events across North America and Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conference & Magazine Features Section */}
      <div className="conference-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold" data-aos="fade-up">Conference & Magazine Highlights</h2>
              <div className="divider mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px' }} data-aos="zoom-in" data-aos-delay="100"></div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="magazine-feature p-4 bg-white shadow-sm rounded">
                <div className="d-flex align-items-center mb-3">
                  <FaNewspaper className="me-3 text-primary" size={40} />
                  <div>
                    <h4 className="mb-1">Billboard Magazine</h4>
                    <p className="text-muted mb-0">Feature Article: "Music Event Innovators"</p>
                  </div>
                </div>
                <p>
                  Exclusive interview discussing WEBEATS' revolutionary approach to music event production and industry transformation.
                </p>
                <a href="https://twitter.com/username" className="btn btn-outline-primary btn-sm">Read Feature</a>
              </div>
            </div>
            
            <div className="col-md-6" data-aos="fade-left">
              <div className="conference-feature p-4 bg-white shadow-sm rounded">
                <div className="d-flex align-items-center mb-3">
                  <FaMicrophone className="me-3 text-danger" size={40} />
                  <div>
                    <h4 className="mb-1">Global Music Summit</h4>
                    <p className="text-muted mb-0">Keynote Speaker: Future of Event Production</p>
                  </div>
                </div>
                <p>
                  Delivered groundbreaking keynote on technological innovations and audience engagement in music events.
                </p>
                <a href="https://twitter.com/username" className="btn btn-outline-danger btn-sm">View Presentation</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Achievements Section */}
      <div className="education-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold" data-aos="fade-up">Education & Achievements</h2>
              <div className="divider mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px' }} data-aos="zoom-in" data-aos-delay="100"></div>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="education-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaGraduationCap className="mb-3 text-primary" size={60} />
                  <h4 className="mb-2">Master's Degree</h4>
                  <p className="text-muted mb-2">Music Business Management</p>
                  <p className="small">New York University</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="achievement-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaAward className="mb-3 text-warning" size={60} />
                  <h4 className="mb-2">Entrepreneur of the Year</h4>
                  <p className="text-muted mb-2">Music Innovation Awards</p>
                  <p className="small">2022 Recipient</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="recognition-card card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <FaGlobeAmericas className="mb-3 text-success" size={60} />
                  <h4 className="mb-2">International Speaker</h4>
                  <p className="text-muted mb-2">Music Technology Conferences</p>
                  <p className="small">Global Thought Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section py-5 bg-primary text-white">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-2">Let's Collaborate</h2>
              <p className="lead mb-0">Connect with me to explore innovative music event solutions.</p>
            </div>
            <div className="col-lg-4 text-lg-end" data-aos="fade-left">
              <button className="btn btn-light btn-lg rounded-pill px-4 me-2 mb-2">Book Consultation</button>
              <button 
                className="btn btn-outline-light btn-lg rounded-pill px-4 mb-2"
                onClick={handleContactClick}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .hero-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/api/placeholder/1920/600');
          background-size: cover;
          background-position: center;
          min-height: 75vh;
          display: flex;
          align-items: center;
        }
        
        .divider {
          transition: width 0.5s ease;
        }
        
        .service-icon {
          width: 70px;
          height: 70px;
          transition: transform 0.3s ease;
        }
        
        .hover-card:hover .service-icon {
          transform: scale(1.1);
        }
        
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
        
        .magazine-feature, 
        .conference-feature,
        .education-card,
        .achievement-card,
        .recognition-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .magazine-feature:hover,
        .conference-feature:hover,
        .education-card:hover,
        .achievement-card:hover,
        .recognition-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }
        
        .contact-modal {
          backdrop-filter: blur(5px);
        }

        .contact-content {
          max-width: 500px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        .social-links a {
          transition: transform 0.3s ease;
        }

        .social-links a:hover {
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 80px 0;
          }

          .hero-section .display-4 {
            font-size: 2.5rem;
          }

          .btn-lg {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminPortfolio;