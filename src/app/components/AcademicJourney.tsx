import { GraduationCap, Calendar } from "lucide-react";
import "./Portfolio.css";

export function AcademicJourney() {
  const academics = [
     {
      degree: "Matriculation",
      institution: "D.A.V. Public School, Hehal Ranchi, Jharkhand",
      year: "2021",
      points: [
        "Achieved a 91.8% academic record under the CBSE board.",
        "Built a high-standard foundation in core disciplines and analytical reasoning.",
        "Developed strong discipline and work ethic for future tech pursuits."
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Birla Institute of Technology Mesra, Ranchi, Jharkhand",
      year: "2021-2024",
      points: [
        "Graduated with an outstanding 95.8% academic record.",
        "Gained rigorous foundation in engineering fundamentals and programming.",
        "Developed a disciplined, analytical approach to complex technical problem-solving."
      ]
    },
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Ramgarh Engineering College, Ramgarh, Jharkhand",
      year: "2024-2027",
      points: [
        "Specializing in scalable system design and data-driven architectures.",
        "Leveraging advanced proficiency in Data Structures, Algorithms, and Database Management.",
        "Refining technical documentation and collaborative practices through hands-on projects."
      ]
    }
  ];

  return (
    <section id="academic" className="section section-alternate">
      <div className="container">
        <h2 className="section-title glow-text">Academic Journey</h2>
        
        <div className="academic-grid">
          {academics.map((academic, index) => (
            <div key={index} className="academic-card glass-card">
              <div className="academic-header">
                <div className="academic-icon" style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)' }}>
                  <GraduationCap size={32} style={{ color: '#10b981' }} />
                </div>
                <div className="academic-info">
                  <h3 style={{ color: '#22d3ee', fontWeight: 600 }}>{academic.degree}</h3>
                  <div className="academic-year">
                    <Calendar size={14} />
                    <span>{academic.year}</span>
                  </div>
                </div>
              </div>
              <div className="academic-institution">{academic.institution}</div>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', color: '#9CA3AF', lineHeight: '1.8' }}>
                {academic.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
