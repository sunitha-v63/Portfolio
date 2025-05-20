import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <footer className="text-light pt-4 pb-2">
      <div className="container text-center">
        <div className="mb-3 d-flex justify-content-center gap-3">
          <div className="social-icon">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="social-icon">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-center flex-wrap gap-4">
          <div className="footer-link">FAQ</div>
          <div className="footer-link">Services</div>
          <div className="footer-link">About Me</div>
          <div className="footer-link">Contact</div>
          <div className="footer-link">Privacy Policy</div>
        </div>
        <p className="mb-0">
          &copy;<span className='text-danger'>Your Site Name.</span>  All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
