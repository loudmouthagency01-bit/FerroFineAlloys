"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MapPin, ShoppingCart, Info, PhoneCall, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <nav className="glass-panel pointer-events-auto flex items-center justify-between px-6 py-3 w-full max-w-6xl text-white">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative w-12 h-12 bg-white flex items-center justify-center p-1">
            <Image src="/Logo.png" alt="Shri Narsingh Micro Alloys Logo" width={48} height={48} className="object-contain" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-sm tracking-wider uppercase leading-none block mb-1">Shri Narsingh</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">Micro Alloys</span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/products" className="hover:text-blue-300 transition-colors flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-400" /> {t("nav.catalog")}
          </Link>
          <Link href="/rfq" className="hover:text-blue-300 transition-colors flex items-center gap-2">
            <ShoppingCart className="w-4 h-4 text-blue-400" /> {t("nav.rfq_basket")}
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition-colors flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-blue-400" /> {t("nav.contact")}
          </Link>
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 bg-[#0a182b] border border-slate-700 text-gray-400 hover:text-white hover:border-blue-400/50 transition-all"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-yellow-400" />}
          </button>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-[#0a182b] p-1 border border-slate-700 font-mono text-xs font-semibold">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 transition-all ${language === "en" ? "bg-[var(--color-secondary)] text-white shadow-sm border border-blue-400/50" : "text-gray-400 hover:text-white"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-2 transition-all ${language === "hi" ? "bg-[var(--color-secondary)] text-white shadow-sm border border-blue-400/50" : "text-gray-400 hover:text-white"}`}
            >
              HI
            </button>
            <button
              onClick={() => setLanguage("gu")}
              className={`px-3 py-2 transition-all ${language === "gu" ? "bg-[var(--color-secondary)] text-white shadow-sm border border-blue-400/50" : "text-gray-400 hover:text-white"}`}
            >
              GU
            </button>
          </div>
        </div>

      </nav>
    </div>
  );
}
