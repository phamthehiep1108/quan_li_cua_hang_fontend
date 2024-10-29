import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-footer">
          <div className="row">
            <div className="footer-col">
              <h4>Organic</h4>
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Conditions</a>
                </li>
                <li>
                  <a>Our Journals</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a>Offers</a>
                </li>
                <li>
                  <a>Discount Coupons</a>
                </li>
                <li>
                  <a>Stores</a>
                </li>
                <li>
                  <a>Track Order</a>
                </li>
                <li>
                  <a>Shop</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Customer Service</h4>
              <ul>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Returns & Refunds</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow us</h4>
              <div className="social-links">
                <a>
                  <FaFacebook />
                </a>
                <a>
                  <FaInstagramSquare />
                </a>
                <a>
                  <FaTwitterSquare />
                </a>
                <a>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
