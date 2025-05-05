import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeadphones, FaAward, FaHandshake, FaGlobe, FaHistory, FaRegLightbulb } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'; // Create this CSS file for additional styling
import img2 from "./images/web2.png"

const About = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200",
      bio: "Music industry veteran with over 15 years of experience in artist management and event production."
    },
    {
      id: 2,
      name: "Michelle Rivera",
      role: "Head of Production",
      image: "/api/placeholder/200/200",
      bio: "Grammy-nominated producer with expertise in multiple genres and cutting-edge production techniques."
    },
    {
      id: 3,
      name: "David Chen",
      role: "Marketing Director",
      image: "/api/placeholder/200/200",
      bio: "Digital marketing specialist who has led campaigns for major music festivals and platinum-selling artists."
    }
  ];

  // Company values data
  const companyValues = [
    {
      id: 1,
      icon: <FaHeadphones size={40} />,
      title: "Passion for Music",
      description: "We live and breathe music. Our passion drives everything we do to help artists succeed.",
      animation: "fade-right"
    },
    {
      id: 2,
      icon: <FaAward size={40} />,
      title: "Excellence",
      description: "We strive for excellence in every project, from small productions to major events.",
      animation: "fade-up"
    },
    {
      id: 3,
      icon: <FaHandshake size={40} />,
      title: "Integrity",
      description: "Transparent relationships and honest communication form the foundation of our business.",
      animation: "fade-left"
    },
    {
      id: 4,
      icon: <FaGlobe size={40} />,
      title: "Global Perspective",
      description: "We embrace diverse musical traditions and connect artists to audiences worldwide.",
      animation: "fade-right"
    },
    {
      id: 5,
      icon: <FaHistory size={40} />,
      title: "Innovation",
      description: "We constantly evolve our approach to stay ahead in the rapidly changing music industry.",
      animation: "fade-up"
    },
    {
      id: 6,
      icon: <FaRegLightbulb size={40} />,
      title: "Creative Freedom",
      description: "We empower artists to express their unique vision while providing expert guidance.",
      animation: "fade-left"
    }
  ];

  return (
    <section id="about" className="about-section py-5">
      {/* Navbar buffer space - This adds padding at the top so the navbar is visible */}
      <div className="navbar-buffer"></div>
      
      {/* Animated background with music theme */}
      <div className="music-bg-animation">
        <div className="music-note-1"></div>
        <div className="music-note-2"></div>
        <div className="music-note-3"></div>
      </div>
      
      <div className="container">
        {/* Header with animation */}
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="zoom-in">
            <h2 className="section-title">About <span className="text-primary">Us</span></h2>
            <div className="title-underline"></div>
            <p className="lead">Your trusted partner in the music industry since 2010</p>
          </div>
        </div>
        
        {/* Company Story */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-wrapper">
              <div className="image-3d-container">
                <div className="image-3d-wrapper">
                  <img src={img2} alt="Company studio" className="img-fluid rounded shadow image-3d" />
                </div>
              </div>
              <div className="experience-badge">
                <span>15+</span>
                <p>Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content p-4">
              <h3 className="mb-4">Our Story</h3>
              <p>Founded in 2010, we began as a small recording studio with a vision to help independent artists bring their musical visions to life. Over the years, we've evolved into a comprehensive music services company, supporting artists at every stage of their careers.</p>
              <p>Our journey has been defined by our commitment to musical excellence and our ability to adapt to the ever-changing landscape of the music industry. From traditional production to cutting-edge digital strategies, we blend innovation with proven expertise.</p>
              <p>Today, we're proud to have worked with over 500 artists across multiple genres, helping them reach new audiences and achieve their creative and commercial goals.</p>
              <div className="achievements-counter row mt-4">
                <div className="col-4 text-center">
                  <h3 className="counter">500+</h3>
                  <p>Artists</p>
                </div>
                <div className="col-4 text-center">
                  <h3 className="counter">200+</h3>
                  <p>Events</p>
                </div>
                <div className="col-4 text-center">
                  <h3 className="counter">50+</h3>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Values */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4" data-aos="fade-up">
            <h2 className="section-title">Our <span className="text-primary">Values</span></h2>
            <div className="title-underline"></div>
          </div>
          
          {companyValues.map((value) => (
            <div key={value.id} className="col-md-6 col-lg-4 mb-4" data-aos={value.animation}>
              <div className="value-card h-100">
                <div className="icon-wrapper mb-3">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team Members */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4" data-aos="fade-up">
            <h2 className="section-title">Meet Our <span className="text-primary">Team</span></h2>
            <div className="title-underline"></div>
            <p className="lead">Experienced professionals passionate about music</p>
          </div>
          
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div className="team-card text-center">
                <div className="team-img-wrapper mb-3">
                  <img src={member.image} alt={member.name} className="img-fluid rounded-circle team-img" />
                </div>
                <h4 className="team-name">{member.name}</h4>
                <p className="team-role text-primary">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social mt-3">
                  <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mission Statement Banner */}
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="mission-banner p-5 text-center">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead mb-4">To empower artists with exceptional services that elevate their music and connect them with audiences worldwide, while fostering creativity, innovation, and sustainable growth in the music industry.</p>
              <button className="btn btn-lg btn-primary">Join Our Journey</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;