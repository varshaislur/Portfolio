"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

interface Experience {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, experienceRes, skillsRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/experience"),
          fetch("/api/skills"),
        ]);

        const [projectsData, experienceData, skillsData] = await Promise.all([
          projectsRes.json(),
          experienceRes.json(),
          skillsRes.json(),
        ]);

        setProjects(projectsData);
        setExperience(experienceData);
        setSkills(skillsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border rounded-lg shadow-sm">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href={`/projects/${project.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((exp) => (
            <div key={exp.id} className="p-4 border rounded-lg shadow-sm">
              <img src={exp.image} alt={exp.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href={`/experience/${exp.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={exp.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
