import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/nikunchauhan", label: "GitHub", username: "@nikunchauhan" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nikun-chauhan-b5aa1a328/", label: "LinkedIn", username: "Nikun Chauhan" },
  { icon: Twitter, href: "https://x.com/Nikunjee", label: "X (Twitter)", username: "@Nikunjee" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label justify-center">Contact</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 text-base leading-relaxed max-w-md mx-auto">
            I'm always open to discussing new projects, tech ideas, or opportunities to collaborate.
          </p>

          <a
            href="mailto:nikunchauhan@gmail.com"
            className="btn-primary text-base mb-12 inline-flex"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass px-6 py-4 flex items-center gap-3 group hover:border-primary/20 transition-all duration-300"
              >
                <l.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{l.label}</p>
                  <p className="text-sm font-medium text-foreground">{l.username}</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary ml-auto transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
