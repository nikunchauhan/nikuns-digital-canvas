import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Class 12 — 92.6%",
    subtitle: "R R Morarka Public School, Dwarikesh Nagar",
    detail: "Strong academic foundation in science and mathematics",
  },
  {
    icon: GraduationCap,
    title: "B.Tech — 8.7 CGPA",
    subtitle: "KIET Group of Institutions, 2nd Year",
    detail: "Consistently excelling in coursework and practical projects",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Education</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-2xl">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-glass p-6 flex gap-5 items-start group hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-1">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
