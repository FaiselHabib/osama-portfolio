"use client";

import { motion } from "framer-motion";
import { FiEye, FiDownload } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium">
            Experience & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">My Resume</h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed">
            You can view my resume below for a full overview of my experience, education, and
            skills.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent-light text-white font-medium hover:bg-accent-light/90 transition-all duration-300 shadow-lg shadow-accent-light/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            <FiEye size={18} />
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download="Abudawood_Osama_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiDownload size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.98 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
          }}
          className="rounded-2xl border border-border overflow-hidden bg-card shadow-lg"
        >
          <iframe
            src="/resume.pdf"
            className="w-full h-[700px] sm:h-[850px]"
            title="Osama Abudawood Resume"
          />
        </motion.div>
      </div>
    </section>
  );
}
