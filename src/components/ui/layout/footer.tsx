// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Github, Linkedin, Twitter } from "lucide-react";


export function Footer() {
  return (
    <footer className="border-t py-8 px-10 md:py-12 ">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Varsha islur. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com/varshaislur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/varsha-islur-818060291"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          
        </div>
      </div>
    </footer>
  );
}