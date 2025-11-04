"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import {
  ArrowRight,
  Clock,
  DollarSign,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { AnimatedCounter } from "../animation/animated-counter";
import { WaitlistForm } from "./waitlist-form";

/// current landing page with waitlist
export const HeroSection = () => {
  return (
    <motion.section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 text-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[-30%] left-[-20%] h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-30%] right-[-20%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-500/25 to-primary/25 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-5xl space-y-10"
      >
        {/* Badge */}
        <Badge
          variant="secondary"
          className="mb-4 inline-flex items-center gap-2 border border-primary/20 bg-background/80 px-4 py-2 text-sm backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          Launching Soon • Join Existing Shopify Store Owners
        </Badge>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          The Copywriter Built to Boost
          <br />
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_200%] bg-clip-text text-transparent"
          >
            Your Shopify Sales.
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-2xl leading-relaxed"
        >
          AI copywriting platform that turn browsers into buyers. Create
          headlines, descriptions, and ads that actually convert — in seconds,
          not hours.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-lg"
        >
          <WaitlistForm />
          <p className="mt-3 text-sm text-muted-foreground">
            🎁 Early access + 30% off your first subscription for the first 100
            signups
          </p>
        </motion.div>
      </motion.div>

    </motion.section>
  );
};
