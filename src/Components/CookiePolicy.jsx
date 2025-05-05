import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaCookieBite, 
  FaShieldAlt, 
  FaDatabase, 
  FaInfoCircle, 
  FaTools, 
  FaClipboardList 
} from 'react-icons/fa';

interface CookieType {
  icon: React.ComponentType<{ size: number }>;
  title: string;
  description: string;
}

const CookiePolicy: React.FC = () => {
  const initAOS = useCallback(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    initAOS();
    
    const handleResize = () => AOS.refresh();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initAOS]);

  const cookieTypes: CookieType[] = [
    {
      icon: FaShieldAlt,
      title: "Essential Cookies",
      description: "Necessary cookies enable core website functionality. These are critical for basic site operations and cannot be disabled without impacting site performance."
    },
    {
      icon: FaDatabase,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously to improve user experience."
    },
    {
      icon: FaTools,
      title: "Functionality Cookies",
      description: "Allow us to provide enhanced features and personalization, such as remembering your preferences and providing customized services."
    },
    {
      icon: FaInfoCircle,
      title: "Marketing Cookies",
      description: "Used to track browsing habits and deliver targeted advertising that may be relevant to your interests across different websites."
    }
  ];

  return (
    <div className="cookie-policy">
      {/* Hero Section */}
      <section className="cookie-hero bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center" data-aos="fade-up">
              <FaCookieBite size={80} className="text-primary mb-4" />
              <h1 className="display-4 fw-bold">Cookie Policy</h1>
              <p className="lead">Transparency in Digital Interactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="cookie-details py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {cookieTypes.map((cookie, index) => (
                <div 
                  key={cookie.title} 
                  className="cookie-card mb-4" 
                  data-aos="fade-up" 
                  data-aos-delay={`${100 * (index + 1)}`}
                >
                  <div className="card border-0 shadow-sm">
                    <div className="card-body d-flex align-items-center">
                      <div className="cookie-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-4">
                        <cookie.icon size={30} />
                      </div>
                      <div>
                        <h4 className="card-title">{cookie.title}</h4>
                        <p className="card-text text-muted">{cookie.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Consent Section */}
      <section className="consent-section bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="consent-content">
                <h2 className="display-6 fw-bold mb-4">Your Cookie Choices</h2>
                <p className="lead">
                  You have the right to accept, reject, or manage cookie preferences. Our cookie consent tool allows you to customize your experience.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="cookie-management bg-white p-4 rounded shadow-sm">
                <h4 className="mb-3">
                  <FaTools className="me-2 text-primary" /> Cookie Management
                </h4>
                <p>
                  Manage your cookie preferences easily:
                  <br />
                  <strong>Options include:</strong>
                </p>
                <ul className="list-unstyled mt-2">
                  <li>• Accept all cookies</li>
                  <li>• Reject non-essential cookies</li>
                  <li>• Customize cookie preferences</li>
                </ul>
                
                <Link to="/CookiePreferencesModal" className="text-decoration-none">
                  <button className="btn btn-primary rounded-pill">
                    Manage Cookie Preferences
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="legal-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <FaClipboardList size={60} className="text-primary mb-4" />
              <h2 className="display-6 fw-bold mb-4">Regulatory Compliance</h2>
              <p className="lead">
                WEBEATS adheres to GDPR, CCPA, and international data protection regulations, ensuring transparent and responsible cookie usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-3 mb-lg-0" data-aos="fade-right">
              <h3 className="display-6 fw-bold">Transparent. Secure. Respectful.</h3>
              <p className="lead mb-0">Your digital privacy is our priority.</p>
            </div>
            <div className="col-lg-4 text-lg-end" data-aos="fade-left">
              <button className="btn btn-light btn-lg rounded-pill px-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .cookie-hero {
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/api/placeholder/1920/600');
          background-size: cover;
          background-position: center;
          min-height: 50vh;
        }

        .cookie-icon {
          width: 70px;
          height: 70px;
        }

        .cookie-card .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cookie-card .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        @media (max-width: 768px) {
          .cookie-hero {
            min-height: auto;
            padding: 60px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CookiePolicy;