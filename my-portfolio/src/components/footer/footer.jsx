import React from 'react'
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={require("../../Images/logo.png")} alt="Logo"/>
                    <p>Creating exceptional digital experiences.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="#home">Home</Link></li>
                        <li><Link to="./our-projects.html">Projects</Link></li>
                        <li><Link to="#services">Services</Link></li>
                        <li><Link to="./Blog.html">Blog</Link></li>
                        <li><Link to="#about">About Us</Link></li>
                        <li><Link to="#contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-services">
                    <h3>Our Services</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>E-Commerce Solutions</li>
                        <li>SEO Optimization</li>
                        <li>Content Management</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <Link to="#" className="social-icon"><i className="bi bi-facebook"></i></Link>
                        <Link to="#" className="social-icon"><i className="bi bi-twitter-x"></i></Link>
                        <Link to="#" className="social-icon"><i className="bi bi-instagram"></i></Link>
                        <Link to="#" className="social-icon"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Fazian Shahzad. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
