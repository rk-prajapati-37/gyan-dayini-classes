import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Direct import from public is not needed in React, use src="/logo.png"
export default function Header() {
  const navigate = useNavigate();

  return (
    <header style={{
      background: "#aa2326",
      padding: 0,
      borderBottom: "2px solid #fae6ee",
      boxShadow: "0 2px 8px #00000019"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1300,
        margin: "0 auto",
        padding: "0 18px",
        height: 100
      }}>
        {/* Logo and Name */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img
            src="./logo.png"
            alt="Gyan Dayini Classes"
            style={{
              height: 75, width: 75,
              borderRadius: 12,
              border: "2px solid #fff",
              background: "#fff"
            }}
          />
          <div>
            {/* <span style={{
              fontWeight: 700, fontSize: 28,
              color: "#fa4b89", letterSpacing: ".5px"
            }}>Baby</span>
            <span style={{
              fontWeight: 700, fontSize: 28, color: "#4763fa"
            }}>Care</span>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginLeft: 12 }}>
              / Gyan Dayini Classes
            </span> */}
          </div>
        </div>
        {/* Navigation */}
        <nav>
          <ul style={{
            display: "flex",
            gap: 26,
            listStyle: "none",
            margin: 0,
            padding: 0,
            fontWeight: 500
          }}>
            <li><Link to="/" style={navStyle}>Home</Link></li>
            <li><Link to="/about" style={navStyle}>About</Link></li>
            <li><Link to="/services" style={navStyle}>Services</Link></li>
            <li><Link to="/gallery" style={navStyle}>Gallery</Link></li>
            <li><Link to="/contact" style={navStyle}>Contact</Link></li>
          </ul>
        </nav>
        {/* Social Icons + Login */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: 14
        }}>
          {/* Have any questions? Box */}
          <div style={{
            display: "flex",
            alignItems: "center",
            // background: "#fff0f6",
            borderRadius: 18,
            padding: "6px 18px 6px 10px",
            marginRight: 16,
            // border: "1.5px solid #ffd6e6"
          }}>
            <span style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              color: "#aa2326",
              borderRadius: "50%",
              width: 32,
              height: 32,
              fontSize: 20,
              marginRight: 10
            }}>
              <i className="fas fa-phone-alt"></i>
            </span>
            <div>
              <div style={{ color: "#FFF", fontWeight: 500, fontSize: 15 }}>Have any questions?</div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 17 }}>
                Free: + 0123 456 7890
              </div>
            </div>
          </div>
          {/* Social Icons */}
          {/* <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: 22 }} title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: 22 }} title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: 22 }} title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#fff", fontSize: 22 }} title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a> */}
          <button
            style={{
              background: "#fff",
              color: "#aa2326",
              border: 'none',
              borderRadius: 999,
              padding: "8px 22px",
              fontWeight: 700,
              fontSize: 16,
              marginLeft: 10,
              boxShadow: "0 1.5px 8px #fa4b8920",
              cursor: "pointer",
              transition: "background .2s"
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

const navStyle = {
  color: "#fff",
  textDecoration: "none",
  background: "none",
  padding: "7px 12px",
  borderRadius: "18px",
  transition: "background .2s",
  fontSize: 16,
};
