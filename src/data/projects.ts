 // data/projects.ts
export interface Project {
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

export const projects: Project[] = [
{
  id: 1,
  title: "Educare",
  description: "An LMS with AI-powered question paper generation and mentorship features.",
  longDescription: "Developed Educare, a comprehensive LMS enabling teachers to create assignments, customized tests, and AI-driven question papers using Gemini AI. Integrated Mentor-Mentee Connect, video conferencing, and interactive test games for an enhanced learning experience.",
  tags: ["React", "MongoDB", "Prisma", "Gemini AI"],
  image: "/api/placeholder/800/400",
  githubUrl: "https://github.com/varshaislur/Educare",
  liveUrl: "",
  features: [
    "AI-generated question papers",
    "Mentor-Mentee Connect",
    "Interactive test games",
    "Student performance analytics",
  ],
  challenges: "Integrating AI-driven question generation and ensuring scalability for multiple users."
},
{
  id: 2,
  title: "Inventory Management System",
  description: "An AI-powered inventory system for stock optimization and vendor alerts.",
  longDescription: "Developed an AI-powered inventory management system that analyzes past data to optimize stock levels and sends automated email alerts to vendors, reducing costs and delays. Integrated with Google Sheets and OAuth for secure inventory tracking.",
  tags: ["React", "Shadcn", "MongoDB", "Prisma", "Gemini AI"],
  image: "/images/ivm2.png",
  githubUrl: "https://github.com/varshaislur/InventoryManagement",
  liveUrl: "https://codeblooded-hackniche3.vercel.app",
  features: [
    "AI-powered stock optimization",
    "Automated vendor email alerts",
    "Google Sheets integration",
  ],
  challenges: "Ensuring real-time stock updates and smooth integration with external services."
},
{
  id: 3,
  title: "MindLink",
  description: "A real-time collaborative code editor with syntax highlighting.",
  longDescription: "Created a real-time collaborative code editor using Monaco Editor and Socket.io, enabling multiple users to code simultaneously with syntax highlighting and multi-language support.",
  tags: ["React", "Socket.io", "Monaco"],
  image: "/images/mindlink1.png",
  githubUrl: "https://github.com/varshaislur/MindLink",
  liveUrl: "https://mind-link-eight.vercel.app",
  features: [
    "Real-time collaborative coding",
    "Multi-language support",
    "Syntax highlighting",
  ],
  challenges: "Managing real-time collaboration without latency issues."
},
{
  id: 4,
  title: "ShopCart",
  description: "A React-based e-commerce website with Flipkart product listings via web scraping.",
  longDescription: "Built a React-based e-commerce website featuring product listings sourced from Flipkart through web scraping. Implemented browsing, selecting, and purchasing functionalities within the React platform. Added a customer support chatbot using OpenAI API.",
  tags: ["React", "MongoDB", "BeautifulSoup", "Git"],
  image: "/images/shopcart1.png",
  githubUrl: "https://github.com/varshaislur/loc6.0",
  liveUrl: "https://shopcart-ecru.vercel.app/",
  features: [
    "Flipkart product scraping",
    "Product browsing and purchasing",
    "Customer support chatbot using OpenAI API",
  ],
  challenges: "Handling dynamic product listings and ensuring compliance with web scraping policies."
},
{
  id: 5,
  title: "Unhinged",
  description: "A full-featured MERN-based social platform for content sharing and real-time interactions.",
  longDescription: "Developed Unhinged, a MERN-based social platform incorporating user authentication, real-time posting, and content sharing to foster social interactions.",
  tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Git"],
  image: "/images/unhinged1.png",
  githubUrl: "https://github.com/varshaislur/Unhinged",
  liveUrl: "",
  features: [
    "User authentication",
    "Real-time post sharing",
    "Content-based interactions",
  ],
  challenges: "Ensuring seamless scalability and real-time updates without performance bottlenecks."
}
];