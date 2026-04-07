import { Code, Palette, Database, Zap, Server, GitBranch } from "lucide-react";
import { BackgroundLayer } from "./BackgroundLayer";
import "./Portfolio.css";

const skills = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive interfaces with component-driven architecture and state management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5"],
    icon: Code,
    year: "Core",
  },
  {
    title: "Backend & Databases",
    description: "Designing scalable APIs and managing relational and NoSQL databases for production systems.",
    tags: ["Node.js", "Express", "MySQL", "MongoDB", "Supabase"],
    icon: Database,
    year: "Core",
  },
  {
    title: "Programming Languages",
    description: "Proficient in multiple paradigms — from object-oriented to functional programming.",
    tags: ["Java", "Python", "JavaScript", "C", "SQL"],
    icon: Server,
    year: "Core",
  },
  {
    title: "Design & UI/UX",
    description: "Creating intuitive user experiences with modern design tools and responsive layouts.",
    tags: ["Figma", "Flutter", "UI/UX", "Responsive Design", "Lovable"],
    icon: Palette,
    year: "Creative",
  },
  {
    title: "DevOps & Tools",
    description: "Version control, CI/CD workflows, cloud deployment, and development environments.",
    tags: ["Git", "GitHub", "Azure", "Vercel", "Render"],
    icon: GitBranch,
    year: "Tools",
  },
  {
    title: "AI & Emerging Tech",
    description: "Leveraging AI APIs, prompt engineering, and intelligent automation in real-world projects.",
    tags: ["Gemini API", "OpenAI", "Antigravity", "Prompt Engineering"],
    icon: Zap,
    year: "Frontier",
  },
];

export function Skills() {
  return (
    <section id="skills" className="section section-gradient">
      <BackgroundLayer variant="calm" />

      <div className="section-content">
        <div className="container">
          <h2 className="section-title glow-text">Skills & Expertise</h2>
          <p className="timeline-subtitle">Technologies, tools, and disciplines I work with every day.</p>

          <div className="timeline">
            <div className="timeline-line" />

            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}>
                  <div className="timeline-year">{skill.year}</div>

                  <div className="timeline-node">
                    <Icon size={20} />
                  </div>

                  <div className="timeline-card glass-card">
                    <h3 className="timeline-card-title">{skill.title}</h3>
                    <p className="timeline-card-desc">{skill.description}</p>
                    <div className="timeline-tags">
                      {skill.tags.map((tag, idx) => (
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
