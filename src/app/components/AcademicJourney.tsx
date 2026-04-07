import { GraduationCap, School, BookOpen } from "lucide-react";
import { BackgroundLayer } from "./BackgroundLayer";
import "./Portfolio.css";

export function AcademicJourney() {
  const academics = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Ramgarh Engineering College, Ramgarh, Jharkhand",
      year: "2024-2027",
      description: "Specializing in scalable system design, data-driven architectures, and advanced DSA.",
      tags: ["CSE", "Data Structures", "System Design", "DBMS"],
      icon: GraduationCap,
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Birla Institute of Technology Mesra, Ranchi",
      year: "2021-2024",
      description: "Graduated with an outstanding 95.8% academic record in engineering fundamentals.",
      tags: ["BIT Mesra", "95.8%", "Programming", "Engineering"],
      icon: BookOpen,
    },
    {
      degree: "Matriculation",
      institution: "D.A.V. Public School, Hehal Ranchi, Jharkhand",
      year: "2021",
      description: "Achieved a 91.8% academic record under the CBSE board.",
      tags: ["CBSE", "91.8%", "Foundation"],
      icon: School,
    },
  ];

  return (
    <section id="academic" className="section section-alternate">
      <BackgroundLayer variant="calm" />

      <div className="section-content">
        <div className="container">
          <h2 className="section-title glow-text">Academic Journey</h2>
          <p className="timeline-subtitle">The educational milestones that built my engineering foundation.</p>

          <div className="timeline">
            <div className="timeline-line" />

            {academics.map((academic, index) => {
              const Icon = academic.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
                  <div className="timeline-year">{academic.year}</div>

                  <div className="timeline-node">
                    <Icon size={20} />
                  </div>

                  <div className="timeline-card glass-card">
                    <h3 className="timeline-card-title">{academic.degree}</h3>
                    <p className="timeline-card-org">{academic.institution}</p>
                    <p className="timeline-card-desc">{academic.description}</p>
                    <div className="timeline-tags">
                      {academic.tags.map((tag, idx) => (
                        <span key={idx} className="timeline-tag">{tag}</span>
                      ))}
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
