import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech — 8.7 CGPA",
    subtitle: "KIET Group of Institutions",
    detail: "2nd Year, Computer Science — Consistently excelling in coursework and practical projects",
    current: true,
  },
  {
    icon: Award,
    title: "Class 12 — 92.6%",
    subtitle: "R R Morarka Public School, Dwarikesh Nagar",
    detail: "Strong academic foundation in science and mathematics",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="space-y-5 max-w-2xl">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="card-glass p-7 flex gap-6 items-start group hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${item.current ? 'bg-primary/15' : 'bg-muted/50'} flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors`}>
                  <item.icon className={`w-5 h-5 ${item.current ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                {item.current && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                )}
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display font-semibold text-lg">{item.title}</h3>
                  {item.current && (
                    <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-primary/80 text-sm font-medium mb-1.5">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
