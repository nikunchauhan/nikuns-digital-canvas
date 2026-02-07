import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    handle: "@nikun_chauhan",
    url: "https://leetcode.com/u/nikun_chauhan/",
    description: "Consistent problem solving in DSA with C++. Grinding daily to sharpen algorithmic thinking.",
    stat: "Active Solver",
    gradient: "from-[hsl(35,85%,55%)] to-[hsl(25,90%,50%)]",
  },
  {
    name: "GitHub",
    handle: "@nikunchauhan",
    url: "https://github.com/nikunchauhan",
    description: "Open-source contributions, personal projects, and continuous code commits.",
    stat: "Building Daily",
    gradient: "from-foreground to-muted-foreground",
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Profiles</p>
          <h2 className="section-title">
            Coding <span className="gradient-text">Presence</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-7 group hover:border-primary/20 transition-all duration-500 block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-display font-bold text-xl bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>
                    {p.name}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </div>
                <p className="text-muted-foreground/70 text-sm font-mono mb-3">{p.handle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full">
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
