import React from "react";
import "./footer.styles.scss";

import { IoIosArrowDropupCircle } from "react-icons/io";

const footerContent = {
  //   Shop: [],
  "Follow us on": ["facebook", "twitter", "instagram"],
  About: [
    "Privacy Notice",
    "Conditions of use & sale",
    "returns policy",
    "help",
  ],
  "contact us": [
    "+1-(123)456-7890",
    "Chat with Support Center",
    "customer-services@acuerdo.com",
    "Become an Affiliate",
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <button className="footer-backToTop">
        <div className="footer-backToTop--svg">
          <IoIosArrowDropupCircle />
        </div>
        <div className="footer-backToTop--text">Back To Top</div>
      </button>
      <div className="footer-container">
        {Object.keys(footerContent).map((cur, index) => {
          return (
            <div className="footer-section" key={index}>
              <p className="footer-section--title">{cur}</p>
              <div className="box">
                {footerContent[cur].map((flag, i) => {
                  return <span key={i}>{flag}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer-copyright">
        <div>
          <span>Shravan Kumar Karnati &copy; 2020</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
