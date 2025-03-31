import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

// Mock data - in a real app, you would fetch this from an API or CMS
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    longDescription: "This e-commerce platform was built to provide small businesses with an affordable solution to sell their products online. The application features a robust admin dashboard for managing products, categories, and orders, as well as a sleek customer-facing storefront with cart functionality and Stripe payment integration.",
    tags: ["React", "Next.js", "Prisma", "Stripe", "TypeScript"],
    image: "/api/placeholder/800/400",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    features: [
      "User authentication and authorization",
      "Product catalog with searching and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management system",
      "Admin dashboard for inventory management",
    ],
    challenges: "The biggest challenge was implementing a real-time inventory system that would accurately reflect stock levels across multiple concurrent sessions. This was solved using a combination of database locking and websocket updates.",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    longDescription: "This task management application allows teams to collaborate effectively by organizing tasks, setting deadlines, and tracking progress. The app includes features for creating workspaces, assigning tasks to team members, and receiving real-time notifications about task updates.",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
    image: "/api/placeholder/800/400",
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    features: [
      "User authentication with role-based permissions",
      "Create and manage workspaces for different projects",
      "Task creation with custom fields and attachments",
      "Drag-and-drop Kanban board interface",
      "Real-time updates using Firebase",
      "Calendar view for deadline tracking",
    ],
    challenges: "Implementing the real-time synchronization across multiple devices while maintaining a responsive UI was challenging. Firebase Firestore helped solve this by providing efficient real-time data syncing capabilities.",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts and preferences.",
    longDescription: "This application leverages AI to help content creators generate ideas, outlines, and full articles based on specific topics and criteria. Users can adjust various parameters to control the tone, style, and length of the generated content, making it suitable for different platforms and audiences.",
    tags: ["Next.js", "OpenAI API", "MongoDB", "TypeScript"],
    image: "/api/placeholder/800/400",
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    liveUrl: "https://ai-content-demo.vercel.app",
    features: [
      "Text generation with customizable parameters",
      "Content editing and refinement tools",
      "Template system for common content types",
      "User history and saved prompts",
      "Export to various formats (Markdown, HTML, etc.)",
      "Usage analytics and quota management",
    ],
    challenges: "Rate limiting and API cost management were significant challenges. I implemented a token bucket algorithm to fairly distribute API quota among users while ensuring the application remained financially sustainable.",
  },
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projectsData.find((p) => p.id === projectId);

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
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover"
          />
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
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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