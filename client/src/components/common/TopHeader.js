import React from "react";

// Font Awesome CDN को public/index.html में जरूर जोड़ें!
export default function TopHeader() {
  return (
    <div style={{
      background: "#ff5a91",
      color: "#fff",
      fontSize: 15,
      padding: "8px 0",
      borderBottom: "1px solid #fccadb"
    }}>
      <div style={{
        maxWidth: 1300,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        {/* Left: location & email */}
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <span>
            <i className="fas fa-map-marker-alt" style={{ marginRight: 5 }}></i>
            123 Street, New York {/* अपना पता डालें */}
          </span>
          <span>
            <i className="fas fa-envelope" style={{ marginRight: 5 }}></i>
            Email@gyandayiniclasses.in
          </span>
        </div>
        {/* Right: social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
             style={{ color: "#fff", fontSize: 18 }}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             style={{ color: "#fff", fontSize: 18 }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
             style={{ color: "#fff", fontSize: 18 }}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             style={{ color: "#fff", fontSize: 18 }}>
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
