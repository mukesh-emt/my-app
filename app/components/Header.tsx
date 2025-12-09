"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/">
          <h1 className="text-xl font-bold cursor-pointer">My App</h1>
        </Link>

        {/* NAVIGATION */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </header>
  );
}
