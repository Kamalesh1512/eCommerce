// "use client";
// import { ArrowRight, CheckCircle2, Clock, Rocket, Shield } from "lucide-react";
// import { Button } from "../ui/button";
// import { Card, CardContent } from "../ui/card";
// import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import { WaitlistForm } from "./waitlist-form";
// import { useState } from "react";
// import { WaitlistStats } from "./waitlist-stats";

// // CTA Section
// export const CTASection: React.FC = () => {
//   const [refreshKey, setRefreshKey] = useState(0);
//   return (
//     <section className="py-24 px-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto"
//       >
//         <Card className="relative overflow-hidden border-2 border-primary/20">
//           <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10" />
//           <CardContent className="relative p-12 text-center space-y-6">
//             <Rocket className="w-16 h-16 text-primary mx-auto" />
//             <h2 className="text-4xl md:text-5xl font-bold">
//               Stop Losing Sales to Bad Copy
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Join the waitlist now and get 30% off on your first subscription
//               when we launch.
//               <br />
//               <span className="font-semibold text-primary">
//                 Only 100 spots available at this price.
//               </span>
//             </p>

//             <div className="max-w-md mx-auto pt-4">
//               <WaitlistForm />
//             </div>

//             <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <Shield className="w-4 h-4" />
//                 No credit card required
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="w-4 h-4" />
//                 Launching Soon!!!
//               </div>
//               <div className="flex items-center gap-2">
//                 <CheckCircle2 className="w-4 h-4" />
//                 Cancel anytime
//               </div>
//             </div>

//             <WaitlistStats key={refreshKey} />
//           </CardContent>
//         </Card>
//       </motion.div>
//     </section>
//   );
// };

"use client";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Rocket,
  Shield,
  BadgeCheck,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";
import { useState } from "react";
import { WaitlistStats } from "./waitlist-stats";

// CTA Section
export const CTASection: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent" />

          <CardContent className="relative p-12 text-center space-y-8">
            <Rocket className="w-16 h-16 text-primary mx-auto drop-shadow-md" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Stop Losing Sales to Bad Copy
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join the waitlist now and get{" "}
              <span className="font-semibold text-primary">30% off</span> on
              your first subscription when we launch.
              <br />
              <span className="font-semibold text-primary/90">
                Only 100 spots available at this price.
              </span>
            </p>

            <div className="max-w-md mx-auto pt-4">
              <WaitlistForm />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Launching Soon!!!
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Cancel anytime
              </div>
            </div>

            {/* 💎 Guarantee Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mt-8 px-6 py-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/30 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-emerald-400/20 blur-xl rounded-2xl" />
              <div className="relative flex flex-col items-center text-center">
                <BadgeCheck className="w-8 h-8 text-green-500 mb-3" />
                <p className="text-lg font-semibold text-foreground max-w-xl">
                  We guarantee our copy will outperform your old copy in a
                  head-to-head A/B test.{" "}
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    If it doesn’t, you get your money back.
                  </span>
                </p>
              </div>
            </motion.div>

            <WaitlistStats key={refreshKey} />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};
