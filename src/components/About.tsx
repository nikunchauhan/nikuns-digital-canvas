import { motion } from "framer-motion";
import { Code2, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
            Driven by Curiosity,<br />
            <span className="gradient-text">Built on Consistency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: GraduationCap,
              title: "Academic Excellence",
              desc: "Scored 92.6% in Class 12 and maintaining 8.7 CGPA in B.Tech — strong fundamentals meet relentless consistency.",
            },
            {
              icon: Code2,
              title: "Problem Solver",
              desc: "Deep into Data Structures & Algorithms with C++. Building solid problem-solving skills on LeetCode every day.",
            },
            {
              icon: Target,
              title: "Growth Mindset",
              desc: "Passionate about web development with JavaScript, learning new technologies, and contributing to open-source projects.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="card-glass p-6 group hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
