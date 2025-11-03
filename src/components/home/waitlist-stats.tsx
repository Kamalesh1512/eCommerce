"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Waitlist Stats Component (Google Form + Sheet)
export const WaitlistStats = () => {
  const [stats, setStats] = useState({
    count: 0,
    remaining: 100,
    percentage: 0,
  });
  const [loading, setLoading] = useState(true);

  const SHEET_URL =
    "https://opensheet.elk.sh/1_eIbkewtLcu0JJLfyH2tY5hCMKbWv7iki6RaetVC3Qs/Form%20Responses%201";

  const fetchStats = async () => {
    try {
      const res = await fetch(SHEET_URL);
      const data = await res.json();

      const count = data.length; // Number of respondents
      const totalSpots = 100;
      const remaining = Math.max(totalSpots - count, 0);
      const percentage = Math.min((count / totalSpots) * 100, 100);

      setStats({ count, remaining, percentage });
    } catch (error) {
      console.error("Failed to fetch waitlist stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
    // Refresh once every 24 hours
    const interval = setInterval(fetchStats, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="pt-6 border-t mt-8 animate-pulse">
        <div className="h-4 bg-muted rounded w-48 mx-auto mb-2"></div>
        <div className="w-full bg-muted h-2 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="pt-6 border-t mt-8">
      <p className="text-sm text-muted-foreground text-center">
        Early bird spots remaining:{" "}
        <span className="font-bold text-primary">
          {stats.remaining ? stats.remaining : 100}/100
        </span>
      </p>
      <div className="w-full bg-muted h-2 rounded-full mt-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${stats.percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full bg-gradient-to-r from-primary to-purple-600"
        />
      </div>
    </div>
  );
};
