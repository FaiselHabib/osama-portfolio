"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Osama Abudawood. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:os.abudawood@gmail.com"
            className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-accent-light hover:bg-accent-light/10 transition-all duration-300"
            aria-label="Email"
          >
            <FiMail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/osama-abudawood-507a95401/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-accent-light hover:bg-accent-light/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
