import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>About</h4>
          <p>
            A modern, responsive React website built with best practices for
            performance and accessibility.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              f
            </a>
            <a href="#twitter" aria-label="Twitter">
              𝕏
            </a>
            <a href="#instagram" aria-label="Instagram">
              📷
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Responsive React App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
