import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Portfolio.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="header-container">
        <div className="logo">My Porfolio</div>
        
        <ul className="nav-menu">
          <li>
            <a href="#about" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>
              About
            </a>
          </li>
          <li>
            <a href="#academic" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("academic");
            }}>
              Academic Journey
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}>
              Experience & Certifications
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#gallery" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}>
              Contact
            </a>
          </li>
        </ul>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
