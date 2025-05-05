import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaTicketAlt, 
  FaMusic, 
  FaStar, 
  FaCalendar, 
  FaMapMarkerAlt,
  FaUserFriends,
  FaEnvelope,
  FaPhone,
  FaTimes
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your actual event images
import heroImage from './images/445766634_1027174879018512_6957073165610683366_n.jpg';
import fooFightersImage from './images/481453346_1213683257034339_5301577722023970071_n.jpg';
import greenDayImage from './images/481477003_1212626657139999_3527936391724663356_n.jpg';
import imagineDragonsImage from './images/483956542_1089012146601037_4807447887239778052_n.jpg';
import galleryImage1 from './images/484035375_122145252080538790_309987949707414837_n (1).jpg';
import galleryImage2 from './images/484035375_122145252080538790_309987949707414837_n.jpg';
import galleryImage3 from './images/484148854_1228141275588537_1063489953346485746_n.jpg';
import galleryImage4 from './images/484175722_564469536607771_3680330014443260304_n.jpg';

const PremathmaEventPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
    
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

  const eventDetails = {
    title: "Premathma",
    date: "March 16, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "University Of Ruhuna",
    price: "$60",
    description: "An epic rock concert featuring legendary bands and emerging rockers.",
    artists: [
      {
        name: "Foo Fighters",
        image: fooFightersImage,
        description: "Grammy-winning rock legends known for their explosive performances."
      },
      {
        name: "Green Day",
        image: greenDayImage,
        description: "Punk rock icons bringing their high-energy music to the stage."
      },
      {
        name: "Imagine Dragons",
        image: imagineDragonsImage,
        description: "Alternative rock superstars with chart-topping hits."
      }
    ],
    gallery: [
      galleryImage1,
      galleryImage2,
      galleryImage3,
      galleryImage4
    ]
  };

  return (
    <div className="premathma-event position-relative">
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
            <h2 className="mb-4">Event Contact Information</h2>
            
            <div className="contact-methods mb-4">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaEnvelope className="me-3 text-primary" size={30} />
                <a href="mailto:events@premathma.com" className="text-decoration-none">
                  events@premathma.com
                </a>
              </div>
              <div className="d-flex justify-content-center align-items-center mb-3">
                <FaPhone className="me-3 text-success" size={30} />
                <a href="tel:+1-555-CONCERT" className="text-decoration-none">
                  +1 (555) CONCERT
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div 
        className="hero-section text-white py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-right">
              <h1 className="display-4 fw-bold mb-4">{eventDetails.title}</h1>
              <div className="event-details mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FaCalendar className="me-2 text-primary" />
                  <span>{eventDetails.date} | {eventDetails.time}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="me-2 text-danger" />
                  <span>{eventDetails.location}</span>
                </div>
              </div>
              <p className="lead mb-4">{eventDetails.description}</p>
              <div className="d-flex gap-3">
                <button 
                  className="btn btn-primary btn-lg rounded-pill px-4"
                  onClick={handleContactClick}
                >
                  <FaTicketAlt className="me-2" /> Buy Tickets
                </button>
                <button className="btn btn-outline-light btn-lg rounded-pill px-4">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Artists Section */}
      <div className="artists-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold" data-aos="fade-up">
                <FaUserFriends className="me-3 text-primary" /> Featured Artists
              </h2>
              <div className="divider mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px' }} data-aos="zoom-in"></div>
            </div>
          </div>
          
          <div className="row g-4">
            {eventDetails.artists.map((artist, index) => (
              <div className="col-md-4" key={artist.name} data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                <div className="artist-card card h-100 border-0 shadow-sm overflow-hidden">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="card-img-top artist-image" 
                  />
                  <div className="card-body text-center p-4">
                    <h4 className="card-title mb-3">{artist.name}</h4>
                    <p className="card-text">{artist.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold" data-aos="fade-up">
                <FaMusic className="me-3 text-primary" /> Event Gallery
              </h2>
              <div className="divider mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px' }} data-aos="zoom-in"></div>
            </div>
          </div>
          
          <div className="row g-4">
            {eventDetails.gallery.map((image, index) => (
              <div 
                className="col-md-3 col-sm-6" 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={`${100 * (index + 1)}`}
              >
                <div 
                  className={`gallery-item overflow-hidden rounded-3 ${activeGalleryImage === index ? 'active-gallery' : ''}`}
                  onClick={() => setActiveGalleryImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="img-fluid w-100" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticket & Reviews Section */}
      <div className="tickets-section py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-right">
              <div className="ticket-card card h-100 border-0 shadow-sm p-4">
                <div className="d-flex align-items-center mb-3">
                  <FaTicketAlt className="me-3 text-primary" size={40} />
                  <h3 className="mb-0">Ticket Information</h3>
                </div>
                <div className="ticket-details">
                  <p className="h2 text-primary mb-3">{eventDetails.price}</p>
                  <p>Full access to the concert, premium viewing areas, and exclusive merchandise.</p>
                  <button 
                    className="btn btn-primary btn-lg rounded-pill w-100 mt-3"
                    onClick={handleContactClick}
                  >
                    Purchase Tickets
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="reviews-card card h-100 border-0 shadow-sm p-4">
                <div className="d-flex align-items-center mb-3">
                  <FaStar className="me-3 text-warning" size={40} />
                  <h3 className="mb-0">Event Reviews</h3>
                </div>
                <div className="review-details">
                  <div className="d-flex align-items-center mb-3">
                    <span className="h2 text-warning me-2">4.8</span>
                    <span className="text-muted">(350 reviews)</span>
                  </div>
                  <p>Our past events have been rated exceptional by music enthusiasts!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-2">Don't Miss Out!</h2>
              <p className="lead mb-0">Join us for an unforgettable night of music and excitement.</p>
            </div>
            <div className="col-lg-4 text-lg-end" data-aos="fade-left">
              <button 
                className="btn btn-light btn-lg rounded-pill px-4 me-2 mb-2"
                onClick={handleContactClick}
              >
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .artist-image {
          height: 300px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .artist-card:hover .artist-image {
          transform: scale(1.05);
        }
        
        .gallery-item {
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-item:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        
        .active-gallery {
          border: 3px solid var(--primary);
        }
        
        .divider {
          transition: width 0.5s ease;
        }
        
        .contact-modal {
          backdrop-filter: blur(5px);
        }

        .contact-content {
          max-width: 500px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            text-align: center;
          }
          
          .event-details {
            justify-content: center;
          }
          
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PremathmaEventPage;