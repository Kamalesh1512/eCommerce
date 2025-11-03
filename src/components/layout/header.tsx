// src/components/layout/header.tsx
'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, LogOut, Menu, Settings, Sparkles, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "../global/theme-toggle";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if current route is a protected route
  const isProtectedRoute = pathname?.startsWith('/dashboard') || 
                          pathname?.startsWith('/settings') ||
                          pathname?.startsWith('/campaigns') ||
                          pathname?.startsWith('/content') ||
                          pathname?.startsWith('/analytics') ||
                          pathname?.startsWith('/audience');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getUserInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm' 
          : 'bg-background'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-2 font-bold text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              eCommTool
            </span>
          </motion.a>

          {/* Right Side Actions - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile - Different handling for protected routes */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}