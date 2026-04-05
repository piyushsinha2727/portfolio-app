import { Code, Palette, Database, Smartphone, Zap } from "lucide-react";
import "./Portfolio.css";

const skills = [
  {
    icon: Code,
    title: "Development Language",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Java"]
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["MySQL", "MongoDB", "Supabase"]
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Flutter", "UI/UX", "Responsive Design", "Lovable"]
  },
  {
    icon: Zap,
    title: "Tools & Others",
    skills: ["Git", "VS Code", "VS Studios", "Eclipse", "Antigravity"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section section-gradient">
      <div className="container">
        <h2 className="section-title glow-text">Skills & Expertise</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-card glass-card">
                <div className="skill-icon-wrapper" style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)' }}>
                  <Icon className="skill-icon" size={24} style={{ color: '#10b981' }} />
                </div>
                
                <h3 className="skill-title" style={{ color: '#22d3ee', fontWeight: 600 }}>{skill.title}</h3>
                
                <ul className="skill-list" style={{ marginTop: '1rem' }}>
                  {skill.skills.map((item, idx) => (
                    <li key={idx} className="skill-item" style={{ padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="skill-dot" style={{ backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
