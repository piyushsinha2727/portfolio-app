import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Portfolio.css";

// --- START OF IMPORTING PART ---
/** * Automatically imports all 10 images from src/portfoliopics.
 * The pattern includes both lowercase and uppercase extensions found in your folder.
 */
const portfolioImages = (import.meta as any).glob("@/portfoliopics/*.{png,jpg,jpeg,webp,JPG,JPEG}", { 
  eager: true, 
  import: 'default' 
}) as Record<string, string>;

const newestImages = (import.meta as any).glob("@/portfoliopics/newest/*.{png,jpg,jpeg,webp,JPG,JPEG}", { 
  eager: true, 
  import: 'default' 
}) as Record<string, string>;
// --- END OF IMPORTING PART ---

export function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Mapped all 10 images based on your folder screenshot.
   * You can manually edit the title and description strings below.
   */
  const slides = [
    {
      image: portfolioImages["/src/portfoliopics/11.jpeg"], 
      title: "Great Mentor & 5minutesEngineering Founder",
      description: " "
    },
    {
      image: portfolioImages["/src/portfoliopics/12.jpeg"], 
      title: "24 Hours Hackathon",
      description: "Efforts"
    },
    {
      image: portfolioImages["/src/portfoliopics/13.jpeg"], 
      title: "CyberSecurity Workshop Lab ",
      description: ""
    },
    {
      image: portfolioImages["/src/portfoliopics/14.jpeg"], 
      title: "Hackathon RoboSaga",
      description: ""
    },
    {
      image: portfolioImages["/src/portfoliopics/15.jpeg"], 
      title: "Participation Certificate of Cybersecurity Workshop ",
      description: " Some irreplacable memories"
    },
    {
      image: portfolioImages["/src/portfoliopics/17.jpeg"], 
      title: "Team Exceptional",
      description: "Learned the team management and team spirit"
    },
    {
      image: portfolioImages["/src/portfoliopics/18.jpeg"], 
      title: "Another Hackathon",
      description: "First Offline Hackathon "
    },
    {
      image: portfolioImages["/src/portfoliopics/8.jpeg"], 
      title: "IOT Project ",
      description: "Some Great mindset people"
    },
    {
      image: portfolioImages["/src/portfoliopics/1.JPG"], 
      title: "Convocation 2024",
      description: "Recieved the Degree for complehing Diploma in Computer Engineering with first class distinction"
    },
    {
      image: portfolioImages["/src/portfoliopics/2.jpg"], 
      title: "Group 2K21 Batch",
      description: "Happy BIT Family"
    },
    {
      image: portfolioImages["/src/portfoliopics/3.JPG"], 
      title: "SPANDAN",
      description: "Recieved Award for Editorial Member  "
    },
    {
      image: portfolioImages["/src/portfoliopics/4.JPG"], 
      title: "SPANDAN & TEAMMATES along with Guider",
      description: "Smile after the Launching "
    },
    {
      image: portfolioImages["/src/portfoliopics/5.jpg"], 
      title: "Unifesto 2k21 Batch ",
      description: " Some irreplacable memories"
    },
    {
      image: portfolioImages["/src/portfoliopics/6.jpeg"], 
      title: "Event Leaders ",
      description: "Learned the team management and team spirit"
    },
    {
      image: portfolioImages["/src/portfoliopics/7.jpeg"], 
      title: "Second Edition of SPANDAN",
      description: "Recieved Award for Editorial Member "
    },
    {
      image: portfolioImages["/src/portfoliopics/8.jpeg"], 
      title: "IOT Project ",
      description: "Some Great mindset people"
    },
    {
      image: portfolioImages["/src/portfoliopics/9.jpeg"], 
      title: "Special Alumini",
      description: "Focused on idea generation"
    },
    {
      image: portfolioImages["/src/portfoliopics/10.jpeg"], 
      title: "Project Presentation",
      description: "Gained knowledge on the three missions of Chandrayan ."
    },
    {
      image: newestImages["/src/portfoliopics/newest/IMG20260328122919.jpg"],
      title: "India Innovates 2026",
      description: "Grand Finale at Bharat Mandapam"
    },
    {
      image: newestImages["/src/portfoliopics/newest/IMG_20260328_182626.jpg"],
      title: "Project Presentation at Mandapam",
      description: "Pitching CivicDrishti Bharat Platform"
    },
    {
      image: newestImages["/src/portfoliopics/newest/IMG_20260328_145741 (1).jpg"],
      title: "Team Discussion & Strategy",
      description: "Collaborating during the 24-hour challenge"
    },
    {
      image: newestImages["/src/portfoliopics/newest/IMG20260328100201.jpg"],
      title: "Bharat Mandapam View",
      description: "Arriving at the prestigious venue"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section id="gallery" className="section section-alternate">
      <div className="container">
        <h2 className="section-title glow-text">Journey Gallery</h2>
        
        <div className="gallery-container">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide">
                  {slide.image ? (
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="carousel-image"
                    />
                  ) : (
                    <div className="image-error-placeholder" style={{ padding: '40px', textAlign: 'center', background: '#222' }}>
                      <p style={{ color: '#ff4d4d' }}>Image mapping failed for slide {index + 1}</p>
                      <small>Check if filename matches exactly in /src/portfoliopics/</small>
                    </div>
                  )}
                  <div className="carousel-caption">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous Slide">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-button next" onClick={nextSlide} aria-label="Next Slide">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}