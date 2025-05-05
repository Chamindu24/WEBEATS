import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaFileContract, 
  FaBalanceScale, 
  FaHandshake, 
  FaCreditCard, 
  FaUndo, 
  FaUserCheck 
} from 'react-icons/fa';

const TermsOfService = () => {
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

  const termsPoints = [
    {
      icon: FaBalanceScale,
      title: "Event Booking Terms",
      description: "All event bookings are subject to availability and confirmation. Prices are final at the time of booking and may be subject to change for special or custom events."
    },
    {
      icon: FaHandshake,
      title: "Service Agreements",
      description: "WEBEATS provides comprehensive event planning services. Our agreements outline specific deliverables, timelines, and mutual expectations for each unique event."
    },
    {
      icon: FaCreditCard,
      title: "Payment Policies",
      description: "A non-refundable deposit is required to secure event planning services. Full payment is due prior to event execution. Multiple payment plans are available."
    },
    {
      icon: FaUndo,
      title: "Cancellation & Refund",
      description: "Cancellations must be submitted in writing. Refund eligibility depends on the timing and specific circumstances of the event cancellation."
    }
  ];

  return (
    <div className="terms-of-service">
      {/* Hero Section */}
      <div className="terms-hero bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center" data-aos="fade-up">
              <FaFileContract size={80} className="text-primary mb-4" />
              <h1 className="display-4 fw-bold">Terms of Service</h1>
              <p className="lead">Transparent Guidelines for Exceptional Experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Details Section */}
      <div className="terms-details py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {termsPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="terms-card mb-4" 
                  data-aos="fade-up" 
                  data-aos-delay={`${100 * (index + 1)}`}
                >
                  <div className="card border-0 shadow-sm">
                    <div className="card-body d-flex align-items-center">
                      <div className="terms-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-4">
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

      {/* User Rights Section */}
      <div className="user-rights-section bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="user-rights-content">
                <h2 className="display-6 fw-bold mb-4">Your Rights & Responsibilities</h2>
                <p className="lead">
                  By engaging with WEBEATS, you agree to maintain open communication, provide accurate event details, and collaborate to create exceptional musical experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="user-verification bg-white p-4 rounded shadow-sm">
                <h4 className="mb-3">
                  <FaUserCheck className="me-2 text-primary" /> User Verification
                </h4>
                <p>
                  We reserve the right to verify user identity and event details to ensure service quality and safety.
                  <br />
                  <strong>Verification may include:</strong>
                  <ul className="list-unstyled mt-2">
                    <li>• Personal identification</li>
                    <li>• Event purpose confirmation</li>
                    <li>• Payment method validation</li>
                  </ul>
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
              <FaBalanceScale size={60} className="text-primary mb-4" />
              <h2 className="display-6 fw-bold mb-4">Legal Framework</h2>
              <p className="lead">
                WEBEATS operates under strict legal guidelines, ensuring fair practices, consumer protection, and comprehensive service delivery across all event planning scenarios.
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
              <h3 className="display-6 fw-bold">Clear. Fair. Comprehensive.</h3>
              <p className="lead mb-0">Understanding our terms ensures a smooth event planning journey.</p>
            </div>
            <div className="col-lg-4 text-lg-end" data-aos="fade-left">
              <button className="btn btn-light btn-lg rounded-pill px-4">
                Download Full Terms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .terms-hero {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/api/placeholder/1920/600');
          background-size: cover;
          background-position: center;
          min-height: 50vh;
        }

        .terms-icon {
          width: 70px;
          height: 70px;
        }

        .terms-card .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .terms-card .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        @media (max-width: 768px) {
          .terms-hero {
            min-height: auto;
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;