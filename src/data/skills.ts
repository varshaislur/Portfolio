export interface Skill {
  name: string;
  items: string[];
}

export const skills: Skill[] = [
{ name: "Frontend", items: ["React", "React Native", "Tailwind CSS", "HTML/CSS"] },
{ name: "Backend", items: ["Node.js", "Express", "MongoDB", "Prisma"] },
{ name: "AI & Data Science", items: ["Gemini AI", "BeautifulSoup", "pandas", "NumPy", "Matplotlib"] },
{ name: "Mobile", items: ["React Native", "Flutter", "Firebase"] },
{ name: "Developer Tools", items: ["Git", "GitHub", "VS Code", "Android Studio"] },
];
