import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const socials = [
  { icon: Github, href: "https://github.com/nikunchauhan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nikun-chauhan-b5aa1a328/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Nikunjee", label: "X" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Nikun Chauhan</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              B.Tech Student • Problem Solver • Tech Enthusiast
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-border text-foreground hover:border-primary/50 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 blur-sm" />
              <img
                src={profilePhoto}
                alt="Nikun Chauhan"
                className="relative w-full h-full rounded-full object-cover border-2 border-primary/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
