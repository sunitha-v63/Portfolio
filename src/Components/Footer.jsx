import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="text-light pt-4 pb-2 footer">
      <div className="container text-center">
        <div className="mb-3 d-flex justify-content-center gap-3 fs-5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <nav aria-label="Footer Navigation">
          <div className="mb-3 d-flex justify-content-center flex-wrap gap-4 fs-4 text-decoration-none">
          <a href="about" className="footer-link text-light text-decoration-none">
              About
            </a>
            <a href="skills" className="footer-link text-light text-decoration-none">
              Skills
            </a>
            <a href="visionary" className="footer-link text-light text-decoration-none">
              Visionary
            </a>
            <a href="project" className="footer-link text-light text-decoration-none">
              Projects
            </a>
            <a href="education" className="footer-link text-light text-decoration-none">
              Education
            </a>
            <a href="contact" className="footer-link text-light text-decoration-none">
              Contact
            </a>
          </div>
        </nav>
        <div className="mb-3">
          <p className="mb-1">
            <i className="fas fa-phone-alt me-2"></i>
            <a href="tel:+919876543210" className="text-light text-decoration-none fs-5">
              +91 9344456261
            </a>
          </p>
          <p className="mb-1">
            <i className="fas fa-envelope me-3"></i>
            <a href="mailto:youremail@example.com" className="text-light text-decoration-none fs-5">
              sunithgopal06@example.com
            </a>
          </p>
          <p className="mb-0 fs-5">
            <i className="fas fa-map-marker-alt me-2 fs-5"></i>
            Coimbatore, Tamil Nadu, India
          </p>
        </div>
        <p className="mb-0">
          &copy;{' '}
          <span className="text-danger">Your Site Name.</span> All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

