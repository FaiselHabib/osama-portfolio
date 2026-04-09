"use client";

import { motion } from "framer-motion";
import { FiTarget, FiMessageCircle, FiUsers, FiZap, FiShield, FiArrowRight } from "react-icons/fi";

const sections = [
  {
    icon: FiTarget,
    title: "What Drives Me",
    content:
      "I'm driven by wanting to be someone people can actually rely on. Consistency, accountability, doing the right thing even when no one is watching. I want to lead by example and make a real impact through hard work and integrity.",
  },
  {
    icon: FiMessageCircle,
    title: "How I Communicate",
    content:
      "I've learned that good communication isn't just about talking. It's about listening, being clear, and knowing when to step up or hold back. Through behavioral communication research, I became much more aware of how I come across and how to adapt my style to connect better with others.",
  },
  {
    icon: FiUsers,
    title: "What I Learned from Teams",
    content:
      "Team work taught me that everyone brings something different to the table. I learned how important trust and collaboration really are. I naturally take on a supportive leadership role: keeping things organized, making sure everyone is heard, and helping the group move toward its goals.",
  },
  {
    icon: FiZap,
    title: "The Turning Point",
    content:
      "There was a moment this semester when I realized growth doesn't come from staying comfortable. I started pushing myself more, taking on extra responsibility, asking for feedback, and leaning into challenges instead of avoiding them. That mindset shift changed everything.",
  },
  {
    icon: FiShield,
    title: "Identity vs. Reputation",
    content:
      "I used to care a lot about how others saw me. Now I focus more on who I actually am. I've worked on aligning my values, actions, and goals with how I show up professionally. My brand is built on being genuine, being dependable, and always improving.",
  },
  {
    icon: FiArrowRight,
    title: "Moving Forward",
    content:
      "I'm taking everything I've learned this semester, about myself, about teams, about communication, and bringing it into the next chapter. I want to earn trust, create positive change, and never stop growing.",
  },
];

export default function GrowthSection() {
  return (
    <section id="growth" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-warm/10 text-accent-warm text-sm font-medium">
            Personal Growth
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Growth Over Time</h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-sm">
            This semester helped me understand not just how I work, but how I contribute to a team
            and how others experience working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-accent-light/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-accent-warm/10 text-accent-warm group-hover:bg-accent-warm group-hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{section.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
