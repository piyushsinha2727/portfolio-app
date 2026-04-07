import { Code, Palette, Cloud, Trophy, ArrowDown } from "lucide-react";
import { BackgroundLayer } from "./BackgroundLayer";
import "./Portfolio.css";
import profilePic from "@/portfoliopics/newest/Pi7_image.jpg (9).png";

const specialties = [
  {
    icon: Code,
    title: "Full-Stack Development",
    subtitle: "Modern web technologies",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Beautiful, functional interfaces",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    subtitle: "Azure & Cloud Technologies",
  },
  {
    icon: Trophy,
    title: "Hackathon Enthusiast",
    subtitle: "Building innovative solutions",
  },
];

export function About() {
  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section section-dark">
      <BackgroundLayer variant="calm" />

      <div className="section-content">
        <div className="container">
          <div className="about-v2">
            {/* Left Column — Photo + Bio */}
            <div className="about-v2-left">
              <div className="about-v2-photo-wrapper">
                <img
                  src={profilePic}
                  alt="Piyush Kumar"
                  className="about-v2-photo"
                />
              </div>

              <h2 className="about-v2-heading">
                Hello, I'm <span className="about-v2-name">Piyush</span>
              </h2>

              <p className="about-v2-bio">
                Hello everyone, I am <span className="about-v2-name">Piyush Kumar</span> from
                Ranchi, Jharkhand, India. I am currently a B.Tech CSE student with interests in
                web development, UI/UX design, AI, cloud computing, and both frontend and backend
                development.
              </p>

              <p className="about-v2-bio">
                Outside of coding, I enjoy building projects, preparing for hackathons, exploring
                new technologies, and attending tech events. I also have working knowledge of
                MongoDB, Supabase, and modern database systems.
              </p>

              <blockquote className="about-v2-quote">
                "Learning, building, and growing—one project at a time."
              </blockquote>

              <div className="about-v2-tags">
                {["React", "TypeScript", "Node.js", "Python", "MongoDB"].map((tag) => (
                  <span key={tag} className="about-v2-tag">{tag}</span>
                ))}
              </div>

              <button className="about-v2-cta" onClick={scrollToSkills}>
                <span>View My Skills</span>
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Right Column — Specialty Cards */}
            <div className="about-v2-right">
              {specialties.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="about-v2-card glass-card">
                    <div className="about-v2-card-icon">
                      <Icon size={28} />
                    </div>
                    <h3 className="about-v2-card-title">{item.title}</h3>
                    <p className="about-v2-card-subtitle">{item.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
