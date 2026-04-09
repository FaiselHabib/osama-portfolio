"use client";

import { motion } from "framer-motion";
import { FiFileText, FiMail } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-light/5" />
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-accent-light/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-accent-warm/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse" />
          University of Arizona, Eller College of Management
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl font-bold tracking-tight text-foreground mb-4 leading-tight"
        >
          Osama Abudawood
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl sm:text-2xl font-semibold text-accent-light mb-3"
        >
          Driven to Improve. Ready to Lead.
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Building a future in business management through consistency, accountability, and growth.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl mx-auto text-left space-y-4 text-muted-foreground leading-relaxed mb-10 text-sm"
        >
          <p>
            Hey, I&apos;m Osama. I&apos;m a business management student at the University of Arizona
            working toward a career in leadership, process improvement, and team building.
          </p>
          <p>
            I moved across the world on my own to study here, which taught me to stay focused,
            adapt fast, and keep going even when things are tough. That experience shaped how I work
            and how I think.
          </p>
          <p>
            I care about doing things well, not just getting them done. I like contributing to teams,
            taking ownership, and improving every time. My goal is simple: keep learning, keep
            growing, and be someone people can count on.
          </p>
        </motion.div>

        {/* What Sets Me Apart */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl mx-auto mb-10 p-5 rounded-2xl bg-card border border-border text-left"
        >
          <h3 className="text-base font-bold text-foreground mb-2">What Sets Me Apart</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            I focus on consistency, accountability, and getting better every time. I don&apos;t just
            aim to finish tasks. I aim to improve processes, support my team, and deliver real
            results.
          </p>
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button
            onClick={() => scrollTo("#resume")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-accent-light text-white font-medium hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-accent-light/20 hover:-translate-y-0.5 text-sm"
          >
            <FiFileText size={16} />
            View My Resume
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-all duration-300 hover:-translate-y-0.5 text-sm"
          >
            <FiMail size={16} />
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
