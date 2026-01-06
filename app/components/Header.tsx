"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ${
              isScrolled ? "" : "text-white"
            }`}
          >
            My App
          </motion.h1>
        </Link>

        {/* NAVIGATION */}
        <nav className="space-x-6 hidden md:flex">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link 
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative font-medium transition-colors ${
                isScrolled 
                  ? "text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU ICON */}
        <div className={`md:hidden text-2xl cursor-pointer ${
          isScrolled ? "text-slate-700 dark:text-slate-300" : "text-white"
        }`}>
          ☰
        </div>
      </div>
    </header>
  );
}
