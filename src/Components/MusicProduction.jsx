import React, { useState, useEffect } from 'react';
import { FaMusic, FaHeadphones, FaLayerGroup, FaCompactDisc, FaChartLine, FaRocket, FaUsers, FaStar, FaCheck, FaTrophy } from 'react-icons/fa';

const MusicProduction = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [isLoading, setIsLoading] = useState(true);

  // Sample production services
  const productionServices = [
    {
      icon: <FaMusic size={36} className="text-primary mb-3" />,
      title: "Recording Sessions",
      description: "Professional audio recording with state-of-the-art equipment and experienced sound engineers."
    },
    {
      icon: <FaHeadphones size={36} className="text-primary mb-3" />,
      title: "Mixing & Mastering",
      description: "Industry-standard mixing and mastering to ensure your music sounds polished and professional."
    },
    {
      icon: <FaLayerGroup size={36} className="text-primary mb-3" />,
      title: "Beat Production",
      description: "Custom beat creation and production services tailored to your unique sound and style."
    },
    {
      icon: <FaCompactDisc size={36} className="text-primary mb-3" />,
      title: "Album Production",
      description: "End-to-end production for singles, EPs, and full albums with cohesive sound design."
    }
  ];

  // Sample portfolio
  const projectPortfolio = [
    {
      id: 1,
      artist: "Skyline Dreams",
      results: {
        streams: "15M+ streams across platforms",
        awards: "Indie Music Award Winner",
        placements: "Featured in major TV series"
      },
      image: "/api/placeholder/400/250",
      description: "Full album production and mixing for Skyline Dreams' breakthrough release 'Midnight Horizons'."
    },
    {
      id: 2,
      artist: "Terra Nova",
      results: {
        streams: "6M+ streams on debut single",
        awards: "Best New Electronic Artist",
        placements: "Festival main stage performance"
      },
      image: "/api/placeholder/400/250",
      description: "Beat production and sound design for Terra Nova's genre-bending electronic project."
    },
    {
      id: 3,
      artist: "Sarah Daniels",
      results: {
        streams: "22M+ streams worldwide",
        awards: "Gold Record Certification",
        placements: "Major radio airplay"
      },
      image: "/api/placeholder/400/250",
      description: "Full production, recording, and mixing for Sarah Daniels' chart-topping singer-songwriter album."
    }
  ];

  // Studio equipment
  const studioEquipment = {
    micCount: 25,
    instruments: 40,
    daws: 5,
    plugins: 200
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
    <div className="music-production-container">
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-dark text-white position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        <div className="container position-relative">
          <div className="py-5">
            <h1 className="display-3 fw-bold mb-3">MUSIC PRODUCTION</h1>
            <h2 className="fs-4 mb-4">Bring Your Musical Vision to Life</h2>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary btn-lg me-3">Our Services</button>
              <button className="btn btn-outline-light btn-lg">Listen to Our Work</button>
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
              Production Services
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`} 
              onClick={() => setActiveSection('portfolio')}
            >
              Portfolio
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeSection === 'studio' ? 'active' : ''}`} 
              onClick={() => setActiveSection('studio')}
            >
              Our Studio
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
          {/* Production Services Section */}
          <div className={`tab-pane fade ${activeSection === 'services' ? 'show active' : ''}`}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Music Production Services</h2>
              <p className="lead">Professional production services to elevate your sound</p>
            </div>
            
            <div className="row g-4">
              {productionServices.map((service, index) => (
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
                  <h3 className="fw-bold mb-4">Why Professional Production Matters</h3>
                  <p className="lead">Quality production can make the difference between good music and great music</p>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaRocket />
                    </div>
                    <div>
                      <h5>Sound Quality</h5>
                      <p>Professional production ensures your music sounds polished and competitive in today's market.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaUsers />
                    </div>
                    <div>
                      <h5>Listener Engagement</h5>
                      <p>Well-produced music keeps listeners engaged longer and increases repeat plays.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <FaChartLine />
                    </div>
                    <div>
                      <h5>Industry Credibility</h5>
                      <p>Quality production signals professionalism to labels, playlist curators, and industry gatekeepers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">The WEBEATS Production Process</h3>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Creative Consultation</h5>
                      <p>We meet with you to understand your vision, influences, and goals for your music.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>Pre-Production</h5>
                      <p>We refine song arrangements, select instruments, and plan the recording approach.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Recording</h5>
                      <p>Capture high-quality performances using our professional recording equipment and acoustically treated spaces.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Mixing & Mastering</h5>
                      <p>Professional engineers balance and enhance your tracks for optimal sound on all platforms.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className={`tab-pane fade ${activeSection === 'portfolio' ? 'show active' : ''}`}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Production Portfolio</h2>
              <p className="lead">Listen to our recent work and production credits</p>
            </div>

            <div className="row g-4">
              {projectPortfolio.map((project) => (
                <div key={project.id} className="col-md-4">
                  <div className="card h-100 shadow">
                    <img src={project.image} className="card-img-top" alt={project.artist} />
                    <div className="card-body">
                      <h4 className="card-title">{project.artist}</h4>
                      <p className="card-text">{project.description}</p>
                      <h5 className="mt-4 mb-3">Project Highlights:</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2"><FaRocket className="text-primary me-2" /> {project.results.streams}</li>
                        <li className="mb-2"><FaStar className="text-primary me-2" /> {project.results.awards}</li>
                        <li><FaTrophy className="text-primary me-2" /> {project.results.placements}</li>
                      </ul>
                      <button className="btn btn-outline-primary mt-3">Listen to Samples</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5 pt-3">
              <h3>Ready to Create Your Next Masterpiece?</h3>
              <p className="mb-4">Let's bring your musical vision to life with professional production</p>
              <button className="btn btn-primary btn-lg" onClick={() => setActiveSection('getStarted')}>
                Start Your Project
              </button>
            </div>
          </div>

          {/* Studio Section */}
          <div className={`tab-pane fade ${activeSection === 'studio' ? 'show active' : ''}`}>
            <div className="text-center mb-5">
              <h2 className="fw-bold">Our Production Studio</h2>
              <p className="lead">State-of-the-art facilities designed for exceptional sound</p>
            </div>

            <div className="row g-4">
              <div className="col-lg-8 mx-auto">
                <div className="card shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="mb-4">Studio Equipment & Facilities</h3>
                    
                    <div className="row mb-4">
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaHeadphones size={40} className="text-primary mb-3" />
                          <h4>{studioEquipment.micCount}</h4>
                          <p className="text-muted mb-0">Professional Mics</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaMusic size={40} className="text-primary mb-3" />
                          <h4>{studioEquipment.instruments}</h4>
                          <p className="text-muted mb-0">Instruments</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaLayerGroup size={40} className="text-primary mb-3" />
                          <h4>{studioEquipment.daws}</h4>
                          <p className="text-muted mb-0">DAW Platforms</p>
                        </div>
                      </div>
                      <div className="col-md-3 col-6 text-center">
                        <div className="p-3">
                          <FaCompactDisc size={40} className="text-primary mb-3" />
                          <h4>{studioEquipment.plugins}+</h4>
                          <p className="text-muted mb-0">Pro Plugins</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-light rounded-3">
                      <h5 className="mb-3">Studio Tour</h5>
                      <p className="mb-4">Take a virtual tour of our acoustically designed recording and production spaces.</p>
                      <div className="row justify-content-center">
                        <div className="col-md-10">
                          <div className="bg-white p-3 border rounded" style={{ height: "250px", position: "relative" }}>
                            <div className="position-absolute top-50 start-50 translate-middle text-center">
                              <FaCompactDisc size={50} className="text-primary mb-3" />
                              <p>Studio virtual tour video placeholder</p>
                              <button className="btn btn-sm btn-outline-primary">View Tour</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="mb-3">Studio Spaces</h4>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Main Recording Room</h5>
                            <p className="mb-0">450 sq ft acoustically treated live room with isolation booths for drums, vocals, and amplifiers.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Control Room</h5>
                            <p className="mb-0">Professional mixing environment with Genelec monitoring, SSL console, and outboard gear.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Production Suites</h5>
                            <p className="mb-0">Three dedicated production rooms for beatmaking, editing, and post-production work.</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded h-100">
                            <h5>Lounge Area</h5>
                            <p className="mb-0">Comfortable lounge for clients with refreshments, Wi-Fi, and relaxation space between sessions.</p>
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
                <h2 className="fw-bold mb-4">Start Your Music Production Project</h2>
                <p className="lead mb-4">Tell us about your music and production needs, and we'll help bring your vision to life.</p>
                
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your production inquiry has been submitted! Our team will contact you shortly.");
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
                    <label htmlFor="musicLinks" className="form-label">Links to Your Music (optional)</label>
                    <input type="text" className="form-control" id="musicLinks" placeholder="Spotify, SoundCloud, etc." />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projectType" className="form-label">Project Type</label>
                    <select className="form-select" id="projectType">
                      <option selected>Select project type</option>
                      <option value="singleSong">Single Song</option>
                      <option value="ep">EP (3-6 songs)</option>
                      <option value="album">Full Album</option>
                      <option value="beatProduction">Beat Production</option>
                      <option value="mixingOnly">Mixing Services Only</option>
                      <option value="masteringOnly">Mastering Services Only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Primary Genre</label>
                    <select className="form-select" id="genre">
                      <option selected>Select primary genre</option>
                      <option value="pop">Pop</option>
                      <option value="hiphop">Hip-Hop/Rap</option>
                      <option value="rnb">R&B</option>
                      <option value="rock">Rock</option>
                      <option value="electronic">Electronic</option>
                      <option value="folk">Folk/Acoustic</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="timeline" className="form-label">Project Timeline</label>
                    <select className="form-select" id="timeline">
                      <option selected>Select timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="standard">Standard (1-2 months)</option>
                      <option value="flexible">Flexible (3+ months)</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Tell Us About Your Project</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Describe your project vision, influences, and specific production needs" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">Submit Production Inquiry</button>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="bg-light p-4 rounded-3 h-100">
                  <h3 className="mb-4">What to Expect</h3>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">1</span>
                    </div>
                    <div>
                      <h5>Initial Consultation</h5>
                      <p>We'll schedule a call to discuss your project in detail and answer any questions you have.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">2</span>
                    </div>
                    <div>
                      <h5>Project Proposal</h5>
                      <p>We'll provide a detailed proposal including timeline, pricing, and production approach.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">3</span>
                    </div>
                    <div>
                      <h5>Pre-Production Meeting</h5>
                      <p>Before recording, we'll meet to finalize arrangements, production style, and session planning.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start mb-4">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">4</span>
                    </div>
                    <div>
                      <h5>Production Process</h5>
                      <p>We'll keep you involved throughout the recording, mixing, and mastering process with regular updates and review sessions.</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-2 me-3">
                      <span className="fw-bold">5</span>
                    </div>
                    <div>
                      <h5>Final Delivery</h5>
                      <p>You'll receive professionally formatted masters ready for distribution on all platforms.</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary text-white p-4 rounded-3 mt-4">
                    <h4 className="mb-3">Why Choose WEBEATS Production</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-2">
                        <FaCheck className="me-2" /> Experienced producers across multiple genres
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <FaCheck className="me-2" /> State-of-the-art recording and mixing facilities
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <FaCheck className="me-2" /> Proven record of successful releases
                      </li>
                      <li className="d-flex align-items-center">
                        <FaCheck className="me-2" /> Personalized approach to your unique sound
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
          <h2 className="mb-4">Ready to Create Professional Music?</h2>
          <p className="lead mb-4">Let our experienced production team help you achieve your sonic vision</p>
          <button className="btn btn-light btn-lg" onClick={() => setActiveSection('getStarted')}>
            Start Your Production Project
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

export default MusicProduction;