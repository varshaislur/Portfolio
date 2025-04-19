"use client"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Github, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  images?: string[]; // New property for multiple images
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenges: string;
  isMobileProject?: boolean; // Flag for mobile projects
}

type Props = {
  params: {
    id: string;
  };
};

export default function ProjectDetail({ params }: Props) {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectId = parseInt(params.id);
  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    async function fetchData() {
      try {
        const projectsRes = await fetch("/api/projects");
        const projectsData = await projectsRes.json();
        
        // Process projects to ensure the images array exists
        const processedProjects = projectsData.map((p: Project) => ({
          ...p,
          images: p.images || [p.image], // Use existing images array or create one from the single image
        }));
        
        setProjectsData(processedProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Navigate to next image
  const nextImage = () => {
    if (!project || !project.images) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images!.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    if (!project || !project.images) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images!.length - 1 : prevIndex - 1
    );
  };

  if (!project) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Button asChild className="mt-4">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  const images = project.images || [project.image];

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Image Carousel */}
        <div className="relative rounded-lg overflow-hidden mb-8">
          <div className={`relative w-full ${project.isMobileProject ? 'h-auto flex justify-center' : 'h-64 md:h-96'}`}>
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={`${project.isMobileProject ? 'max-h-96 w-auto' : 'w-full h-full '}`}
            />
          </div>
          
          {/* Carousel controls - only show if multiple images */}
          {images.length > 1 && (
            <>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              
              {/* Image indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                      idx === currentImageIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>
          <div className="flex gap-4 mb-8">
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-6">
              {project.longDescription}
            </p>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
            <p>{project.challenges}</p>
          </div>
        </div>
      </div>
    </main>
  );
}