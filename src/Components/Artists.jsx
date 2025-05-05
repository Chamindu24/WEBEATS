import React, { useState, useEffect } from 'react';
import { FaMusic, FaMicrophone, FaHeadphones, FaStar, FaRegStar, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiGuitar, GiPianoKeys, GiDrumKit, GiSaxophone } from 'react-icons/gi';
import { MdLocationOn, MdEvent } from 'react-icons/md';

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [favorites, setFavorites] = useState(new Set());

  // Sample artist data
  const artists = [
    {
      id: 1,
      name: 'DJ Pulse',
      genre: 'Electronic',
      rating: 4.8,
      image: 'https://source.unsplash.com/random/300x300/?dj',
      upcomingEvents: 12,
      location: 'Global',
      instruments: ['Turntables', 'Synthesizer'],
      social: { facebook: '#', twitter: '#', instagram: '#' }
    },
    {
      id: 2,
      name: 'The Harmonics',
      genre: 'Rock',
      rating: 4.6,
      image: 'https://source.unsplash.com/random/300x300/?rockband',
      upcomingEvents: 8,
      location: 'USA',
      instruments: ['Guitar', 'Bass', 'Drums'],
      social: { facebook: '#', twitter: '#', youtube: '#' }
    },
    {
      id: 3,
      name: 'Luna Sky',
      genre: 'Pop',
      rating: 4.9,
      image: 'https://source.unsplash.com/random/300x300/?popsinger',
      upcomingEvents: 15,
      location: 'UK',
      instruments: ['Vocals', 'Piano'],
      social: { instagram: '#', youtube: '#' }
    },
    {
      id: 4,
      name: 'Jazz Collective',
      genre: 'Jazz',
      rating: 4.7,
      image: 'https://source.unsplash.com/random/300x300/?jazz',
      upcomingEvents: 6,
      location: 'France',
      instruments: ['Saxophone', 'Piano', 'Double Bass'],
      social: { facebook: '#', twitter: '#' }
    },
    {
      id: 5,
      name: 'Rhythm Nation',
      genre: 'Hip Hop',
      rating: 4.5,
      image: 'https://source.unsplash.com/random/300x300/?rapper',
      upcomingEvents: 10,
      location: 'USA',
      instruments: ['Vocals', 'Beatbox'],
      social: { instagram: '#', youtube: '#' }
    },
    {
      id: 6,
      name: 'Symphonic Waves',
      genre: 'Classical',
      rating: 4.9,
      image: 'https://source.unsplash.com/random/300x300/?orchestra',
      upcomingEvents: 5,
      location: 'Global',
      instruments: ['Violin', 'Cello', 'Flute'],
      social: { facebook: '#', youtube: '#' }
    },
  ];

  // Filter artists based on search and active filter
  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          artist.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || artist.genre.toLowerCase() === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Toggle favorite status
  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleCards(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.artist-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const getAnimationClass = (id, baseDelay = 0) => {
    if (visibleCards.has(id)) {
      return `animate__animated animate__fadeInUp animate__delay-${baseDelay}s`;
    }
    return 'opacity-0';
  };

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  // Get instrument icon
  const getInstrumentIcon = (instrument) => {
    switch(instrument.toLowerCase()) {
      case 'guitar':
        return <GiGuitar className="me-1" />;
      case 'piano':
        return <GiPianoKeys className="me-1" />;
      case 'drums':
        return <GiDrumKit className="me-1" />;
      case 'saxophone':
        return <GiSaxophone className="me-1" />;
      default:
        return <FaMusic className="me-1" />;
    }
  };

  return (
    <div className="artists-page bg-dark text-white">
      {/* Hero Section */}
      <div className="hero-section position-relative py-5 overflow-hidden"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))',
          minHeight: '50vh',
        }}>
        <div className="hero-background position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/random/1600x900/?concert,crowd")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.4',
            transform: 'scale(1.1)',
          }}>
        </div>
        
        <div className="container position-relative h-100 d-flex align-items-center justify-content-center py-5">
          <div className="text-center animate__animated animate__fadeIn animate__slow">
            <h1 className="display-3 fw-bold mb-4">
              <span className="text-primary">WEBEATS</span> <span className="text-white">Artists</span>
            </h1>
            <p className="lead text-light mb-5 animate__animated animate__fadeInUp animate__delay-1s">
              Discover the finest musical talent for your next event
            </p>
            <div className="d-flex justify-content-center gap-4 mb-4 animate__animated animate__bounceIn animate__delay-2s">
              <FaMicrophone className="text-primary" size={40} />
              <GiGuitar className="text-danger" size={40} />
              <GiPianoKeys className="text-warning" size={40} />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="search-box bg-dark p-4 rounded shadow border border-secondary">
              <div className="input-group mb-3">
                <span className="input-group-text bg-dark text-light border-secondary">
                  <FaSearch />
                </span>
                <input 
                  type="text" 
                  className="form-control bg-dark text-light border-secondary" 
                  placeholder="Search artists by name or genre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="filter-buttons d-flex flex-wrap gap-2">
                <button 
                  className={`btn btn-sm ${activeFilter === 'all' ? 'btn-danger' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveFilter('all')}
                >
                  All Genres
                </button>
                {['Rock', 'Pop', 'Jazz', 'Electronic', 'Hip Hop', 'Classical'].map(genre => (
                  <button 
                    key={genre}
                    className={`btn btn-sm ${activeFilter === genre.toLowerCase() ? 'btn-danger' : 'btn-outline-secondary'}`}
                    onClick={() => setActiveFilter(genre.toLowerCase())}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="row g-4">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist, index) => (
              <div className="col-md-6 col-lg-4" key={artist.id}>
                <div 
                  id={`artist-${artist.id}`}
                  className={`artist-card card bg-dark h-100 border-0 shadow overflow-hidden ${getAnimationClass(`artist-${artist.id}`, index % 3 * 0.2)}`}
                >
                  <div className="position-relative">
                    <img 
                      src={artist.image} 
                      className="card-img-top" 
                      alt={artist.name}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <button 
                      className="btn btn-sm position-absolute top-0 end-0 m-2 bg-dark rounded-circle p-2"
                      onClick={() => toggleFavorite(artist.id)}
                      style={{ width: '36px', height: '36px' }}
                    >
                      {favorites.has(artist.id) ? (
                        <FaStar className="text-warning" />
                      ) : (
                        <FaRegStar className="text-light" />
                      )}
                    </button>
                    <div className="position-absolute bottom-0 start-0 w-100 p-3" 
                      style={{ 
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' 
                      }}>
                      <h3 className="card-title mb-0">{artist.name}</h3>
                      <span className="badge bg-primary">{artist.genre}</span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="rating">
                        {renderStars(artist.rating)}
                        <span className="ms-2 text-light">{artist.rating.toFixed(1)}</span>
                      </div>
                      <div className="text-end">
                        <small className="text-muted d-block">
                          <MdLocationOn className="me-1" /> {artist.location}
                        </small>
                        <small className="text-muted">
                          <MdEvent className="me-1" /> {artist.upcomingEvents} upcoming
                        </small>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h6 className="text-muted mb-2">Instruments:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {artist.instruments.map((instrument, i) => (
                          <span key={i} className="badge bg-secondary">
                            {getInstrumentIcon(instrument)}
                            {instrument}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="social-links d-flex gap-2 mt-auto">
                      {artist.social.facebook && (
                        <a href={artist.social.facebook} className="btn btn-sm btn-outline-light rounded-circle p-1">
                          <FaFacebook size={14} />
                        </a>
                      )}
                      {artist.social.twitter && (
                        <a href={artist.social.twitter} className="btn btn-sm btn-outline-light rounded-circle p-1">
                          <FaTwitter size={14} />
                        </a>
                      )}
                      {artist.social.instagram && (
                        <a href={artist.social.instagram} className="btn btn-sm btn-outline-light rounded-circle p-1">
                          <FaInstagram size={14} />
                        </a>
                      )}
                      {artist.social.youtube && (
                        <a href={artist.social.youtube} className="btn btn-sm btn-outline-light rounded-circle p-1">
                          <FaYoutube size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="card-footer bg-dark border-top border-secondary">
                    <button className="btn btn-outline-danger w-100">
                      Book Artist
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5 animate__animated animate__fadeIn">
              <h4 className="mb-3">No artists found matching your criteria</h4>
              <button 
                className="btn btn-outline-light"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Featured Artist Section */}
      <div className="container-fluid bg-gradient py-5 my-5" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(33,37,41,1) 0%, rgba(13,110,253,0.2) 100%)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="featured-artist-image position-relative rounded overflow-hidden shadow-lg">
                <img 
                  src="https://source.unsplash.com/random/600x600/?singer" 
                  alt="Featured Artist" 
                  className="img-fluid w-100"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" 
                  style={{ 
                    background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, transparent 100%)' 
                  }}>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="ps-lg-4">
                <span className="badge bg-danger mb-3 animate__animated animate__pulse animate__infinite">Featured Artist</span>
                <h2 className="display-5 fw-bold mb-3">Ava Sterling</h2>
                <p className="lead mb-4">International Pop Sensation</p>
                
                <div className="d-flex align-items-center mb-4">
                  <div className="me-4">
                    <div className="display-6 fw-bold text-primary">4.9</div>
                    <div className="text-muted">Rating</div>
                  </div>
                  <div className="me-4">
                    <div className="display-6 fw-bold text-primary">250+</div>
                    <div className="text-muted">Events</div>
                  </div>
                  <div>
                    <div className="display-6 fw-bold text-primary">Global</div>
                    <div className="text-muted">Touring</div>
                  </div>
                </div>
                
                <p className="mb-4">
                  Ava Sterling brings electrifying performances that captivate audiences worldwide. 
                  With multiple chart-topping hits and a dynamic stage presence, she's the perfect 
                  choice for festivals, corporate events, and exclusive private shows.
                </p>
                
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <span className="badge bg-secondary p-2">
                    <FaMicrophone className="me-1" /> Lead Vocals
                  </span>
                  <span className="badge bg-secondary p-2">
                    <GiPianoKeys className="me-1" /> Piano
                  </span>
                  <span className="badge bg-secondary p-2">
                    <FaMusic className="me-1" /> Songwriting
                  </span>
                </div>
                
                <div className="d-flex gap-3">
                  <button className="btn btn-danger px-4 py-2">
                    Book Now
                  </button>
                  <button className="btn btn-outline-light px-4 py-2">
                    View Tour Dates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 position-relative d-inline-block">
            How To Book An Artist
            <span className="position-absolute start-50 bottom-0 translate-middle-x" 
                  style={{ 
                    height: '3px', 
                    width: '60px', 
                    backgroundColor: '#dc3545', 
                    display: 'block' 
                  }}></span>
          </h2>
          <p className="lead text-muted">Simple steps to bring your favorite artists to your event</p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow">
              <div className="card-body text-center p-4">
                <div className="step-number bg-danger rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px' }}>
                  <span className="display-6 fw-bold">1</span>
                </div>
                <h4 className="card-title mb-3">Browse Artists</h4>
                <p className="card-text">
                  Explore our diverse roster of talented musicians and performers across all genres.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow">
              <div className="card-body text-center p-4">
                <div className="step-number bg-primary rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px' }}>
                  <span className="display-6 fw-bold">2</span>
                </div>
                <h4 className="card-title mb-3">Submit Request</h4>
                <p className="card-text">
                  Fill out our simple booking form with your event details and artist preferences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow">
              <div className="card-body text-center p-4">
                <div className="step-number bg-success rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" 
                  style={{ width: '60px', height: '60px' }}>
                  <span className="display-6 fw-bold">3</span>
                </div>
                <h4 className="card-title mb-3">Confirm Booking</h4>
                <p className="card-text">
                  Our team will handle all logistics and confirm your booking within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3 position-relative d-inline-block">
            Client Testimonials
            <span className="position-absolute start-50 bottom-0 translate-middle-x" 
                  style={{ 
                    height: '3px', 
                    width: '60px', 
                    backgroundColor: '#dc3545', 
                    display: 'block' 
                  }}></span>
          </h2>
          <p className="lead text-muted">What our clients say about our artists</p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow">
              <div className="card-body p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-warning me-1" />
                  ))}
                </div>
                <p className="card-text mb-4">
                  "WEBEATS connected us with an amazing jazz band for our corporate gala. The performance was flawless and our guests are still talking about it!"
                </p>
                <div className="d-flex align-items-center">
                  <img 
                    src="https://source.unsplash.com/random/100x100/?executive" 
                    alt="Client" 
                    className="rounded-circle me-3" 
                    width="50" 
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0">Sarah Johnson</h6>
                    <small className="text-muted">Event Director, TechCorp</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow">
              <div className="card-body p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-warning me-1" />
                  ))}
                </div>
                <p className="card-text mb-4">
                  "The pop artist we booked through WEBEATS completely elevated our product launch. Professional, talented, and perfect for our brand image."
                </p>
                <div className="d-flex align-items-center">
                  <img 
                    src="https://source.unsplash.com/random/100x100/?marketing" 
                    alt="Client" 
                    className="rounded-circle me-3" 
                    width="50" 
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0">Michael Chen</h6>
                    <small className="text-muted">Marketing Head, StyleCo</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card bg-dark h-100 border-0 shadow">
              <div className="card-body p-4">
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-warning me-1" />
                  ))}
                </div>
                <p className="card-text mb-4">
                  "As a wedding planner, I rely on WEBEATS for exceptional musical talent. They consistently deliver artists who understand how to create the perfect ambiance."
                </p>
                <div className="d-flex align-items-center">
                  <img 
                    src="https://source.unsplash.com/random/100x100/?weddingplanner" 
                    alt="Client" 
                    className="rounded-circle me-3" 
                    width="50" 
                    height="50"
                  />
                  <div>
                    <h6 className="mb-0">Emily Rodriguez</h6>
                    <small className="text-muted">CEO, Dream Weddings</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-5">
        <div className="cta-section bg-dark p-5 rounded text-center border border-secondary">
          <h2 className="display-6 fw-bold mb-4">Ready to book your perfect artist?</h2>
          <p className="lead mb-5">Our team is standing by to help you create an unforgettable musical experience.</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-danger px-4 py-2">
              Contact Our Team
            </button>
            <button className="btn btn-outline-light px-4 py-2">
              Browse All Artists
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .artist-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
        }
        
        .artist-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(220, 53, 69, 0.3) !important;
        }
        
        .opacity-0 {
          opacity: 0;
        }
        
        .featured-artist-image {
          transition: transform 0.5s ease;
        }
        
        .featured-artist-image:hover {
          transform: scale(1.02);
        }
        
        .step-number {
          transition: all 0.3s ease;
          box-shadow: 0 0 0 rgba(220, 53, 69, 0);
        }
        
        .card:hover .step-number {
          box-shadow: 0 0 20px rgba(220, 53, 69, 0.6);
          transform: scale(1.1);
        }
        
        .cta-section {
          background: linear-gradient(rgba(33,37,41,0.9), rgba(33,37,41,0.9)), 
                      url('https://source.unsplash.com/random/1200x600/?music,performance');
          background-size: cover;
          background-position: center;
        }
        
        .badge {
          transition: all 0.3s ease;
        }
        
        .badge:hover {
          transform: translateY(-2px);
        }
        
        .search-box {
          transition: all 0.3s ease;
        }
        
        .search-box:hover {
          box-shadow: 0 5px 15px rgba(220, 53, 69, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Artists;