"use client";
import {
  Check,
  CheckCircle2,
  FileText,
  Mail,
  Megaphone,
  Target,
  X,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const FeaturesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const tools = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Offer Headline Generator",
      description:
        "Turn plain product titles into irresistible, value-packed headlines that grab attention instantly.",
      before: {
        text: "Durable Aluminum Wallet",
        metrics: { ctr: "1.2%", cvr: "0.8%" },
        label: "Generic & Boring",
      },
      after: {
        text: "The Last Wallet You'll Ever Own—Guaranteed For Life",
        metrics: { ctr: "8.4%", cvr: "4.2%" },
        label: "Value-Driven",
      },
      improvement: "+425% CTR",
      gradient: {
        from: "primary",
        via: "purple-600",
        to: "pink-600",
      },
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Story-Based Descriptions",
      description:
        "Transform dull feature lists into captivating mini-stories that emotionally connect with your audience.",
      before: {
        text: "Wireless headphones. 40hr battery. Noise canceling.",
        metrics: { bounce: "68%", atc: "2.1%" },
        label: "Feature List",
      },
      after: {
        text: "Finally—complete silence on your morning commute. 40 hours of uninterrupted focus.",
        metrics: { bounce: "34%", atc: "7.8%" },
        label: "Emotional Story",
      },
      improvement: "-50% Bounce Rate",
      gradient: {
        from: "blue-500",
        via: "blue-300",
        to: "blue-600",
      },
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Stop-The-Scroll Ads",
      description:
        "Create ad copy that hooks users in seconds and makes them curious enough to click instantly.",
      before: {
        text: "Buy our coffee maker today!",
        metrics: { cpc: "$2.40", roas: "1.8x" },
        label: "Generic CTA",
      },
      after: {
        text: "Why are 47,000 people ditching Starbucks for this $89 machine?",
        metrics: { cpc: "$0.87", roas: "5.2x" },
        label: "Curiosity Hook",
      },
      improvement: "5.2x ROAS",
      gradient: {
        from: "purple-500",
        via: "purple-500",
        to: "indigo-500",
      },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "High-Impact Subject Lines",
      description:
        "Write emails that demand to be opened—perfect for newsletters, promos, or urgent campaigns.",
      before: {
        text: "Newsletter #47 - New Products",
        metrics: { open: "9%", click: "1.2%" },
        label: "Forgettable",
      },
      after: {
        text: "⚠️ This expires in 6 hours (seriously)",
        metrics: { open: "43%", click: "11.8%" },
        label: "Urgency Trigger",
      },
      improvement: "+378% Opens",
      gradient: {
        from: "green-500",
        via: "emerald-500",
        to: "teal-500",
      },
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Feature-to-Benefit Translator",
      description:
        "Instantly reframe technical specs into real-world benefits your audience understands and values.",
      before: {
        text: "16GB RAM, Quad-core processor",
        metrics: { understand: "23%", purchase: "1.9%" },
        label: "Technical Jargon",
      },
      after: {
        text: "Run 50+ browser tabs without a single crash or slowdown",
        metrics: { understand: "89%", purchase: "6.4%" },
        label: "Clear Benefit",
      },
      improvement: "+237% Conversions",
      gradient: {
        from: "orange-500",
        via: "orange-500",
        to: "red-500",
      },
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold mb-6 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            The Transformation
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Tools That Solve Every Copy Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real examples. Real results. Watch average copy transform into
            conversion machines.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setActiveCard(i)}
              onHoverEnd={() => setActiveCard(null)}
              className="group"
            >
              <div
                className={`relative bg-card rounded-2xl border border-border shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col`}
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r from-${tool.gradient.to} via-${tool.gradient.via} to-${tool.gradient.from} px-4 py-1 text-primary border-b border-border`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`rounded-full bg-transparent text-${tool.gradient.from} flex items-center justify-center`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{tool.title}</h3>
                      <p className="text-sm text-primary mt-1">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-primary/10 text-sm font-medium text-primary">
                    <TrendingUp className="w-4 h-4" />
                    {tool.improvement}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  {/* Before */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 text-destructive" />
                      </div>
                      <span className="font-medium text-muted-foreground">
                        Before
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-destructive/10 text-destructive font-medium">
                        {tool.before.label}
                      </span>
                    </div>
                    <div className="bg-muted rounded-lg p-3 border border-border">
                      <p className="text-sm text-muted-foreground italic mb-2">
                        "{tool.before.text}"
                      </p>
                      <div className="flex gap-3 text-xs">
                        {Object.entries(tool.before.metrics).map(
                          ([key, value]) => (
                            <div key={key} className="flex items-center gap-1">
                              <span className="uppercase text-muted-foreground">
                                {key}:
                              </span>
                              <span className="font-semibold text-destructive">
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="font-medium text-muted-foreground">
                        After
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-success font-medium">
                        {tool.after.label}
                      </span>
                    </div>
                    <div className="bg-card/5 rounded-lg p-3 border border-success/30 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-success/10 to-transparent rounded-full blur-2xl" />
                      <p className="text-sm text-foreground font-medium mb-2 relative z-10">
                        "{tool.after.text}"
                      </p>
                      <div className="flex gap-3 text-xs relative z-10">
                        {Object.entries(tool.after.metrics).map(
                          ([key, value]) => (
                            <div key={key} className="flex items-center gap-1">
                              <span className="uppercase text-muted-foreground">
                                {key}:
                              </span>
                              <span className="font-semibold text-success">
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Highlight */}
                <div
                  className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 pointer-events-none ${
                    activeCard === i ? "border-primary/50" : ""
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
