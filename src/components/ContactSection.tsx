"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:os.abudawood@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-sm">
            Always happy to talk, whether it&apos;s about opportunities, collaboration, or just connecting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="md:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:os.abudawood@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent-light transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-accent-light/10 text-accent-light group-hover:bg-accent-light group-hover:text-white transition-all duration-300">
                    <FiMail size={18} />
                  </div>
                  <span className="text-sm">os.abudawood@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/osama-abudawood-507a95401/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent-light transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-accent-light/10 text-accent-light group-hover:bg-accent-light group-hover:text-white transition-all duration-300">
                    <FaLinkedinIn size={18} />
                  </div>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6, ease: "easeOut" as const } },
            }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl bg-card border border-border space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-accent-light transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-accent-light transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-accent-light transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent-light text-white font-medium hover:bg-accent-light/90 transition-all duration-300 shadow-lg shadow-accent-light/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                {submitted ? (
                  "Opening email client..."
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
