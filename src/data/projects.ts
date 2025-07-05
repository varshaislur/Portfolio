// data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  images?: string[];  // Array for multiple project images
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenges: string;
  isMobileProject?: boolean;  // Flag for mobile projects
}

export const projects: Project[] = [
{
  id: 1,
  title: "Educare",
  description: "An LMS with AI-powered question paper generation and mentorship features.",
  longDescription: "Developed Educare, a comprehensive LMS enabling teachers to create assignments, customized tests, and AI-driven question papers using Gemini AI. Integrated Mentor-Mentee Connect, video conferencing, and interactive test games for an enhanced learning experience.",
  tags: ["React", "MongoDB", "Prisma", "Gemini AI"],
  image: "/images/V_educare.png",
  images: [
    "/images/V_educare.png",
    "/images/V_educare2.png",
    "/images/V_educare3.png",
    "/images/V_educare4.png", 
    "/images/V_educare5.png",
    "/images/V_educare6.png",
    "/images/V_educare7.png",
    
  ],
  githubUrl: "https://github.com/varshaislur/Educare",
  liveUrl: "",
  features: [
    "AI-generated question papers",
    "Mentor-Mentee Connect",
    "Interactive test games",
    "Student performance analytics",
  ],
  challenges: "Integrating AI-driven question generation and ensuring scalability for multiple users.",
  isMobileProject: false
},
{
  id: 2,
  title: "Inventory Management System",
  description: "An AI-powered inventory system for stock optimization and vendor alerts.",
  longDescription: "Developed an AI-powered inventory management system that analyzes past data to optimize stock levels and sends automated email alerts to vendors, reducing costs and delays. Integrated with Google Sheets and OAuth for secure inventory tracking.",
  tags: ["React", "Shadcn", "MongoDB", "Prisma", "Gemini AI"],
  image: "/images/ivm2.png",
  images: [
    "/images/ivm2.png",
    "/images/ivm1.png",
    "/images/ivm3.png"
  ],
  githubUrl: "https://github.com/varshaislur/InventoryManagement",
  liveUrl: "https://codeblooded-hackniche3.vercel.app",
  features: [
    "AI-powered stock optimization",
    "Automated vendor email alerts",
    "Google Sheets integration",
  ],
  challenges: "Ensuring real-time stock updates and smooth integration with external services.",
  isMobileProject: false
},
{
  id: 3,
  title: "MindLink",
  description: "A real-time collaborative code editor with syntax highlighting.",
  longDescription: "Created a real-time collaborative code editor using Monaco Editor and Socket.io, enabling multiple users to code simultaneously with syntax highlighting and multi-language support.",
  tags: ["React", "Socket.io", "Monaco"],
  image: "/images/mindlink1.png",
  images: [
    "/images/mindlink1.png",
    "/images/mindlink2.png",
    "/images/mindlink3.png",
   
  ],
  githubUrl: "https://github.com/varshaislur/MindLink",
  liveUrl: "https://mind-link-eight.vercel.app",
  features: [
    "Real-time collaborative coding",
    "Multi-language support",
    "Syntax highlighting",
  ],
  challenges: "Managing real-time collaboration without latency issues.",
  isMobileProject: false
},
{
  id: 7,
  title: "MusicSpace",
  description: "A collaborative music listening platform",
  longDescription: "a Next.js app for real-time, community-based music listening. Space admins add YouTube tracks with auto-fetched metadata, users join spaces to engage and upvote songs. Implemented a dynamic voting system toinfluence the track queue and enhance collaborative listening experiences.",
  tags: ["React", "Socket.io", "Monaco"],
  image: "/images/musicspace5.png",
  images: [
   "/images/musicspace.png",
   "/images/musicspace2.png",
   "/images/musicspace3.png",
   "/images/musicspace4.png",
   "/images/musicspace5.png",
   "/images/musicspace6.png",
  ],
  githubUrl: "https://github.com/varshaislur/MusicSpace",
  liveUrl: "",
  features: [
    "Real-time collaborative coding",
    "Multi-language support",
    "Syntax highlighting",
  ],
  challenges: "Managing real-time collaboration without latency issues.",
  isMobileProject: false
},
{
  id: 4,
  title: "ShopCart",
  description: "A React-based e-commerce website with Flipkart product listings via web scraping.",
  longDescription: "Built a React-based e-commerce website featuring product listings sourced from Flipkart through web scraping. Implemented browsing, selecting, and purchasing functionalities within the React platform. Added a customer support chatbot using OpenAI API.",
  tags: ["React", "MongoDB", "BeautifulSoup", "Git"],
  image: "/images/shopcart1.png",
  images: [
    "/images/shopcart1.png",
    "/images/shopcart2.png",
    "/images/shopcart3.png"
  ],
  githubUrl: "https://github.com/varshaislur/loc6.0",
  liveUrl: "https://shopcart-ecru.vercel.app/",
  features: [
    "Flipkart product scraping",
    "Product browsing and purchasing",
    "Customer support chatbot using Gemini API",
  ],
  challenges: "Handling dynamic product listings and ensuring compliance with web scraping policies.",
  isMobileProject: false
},
{
  id: 5,
  title: "Unhinged",
  description: "A full-featured MERN-based social platform for content sharing and real-time interactions.",
  longDescription: "Developed Unhinged, a MERN-based social platform incorporating user authentication, real-time posting, and content sharing to foster social interactions.",
  tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Git"],
  image: "/images/unhinged1.png",
  images: [
    "/images/unhinged1.png"
  ],
  githubUrl: "https://github.com/varshaislur/Unhinged",
  liveUrl: "",
  features: [
    "User authentication",
    "Real-time post sharing",
    "Content-based interactions",
  ],
  challenges: "Ensuring seamless scalability and real-time updates without performance bottlenecks.",
  isMobileProject: false
},
{
  id: 6,
  title: "Unisphere",
  description: "A mobile app for college committees to post event updates and announcements. Students can follow committees to view a personalized feed",
  longDescription: "A mobile app for college committees to post event updates and announcements. Students can follow committees to view a personalized feed. Built with React Native (Expo), Node.js, Express, MongoDB, and supports image uploads using Multer and Cloudinary.",
  tags: ["React Native Expo", "Node.js", "Express", "MongoDB", "Git"],
  image: "/images/unisphere.png",
  images: [
    "/images/unisphere.png",
    "/images/unisphere2.png",
    
  ],
  githubUrl: "https://github.com/varshaislur/Unisphere",
  liveUrl: "",
  features: [
    "Role-based access control",
    "User authentication",
    "Real-time post sharing",
  ],
  challenges: "Ensuring seamless scalability and real-time updates without performance bottlenecks.",
  isMobileProject: true
}
];