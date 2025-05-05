import React, { useState, useEffect } from 'react';
import { 
  FaGuitar, 
  FaHeadphones, 
  FaMixer, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaClock, 
  FaTicketAlt,
  FaStar,
  FaMusic
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Workshops = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workshops = [
    {
      id: 1,
      title: "Electronic Music Production Masterclass",
      instructor: "Alex Rodriguez",
      category: "Electronic",
      level: "Intermediate",
      date: "May 15-16, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Digital Studio, New York",
      price: "$299",
      image: "https://source.unsplash.com/random/800x600/?music-studio,electronic",
      description: "Dive deep into electronic music production techniques. Learn sound design, mixing, and advanced production skills using industry-standard software.",
      skills: [
        "Ableton Live",
        "Sound Design",
        "Mixing Techniques",
        "MIDI Composition"
      ],
      includedTools: [
        "Professional Studio Equipment",
        "Software Licenses",
        "Course Materials"
      ]
    },
    {
      id: 2,
      title: "Vocal Performance Intensive",
      instructor: "Sarah Thompson",
      category: "Vocal",
      level: "All Levels",
      date: "June 22-23, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Harmony Arts Center, Los Angeles",
      price: "$249",
      image: "https://source.unsplash.com/random/800x600/?music,vocal",
      description: "Transform your vocal abilities with professional techniques. Learn breath control, performance skills, and develop your unique musical voice.",
      skills: [
        "Vocal Techniques",
        "Performance Confidence",
        "Breath Control",
        "Genre Versatility"
      ],
      includedTools: [
        "Professional Vocal Coaching",
        "Recording Session",
        "Performance Feedback"
      ]
    },
    {
      id: 3,
      title: "Guitar Mastery Workshop",
      instructor: "Michael Chen",
      category: "Instrumental",
      level: "Beginner to Advanced",
      date: "July 10-12, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Rock Academy, Chicago",
      price: "$279",
      image: "https://source.unsplash.com/random/800x600/?guitar,music-lesson",
      description: "Comprehensive guitar workshop covering techniques from blues to rock. Learn from a seasoned professional with decades of performance experience.",
      skills: [
        "Technique Fundamentals",
        "Improvisation",
        "Genre Exploration",
        "Music Theory"
      ],
      includedTools: [
        "Group and Personal Coaching",
        "Practice Amplifiers",
        "Technique Analysis"
      ]
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  const handleWorkshopModal = (workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };

  const renderWorkshopCard = (workshop) => (
    <div 
      key={workshop.id} 
      className="col-md-4 mb-4" 
      data-aos="fade-up"
    >
      <div className="card workshop-card h-100 shadow-lg border-0">
        <div className="position-relative">
          <img 
            src={workshop.image} 
            alt={workshop.title} 
            className="card-img-top workshop-image" 
          />
          <div className="workshop-overlay position-absolute top-0 start-0 w-100 h-100">
            <div className="d-flex justify-content-center align-items-center h-100">
              <button 
                className="btn btn-light btn-lg animate__animated animate__pulse"
                onClick={() => handleWorkshopModal(workshop)}
              >
                <FaTicketAlt className="me-2" /> Workshop Details
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="badge bg-primary">{workshop.category}</span>
            <span className="badge bg-info">{workshop.level}</span>
          </div>
          <h4 className="card-title fw-bold">{workshop.title}</h4>
          <div className="d-flex align-items-center mb-2">
            <FaChalkboardTeacher className="me-2 text-primary" />
            <span>{workshop.instructor}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-bold text-primary">{workshop.price}</span>
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => handleWorkshopModal(workshop)}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWorkshopModal = () => {
    if (!selectedWorkshop) return null;

    return (
      <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">{selectedWorkshop.title}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={() => setIsModalOpen(false)}></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <img 
                    src={selectedWorkshop.image} 
                    alt={selectedWorkshop.title} 
                    className="img-fluid rounded mb-3" 
                  />
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <FaCalendarAlt className="me-2 text-primary" />
                      <span>{selectedWorkshop.date}</span>
                    </div>
                    <div>
                      <FaClock className="me-2 text-danger" />
                      <span>{selectedWorkshop.time}</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <FaMapMarkerAlt className="me-2 text-success" />
                    <span>{selectedWorkshop.location}</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="fw-bold mb-3">Workshop Details</h4>
                  <p>{selectedWorkshop.description}</p>

                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h5 className="fw-bold"><FaMusic className="me-2 text-primary" /> Skills Covered</h5>
                      <ul className="list-unstyled">
                        {selectedWorkshop.skills.map((skill, index) => (
                          <li key={index} className="mb-2">
                            <FaStar className="me-2 text-warning" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold"><FaHeadphones className="me-2 text-info" /> Included</h5>
                      <ul className="list-unstyled">
                        {selectedWorkshop.includedTools.map((tool, index) => (
                          <li key={index} className="mb-2">
                            <FaUsers className="me-2 text-success" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
              <button type="button" className="btn btn-primary animate__animated animate__pulse">
                <FaTicketAlt className="me-2" /> Book Workshop
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="workshops-container">
      {/* Hero Section */}
      <div className="hero-section bg-dark text-white position-relative">
        <div 
          className="hero-background" 
          style={{
            backgroundImage: 'url(https://source.unsplash.com/random/1600x800/?music,workshop)',
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <div className="overlay"></div>
          <div 
            className="container h-100 d-flex flex-column justify-content-center position-relative"
            style={{ zIndex: 1 }}
          >
            <div className="row">
              <div className="col-lg-8 animate__animated animate__fadeInLeft">
                <h1 className="display-4 fw-bold mb-3">Master Your Musical Skills</h1>
                <p className="fs-5 mb-4">Join our expert-led workshops and take your musical journey to the next level.</p>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite">
                    <FaGuitar className="me-2" /> Explore Workshops
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Workshops Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Upcoming Workshops</h2>
          <p className="lead text-muted">Unlock your musical potential with our comprehensive workshops</p>
        </div>

        {/* Workshop Categories */}
        <div className="mb-4 text-center">
          <div className="btn-group" role="group">
            <button 
              className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('all')}
            >
              All Workshops
            </button>
            <button 
              className={`btn ${activeTab === 'electronic' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('electronic')}
            >
              Electronic
            </button>
            <button 
              className={`btn ${activeTab === 'vocal' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('vocal')}
            >
              Vocal
            </button>
            <button 
              className={`btn ${activeTab === 'instrumental' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveTab('instrumental')}
            >
              Instrumental
            </button>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="row">
          {workshops
            .filter(workshop => 
              activeTab === 'all' || 
              workshop.category.toLowerCase() === activeTab
            )
            .map(renderWorkshopCard)
          }
        </div>
      </div>

      {/* Workshop Modal */}
      {renderWorkshopModal()}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}

      {/* Custom CSS */}
      <style jsx>{`
        .workshop-card {
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        .workshop-card:hover {
          transform: scale(1.03);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .workshop-image {
          height: 250px;
          object-fit: cover;
        }
        .workshop-overlay {
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .workshop-card:hover .workshop-overlay {
          opacity: 1;
        }
        .hero-section .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.7);
        }
        @media (max-width: 768px) {
          .workshop-image {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Workshops;