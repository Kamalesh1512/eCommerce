// src/app/layout.tsx
import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "eCommTool - AI-Powered E-Commerce Marketing Tool",
  description:
    "Boost your e-commerce brand with AI-powered marketing tools: create content, analyze audience, and optimize campaigns effortlessly.",
  icons: "/favicon.png",
};

const outfit = Outfit({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-transparent", outfit.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <Footer />
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}