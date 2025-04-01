"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


interface Experience {
  id: number;
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
    features: string[];
    challenges: string;
}


export default function ExperienceDetails({ params }: { params: { id: string } }) {
  const [ExperienceData, setExperienceData] = useState<Experience[]>([]);
  useEffect(() => {
  async function fetchData() {
    try {
      const [experienceRes] = await Promise.all([
      
        fetch("/api/experience"),
    
      ]);

      const [experienceData] = await Promise.all([
        
        experienceRes.json(),
      
      ]);

    
      setExperienceData(experienceData);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  fetchData();
}, []);
  const experienceId = parseInt(params.id);
  const experience = ExperienceData.find((p) => p.id === experienceId);

  if (!experience) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">experience not found</h1>
        <Button asChild className="mt-4">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="rounded-lg overflow-hidden mb-8">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{experience.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {experience.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            {experience.description}
          </p>
          <div className="flex gap-4 mb-8">
            <Button asChild>
              <a href={experience.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={experience.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-6">
              {experience.longDescription}
            </p>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {experience.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <p>{experience.challenges}</p>
          </div>
        </div>
      </div>
    </main>
  );
}