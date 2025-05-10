import React, { useState, useEffect } from 'react';
import { FaUsers, FaMobile, FaShareAlt, FaCamera, FaHeart, FaStar, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FanEngagement = () => {
  const [activeSection, setActiveSection] = useState('features');
  const [isLoading, setIsLoading] = useState(true);

  // Sample fan engagement tools
  const engagementTools = [
    {
      icon: <FaMobile size={36} className="text-primary mb-3" />,
      title: "Mobile Event App",
      description: "Custom-branded mobile apps that allow fans to access schedules, maps, artist info, and exclusive content."
    },
    {
      icon: <FaShareAlt size={36} className="text-primary mb-3" />,
      title: "Social Media Integration",
      description: "Integrated social walls and custom hashtags to amplify your event's online presence."
    },
    {
      icon: <FaCamera size={36} className="text-primary mb-3" />,
      title: "Photo Experiences",
      description: "Custom photo booths and AR filters that create shareable branded moments."
    },
    {
      icon: <FaUsers size={36} className="text-primary mb-3" />,
      title: "Fan Communities",
      description: "Dedicated online spaces for fans to connect before, during, and after your event."
    }
  ];

  // Sample case studies
  const caseStudies = [
    {
      id: 1,
      event: "ElectroWave Festival",
      results: {
        engagement: "87% app download rate",
        social: "25,000+ tagged posts",
        satisfaction: "94% fan satisfaction rating"
      },
      image: "https://via.placeholder.com/400x250",
      description: "We created a comprehensive digital engagement strategy for ElectroWave Festival that resulted in record-breaking social media engagement and enhanced fan experience."
    },
    {
      id: 2,
      event: "Harmony Records Tour",
      results: {
        engagement: "12,000 fan community members",
        social: "5M social impressions",
        satisfaction: "90% fan satisfaction rating"
      },
      image: "https://via.placeholder.com/400x250",
      description: "Our fan community platform for Harmony Records created lasting connections between artists and fans, driving merchandise sales and future ticket purchases."
    },
    {
      id: 3,
      event: "Jazz Fusion Series",
      results: {
        engagement: "3x increase in event app usage",
        social: "45% increase in content sharing",
        satisfaction: "92% fan satisfaction rating"
      },
      image: "https://via.placeholder.com/400x250",
      description: "We transformed the Jazz Fusion Series with interactive digital experiences that appealed to both traditional jazz enthusiasts and younger audiences."
    }
  ];

  // Analytics demo data
  const engagementAnalytics = {
    appDownloads: 12500,
    socialShares: 32800,
    averageEngagement: 78,
    fanRetention: 65
  };

  // Animation setup
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    
    // Simulate loading for animation effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="ms-3 text-primary">WEBEATS</h3>
      </div>
    );
  }

  return (
    <div className="fan-engagement-container">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-dark text-white position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <div className="container position-relative" data-aos="fade-up">
          <div className="py-5">
            <h1 className="display-3 fw-bold mb-3">FAN ENGAGEMENT SOLUTIONS</h1>
            <h2 className="fs-4 mb-4">Transform Attendees into Passionate Brand Advocates</h2>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-lg me-3">Explore Solutions</button>
              <button className="btn btn-outline-light btn-lg">See Case Studies</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mt-5">
        <ul className="nav nav-pills justify-content-center mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} 
              onClick={() => setActiveSection('features')}
            >
              Engagement Tools
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'caseStudies' ? 'active' : ''}`} 
              onClick={() => setActiveSection('caseStudies')}
            >
              Case Studies
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'analytics' ? 'active' : ''}`} 
              onClick={() => setActiveSection('analytics')}
            >
              Engagement Analytics
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'getStarted' ? 'active' : ''}`} 
              onClick={() => setActiveSection('getStarted')}
            >
              Get Started
            </button>
          </li>
        </ul>

        {/* Tab Contents */}
        <div className="tab-content py-4">
          {/* Engagement Tools Section */}
          <div className={`tab-pane fade ${activeSection === 'features' ? 'show active' : ''}`}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="fw-bold">Fan Engagement Solutions</h2>
              <p className="lead">Create memorable experiences that keep fans connected to your music events</p>
            </div>
            
            <div className="row g-4">
              {engagementTools.map((tool, index) => (
                <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      {tool.icon}
                      <h4 className="mb-3">{tool.title}</h4>
                      <p>{tool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="row mt-5 g-4">
              <div className="col-md-6" data-aos="fade-right">
                <div className="p-4 h-100">
                  <h3 className="fw-bold mb-4">Why Fan Engagement Matters</h3>
                  <p className="lead">Engaged fans become loyal supporters who amplify your event's success</p>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaHeart />
                    </div>
                    <div>
                      <h5>Higher Retention Rates</h5>
                      <p>Engaged fans are 3.5x more likely to attend your future events.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaShareAlt />
                    </div>
                    <div>
                      <h5>Organic Marketing</h5>
                      <p>Excited fans share their experiences, creating authentic marketing for your events.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaChartLine />
                    </div>
                    <div>
                      <h5>Increased Revenue</h5>
                      <p>Engaged fans spend 60% more on merchandise and concessions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">The WEBEATS Engagement Framework</h3>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Pre-Event Excitement</h5>
                      <p>Build anticipation through exclusive content, artist spotlights, and interactive countdowns.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>During-Event Experience</h5>
                      <p>Enhance the live experience with real-time updates, interactive activities, and exclusive opportunities.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Post-Event Connection</h5>
                      <p>Maintain the relationship through highlight reels, community discussions, and early access to future events.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Data-Driven Improvement</h5>
                      <p>Analyze engagement metrics to continuously improve the fan experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Section */}
          <div className={`tab-pane fade ${activeSection === 'caseStudies' ? 'show active' : ''}`}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="fw-bold">Success Stories</h2>
              <p className="lead">See how we've transformed fan experiences at real music events</p>
            </div>

            <div className="row g-4">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 shadow">
                    <img src={study.image} className="card-img-top" alt={study.event} />
                    <div className="card-body">
                      <h4 className="card-title">{study.event}</h4>
                      <p className="card-text">{study.description}</p>
                      <h5 className="mt-4 mb-3">Results:</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><FaUsers className="text-primary me-2" /> {study.results.engagement}</li>
                        <li className="mb-2"><FaShareAlt className="text-primary me-2" /> {study.results.social}</li>
                        <li><FaStar className="text-primary me-2" /> {study.results.satisfaction}</li>
                      </ul>
                      <button className="btn btn-outline-primary mt-3">View Full Case Study</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5 pt-3" data-aos="fade-up">
              <h3>Ready to Create Your Success Story?</h3>
              <p className="mb-4">Let us help you develop a fan engagement strategy that drives results</p>
              <button className="btn btn-primary btn-lg" onClick={() => setActiveSection('getStarted')}>
                Start Your Strategy
              </button>
            </div>
          </div>

          {/* Analytics Section */}
          <div className={`tab-pane fade ${activeSection === 'analytics' ? 'show active' : ''}`}>
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="fw-bold">Measure Your Fan Engagement</h2>
              <p className="lead">Track, analyze, and optimize your engagement strategies with our analytics dashboard</p>
            </div>

            <div className="row g-4">
              <div className="col-lg-8 mx-auto" data-aos="fade-up">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="mb-4">WEBEATS Analytics Dashboard</h3>
                    
                    <div className="row mb-4">
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaMobile size={40} className="text-primary mb-3" />
                          <h4>{engagementAnalytics.appDownloads.toLocaleString()}</h4>
                          <p className="text-muted mb-0">App Downloads</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaShareAlt size={40} className="text-primary mb-3" />
                          <h4>{engagementAnalytics.socialShares.toLocaleString()}</h4>
                          <p className="text-muted mb-0">Social Shares</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaUsers size={40} className="text-primary mb-3" />
                          <h4>{engagementAnalytics.averageEngagement}%</h4>
                          <p className="text-muted mb-0">Avg. Engagement</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaHeart size={40} className="text-primary mb-3" />
                          <h4>{engagementAnalytics.fanRetention}%</h4>
                          <p className="text-muted mb-0">Fan Retention</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-light rounded-3">
                      <h5 className="mb-3">Analytics Dashboard Preview</h5>
                      <p className="mb-4">Our interactive dashboard gives you real-time insights into fan behavior and engagement metrics.</p>
                      <div className="row justify-content-center">
                        <div className="col-md-10">
                          <div className="bg-white p-3 border rounded" style={{ height: "250px", position: "relative" }}>
                            <div className="position-absolute top-50 start-50 translate-middle text-center">
                              <FaChartLine size={50} className="text-primary mb-3" />
                              <p>Interactive dashboard visualization</p>
                              <button className="btn btn-sm btn-outline-primary">See Demo</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="mb-3">Data-Driven Engagement</h4>
                      <p>Our analytics platform helps you understand:</p>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>User Behavior</h5>
                            <p className="mb-0">Track how fans interact with your content, which artists they follow, and what features they use most.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Content Performance</h5>
                            <p className="mb-0">Identify which content types drive the most engagement to optimize your strategy.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Social Amplification</h5>
                            <p className="mb-0">Measure the reach and impact of shared content from your event.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>ROI Calculation</h5>
                            <p className="mb-0">Calculate the tangible returns from your fan engagement investments.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started Section */}
          <div className={`tab-pane fade ${activeSection === 'getStarted' ? 'show active' : ''}`}>
            <div className="row g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <h2 className="fw-bold mb-4">Elevate Your Fan Experience</h2>
                <p className="lead mb-4">Ready to transform your music event with cutting-edge fan engagement solutions? Tell us about your needs and goals.</p>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your fan engagement inquiry has been submitted! Our team will contact you shortly.");
                  e.target.reset();
                }}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="eventDetails" className="form-label">Event Details</label>
                    <input type="text" className="form-control" id="eventDetails" placeholder="Event name, size, date" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="engagementGoals" className="form-label">Engagement Goals</label>
                    <select className="form-select" id="engagementGoals">
                      <option selected>Select primary goal</option>
                      <option value="awareness">Increase Brand Awareness</option>
                      <option value="retention">Improve Fan Retention</option>
                      <option value="data">Gather Fan Data</option>
                      <option value="revenue">Drive Additional Revenue</option>
                      <option value="experience">Enhance Overall Experience</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Tell Us About Your Vision</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Request Fan Engagement Strategy</button>
                </form>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">Our Fan Engagement Process</h3>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Discovery Session</h5>
                      <p>We'll conduct a deep-dive into your event goals, audience demographics, and artistic vision.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>Custom Strategy Development</h5>
                      <p>Our team will create a tailored engagement plan that aligns with your event objectives.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Implementation & Training</h5>
                      <p>We'll set up all necessary systems and train your team on best practices.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Live Event Support</h5>
                      <p>Our specialists will be on-site to ensure smooth operation of all engagement platforms.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">5</span>
                    </div>
                    <div>
                      <h5>Post-Event Analysis</h5>
                      <p>Comprehensive reporting on engagement metrics and recommendations for future events.</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary text-white p-4 rounded-3 mt-4">
                    <h4 className="mb-3">Why Choose WEBEATS Fan Engagement</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-2">
                        <FaStar className="me-2" /> Proven results with major music events
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <FaStar className="me-2" /> Music industry expertise and understanding
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <FaStar className="me-2" /> Cutting-edge technology platforms
                      </li>
                      <li className="d-flex align-items-center">
                        <FaStar className="me-2" /> Comprehensive analytics and reporting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white text-center py-5 mt-5" data-aos="fade-up">
        <div className="container py-3">
          <h2 className="mb-4">Transform Your Music Event Experience</h2>
          <p className="lead mb-4">Create meaningful connections that turn attendees into lifelong fans</p>
          <button className="btn btn-light btn-lg" onClick={() => setActiveSection('getStarted')}>
            Start Your Fan Engagement Strategy
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background-image: url('https://via.placeholder.com/1600x800');
          background-size: cover;
          background-position: center;
          min-height: 60vh;
          display: flex;
          align-items: center;
        }
        
        .nav-pills .nav-link {
          border-radius: 50px;
          padding: 8px 20px;
          margin: 0 5px;
          font-weight: 500;
        }
        
        .nav-pills .nav-link.active {
          background-color: var(--bs-primary);
        }
        
        @media (max-width: 768px) {
          .hero-section {
            min-height: 40vh;
          }
          
          .nav-pills .nav-link {
            padding: 6px 12px;
            margin: 0 2px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FanEngagement;