import { ExternalLink, Github, Globe, Shield, QrCode, Layout } from "lucide-react";
import { useState } from "react";
import { BackgroundLayer } from "./BackgroundLayer";
import "./Portfolio.css";

import civicLogo from "@/portfoliopics/civic_drishti_logo.png";
import cyberShieldLogo from "@/portfoliopics/logo_cybershield.png";
import qrCodeLogo from "@/portfoliopics/logo_qrcode.png";
import portfolioLogo from "@/portfoliopics/logo_portfolio.png";

const projects = [
  {
    title: "CivicDrishti Bharat",
    organization: "India Innovates 2026 Grand Finale",
    description: "AI-based civic complaint resolution platform for detecting potholes, garbage, and drainage issues.",
    image: civicLogo,
    tags: ["React", "AI", "Node.js", "MongoDB", "CivicTech"],
    icon: Globe,
    liveLink: "#",
    githubLink: "#",
    year: "2026",
  },
  {
    title: "CyberShield AI",
    organization: "Hack & Forge Hackathon, BIT Mesra",
    description: "Comprehensive cybersecurity solution leveraging AI to detect and mitigate phishing threats in real-time.",
    image: cyberShieldLogo,
    tags: ["Python", "Supabase", "Tailwind", "Vercel"],
    icon: Shield,
    liveLink: "https://ultrashield-ai-main.vercel.app/",
    githubLink: "#",
    year: "2026",
  },
  {
    title: "QR Code Generator",
    organization: "Personal Project",
    description: "Web application that generates QR codes for URLs, text, and contact information.",
    image: qrCodeLogo,
    tags: ["Node.js", "Express", "HTML", "CSS", "Render"],
    icon: QrCode,
    liveLink: "https://qr-generator-1-mqzf.onrender.com/",
    githubLink: "https://github.com/piyushsinha2727/qr-generator",
    year: "2025",
  },
  {
    title: "Portfolio Development",
    organization: "Personal Project",
    description: "High-performance responsive portfolio built with React, TypeScript, and Vite.",
    image: portfolioLogo,
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
    icon: Layout,
    liveLink: "#",
    githubLink: "#",
    year: "2026",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <BackgroundLayer variant="grid" />

      <div className="section-content">
        <div className="container">
          <h2 className="section-title glow-text">Featured Projects</h2>
          <p className="timeline-subtitle">Real-world applications and innovative solutions I've built.</p>

          <div className="timeline">
            <div className="timeline-line" />

            {projects.map((project, index) => {
              const Icon = project.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
                  <div className="timeline-year">{project.year}</div>

                  <div className="timeline-node">
                    <Icon size={20} />
                  </div>

                  <div className="timeline-card glass-card">
                    <h3 className="timeline-card-title">{project.title}</h3>
                    <p className="timeline-card-org">{project.organization}</p>
                    <p className="timeline-card-desc">{project.description}</p>
                    <div className="timeline-tags">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="timeline-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="timeline-card-links">
                      {project.liveLink && project.liveLink !== "#" && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="timeline-link">
                          <ExternalLink size={14} />
                          <span>Live</span>
                        </a>
                      )}
                      {project.githubLink && project.githubLink !== "#" && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="timeline-link timeline-link--gh">
                          <Github size={14} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="timeline-end-dot" />
          </div>
        </div>
      </div>
    </section>
  );
}
