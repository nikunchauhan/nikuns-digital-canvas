import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-bg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <CodingProfiles />
      <Contact />
      <footer className="py-10 border-t border-border/30">
        <div className="section-container text-center">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Nikun Chauhan — Built with passion & code
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
