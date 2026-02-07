import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
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
  "C++": "bg-pink-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  Python: "bg-green-400",
  HTML: "bg-orange-500",
  CSS: "bg-purple-400",
};

const Projects = () => {
  const { data: repos, isLoading } = useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchRepos,
  });

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-2">Projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md">
            Real projects pulled live from my GitHub. Always building, always learning.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card-glass p-6 animate-pulse">
                <div className="h-5 bg-muted rounded w-2/3 mb-3" />
                <div className="h-4 bg-muted rounded w-full mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos?.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glass p-6 group hover:border-primary/30 transition-all duration-500 block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Github className="w-5 h-5 text-muted-foreground" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {repo.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
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
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/nikunchauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
