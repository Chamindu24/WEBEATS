import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  FaDownload, 
  FaExpand, 
  FaTimes 
} from 'react-icons/fa';

const Magazine = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/ranidu-portfolio.pdf';
    link.download = 'Ranidu_Portfolio.pdf';
    link.click();
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`magazine-container ${isFullScreen ? 'fullscreen' : ''}`}>
      <div className="container-fluid py-4">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h3 className="mb-0">Ranidu Rochitha Pradeeshan - Portfolio Magazine</h3>
                <div className="d-flex align-items-center">
                  <button 
                    className="btn btn-light me-2" 
                    onClick={handleDownload}
                  >
                    <FaDownload className="me-2" /> Download PDF
                  </button>
                  <button 
                    className="btn btn-light" 
                    onClick={toggleFullScreen}
                  >
                    {isFullScreen ? <FaTimes /> : <FaExpand />}
                  </button>
                </div>
              </div>

              <div className="card-body p-0">
                <iframe
                  src="/ranidu-portfolio.pdf"
                  width="100%"
                  height="600"
                  title="Ranidu Portfolio PDF"
                  className="pdf-viewer"
                >
                  <p>Your browser does not support PDFs. 
                    <a href="/ranidu-portfolio.pdf">Download the PDF</a> instead.</p>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .magazine-container {
          background-color: #f4f6f9;
          min-height: 100vh;
          transition: all 0.3s ease;
        }

        .pdf-viewer {
          border: none;
          width: 100%;
          min-height: 600px;
          max-height: 80vh;
        }

        .fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fullscreen .card {
          width: 90vw;
          height: 90vh;
          max-width: 1200px;
        }

        .fullscreen .pdf-viewer {
          height: calc(90vh - 60px);
        }

        @media (max-width: 768px) {
          .pdf-viewer {
            min-height: 400px;
          }

          .card-header {
            flex-direction: column;
            align-items: start !important;
          }

          .card-header .btn-group {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Magazine;