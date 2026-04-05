import { Heart } from "lucide-react";
import "./Portfolio.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gradient"></div>
      
      <div className="footer-content">
        <p className="footer-text">
          © 2026 All Rights Reserved by{" "}
          <span className="footer-name">Piyush</span>
          {" "}• Made with{" "}
          <Heart className="heart-icon" size={16} fill="currentColor" />
        </p>
        <p className="footer-tech">
          Built with React, HTML5 & CSS3 • Designed for Excellence
        </p>
      </div>
    </footer>
  );
}
