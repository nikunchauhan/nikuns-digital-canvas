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
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <Education />
      <Contact />
      <footer className="py-8 border-t border-border">
        <div className="section-container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nikun Chauhan. Built with passion.
        </div>
      </footer>
    </div>
  );
};

export default Index;
