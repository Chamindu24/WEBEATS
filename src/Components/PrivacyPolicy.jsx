import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase, FaClipboardList, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    
    window.addEventListener('resize', AOS.refresh);
    return () => {
      window.removeEventListener('resize', AOS.refresh);
    };
  }, []);
  
  const privacyPoints = [
   
    {
      icon: FaShieldAlt,
      title: "Information We Collect",
      description: "We collect personal information that you voluntarily provide to us when registering for events, subscribing to newsletters, or contacting our team. This may include name, email, phone number, and event preferences."
    },
    {
      icon: FaLock,
      title: "How We Use Your Information",
      description: "We use your information to provide personalized event experiences, send event updates, process bookings, and communicate important information related to our music events and services."
    },
    {
      icon: FaUserSecret,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."
    },
    {
      icon: FaDatabase,
      title: "Data Sharing",
      description: "We do not sell or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our business, but only as necessary."
    }
  ];

  return (
    <div className="privacy-policy">
      {/* Hero Section */}
     
      <div className="privacy-hero bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
          
            <div className="col-12 text-center" data-aos="fade-up">
           
            <br></br><br></br><br></br><br></br>
            
              <FaShieldAlt size={80} className="text-primary mb-4" />
              <br></br> <br></br>
              <h1 className="display-4 fw-bold">Privacy Policy</h1>
              <p className="lead">Protecting Your Data, Preserving Your Trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Details Section */}
      <div className="privacy-details py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {privacyPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="privacy-card mb-4" 
                  data-aos="fade-up" 
                  data-aos-delay={`${100 * (index + 1)}`}
                >
                  <div className="card border-0 shadow-sm">
                    <div className="card-body d-flex align-items-center">
                      <div className="privacy-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-4">
                        <point.icon size={30} />
                      </div>
                      <div>
                        <h4 className="card-title">{point.title}</h4>
                        <p className="card-text text-muted">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Consent and Contact Section */}
      <div className="consent-section bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="consent-content">
                <h2 className="display-6 fw-bold mb-4">Your Consent Matters</h2>
                <p className="lead">
                  By using our services, you consent to our privacy practices. You can withdraw consent or request data deletion at any time.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="contact-info bg-white p-4 rounded shadow-sm">
                <h4 className="mb-3">
                  <FaEnvelope className="me-2 text-primary" /> Contact Our Privacy Team
                </h4>
                <p>
                  Have questions or concerns about your data? 
                  <br />
                  <strong>Email:</strong> privacy@webeats.com
                  <br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Compliance Section */}
      <div className="legal-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <FaClipboardList size={60} className="text-primary mb-4" />
              <h2 className="display-6 fw-bold mb-4">Legal Compliance</h2>
              <p className="lead">
                WEBEATS is committed to complying with data protection regulations, including GDPR and CCPA. We continuously update our practices to meet the highest standards of data privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0" data-aos="fade-right">
              <h3 className="display-6 fw-bold">Transparent. Secure. Trustworthy.</h3>
              <p className="lead mb-0">We're dedicated to protecting your privacy at every step.</p>
            </div>
            <div className="col-lg-4 text-lg-end" data-aos="fade-left">
              <button className="btn btn-light btn-lg rounded-pill px-4">
                Download Full Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .privacy-hero {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/api/placeholder/1920/600');
          background-size: cover;
          background-position: center;
          min-height: 50vh;
        }

        .privacy-icon {
          width: 70px;
          height: 70px;
        }

        .privacy-card .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .privacy-card .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        @media (max-width: 768px) {
          .privacy-hero {
            min-height: auto;
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;