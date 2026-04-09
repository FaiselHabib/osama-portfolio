"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiBarChart2, FiTrendingUp, FiLayers } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const portfolioItems = [
  {
    title: "Customer Attrition Dashboard",
    subtitle: "Tableau Interactive Dashboard",
    featured: true,
    individual: true,
    icon: FiBarChart2,
    context:
      "Analyzed customer behavior and attrition patterns using data visualization. The dataset included credit card customers with attributes like credit limits, utilization ratios, months on book, and card categories.",
    role: "Built an interactive Tableau dashboard showing attrition rates (16.07% attrited vs 83.93% existing), credit limits by card category, utilization ratios by customer type, and credit limit trends over tenure.",
    skills: ["Data Analysis", "Tableau", "Dashboard Design", "Business Insights"],
    reasoning:
      "Transforms complex banking data into clear, actionable insights. Demonstrates the ability to identify patterns, such as Blue cardholders having the lowest average credit limits ($6,817-$7,465) and higher attrition risk, while Gold and Platinum holders show stronger financial profiles.",
    insights: [
      "16.07% of customers are attrited vs 83.93% existing",
      "Attrited customers show 16.25% avg utilization vs 29.65% for existing",
      "Blue card holders have lowest credit limits, which means higher attrition risk",
      "Credit limits increase with customer tenure; attrited customers show more volatility",
    ],
  },
  {
    title: "Explanatory Insights Summary",
    subtitle: "Data Storytelling & Analysis",
    featured: false,
    individual: true,
    icon: FiTrendingUp,
    context:
      "Explaining customer credit and attrition insights through a focused explanatory analysis, building on the exploratory dashboard findings.",
    role: "Translated raw data into clear business explanations with annotated visualizations. Created a stacked bar chart comparing credit limits across card categories and a line chart showing credit limit trends by months on book.",
    skills: ["Data Storytelling", "Communication", "Analytical Thinking", "Visualization"],
    reasoning:
      "Shows the ability to explain complex data for decision-making audiences. Moving from exploration to explanation demonstrates maturity in analytical thinking.",
    insights: [
      "Blue cards: avg credit limit ~$6,817 (attrited) vs $7,465 (existing)",
      "Gold cards: avg $28,093 (attrited) vs $24,997 (existing)",
      "Platinum cards: avg $31,869 vs $25,960 by attrition status",
      "Credit limits increase with tenure; attrited customers show instability early",
    ],
  },
  {
    title: "Liquid Death Brand Analysis",
    subtitle: "Marketing Strategy & Positioning",
    featured: false,
    individual: false,
    icon: FiLayers,
    context:
      "Analyzing brand positioning vs audience perception for Liquid Death, a disruptive water brand that uses edgy marketing to stand out in a traditional market.",
    role: "Connected branding, messaging, and target audience in a team environment. Analyzed how Liquid Death positions itself against competitors and whether its messaging aligns with consumer perception.",
    skills: ["Critical Thinking", "Business Strategy", "Communication", "Marketing Analysis"],
    reasoning:
      "Breaks down complex brand strategy ideas clearly in a collaborative team environment. Demonstrates the ability to evaluate business positioning with analytical rigor.",
    insights: [],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium">
            Work Samples
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Portfolio</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            These work samples showcase my ability to think critically, communicate clearly, and
            apply business and analytical thinking.
          </p>
        </motion.div>

        <div className="space-y-8">
          {portfolioItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
                  },
                }}
                className={`rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg overflow-hidden ${
                  item.featured
                    ? "border-accent-light/40 shadow-md shadow-accent-light/10"
                    : "border-border hover:border-accent-light/30"
                }`}
              >
                {item.featured && (
                  <div className="bg-accent-light text-white text-xs font-semibold px-4 py-1.5 text-center tracking-wide uppercase">
                    Featured Project
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${
                          item.featured
                            ? "bg-accent-light text-white"
                            : "bg-accent-light/10 text-accent-light"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {item.individual && (
                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
                          Individually created by me
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Context
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.context}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                        My Role
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.role}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                      Why This Matters
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.reasoning}
                    </p>
                  </div>

                  {item.insights.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FiExternalLink size={14} className="text-accent-light" />
                        Key Findings
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {item.insights.map((insight) => (
                          <li
                            key={insight}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-light shrink-0" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
