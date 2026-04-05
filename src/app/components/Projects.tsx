import { ExternalLink, Github } from "lucide-react";
import "./Portfolio.css";

import civicLogo from "@/portfoliopics/civic_drishti_logo.png";
import cyberShieldLogo from "@/portfoliopics/logo_cybershield.png";
import qrCodeLogo from "@/portfoliopics/logo_qrcode.png";
import cmsLogo from "@/portfoliopics/logo_cms.png";
import publicCmsLogo from "@/portfoliopics/logo_public_cms.png";
import portfolioLogo from "@/portfoliopics/logo_portfolio.png";

const projects = [
  {
    title: "CivicDrishti Bharat",
    description: "An AI-based civic complaint resolution platform presented at the Grand Finale of India Innovates 2026 (Bharat Mandapam). It uses AI to detect issues like potholes, garbage, and drainage problems, following a structured workflow for transparency and accountability.",
    image: civicLogo,
    tags: ["React", "AI", "Node.js", "MongoDB", "CivicTech"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "CyberShield AI",
    description: "Presented at Hack & Forge 24 Hour Hackathon Final Round (BIT Mesra). A comprehensive cybersecurity solution that leverages AI to detect and mitigate threats in real-time, designed to protect users from phishing and scam links.",
    image: cyberShieldLogo,
    tags: ["VS Code", "Node.js", "Tailwind CSS", "Supabase", "Python", "Vercel"],
    liveLink: "https://ultrashield-ai-main.vercel.app/",
    githubLink: "#"
  },
  {
    title: "QR Code Generator",
    description: "A web-based application that generates QR codes for various types of data, including URLs, text, and contact information.",
    image: qrCodeLogo,
    tags: ["VS Code", "Node.js", "Express.js", "Supabase", "HTML", "CSS", "JS", "Render"],
    liveLink: "https://qr-generator-1-mqzf.onrender.com/",
    githubLink: "https://github.com/piyushsinha2727/qr-generator"
  },

  {
    title: "Portfolio Development",
    description: "A high-performance, responsive web application developed to showcase my engineering journey and technical expertise. Built using React and TypeScript, the project utilizes Vite for a fast development experience and Tailwind CSS for a modern, sleek UI.",
    image: portfolioLogo,
    tags: ["React", "Tailwind CSS", "Typescript", "Supabase"],
    liveLink: "#",
    githubLink: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <h2 className="section-title glow-text">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image-wrapper" style={{ height: '240px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>

                  <a href={project.githubLink} className="project-link github">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
