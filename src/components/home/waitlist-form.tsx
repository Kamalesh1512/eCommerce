"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const WaitlistForm = () => {
  return (
    <Button asChild className="whitespace-nowrap">
      <a
        href="https://forms.gle/aSe8NmKT3aaRzgSZ8"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Waitlist <ArrowRight className="w-4 h-4 ml-2" />
      </a>
    </Button>
  );
};

/// older version
// import { ArrowRight, CheckCircle2 } from "lucide-react";
// import { useState } from "react";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { motion } from "framer-motion";

// export const WaitlistForm = ({
//   inline = false,
//   onSuccess,
// }: {
//   inline?: boolean;
//   onSuccess?: () => void;
// }) => {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !email.includes("@")) {
//       setError("Please enter a valid email");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     const formData = new FormData();
//     formData.append("entry.2005620554", email); // ✅ use the literal field name

//     try {
//       await fetch(
//         "https://docs.google.com/forms/d/e/1FAIpQLSfvgyTXvi1bbORTStBCdQABD4QOp1UjC7Y9_SYKjamlSXmvJQ/viewform",
//         {
//           method: "POST",
//           body: formData,
//           mode: "no-cors",
//         }
//       );

//       setSubmitted(true);
//       setEmail("");
//       onSuccess?.();
//     } catch (err) {
//       console.error("Waitlist error:", err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   if (submitted) {
//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
//       >
//         <CheckCircle2 className="w-5 h-5 text-green-500" />
//         <div>
//           <p className="font-semibold text-green-700 dark:text-green-400">
//             You're on the list!
//           </p>
//           <p className="text-sm text-muted-foreground">
//             We'll notify you when we launch.
//           </p>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className={inline ? "flex gap-3" : "space-y-3"}
//     >
//       <Input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="flex-1"
//       />
//       <Button type="submit" disabled={loading} className="whitespace-nowrap">
//         {loading ? "Joining..." : "Join Waitlist"}
//         <ArrowRight className="w-4 h-4 ml-2" />
//       </Button>

//       {error && (
//         <p className="text-sm text-red-500 text-center mt-2">{error}</p>
//       )}
//     </form>
//   );
// };
