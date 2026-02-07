import { motion } from "framer-motion";
import { Code2, GraduationCap, Target, Zap } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "92.6% in Class 12, 8.7 CGPA in B.Tech — strong fundamentals meet relentless consistency.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: Code2,
    title: "Problem Solver",
    desc: "Deep into DSA with C++. Building solid problem-solving skills on LeetCode every day.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: Target,
    title: "Growth Mindset",
    desc: "Passionate about web development, learning new technologies, and contributing to open-source.",
    accent: "from-primary/15 to-accent/10",
  },
  {
    icon: Zap,
    title: "Quick Learner",
    desc: "Adapt quickly to new tech stacks and frameworks. Always exploring what's next in software.",
    accent: "from-accent/15 to-primary/10",
  },
];

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      {/* Subtle section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Driven by Curiosity,<br />
            <span className="gradient-text">Built on Consistency</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14 text-base leading-relaxed">
            A passionate 2nd year B.Tech student at KIET Group of Institutions who believes in learning by building. Every line of code is a step closer to becoming a better engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-glass p-7 group hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
