import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaVideo, 
  FaCalendarCheck, 
  FaHeadset, 
  FaClock, 
  FaLaptop, 
  FaCheckCircle,
  FaChevronRight 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TryNow = () => {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });
  }, []);

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'consultation',
    date: '',
    time: '',
    message: ''
  });

  // State for form submission
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Meeting types
  const meetingTypes = [
    {
      id: 'consultation',
      title: 'Free Consultation',
      icon: <FaHeadset size={35} className="text-primary mb-3" />,
      description: 'Discuss your music project needs with our experts',
      duration: '20 min',
      price: 'Free'
    },
    {
      id: 'project-planning',
      title: 'Project Planning',
      icon: <FaCalendarCheck size={35} className="text-primary mb-3" />,
      description: 'Develop a roadmap for your music project or event',
      duration: '45 min',
      price: '$49'
    },
    {
      id: 'production-session',
      title: 'Production Session',
      icon: <FaLaptop size={35} className="text-primary mb-3" />,
      description: 'Remote music production and feedback session',
      duration: '60 min',
      price: '$99'
    }
  ];

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'consultation',
          date: '',
          time: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  // Get available time slots based on date
  const getTimeSlots = () => {
    const slots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
    return slots;
  };

  return (
    <section id="try-now" className="try-now-section py-5">
      {/* Background animation wrapper */}
      <div className="bg-image-wrapper">
        <div className="bg-image-overlay"></div>
      </div>
      
      <div className="container position-relative">
        {/* Header with animation */}
        <br></br>
        <br></br>
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-down">
            <h2 className="section-title text-white">Try <span className="text-primary">WEBEATS</span> Now</h2>
            <div className="title-underline mx-auto" style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #6610f2, #198754)', marginBottom: '20px' }}></div>
            <p className="lead text-white">Schedule a video meeting with our music industry experts</p>
          </div>
        </div>
        
        {/* Success message */}
        {submitted && (
          <div className="row mb-5" data-aos="zoom-in">
            <div className="col-md-8 mx-auto">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center p-5">
                  <FaCheckCircle size={60} className="text-success mb-4" />
                  <h3>Booking Confirmed!</h3>
                  <p className="lead">Thank you for scheduling a session with WEBEATS. Check your email for confirmation and meeting details.</p>
                  <button className="btn btn-outline-primary mt-3" onClick={() => setSubmitted(false)}>
                    Schedule Another
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!submitted && (
          <div className="row g-4">
            {/* Meeting Types */}
            <div className="col-lg-4">
              <div data-aos="fade-right">
                <h3 className="mb-4 text-white">Select Meeting Type</h3>
                {meetingTypes.map((type) => (
                  <div 
                    key={type.id} 
                    className={`meeting-type-card mb-3 p-3 rounded shadow-sm ${formData.service === type.id ? 'border-primary border-2' : 'border'}`}
                    onClick={() => setFormData({...formData, service: type.id})}
                    style={{ cursor: 'pointer', transition: 'all 0.3s ease', background: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        {type.icon}
                      </div>
                      <div>
                        <h5 className="mb-1">{type.title}</h5>
                        <p className="mb-2 text-muted small">{type.description}</p>
                        <div className="d-flex align-items-center">
                          <FaClock className="text-muted me-1" />
                          <small className="text-muted me-3">{type.duration}</small>
                          <span className="badge bg-primary">{type.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 p-3 rounded" data-aos="fade-up" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
                  <h5>Why Book a Session?</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><FaChevronRight className="text-primary me-2" /> Get personalized advice</li>
                    <li className="mb-2"><FaChevronRight className="text-primary me-2" /> Discuss your music project</li>
                    <li className="mb-2"><FaChevronRight className="text-primary me-2" /> Learn about our services</li>
                    <li><FaChevronRight className="text-primary me-2" /> Receive a custom quote</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg" data-aos="fade-left">
                <div className="card-header bg-primary text-white py-3">
                  <h4 className="mb-0">
                    <FaVideo className="me-2" />
                    Schedule Your Video Meeting
                  </h4>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="service" className="form-label">Service Type</label>
                        <select 
                          className="form-select" 
                          id="service" 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          {meetingTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.title}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="date" className="form-label">Preferred Date</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          id="date" 
                          name="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="time" className="form-label">Preferred Time</label>
                        <select 
                          className="form-select" 
                          id="time" 
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          disabled={!formData.date}
                        >
                          <option value="">Select a time</option>
                          {getTimeSlots().map((slot, index) => (
                            <option key={index} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Tell us about your project (optional)</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-12 mt-4">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg w-100 py-3" 
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Processing...
                            </>
                          ) : (
                            <>Book Your Session Now</>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Features */}
              <div className="row mt-4 g-3">
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <div className="feature-icon-wrapper mb-3">
                      <FaVideo size={30} className="text-primary" />
                    </div>
                    <h5>HD Video Meetings</h5>
                    <p className="small text-muted">Clear communication with our experts</p>
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <div className="feature-icon-wrapper mb-3">
                      <FaCalendarCheck size={30} className="text-primary" />
                    </div>
                    <h5>Flexible Scheduling</h5>
                    <p className="small text-muted">Book at your convenience</p>
                  </div>
                </div>
                <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <div className="feature-icon-wrapper mb-3">
                      <FaHeadset size={30} className="text-primary" />
                    </div>
                    <h5>Expert Consultation</h5>
                    <p className="small text-muted">Industry professionals ready to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Rest of the existing code... */}
        
      </div>
      
      {/* Custom CSS for animations and background */}
      <style jsx>{`
        .try-now-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }
        
        .bg-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/api/placeholder/1200/800');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
          animation: zoomEffect 30s infinite alternate;
        }
        
        .bg-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 16, 242, 0.85), rgba(25, 135, 84, 0.85));
          z-index: 1;
        }
        
        .container {
          position: relative;
          z-index: 2;
        }
        
        @keyframes zoomEffect {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        .feature-icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(13, 110, 253, 0.1);
          transition: all 0.3s ease;
        }
        
        .feature-icon-wrapper:hover {
          transform: translateY(-5px);
          background: rgba(13, 110, 253, 0.2);
        }
        
        .meeting-type-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        @media (max-width: 768px) {
          .meeting-type-card {
            padding: 15px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TryNow;