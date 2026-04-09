"use client";

import { motion } from "framer-motion";
import { FiFileText, FiMail } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
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
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-accent-light/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium"
        >
          University of Arizona &middot; Eller College of Management
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4"
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
          className="text-base text-muted-foreground mb-8 max-w-xl mx-auto"
        >
          Building a future in business management through consistency, accountability, and growth.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-2xl mx-auto text-left space-y-4 text-muted-foreground leading-relaxed mb-10"
        >
          <p>
            Hey, I&apos;m Osama. I&apos;m a business management student at the University of Arizona
            working toward a career where I can lead teams, improve processes, and create real
            impact.
          </p>
          <p>
            I take pride in being reliable, consistent, and someone people can count on. Moving
            across the world to study taught me how to stay focused, adapt quickly, and push forward
            even when things aren&apos;t easy.
          </p>
          <p>
            I enjoy working in team environments where I can contribute, take responsibility, and
            help keep things on track. I don&apos;t just focus on finishing tasks. I focus on doing
            them well and improving each time.
          </p>
          <p>
            My goal is simple: keep learning, keep improving, and become someone who adds real value
            to any team or organization I&apos;m part of.
          </p>
        </motion.div>

        {/* What Sets Me Apart */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-2xl mx-auto mb-10 p-6 rounded-2xl bg-card border border-border text-left"
        >
          <h3 className="text-lg font-bold text-foreground mb-3">What Sets Me Apart</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            I focus on consistency, accountability, and continuous improvement. I don&apos;t just aim
            to complete tasks. I aim to improve processes, contribute to team success, and get
            better every time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I bring a strong work ethic, a willingness to learn, and a mindset focused on growth.
          </p>
        </motion.div>

        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#resume")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent-light text-white font-medium hover:bg-accent-light/90 transition-all duration-300 shadow-lg shadow-accent-light/25 hover:shadow-xl hover:shadow-accent-light/30 hover:-translate-y-0.5"
          >
            <FiFileText size={18} />
            View Resume
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiMail size={18} />
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
