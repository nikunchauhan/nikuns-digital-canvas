import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/nikunchauhan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nikun-chauhan-b5aa1a328/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/Nikunjee", label: "X (Twitter)" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            I'm always open to discussing new projects, tech ideas, or opportunities to collaborate.
          </p>

          <a
            href="mailto:nikunchauhan@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity mb-10"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label={l.label}
              >
                <l.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
