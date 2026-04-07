import { Award, Calendar, Briefcase, Code, Shield, BookOpen, Cpu, Plane, FileText, Monitor } from "lucide-react";
import { useState } from "react";
import { BackgroundLayer } from "./BackgroundLayer";
import "./Portfolio.css";

export function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Grand Finale Finalist - India Innovates 2026",
      organization: "India Innovates, Bharat Mandapam, New Delhi",
      date: "March 2026",
      description: "Competed at the national level among top 1000 teams with CivicDrishti Bharat, an AI-based civic complaint resolution platform.",
      tags: ["React", "AI", "Node.js", "MongoDB"],
      icon: Award,
    },
    {
      title: "Finalist - Hack & Forge 24Hr Hackathon",
      organization: "SDS BIT Mesra, Birla Institute of Technology",
      date: "March 2026",
      description: "Presented CyberShield AI, an intelligent safe browsing system defending against phishing and scope-threatening URLs.",
      tags: ["CyberSecurity", "Python", "Supabase", "AI"],
      icon: Shield,
    },
    {
      title: "CyberSecurity Workshop",
      organization: "Jharkhand RakshaShakti & OWASP",
      date: "March 2026",
      description: "Intensive workshop on ethical hacking, vulnerability assessment, and secure coding practices.",
      tags: ["Ethical Hacking", "OWASP", "Security"],
      icon: Shield,
    },
    {
      title: "Getting Started with Microsoft Excel",
      organization: "Coursera",
      date: "February 2026",
      description: "Comprehensive course covering essential functions, data analysis techniques, and spreadsheet management.",
      tags: ["Excel", "Data Analysis", "Coursera"],
      icon: FileText,
    },
    {
      title: "TechSprint Hackathon",
      organization: "Google Developer Student Clubs, REC Campus",
      date: "January 2026",
      description: "Collaborated on innovative solutions to real-world problems using cutting-edge technologies.",
      tags: ["GDSC", "Hackathon", "Innovation"],
      icon: Code,
    },
    {
      title: "Technology Job Simulation",
      organization: "Deloitte",
      date: "November 2025",
      description: "Comprehensive technology simulation focused on real-world business challenges and problem-solving.",
      tags: ["Deloitte", "Consulting", "Tech"],
      icon: Briefcase,
    },
    {
      title: "Technical Intern",
      organization: "National Informatics Centre (NIC)",
      date: "July 2025",
      description: "6 weeks of hands-on experience at Jharkhand State Unit, focusing on public-sector tech infrastructure.",
      tags: ["NIC", "Government", "Infrastructure"],
      icon: Monitor,
    },
    {
      title: "Azure Administrator Associate",
      organization: "Microsoft",
      date: "January 2025",
      description: "Certified Azure Administrator specializing in cloud identity, governance, storage, and compute.",
      tags: ["Azure", "Cloud", "Microsoft", "+1"],
      icon: Cpu,
    },
    {
      title: "Computer Hardware Training",
      organization: "Birla Institute of Technology (BIT) Mesra",
      date: "February 2024",
      description: "Specialized hardware training on computer architecture, troubleshooting, and system maintenance.",
      tags: ["Hardware", "BIT Mesra", "Architecture"],
      icon: Cpu,
    },
    {
      title: "Member of Editorial Board",
      organization: "'SPANDAN' BIT Mesra's E-Magazine",
      date: "Volume 1-2",
      description: "Contributed to design and content curation of the official institute e-magazine.",
      tags: ["Editorial", "Content", "Design"],
      icon: BookOpen,
    },
    {
      title: "Airport Authority of India Intern",
      organization: "Birsa Munda Airport, Ranchi",
      date: "June 2023",
      description: "4 weeks of technical exposure analyzing networking and operational technology in aviation.",
      tags: ["AAI", "Networking", "Aviation"],
      icon: Plane,
    },
  ];

  const visibleItems = showAll ? experiences : experiences.slice(0, 4);
  const hiddenCount = experiences.length - 4;

  return (
    <section id="experience" className="section section-dark">
      <BackgroundLayer variant="grid" />

      <div className="section-content">
        <div className="container">
          <h2 className="section-title glow-text">Experience & Training</h2>
          <p className="timeline-subtitle">Professional simulations, workshops, and cloud certifications that shaped my skills.</p>

          <div className="timeline">
            <div className="timeline-line" />

            {visibleItems.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
                  {/* Year label */}
                  <div className="timeline-year">{exp.date}</div>

                  {/* Center node */}
                  <div className="timeline-node">
                    <Icon size={20} />
                  </div>

                  {/* Card */}
                  <div className="timeline-card glass-card">
                    <h3 className="timeline-card-title">{exp.title}</h3>
                    <p className="timeline-card-org">{exp.organization}</p>
                    <p className="timeline-card-desc">{exp.description}</p>
                    <div className="timeline-tags">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="timeline-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom dot */}
            <div className="timeline-end-dot" />
          </div>

          {!showAll && hiddenCount > 0 && (
            <div className="timeline-view-all">
              <button className="timeline-view-btn" onClick={() => setShowAll(true)}>
                View All Experiences ({hiddenCount} more)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
