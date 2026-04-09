"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiDownload, FiBarChart2, FiLayers, FiChevronDown, FiChevronUp } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function PDFEmbed({ src, title, downloadName }: { src: string; title: string; downloadName: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-5 rounded-xl border border-border overflow-hidden bg-muted/30">
      <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{title}</span>
        <div className="flex items-center gap-2">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-light text-white text-xs font-medium hover:bg-blue-600 transition-colors"
          >
            <FiEye size={12} />
            View
          </a>
          <a
            href={src}
            download={downloadName}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-foreground text-xs font-medium hover:bg-muted transition-colors"
          >
            <FiDownload size={12} />
            Download
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground text-xs font-medium hover:bg-muted transition-colors"
          >
            {expanded ? <><FiChevronUp size={12} /> Collapse</> : <><FiChevronDown size={12} /> Preview</>}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="overflow-hidden"
          >
            <iframe
              src={src}
              className="w-full h-[520px]"
              title={title}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!expanded && (
        <div className="px-4 py-3 text-xs text-muted-foreground">
          Click Preview to view the full document inline.
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium">
            Selected Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Things I&apos;ve Worked On</h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-sm">
            A mix of data analysis, business thinking, and real projects from my time at Eller.
          </p>
        </motion.div>

        <div className="space-y-8">

          {/* PROJECT 1: Tableau Dashboard - FEATURED */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="rounded-2xl bg-card border-2 border-accent-light/40 overflow-hidden shadow-lg shadow-accent-light/8"
          >
            <div className="bg-accent-light text-white text-xs font-bold px-5 py-2 text-center tracking-widest uppercase">
              Featured Project
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent-light text-white">
                    <FiBarChart2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Customer Attrition Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Tableau Data Visualization</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
                  Individually created by me
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-5 text-sm">
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Context</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Analyzed credit card customer behavior to understand what drives attrition using real banking data.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">My Role</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Built two Tableau dashboards: an exploratory view and an explanatory insights summary with key findings.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Tableau", "Data Analysis", "Visualization", "Business Insights"].map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-4 p-4 rounded-xl bg-accent-light/5 border border-accent-light/15 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  This project involved building an interactive Tableau dashboard to explore attrition in a credit card customer dataset. I looked at utilization ratios, credit limits by card type, and how long customers had been with the bank to find patterns. Then I built a second explanatory dashboard to communicate the key findings clearly.
                </p>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Attrited Customers", value: "16.07%" },
                  { label: "Existing Customers", value: "83.93%" },
                  { label: "Attrited Utilization", value: "16.25%" },
                  { label: "Existing Utilization", value: "29.65%" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl bg-muted/60 text-center">
                    <div className="text-lg font-bold text-accent-light">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Exploratory Dashboard PDF */}
              <div className="mb-2">
                <h4 className="text-sm font-bold text-foreground mb-1">Part 1: Exploratory Dashboard</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  The exploratory view of the data. Shows the distribution of attrited vs existing customers, utilization ratios, credit limits by age and tenure, and more.
                </p>
                <PDFEmbed
                  src="/exploratory-dashboard.pdf"
                  title="Exploratory Dashboard.pdf"
                  downloadName="Exploratory_Dashboard.pdf"
                />
              </div>

              {/* Explanatory Insights PDF */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-foreground mb-1">Part 2: Key Insights Summary</h4>
                <p className="text-xs text-muted-foreground mb-2">
                  After exploring the data, I built this second dashboard to communicate the most important findings, including how card category affects attrition risk and how credit limits change with customer tenure.
                </p>
                <PDFEmbed
                  src="/explanatory-insights.pdf"
                  title="Explanatory 1.pdf"
                  downloadName="Explanatory_Insights.pdf"
                />
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2: Liquid Death */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" as const }}
            className="rounded-2xl bg-card border border-border hover:border-accent-light/30 hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-xl bg-accent-warm/10 text-accent-warm">
                  <FiLayers size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Liquid Death Brand Analysis</h3>
                  <p className="text-sm text-muted-foreground">Marketing Strategy and Brand Positioning</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-5 text-sm">
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Context</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A team project analyzing how Liquid Death positions itself in the beverage market using bold, unconventional branding.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">My Role</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Connected the brand's messaging, visual identity, and target audience to evaluate if it actually works.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Brand Strategy", "Critical Thinking", "Marketing", "Teamwork"].map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-muted/40 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  Liquid Death markets canned water with heavy metal aesthetics, targeting a younger audience that rejects traditional health branding. Our analysis looked at whether this disruptive approach translates into real brand loyalty or just attention, and what it tells us about how modern consumers connect with brands that break the mold.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
