import { Award, Calendar, CheckCircle } from "lucide-react";
import "./Portfolio.css";

export function Experience() {
  const experiences = [
  {
    title: "Grand Finale Finalist - India Innovates 2026",
    organization: "India Innovates, Bharat Mandapam, New Delhi",
    date: "March 2026",
    description: "Competed at the national level among top 1000 teams. Presented 'CivicDrishti Bharat', an AI-based civic complaint resolution platform focusing on improving governance and citizen engagement."
  },
  {
    title: "Finalist - Hack & Forge 24 Hour Hackathon",
    organization: "SDS BIT Mesra, Birla Institute of Technology",
    date: "March 2026",
    description: "Presented CyberShield AI, an intelligent safe browsing system, at the Final Round. Developed the solution within 24 continuous hours, focusing on defending against phishing and scope-threatening URLs."
  },
  {
    title: "CyberSecurity Workshop",
    organization: "Jharkhand RakshaShakti & OWASP",
    date: "March 2026",
    description: "Participated in an intensive cybersecurity workshop organized by Jharkhand RakshaShakti and OWASP. Focused on ethical hacking, vulnerability assessment, and secure coding practices."
  },
  {
    title: " Getting started with Microsoft Excel",
    organization: "Coursera",
    date: "February 2026",
    description: "Completed a comprehensive course on Microsoft Excel, covering essential functions, data analysis techniques, and spreadsheet management for professional use."
  },
   {
    title: "TechSprint Hackathon",
    organization: "Google Developer Student Clubs (GDSC) REC Campus",
    date: "January 2026",
    description: "Participated in the TechSprint Hackathon organized by Google Developer Student Clubs at REC Campus. Collaborated on innovative solutions to real-world problems using cutting-edge technologies."
  },
  
  {
    title: "Technology Job Simulation",
    organization: "Deloitte",
    date: "November 2025",
    description: "Completed a comprehensive technology simulation focused on real-world business challenges and technical problem-solving within a professional consulting framework."
  },
  {
    title: "Technical Intern",
    organization: "National Informatics Centre (NIC)",
    date: "July 2025",
    description: "Gained 6 weeks of hands-on experience at the Jharkhand State Unit. Focused on public-sector technology infrastructure and state-level digital service units."
  },
  {
    title: "Azure Administrator Associate",
    organization: "Microsoft",
    date: "January 2025",
    description: "Certified Microsoft Azure Administrator. Specialized in managing cloud identity, governance, storage, compute, and virtual networks in a secure cloud environment."
  },
   {
    title: "Computer Hardware Training",
    organization: "Birla Institute of Technology (BIT) Mesra",
    date: "February 2024",
    description: "Underwent specialized hardware training at BIT Mesra, gaining a deep understanding of computer architecture, troubleshooting, and system maintenance."
  },
    
    {
    title: "Member of Editorial Board",
    organization: "'SPANDAN' BIT Mesra's E-Magazine",
    date: "Volume 1-2",
    description: "Contributed to the design and content curation of the official institute e-magazine. Focused on technical documentation, creative writing, and collaborative editorial workflows on canva."
  },
  
 
    {
    title: "Airport Authority of India Intern",
    organization: "Birsa Munda Airport, Ranchi",
    date: "June 2023",
    description: "Completed 4 weeks of technical exposure at the Ranchi Airport. Analyzed networking and operational technology systems under Cmputer Navigation and Surviellance  used in aviation infrastructure."
  },
  
  
];

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <h2 className="section-title glow-text">Experience & Certifications</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card glass-card">
              <div className="cert-badge" style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)' }}>
                <Award size={40} style={{ color: '#10b981' }} />
              </div>
              <h3 className="experience-title" style={{ color: '#22d3ee', fontWeight: 600 }}>{exp.title}</h3>
              <div className="experience-org">
                <CheckCircle size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                {exp.organization}
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-date">
                <Calendar size={14} />
                <span>{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
