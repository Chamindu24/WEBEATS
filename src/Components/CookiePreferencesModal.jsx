import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CookiePreferences = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  const handlePreferenceChange = (cookie) => {
    setPreferences(prev => ({
      ...prev,
      [cookie]: !prev[cookie]
    }));
  };

  const handleSavePreferences = () => {
    // In a real application, you would send these preferences to your backend
    console.log('Saved Cookie Preferences:', preferences);
    setShowSaveConfirmation(true);
    
    // Hide confirmation after 3 seconds
    setTimeout(() => {
      setShowSaveConfirmation(false);
    }, 3000);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="card border-0 rounded-0">
            {/* Black Header Section */}
            <div className="card-header bg-black text-white text-center py-4">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <br></br>  <br></br>  <br></br>
                    <h1 className="display-6 mb-0">
                      <i className="bi bi-shield-lock me-2"></i>
                      Cookie Preferences
                    </h1>
                    <p className="text-white-50 mb-0 mt-2">
                      Manage your privacy settings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="card-body px-lg-5 py-4">
              {/* Save Confirmation Alert */}
              {showSaveConfirmation && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Success!</strong> Cookie preferences updated.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setShowSaveConfirmation(false)}
                  ></button>
                </div>
              )}
              
              {/* Cookie Preference Switches */}
              <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  {/* Necessary Cookies */}
                  <div className="mb-4 pb-2 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Necessary Cookies</h5>
                        <p className="text-muted small mb-0">
                          Essential for website functionality
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="necessary-cookies"
                          checked={preferences.necessary}
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="mb-4 pb-2 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Analytics Cookies</h5>
                        <p className="text-muted small mb-0">
                          Help us understand site usage
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="analytics-cookies"
                          checked={preferences.analytics}
                          onChange={() => handlePreferenceChange('analytics')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="mb-4 pb-2 border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Marketing Cookies</h5>
                        <p className="text-muted small mb-0">
                          Personalized advertising preferences
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="marketing-cookies"
                          checked={preferences.marketing}
                          onChange={() => handlePreferenceChange('marketing')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personalization Cookies */}
                  <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-1">Personalization Cookies</h5>
                        <p className="text-muted small mb-0">
                          Customize your experience
                        </p>
                      </div>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="personalization-cookies"
                          checked={preferences.personalization}
                          onChange={() => handlePreferenceChange('personalization')}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="mt-4">
                    <button 
                      className="btn btn-dark w-100 py-2" 
                      onClick={handleSavePreferences}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;