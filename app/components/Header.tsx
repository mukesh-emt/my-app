"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (window.scrollY > 20) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
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
          {["Home", "About", "Services", "Contact"].map((item) => (
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
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`md:hidden text-2xl cursor-pointer rounded-md px-2 py-1 transition-colors ${
            isScrolled ? "text-slate-700 dark:text-slate-300" : "text-white"
          }`}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg"
          >
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full rounded-lg px-4 py-3 text-base font-semibold text-slate-800 dark:text-slate-100 bg-slate-100/70 dark:bg-slate-800/70 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
