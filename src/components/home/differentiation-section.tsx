"use client";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Zap, 
  TrendingDown, 
  TrendingUp,
  Target,
  DollarSign,
  Clock,
  ArrowRight,
  Sparkles,
  X,
  Check
} from "lucide-react";

export const DifferentiationSection = () => {
  const comparison = [
    {
      title: "Training Focus",
      greeter: "Everything & Anything",
      closer: "Closing Sales on Shopify",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Core Skill",
      greeter: "Generic responses",
      closer: "Pain agitation & value stacking",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Output Quality",
      greeter: "Friendly but flat",
      closer: "Conversion-engineered",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Result",
      greeter: "Content",
      closer: "Revenue",
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  return (
    // bg-gradient-to-b from-background to-muted/30
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 text-destructive font-semibold mb-6">
            <X className="w-4 h-4" />
            The Problem With "General" AI
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Stop Hiring a Greeter to Do a<br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Master Closer's Job
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your product page isn't a greeting. It's a negotiation for your customer's money.
          </p>
        </motion.div>

        {/* Main Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Greeter Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-card backdrop-blur border-2 border-border rounded-2xl p-8 h-full shadow-lg">
              {/* Warning Badge */}
              <div className="absolute -top-3 -right-3 px-4 py-2 bg-destructive text-destructive-foreground text-sm font-bold rounded-full shadow-lg rotate-12">
                Not For Sales
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">The Greeter</h3>
                  <p className="text-muted-foreground text-sm">ChatGPT, Jasper & Others</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Trained on everything from blog posts to poetry</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Generic, one-size-fits-all responses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground">Friendly but lacks sales psychology</p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingDown className="w-5 h-5" />
                  <span className="font-semibold">Output:</span>
                  <span className="text-destructive">A Friendly Intern</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Closer Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur border-2 border-green-200 dark:border-green-500/50 rounded-2xl p-8 h-full shadow-lg dark:shadow-green-500/20">
              {/* Success Badge */}
              <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg -rotate-12">
                ✓ Built For Sales
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">eCommTool AI</h3>
                  <p className="text-green-700 dark:text-green-400 text-sm font-semibold">Your AI Sales Machine</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-700 dark:text-green-400" />
                  </div>
                  <p className="text-foreground">Trained exclusively on closing Shopify sales</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-700 dark:text-green-400" />
                  </div>
                  <p className="text-foreground">Masters pain agitation & value stacking</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-700 dark:text-green-400" />
                  </div>
                  <p className="text-foreground">Engineered for conversion psychology</p>
                </div>
              </div>

              <div className="pt-6 border-t border-green-200 dark:border-green-500/30">
                <div className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-5 h-5 text-green-700 dark:text-green-400" />
                  <span className="font-semibold">Output:</span>
                  <span className="text-green-700 dark:text-green-400 font-bold">A Master Sales Closer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card backdrop-blur border border-border rounded-2xl overflow-hidden mb-12 shadow-lg"
        >
          <div className="grid grid-cols-3 gap-px bg-border">
            {/* Header */}
            <div className="bg-secondary p-6">
              <h4 className="font-bold text-foreground">Capability</h4>
            </div>
            <div className="bg-secondary p-6 text-center">
              <h4 className="font-bold text-muted-foreground">General AI Tools</h4>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-6 text-center">
              <h4 className="font-bold text-green-700 dark:text-green-400">Our AI Closer</h4>
            </div>

            {/* Comparison Rows */}
            {comparison.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="contents"
              >
                <div className="bg-card p-6 flex items-center gap-3">
                  <div className="text-muted-foreground">{item.icon}</div>
                  <span className="font-semibold text-foreground">{item.title}</span>
                </div>
                <div className="bg-card p-6 text-center">
                  <span className="text-muted-foreground">{item.greeter}</span>
                </div>
                <div className="bg-card p-6 text-center">
                  <span className="text-green-700 dark:text-green-400 font-semibold">{item.closer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-card backdrop-blur border border-border rounded-2xl p-8 max-w-2xl shadow-lg">
            <Sparkles className="w-12 h-12 text-green-600 dark:text-green-400" />
            <p className="text-2xl font-bold text-foreground mb-2">
              We Don't Just Generate Copy
            </p>
            <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              We Generate Sales
            </p>
            <div className="flex items-center gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>24/7 Performance</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Guaranteed Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};