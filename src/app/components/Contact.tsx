import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";
import "./Portfolio.css";
// Path: components -> app -> src -> lib
import { supabase } from "../../lib/supabase"; 

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_queries') 
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error: any) {
      console.error("Supabase Error:", error.message);
      alert("Failed to send message: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section-gradient">
      <div className="skills-background">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
      </div>

      <div className="container">
        <h2 className="section-title glow-text" style={{ marginBottom: '3rem' }}>Let's Connect</h2>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="form-input"
                  placeholder="Your name"
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(16,185,129,0.2)' }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="form-input"
                  placeholder="your.email@example.com"
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(16,185,129,0.2)' }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="form-textarea"
                  placeholder="Your message..."
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)', border: '1px solid rgba(16,185,129,0.2)' }}
                />
              </div>
              
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
                style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="contact-info">
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="contact-items">
              <a href="mailto:pkrnc2020@gmail.com" className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" size={24} />
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">pkrnc2020@gmail.com</div>
                </div>
              </a>
              
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" size={24} />
                </div>
                <div>
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Ranchi, Jharkhand, India</div>
                </div>
              </div>
            </div>

            <div>
              <p className="social-title">Connect with me</p>
              <div className="social-links">
                <a 
                  href="https://github.com/piyushsinha2727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link social-github"
                  aria-label="GitHub"
                >
                  <Github size={24} className="social-icon" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/piyush-kumar-242923368/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link social-linkedin"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="social-icon" />
                </a>
                <a 
                  href="mailto:pkrnc2020@gmail.com"
                  className="social-link social-email"
                  aria-label="Email"
                >
                  <Mail size={24} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}