"use client";

import { motion } from "framer-motion";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Cell,
} from "recharts";

const commData = [
  { label: "Proactivity", value: -1.0, display: -1.0 },
  { label: "Reactivity", value: 0.0, display: 0.0 },
];

const workData = [
  { subject: "Chronemics", value: 2.67, fullMark: 4 },
  { subject: "Conflict", value: 1.33, fullMark: 4 },
  { subject: "Context", value: 1.33, fullMark: 4 },
  { subject: "Debate", value: 1.67, fullMark: 4 },
  { subject: "Decision Making", value: 2.0, fullMark: 4 },
  { subject: "Feedback", value: 2.0, fullMark: 4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

// Custom tooltip for bar chart
function CommTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-xl bg-card border border-border shadow-lg text-xs">
        <p className="font-semibold text-foreground mb-0.5">{label}</p>
        <p className="text-accent-light">Score: {payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}

// Custom tooltip for radar chart
function WorkTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: { subject: string }; value: number }> }) {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-2 rounded-xl bg-card border border-border shadow-lg text-xs">
        <p className="font-semibold text-foreground mb-0.5">{payload[0].payload.subject}</p>
        <p className="text-accent-warm">Score: {payload[0].value.toFixed(2)} / 4</p>
      </div>
    );
  }
  return null;
}

export default function StyleSection() {
  return (
    <section id="style" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent-light/10 text-accent-light text-sm font-medium">
            Self-Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Communication &amp; Work Style
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed text-sm">
            Based on behavioral inventory results, here is how I communicate and what kind of work environment brings out the best in me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Chart 1: Communication Style */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="p-6 rounded-2xl bg-card border border-border hover:border-accent-light/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-accent-light" />
              <h3 className="text-base font-bold text-foreground">Communication Style</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Proactivity vs Reactivity scores from behavioral research</p>

            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={commData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis
                  dataKey="label"
                  tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[-2, 2]}
                  ticks={[-2, -1, 0, 1, 2]}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CommTooltip />} cursor={{ fill: "var(--muted)", opacity: 0.4 }} />
                <ReferenceLine y={0} stroke="var(--border)" strokeWidth={2} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={60}>
                  {commData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.value < 0 ? "#818cf8" : "#2563eb"}
                      fillOpacity={0.85}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 flex gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-3 h-3 rounded-sm bg-indigo-400 inline-block" />
                Negative score = leans reactive
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="w-3 h-3 rounded-sm bg-blue-600 inline-block" />
                Balanced at zero
              </span>
            </div>

            <p className="mt-4 text-xs text-muted-foreground leading-relaxed p-3 rounded-xl bg-muted/50 border border-border">
              My communication style leans toward a balanced and thoughtful approach, combining structure with adaptability.
            </p>
          </motion.div>

          {/* Chart 2: Work Environment Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" as const }}
            className="p-6 rounded-2xl bg-card border border-border hover:border-accent-warm/30 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-accent-warm" />
              <h3 className="text-base font-bold text-foreground">Work Environment Preferences</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Scores out of 4 across six work dimensions</p>

            <ResponsiveContainer width="100%" height={240}>
              <RadarChart data={workData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                <PolarGrid
                  stroke="var(--border)"
                  gridType="polygon"
                />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                />
                <Tooltip content={<WorkTooltip />} />
                <Radar
                  name="Score"
                  dataKey="value"
                  stroke="#7c3aed"
                  fill="#7c3aed"
                  fillOpacity={0.25}
                  strokeWidth={2}
                  dot={{ fill: "#7c3aed", r: 4, strokeWidth: 0 }}
                />
              </RadarChart>
            </ResponsiveContainer>

            {/* Score pills */}
            <div className="mt-2 flex flex-wrap gap-2">
              {workData.map((d) => (
                <span
                  key={d.subject}
                  className="px-2.5 py-1 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-medium"
                >
                  {d.subject}: {d.value}
                </span>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted-foreground leading-relaxed p-3 rounded-xl bg-muted/50 border border-border">
              This reflects how I prefer structured environments, clear communication, and thoughtful collaboration.
            </p>
          </motion.div>

        </div>

        {/* Bottom insight row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" as const }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: "Chronemics", value: "2.67 / 4", desc: "I value time management and punctuality in work settings.", color: "text-accent-light" },
            { label: "Communication Context", value: "Balanced", desc: "I adapt between direct and contextual communication based on the situation.", color: "text-accent-warm" },
            { label: "Preferred Style", value: "Structured + Flexible", desc: "I thrive in organized environments that still allow room to think independently.", color: "text-green-500" },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-2xl bg-card border border-border text-center">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className={`text-base font-bold ${item.color} mb-1`}>{item.value}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
