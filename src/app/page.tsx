"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";


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

export default function Home() {
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
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I&apos;m <span className="text-primary">Varsha</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A full-stack Web and App developer passionate about building modern applications with 
              a focus on user experience and clean code.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild>
                <Link href="#experience">View Experience</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">My Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
       {/* Experience*/}
      <section className="py-12" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((experience) => (
              <Card key={experience.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{experience.title}</CardTitle>
                  <CardDescription>{experience.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/experience/${experience.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
