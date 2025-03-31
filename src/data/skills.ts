export interface Skill {
    name: string;
    items: string[];
  
  }
  export const skills:Skill[] = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "Prisma", "MongoDB", "PostgreSQL"] },
    { name: "Tools", items: ["Git", "Docker", "Jest", "CI/CD", "Vercel"] },
  ];