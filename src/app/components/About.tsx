import "./Portfolio.css";
// 1. Import your image file properly
import profilePic from "@/portfoliopics/newest/Pi7_image.jpg (9).png";
export function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <h2 className="section-title glow-text">About Me</h2>
        
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="image-glow"></div>
            <img 
              src={profilePic}
              alt="Piyush Kumar"
              className="about-image"
              style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
            />
          </div>

          <div className="about-content">
            <h3 style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '1rem', fontWeight: 600 }}>Building Robust & Scalable Solutions</h3>
            <p className="about-text">
              I am a Software Engineer focused on architecting efficient, data-driven applications. I bridge the gap between complex logic and elegant user experiences, delivering systems that perform reliably under pressure.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <strong style={{ color: '#22d3ee', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>System Reliability & Architecture</strong>
                <span style={{ color: '#9CA3AF' }}>Extensive focus on the full SDLC/STLC lifecycle. From initial logic design to comprehensive manual testing and documentation, I ensure deployment stability.</span>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <strong style={{ color: '#22d3ee', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>Strategic Problem Solving</strong>
                <span style={{ color: '#9CA3AF' }}>My approach involves debating technical architectures and collaborating closely with teams to craft intuitive products. Clear communication is paramount.</span>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <strong style={{ color: '#22d3ee', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>Technical Excellence</strong>
                <span style={{ color: '#9CA3AF' }}>Committed to professional integrity, producing highly maintainable code supported by detailed technical documentation for future scalability.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
