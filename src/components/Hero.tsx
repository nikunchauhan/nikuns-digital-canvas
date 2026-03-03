import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const socials = [
  { icon: Github, href: "https://github.com/nikunchauhan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nikun-chauhan-b5aa1a328/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Nikunjee", label: "X" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />

      {/* Geometric accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-32 w-[500px] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-[30deg]" />
        <div className="absolute bottom-[30%] -right-32 w-[400px] h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent -rotate-[20deg]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/[0.05]" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              Available for opportunities
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Nikun</span>
              <br />
              <span className="text-foreground/80">Chauhan</span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              B.Tech Student at <span className="text-foreground/90">KIET Group of Institutions</span> — building things with code, solving problems with passion.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FileText className="w-4 h-4" />
                View Resume
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 animate-float">
              {/* Glow behind photo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
              {/* Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-accent/20 p-[2px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <img
                src={profilePhoto}
                alt="Nikun Chauhan"
                className="absolute inset-0 w-full h-full rounded-full object-cover border-2 border-background"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
};

export default Hero;
