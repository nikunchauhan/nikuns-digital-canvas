import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, ArrowUpRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const fetchRepos = async (): Promise<Repo[]> => {
  const res = await fetch(
    "https://api.github.com/users/nikunchauhan/repos?sort=updated&per_page=6"
  );
  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
};

const langColor: Record<string, string> = {
  "C++": "bg-[hsl(330,70%,55%)]",
  JavaScript: "bg-[hsl(50,90%,55%)]",
  TypeScript: "bg-[hsl(210,80%,55%)]",
  Python: "bg-[hsl(140,60%,50%)]",
  HTML: "bg-[hsl(15,85%,55%)]",
  CSS: "bg-[hsl(270,60%,55%)]",
};

const Projects = () => {
  const { data: repos, isLoading } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
  });

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mb-14 max-w-lg text-base leading-relaxed">
            Real projects pulled live from GitHub. Always building, always learning.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card-glass p-7 animate-pulse">
                <div className="h-5 bg-muted rounded w-2/3 mb-4" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos?.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-7 group hover:border-primary/20 transition-all duration-500 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center">
                      <Github className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
                    {repo.description || "No description available"}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${langColor[repo.language] || "bg-muted-foreground"}`} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/nikunchauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github className="w-4 h-4" />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
