import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import img9 from "./images/pre5.jpg";
import { FaPaperclip } from "react-icons/fa";



import { 
  FaMusic, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaTicketAlt, 
  FaStar, 
  FaUsers, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaArchive ,
  FApaperclip
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false
    });

    // Simulate fetching events from an API
    const fetchEvents = () => {
      // Mock data for upcoming events
      const mockUpcomingEvents = [
        {
          id: 1,
          title: "Summer Music Festival",
          date: "June 15, 2025",
          time: "3:00 PM - 11:00 PM",
          location: "Central Park, New York",
          image: "https://source.unsplash.com/random/600x400/?rock",
          description: "Join us for the biggest summer music festival featuring top artists from around the world. Experience amazing performances, food stalls, and unforgettable memories.",
          price: "$75",
          artists: ["Taylor Swift", "The Weeknd", "Billie Eilish"],
          category: "Festival",
          featured: true
        },
        {
          id: 2,
          title: "Jazz Night",
          date: "April 10, 2025",
          time: "8:00 PM - 12:00 AM",
          location: "Blue Note Jazz Club, Chicago",
          image: "https://source.unsplash.com/random/600x400/?jazz",
          description: "A sophisticated evening of classic jazz performances by renowned artists in an intimate venue.",
          price: "$45",
          artists: ["John Legend", "Diana Krall", "Gregory Porter"],
          category: "Concert",
          featured: false
        },
        {
          id: 3,
          title: "Rock Revolution",
          date: "May 22, 2025",
          time: "7:00 PM - 10:00 PM",
          location: "Madison Square Garden, New York",
          image: "https://source.unsplash.com/random/600x400/?rock",
          description: "Experience the ultimate rock concert featuring legendary bands and emerging rockers.",
          price: "$60",
          artists: ["Foo Fighters", "Green Day", "Imagine Dragons"],
          category: "Concert",
          featured: true
        }
      ];

      // Mock data for previous events
      const mockPreviousEvents = [
        {
          id: 4,
          title: "Premathma",
          date: "March 16, 2025",
          time: "7:00 PM - 10:00 PM",
          location: "University Of Ruhuna",
          image:img9,
          description: "An epic rock concert featuring legendary bands and emerging rockers.",
          price: "$60",
          
          artists: ["Foo Fighters", "Green Day", "Imagine Dragons"],
          category: "Concert",
          reviewsCount: 350,
          rating: 4.8
        },
        {
          id: 5,
          title: "Electronic Dance Night 2024",
          date: "July 5, 2024",
          time: "10:00 PM - 4:00 AM",
          location: "Pulse Nightclub, Miami",
          image: "https://source.unsplash.com/random/600x400/?edm",
          description: "An unforgettable night of electronic music with top DJs and spectacular light shows.",
          price: "$55",
          artists: ["Calvin Harris", "Martin Garrix", "Zedd"],
          category: "Dance",
          reviewsCount: 275,
          rating: 4.6
        }
      ];

      setTimeout(() => {
        setUpcomingEvents(mockUpcomingEvents);
        setPreviousEvents(mockPreviousEvents);
        setLoading(false);
      }, 800);
    };

    fetchEvents();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const renderFeaturedEvents = () => {
    const featuredEvents = upcomingEvents.filter(event => event.featured);
    
    if (featuredEvents.length === 0) {
      return <p className="text-center">No featured events available at the moment.</p>;
    }

    return (
      <div className="row">
        {featuredEvents.map(event => (
          <div key={event.id} className="col-md-6 mb-4" data-aos="fade-up">
            <div className="card h-100 shadow-lg border-0 featured-event-card">
              <div className="position-relative">
                <img src={event.image} className="card-img-top" alt={event.title} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="position-absolute top-0 end-0 m-2">
                  <span className="badge bg-danger animate__animated animate__pulse animate__infinite">Featured</span>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title fw-bold">{event.title}</h4>
                <div className="d-flex align-items-center mb-2">
                  <FaCalendarAlt className="text-primary me-2" />
                  <span>{event.date}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt className="text-danger me-2" />
                  <span>{event.location}</span>
                </div>
                <p className="card-text">{event.description.substring(0, 100)}...</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-primary">{event.price}</span>
                  <button 
                    className="btn btn-primary animate__animated animate__pulse" 
                    onClick={() => handleEventClick(event)}
                  >
                    <FaTicketAlt className="me-2" /> Get Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderEventsList = () => {
    if (loading) {
      return (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading events...</p>
        </div>
      );
    }

    const eventsToRender = activeTab === 'upcoming' ? upcomingEvents : previousEvents;

    if (eventsToRender.length === 0) {
      return <p className="text-center">No {activeTab} events available at the moment.</p>;
    }

    return (
      <div className="row">
        {eventsToRender.map(event => (
          <div key={event.id} className="col-md-6 col-lg-4 mb-4" data-aos="zoom-in">
            <div className={`card h-100 shadow ${activeTab === 'upcoming' ? 'event-card' : 'past-event-card'}`}>
              <img 
                src={event.image} 
                className="card-img-top" 
                alt={event.title} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <div className="d-flex align-items-center mb-2">
                  <FaCalendarAlt className="text-primary me-2" />
                  <span>{event.date}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaMapMarkerAlt className="text-danger me-2" />
                  <span>{event.location}</span>
                </div>
                {activeTab === 'previous' && (
                  <div className="d-flex align-items-center mb-2">
                    <FaStar className="text-warning me-2" />
                    <span>{event.rating} ({event.reviewsCount} reviews)</span>
                  </div>
                )}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="badge bg-info">{event.category}</span>
                  <button 
                    className="btn btn-sm btn-outline-primary" 
                    onClick={() => handleEventClick(event)}
                  >
                    {activeTab === 'upcoming' ? 'View Details' : 'Event Recap'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderEventModal = () => {
    if (!selectedEvent) return null;

    return (
      <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">{selectedEvent.title}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={() => setIsModalOpen(false)}></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img 
                    src={selectedEvent.image} 
                    className="img-fluid rounded mb-3" 
                    alt={selectedEvent.title} 
                  />
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    <button className="btn btn-sm btn-outline-primary">
                      <FaFacebookF /> Share
                    </button>
                    <button className="btn btn-sm btn-outline-info">
                      <FaTwitter /> Tweet
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <FaInstagram /> Post
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="fw-bold mb-3">Event Details</h4>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaCalendarAlt className="text-primary me-2" />
                      <span><strong>Date:</strong> {selectedEvent.date}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="text-danger me-2" />
                      <span><strong>Location:</strong> {selectedEvent.location}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaTicketAlt className="text-success me-2" />
                      <span><strong>Price:</strong> {selectedEvent.price}</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      < FaPaperclip className="text-success me-2" />
                      <span><strong>More Info:</strong> {selectedEvent.link}</span>
                    </div>
                  </div>
                  <p className="mb-3">{selectedEvent.description}</p>
                  <div className="mb-3">
                    <h5 className="fw-bold d-flex align-items-center">
                      <FaMusic className="me-2 text-primary" /> Featured Artists
                    </h5>
                    <ul className="list-group">
                      {selectedEvent.artists.map((artist, index) => (
                        <li key={index} className="list-group-item d-flex align-items-center">
                          <FaStar className="text-warning me-2" />
                          {artist}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {activeTab === 'previous' && selectedEvent.rating && (
                    <div className="mb-3">
                      <h5 className="fw-bold">Event Rating</h5>
                      <div className="d-flex align-items-center">
                        <FaStar className="text-warning me-2" />
                        <span>{selectedEvent.rating} ({selectedEvent.reviewsCount} reviews)</span>
                        
                        
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
              {activeTab === 'upcoming' && (
                <button type="button" className="btn btn-primary animate__animated animate__pulse animate__infinite">
                  <FaTicketAlt className="me-2" /> Buy Tickets
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSubscriptionForm = () => {
    return (
      <div className="card shadow-lg border-0 rounded-3 mt-5 mb-5" data-aos="fade-up">
        <div className="card-body p-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold">Never Miss an Event!</h3>
              <p className="mb-0">Subscribe to our newsletter and be the first to know about upcoming concerts, festivals, and special offers.</p>
            </div>
            <div className="col-lg-6">
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input type="email" className="form-control" placeholder="Your email address" required />
                <button type="submit" className="btn btn-primary animate__animated animate__pulse">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="events-container">
      {/* Hero Section */}
      <div className="hero-section bg-dark text-white position-relative">
        <div 
          className="hero-background" 
          style={{
            backgroundImage: 'url(https://source.unsplash.com/random/1600x800/?concert)',
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div 
            className="overlay" 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.7)'
            }}
          ></div>
          <div 
            className="container h-100 d-flex flex-column justify-content-center position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="row">
              <div className="col-lg-8 animate__animated animate__fadeInLeft">
                <h1 className="display-4 fw-bold mb-3">Discover Amazing Music Events</h1>
                <p className="fs-5 mb-4">Find and book tickets for the best concerts, festivals, and music events happening near you.</p>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite">
                    <FaTicketAlt className="me-2" /> Browse Events
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    <FaCalendarAlt className="me-2" /> View Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        {/* Event Search */}
        <div className="card shadow-lg border-0 rounded-3 mb-5" data-aos="fade-up">
          <div className="card-body p-4">
            <h3 className="card-title text-center mb-4">Find Your Perfect Event</h3>
            <div className="row g-3">
              <div className="col-md-4">
                <div className="form-floating">
                  <input type="text" className="form-control" id="eventSearch" placeholder="Search events" />
                  <label htmlFor="eventSearch">Search events</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <select className="form-select" id="categorySelect">
                    <option value="">All Categories</option>
                    <option value="Festival">Festivals</option>
                    <option value="Concert">Concerts</option>
                    <option value="Dance">Dance</option>
                  </select>
                  <label htmlFor="categorySelect">Category</label>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-floating">
                  <input type="date" className="form-control" id="dateSelect" />
                  <label htmlFor="dateSelect">Date</label>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100 h-100">Search</button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-5" data-aos="fade-up">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">
              <FaStar className="text-warning me-2" /> Featured Events
            </h2>
            <button className="btn btn-outline-primary">View All</button>
          </div>
          {renderFeaturedEvents()}
        </div>

        {/* Event Categories Tabs */}
        <div className="mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-4">
            <FaArchive className="me-2 text-primary" /> 
            {activeTab === 'upcoming' ? 'Upcoming Events' : 'Previous Events'}
          </h2>
          <ul className="nav nav-tabs mb-4">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'previous' ? 'active' : ''}`}
                onClick={() => setActiveTab('previous')}
              >
                Past Events
              </button>
            </li>
          </ul>
          {renderEventsList()}
        </div>

        {/* Newsletter Subscription */}
        {renderSubscriptionForm()}

        {/* Why Choose Us Section */}
        <div className="mb-5" data-aos="fade-up">
          <h2 className="fw-bold text-center mb-4">Why Choose Our Events</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow text-center p-4" data-aos="flip-left">
                <div className="text-center mb-3">
                  <span className="fa-stack fa-2x">
                    <FaMusic className="fa-stack-1x text-primary" style={{ fontSize: '3rem' }} />
                  </span>
                </div>
                <h4 className="fw-bold">Top Artists</h4>
                <p>Enjoy performances by world-renowned artists and emerging talents in various music genres.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow text-center p-4" data-aos="flip-left" data-aos-delay="100">
                <div className="text-center mb-3">
                  <span className="fa-stack fa-2x">
                    <FaTicketAlt className="fa-stack-1x text-primary" style={{ fontSize: '3rem' }} />
                  </span>
                </div>
                <h4 className="fw-bold">Easy Booking</h4>
                <p>Secure your tickets with our simple, fast, and secure booking system. No hidden fees.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow text-center p-4" data-aos="flip-left" data-aos-delay="200">
                <div className="text-center mb-3">
                  <span className="fa-stack fa-2x">
                    <FaUsers className="fa-stack-1x text-primary" style={{ fontSize: '3rem' }} />
                  </span>
                </div>
                <h4 className="fw-bold">Unforgettable Experiences</h4>
                <p>Create lasting memories with friends and family at our carefully curated music events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {renderEventModal()}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}

      {/* Custom CSS */}
      <style jsx>{`
        .event-card, .past-event-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .past-event-card {
          opacity: 0.9;
        }
        .past-event-card:hover {
          opacity: 1;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        .featured-event-card {
          transition: transform 0.3s, box-shadow 0.3s;
          border-left: 5px solid #dc3545;
        }
        .featured-event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        @media (max-width: 768px) {
          .hero-section {
            height: auto;
          }
          .hero-section h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Events;