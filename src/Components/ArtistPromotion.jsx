import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaVideo, FaGlobe, FaBullhorn, FaChartLine, FaRocket, FaUsers, FaCheck, FaTrophy } from 'react-icons/fa';

const ArtistPromotion = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [isLoading, setIsLoading] = useState(true);

  // Sample promotion services
  const promotionServices = [
    {
      icon: <FaMicrophone size={36} className="text-primary mb-3" />,
      title: "Digital Marketing",
      description: "Strategic digital campaigns to increase artist visibility across streaming platforms and social media."
    },
    {
      icon: <FaVideo size={36} className="text-primary mb-3" />,
      title: "Content Creation",
      description: "Professional video production, photo shoots, and visual assets that enhance artist brand identity."
    },
    {
      icon: <FaGlobe size={36} className="text-primary mb-3" />,
      title: "Media Relations",
      description: "Strategic press outreach and interview placements with relevant music publications and influencers."
    },
    {
      icon: <FaBullhorn size={36} className="text-primary mb-3" />,
      title: "Release Campaigns",
      description: "Comprehensive strategies for single, EP, and album releases to maximize impact and streams."
    }
  ];

  // Sample case studies
  const caseStudies = [
    {
      id: 1,
      artist: "Luna Eclipse",
      results: {
        streams: "8M+ streams in first month",
        growth: "150% follower growth",
        placements: "Featured on 35+ editorial playlists"
      },
      image: "/api/placeholder/400/250",
      description: "Our strategic release campaign for indie artist Luna Eclipse resulted in breakthrough streaming numbers and industry recognition."
    },
    {
      id: 2,
      artist: "Rhythm Collective",
      results: {
        streams: "12M+ streams overall",
        growth: "85K new followers",
        placements: "Major festival bookings"
      },
      image: "/api/placeholder/400/250",
      description: "We transformed Rhythm Collective's brand identity and digital presence, resulting in significant touring and streaming growth."
    },
    {
      id: 3,
      artist: "Marcus Reed",
      results: {
        streams: "3.5M+ release streams",
        growth: "200% social engagement increase",
        placements: "5 major press features"
      },
      image: "/api/placeholder/400/250",
      description: "Our targeted campaign for Marcus Reed's debut album created industry buzz and established his unique positioning in the market."
    }
  ];

  // Analytics demo data
  const promotionAnalytics = {
    monthlyListeners: 325000,
    streamingGrowth: 165,
    socialEngagement: 89,
    pressFeatures: 28
  };

  // Animation setup
  useEffect(() => {
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
    <div className="artist-promotion-container">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-dark text-white position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <div className="container position-relative">
          <div className="py-5">
            <h1 className="display-3 fw-bold mb-3">ARTIST PROMOTION</h1>
            <h2 className="fs-4 mb-4">Amplify Your Music & Build Your Career</h2>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-lg me-3">Explore Services</button>
              <button className="btn btn-outline-light btn-lg">View Success Stories</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mt-5">
        <ul className="nav nav-pills justify-content-center mb-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} 
              onClick={() => setActiveSection('services')}
            >
              Promotion Services
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'caseStudies' ? 'active' : ''}`} 
              onClick={() => setActiveSection('caseStudies')}
            >
              Success Stories
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'analytics' ? 'active' : ''}`} 
              onClick={() => setActiveSection('analytics')}
            >
              Results & Analytics
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
          {/* Promotion Services Section */}
          <div className={`tab-pane fade ${activeSection === 'services' ? 'show active' : ''}`}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Artist Promotion Solutions</h2>
              <p className="lead">Strategic promotion services tailored to your music and career goals</p>
            </div>
            
            <div className="row g-4">
              {promotionServices.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      {service.icon}
                      <h4 className="mb-3">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="row mt-5 g-4">
              <div className="col-md-6">
                <div className="p-4 h-100">
                  <h3 className="fw-bold mb-4">Why Artist Promotion Matters</h3>
                  <p className="lead">Strategic promotion is essential in today's competitive music landscape</p>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaRocket />
                    </div>
                    <div>
                      <h5>Break Through the Noise</h5>
                      <p>With over 60,000 tracks uploaded daily to streaming platforms, strategic promotion is essential for visibility.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaUsers />
                    </div>
                    <div>
                      <h5>Build a Loyal Fanbase</h5>
                      <p>Convert casual listeners into dedicated fans through consistent engagement and storytelling.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaChartLine />
                    </div>
                    <div>
                      <h5>Maximize Revenue Streams</h5>
                      <p>Effective promotion creates opportunities for streaming revenue, sync licensing, touring, and merchandise.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">The WEBEATS Promotion Approach</h3>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Artist Discovery</h5>
                      <p>We conduct a deep analysis of your music, brand identity, target audience, and career goals.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>Strategic Planning</h5>
                      <p>Our team develops a customized promotion roadmap aligned with your release schedule and budget.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Campaign Execution</h5>
                      <p>We implement multi-channel campaigns across streaming, social, press, and industry channels.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Analysis & Optimization</h5>
                      <p>Continuous monitoring and adjustment of strategies based on real-time performance data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className={`tab-pane fade ${activeSection === 'caseStudies' ? 'show active' : ''}`}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Artist Success Stories</h2>
              <p className="lead">See how we've helped artists achieve their career goals</p>
            </div>

            <div className="row g-4">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="col-md-4">
                  <div className="card h-100 shadow">
                    <img src={study.image} className="card-img-top" alt={study.artist} />
                    <div className="card-body">
                      <h4 className="card-title">{study.artist}</h4>
                      <p className="card-text">{study.description}</p>
                      <h5 className="mt-4 mb-3">Results:</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><FaRocket className="text-primary me-2" /> {study.results.streams}</li>
                        <li className="mb-2"><FaChartLine className="text-primary me-2" /> {study.results.growth}</li>
                        <li><FaTrophy className="text-primary me-2" /> {study.results.placements}</li>
                      </ul>
                      <button className="btn btn-outline-primary mt-3">View Full Story</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5 pt-3">
              <h3>Ready to Create Your Success Story?</h3>
              <p className="mb-4">Let's develop a promotion strategy that elevates your music career</p>
              <button className="btn btn-primary btn-lg" onClick={() => setActiveSection('getStarted')}>
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Analytics Section */}
          <div className={`tab-pane fade ${activeSection === 'analytics' ? 'show active' : ''}`}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Measurable Results</h2>
              <p className="lead">Data-driven promotion strategies that deliver verifiable growth</p>
            </div>

            <div className="row g-4">
              <div className="col-lg-8 mx-auto">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="mb-4">WEBEATS Artist Analytics</h3>
                    
                    <div className="row mb-4">
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaUsers size={40} className="text-primary mb-3" />
                          <h4>{promotionAnalytics.monthlyListeners.toLocaleString()}</h4>
                          <p className="text-muted mb-0">Monthly Listeners</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaChartLine size={40} className="text-primary mb-3" />
                          <h4>{promotionAnalytics.streamingGrowth}%</h4>
                          <p className="text-muted mb-0">Streaming Growth</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaRocket size={40} className="text-primary mb-3" />
                          <h4>{promotionAnalytics.socialEngagement}%</h4>
                          <p className="text-muted mb-0">Social Engagement</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaMicrophone size={40} className="text-primary mb-3" />
                          <h4>{promotionAnalytics.pressFeatures}</h4>
                          <p className="text-muted mb-0">Press Features</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-light rounded-3">
                      <h5 className="mb-3">Real-Time Campaign Dashboard</h5>
                      <p className="mb-4">Our dashboard provides comprehensive insights into your campaign performance across all platforms.</p>
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
                      <h4 className="mb-3">Strategic Insights</h4>
                      <p>Our analytics platform helps you understand:</p>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Audience Demographics</h5>
                            <p className="mb-0">Detailed insights into your listeners' age, location, and music preferences to guide targeting.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Content Performance</h5>
                            <p className="mb-0">Track which songs, videos, and posts resonate most with your audience.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Platform Growth</h5>
                            <p className="mb-0">Monitor follower acquisition and engagement across all streaming and social platforms.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Campaign ROI</h5>
                            <p className="mb-0">Measure the return on investment for all promotion activities and budget allocation.</p>
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
              <div className="col-lg-6">
                <h2 className="fw-bold mb-4">Elevate Your Music Career</h2>
                <p className="lead mb-4">Tell us about your music and goals, and we'll develop a custom promotion strategy.</p>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your promotion inquiry has been submitted! Our team will contact you shortly.");
                  e.target.reset();
                }}>
                  <div className="mb-3">
                    <label htmlFor="artistName" className="form-label">Artist/Band Name</label>
                    <input type="text" className="form-control" id="artistName" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="musicLinks" className="form-label">Links to Your Music</label>
                    <input type="text" className="form-control" id="musicLinks" placeholder="Spotify, SoundCloud, etc." required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="promotionGoals" className="form-label">Primary Promotion Goal</label>
                    <select className="form-select" id="promotionGoals">
                      <option selected>Select primary goal</option>
                      <option value="streams">Increase Streams</option>
                      <option value="followers">Grow Follower Base</option>
                      <option value="press">Generate Press Coverage</option>
                      <option value="playlists">Secure Playlist Placements</option>
                      <option value="release">Upcoming Release Promotion</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label">Monthly Budget Range</label>
                    <select className="form-select" id="budget">
                      <option selected>Select budget range</option>
                      <option value="low">$500 - $1,000</option>
                      <option value="medium">$1,000 - $3,000</option>
                      <option value="high">$3,000 - $5,000</option>
                      <option value="custom">$5,000+</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Tell Us About Your Music & Goals</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Request Promotion Strategy</button>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">Our Promotion Process</h3>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Strategy Consultation</h5>
                      <p>We'll discuss your music, target audience, and career goals to develop the right approach.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>Campaign Development</h5>
                      <p>Our team will create a tailored promotion plan with specific platforms, targets, and timelines.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Content Optimization</h5>
                      <p>We'll ensure your music and visual assets are positioned for maximum impact across all platforms.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Campaign Execution</h5>
                      <p>Our specialists will implement all aspects of your promotion strategy with regular updates.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">5</span>
                    </div>
                    <div>
                      <h5>Results & Refinement</h5>
                      <p>We track key metrics and continuously optimize your campaign for maximum effectiveness.</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary text-white p-4 rounded-3 mt-4">
                    <h4 className="mb-3">Why Choose WEBEATS Artist Promotion</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-2">
                        <FaCheck className="me-2" /> Music industry specialists with proven results
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <FaCheck className="me-2" /> Established relationships with playlist curators and media
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <FaCheck className="me-2" /> Data-driven strategies with measurable outcomes
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck className="me-2" /> Transparent reporting and communication
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
      <div className="bg-primary text-white text-center py-5 mt-5">
        <div className="container py-3">
          <h2 className="mb-4">Ready to Amplify Your Music Career?</h2>
          <p className="lead mb-4">Let our experienced team help you reach new listeners and grow your fanbase</p>
          <button className="btn btn-light btn-lg" onClick={() => setActiveSection('getStarted')}>
            Start Your Promotion Journey
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background-image: url('/api/placeholder/1600/800');
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

export default ArtistPromotion;