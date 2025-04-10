export interface Experience {
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

export const experience: Experience[] = [
  {
    id: 1,
    title: "Web Developer at Micron Instruments",
    description: "Developed a React-based website for MicronSolar, integrating an intuitive UI and animations.",
    longDescription: "Designed and developed a React-based product website for solar trackers called MicronSolar. The site features engaging animations, a user-friendly UI, and integrated user manuals for better product showcasing.",
    tags: ["React", "Tailwind", "Animations"],
    image: "/images/micron1.png",
    githubUrl: "https://github.com/varshaislur/MicronSolar",
    liveUrl: "https://micron-solar.vercel.app/",
    features: [
      "Intuitive UI with animations",
      "Integrated user manuals",
      "Enhanced product showcasing",
    ],
    challenges: "Creating smooth animations and ensuring an optimal UX for product display were the main challenges."
  },
  {
    id: 2,
    title: "React Native Developer at Vighnotech",
    description: "Developed Wealthify, a financial tracking mobile application.",
    longDescription: "Worked on the development of Wealthify, a mobile application that enables users to comprehensively track investments and financial management. The app offers personalized investment advice aligned with long-term financial goals.",
    tags: ["React Native", "Node.js", "MongoDB"],
    image: "/images/Wealthify1.png",
    githubUrl: "",
    liveUrl: "https://www.thewealthify.me/",
    features: [
      "Comprehensive investment tracking",
      "Personalized financial advice",
      "User-friendly mobile experience",
    ],
    challenges: "Integrating financial APIs and ensuring real-time investment tracking accuracy."
  },
  {
    id: 3,
    title: "React Native Mentor at Unicode",
    description: "Mentoring students in React Native development, guiding them through projects.",
    longDescription: "Mentoring seven students in React Native, providing guidance on best practices, project structuring, and debugging techniques to help them become proficient developers.",
    tags: ["React Native", "Mentorship", "Teaching"],
    image: "/images/unicode.png",
    githubUrl: "",
    liveUrl: "",
    features: [
      "One-on-one mentorship",
      "Hands-on project guidance",
      "Debugging and best practices support",
    ],
    challenges: "Balancing mentorship responsibilities while keeping up with advancements in React Native."
  },
];