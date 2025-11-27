import React from 'react';
import Logo from './Logo';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        "--dot-color": "#A40000",
        "--bg-color":"#001233",
        backgroundColor: "#A40000",
        color: "white",
        padding: "40px 60px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      <div style={{ flex: "1 1 200px" }}>
        <Logo />
      </div>

      <div style={{ flex: "1 1 200px" }}>
        <h3 style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>Navigation</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link style={linkStyle} to="/">Home</Link>
          <Link style={linkStyle} to="/event">Events</Link>
          <Link style={linkStyle} to="/FAQ">FAQ</Link>
          <Link style={linkStyle} to="/Support">Support</Link>
        </div>
      </div>

   
      <div style={{ flex: "1 1 300px" }}>
        <h3 style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>About us</h3>
        <p style={{ lineHeight: "1.6", opacity: "0.9" }}>
          MyTiq is your trusted gateway to unforgettable experiences.
          We connect you to the most exciting events happening around you —
          from concerts and festivals to workshops, conferences, and cultural experiences.
        </p>
      </div>

   
      <div style={{ flex: "1 1 200px" }}>
        <h3 style={{ marginBottom: "15px", fontSize: "20px", fontWeight: "bold" }}>Contact</h3>
        <p style={contactStyle}><strong>Call:</strong> 07091637378</p>
        <p style={contactStyle}><strong>Email:</strong> mytiq@gmail.com</p>
      </div>
    </footer>
  );
}


const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  transition: "0.3s",
  opacity: 0.8,
};
linkStyle[':hover'] = { opacity: 1 };

const contactStyle = {
  margin: "8px 0",
  opacity: 0.9,
};

export default Footer;
