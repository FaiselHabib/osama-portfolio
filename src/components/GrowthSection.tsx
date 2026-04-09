"use client";

import { motion } from "framer-motion";
import { FiTarget, FiMessageCircle, FiUsers, FiZap, FiShield, FiArrowRight } from "react-icons/fi";

const sections = [
  {
    icon: FiTarget,
    title: "What Drives Me",
    content:
      "I'm driven by the desire to be someone people can rely on. I value consistency, accountability, and doing the right thing even when no one is watching. I want to lead by example and create real impact through hard work and integrity.",
  },
  {
    icon: FiMessageCircle,
    title: "How I Communicate",
    content:
      "I've learned that communication isn't just about talking. It's about listening, being clear, and knowing when to step up or step back. Through behavioral communication research, I became more aware of how I express myself and how to adjust my communication style to work better with others.",
  },
  {
    icon: FiUsers,
    title: "What I Learned from Teams",
    content:
      "Working in teams taught me that every person brings something different to the table. I've learned the importance of trust, collaboration, and understanding team dynamics. I tend to take on a supportive leadership role: keeping things organized, making sure everyone is heard, and pushing the group toward our goals.",
  },
  {
    icon: FiZap,
    title: "The Turning Point",
    content:
      "There was a moment this semester where I realized that growth doesn't come from comfort. I started pushing myself harder, taking on more responsibility, asking for feedback, and embracing challenges instead of avoiding them. That shift in mindset changed how I approach everything.",
  },
  {
    icon: FiShield,
    title: "Identity vs Reputation",
    content:
      "I used to focus a lot on what people thought of me. Now, I focus more on who I actually am. I've worked on aligning my identity, my values, actions, and goals, with how I present myself professionally. My brand is built on being real, being reliable, and always improving.",
  },
  {
    icon: FiArrowRight,
    title: "Moving Forward",
    content:
      "I'm taking everything I've learned, about myself, about teams, about communication, and applying it to the next chapter. I want to grow into a leader who earns trust, creates positive change, and never stops learning.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function GrowthSection() {
  return (
    <section id="growth" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium">
            Professional Persona Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Growth Over Time</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            This semester helped me better understand not just how I work, but how I contribute to a
            team and how others experience working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
                  },
                }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent-light/30 hover:shadow-lg hover:shadow-accent-light/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-accent-light/10 text-accent-light group-hover:bg-accent-light group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
