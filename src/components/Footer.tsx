"use client";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-8 py-6 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://sanjay-portfolio-delta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Portfolio">
              <Globe className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/sanju1098"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-kumar-s-r/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:sanjay.kumar981110@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-center text-md">
            <span>
              Copyright © {currentYear}{" "}
              <span className="font-semibold">Sanjay Kumar</span>. All rights
              reserved.
            </span>
          </div>

          <div className="flex items-center gap-2 text-md text-muted-foreground">
            Made with
            <span className="text-red-500">❤</span>
            using Next.JS & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};
