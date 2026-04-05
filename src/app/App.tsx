import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AcademicJourney } from "./components/AcademicJourney";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./components/Portfolio.css";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <About />
      <AcademicJourney />
      <Skills />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
