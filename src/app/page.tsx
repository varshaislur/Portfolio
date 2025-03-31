import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    tags: ["React", "Next.js", "Prisma", "Stripe", "TypeScript"],
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered application that generates content based on user prompts and preferences.",
    tags: ["Next.js", "OpenAI API", "MongoDB", "TypeScript"],
    image: "/api/placeholder/400/250",
  }
];

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { name: "Backend", items: ["Node.js", "Express", "Prisma", "MongoDB", "PostgreSQL"] },
  { name: "Tools", items: ["Git", "Docker", "Jest", "CI/CD", "Vercel"] },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Alex</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A full-stack developer passionate about building modern web applications with 
              a focus on user experience and clean code.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">View Projects</Link>
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
    </main>
  );
}
