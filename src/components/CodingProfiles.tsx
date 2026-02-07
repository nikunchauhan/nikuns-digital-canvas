import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    handle: "nikun_chauhan",
    url: "https://leetcode.com/u/nikun_chauhan/",
    description: "Consistent problem solving in DSA with C++",
    stat: "Active Solver",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "hover:border-amber-500/30",
  },
  {
    name: "GitHub",
    handle: "nikunchauhan",
    url: "https://github.com/nikunchauhan",
    description: "Open-source contributions and personal projects",
    stat: "Building Daily",
    color: "from-foreground/10 to-foreground/3",
    borderColor: "hover:border-foreground/30",
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Profiles</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
            Coding <span className="gradient-text">Presence</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card-glass p-6 group ${p.borderColor} transition-all duration-500 block`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground text-sm mb-3">@{p.handle}</p>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {p.stat}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
