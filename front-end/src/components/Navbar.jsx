import React from "react";
import { Link } from "react-router-dom";
import MytickEvent from "./MyTicketEvent";

function Navbar() {
  return (
    <>
      <nav
        style={{
          padding: "10px 40px",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
       
        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flex: 1,
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
           
          >
            HOME
          </Link>
          <Link
            to="/event"
            style={{
              color: "#A40000",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
           
          >
            EVENTS
          </Link>
          <Link
            to="/about"
            style={{
              color: "#484A4A",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
           
          >
            ABOUT US
          </Link>
        </div>

        {/* Right: auth links */}
        <div style={{ display: "flex", gap: "20px", fontWeight: 600 }}>
          <Link
            to="/connection"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: "8px",
              backgroundColor: "#444",
              transition: "background-color 0.3s",
            }}
          
          >
            CONNECTION
          </Link>
          <Link
            to="/inscription"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: "8px",
              backgroundColor: "#A40000",
              transition: "background-color 0.3s",
            }}
           
          >
            INSCRIPTION
          </Link>
        </div>
      </nav>

      
    </>
  );
}

export default Navbar;
