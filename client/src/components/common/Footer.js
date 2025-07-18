import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#aa2326",
      color: "#fff",
      padding: "36px 0 16px 0",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: 1300, margin: "auto", padding: "0 24px" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
          marginBottom: 16
        }}>
          <div style={{ textAlign: "left" }}>
            <h3 style={{ color: "#ffe9be", margin: 0 }}>Gyan Dayini Classes</h3>
            <div style={{ fontSize: 14 }}>Pre-Primary to 10<sup>th</sup>, SSC & CBSE</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>
              Managed by Mrs. Pinkee R. Prajapati (B.Sc + B.Ed)
            </div>
          </div>
          <div>
            <div style={{ color: "#fff7e8", fontWeight: 500 }}>
              <span style={{ marginRight: 10 }}>📧 gyandayiniclasses@gmail.com</span>
              <span>📞 +91 9198582342</span>
            </div>
            <div style={{ fontSize: 13, color: "#fac871", marginTop: 7 }}>
              24, Chawl No. 2, Some Area, Mumbai - <span style={{ color: "#ffe98f" }}>400001</span>
            </div>
            <div style={{ marginTop: 10 }}>
              <a href="https://wa.me/919198582342" target="_blank" rel="noopener noreferrer"
                 style={{ color: "#fff", textDecoration: "underline", fontSize: 16 }}>WhatsApp us</a>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 13, color: "#ffd096", marginTop: 20 }}>
          © {new Date().getFullYear()} Gyan Dayini Classes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
