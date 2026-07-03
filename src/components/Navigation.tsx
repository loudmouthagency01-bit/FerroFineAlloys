"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShoppingCart, Info, PhoneCall, Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-2 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <nav className="glass-panel pointer-events-auto flex flex-col px-4 md:px-6 py-3 w-full max-w-6xl text-white relative">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white flex items-center justify-center p-1.5 rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <Image src="/Logo.png" alt="Shri Narsingh Micro Alloys Logo" width={56} height={56} className="object-contain" />
            </div>
            <div className="flex flex-col drop-shadow-md">
              <span className="font-extrabold text-sm md:text-xl tracking-widest uppercase leading-none mb-1 text-white">Shri Narsingh</span>
              <span className="text-[10px] md:text-xs text-blue-300 uppercase tracking-[0.2em] font-mono font-semibold">Micro Alloys</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="/products" className="hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2">
              <Info className="w-4 h-4 text-[var(--color-secondary)]" /> {t("nav.catalog")}
            </Link>
            <Link href="/rfq" className="hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-[var(--color-secondary)]" /> {t("nav.rfq_basket")}
            </Link>
            <Link href="/contact" className="hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[var(--color-secondary)]" /> {t("nav.contact")}
            </Link>
          </div>

          {/* Toggles & Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4 z-50">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/10 dark:bg-[#0a182b] border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-gray-400 hover:text-[var(--color-primary)] dark:hover:text-white transition-all rounded"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-yellow-400" />}
            </button>

            {/* Language Toggle (Hidden on very small screens, moved to menu) */}
            <div className="hidden sm:flex items-center gap-1 bg-white/10 dark:bg-[#0a182b] p-1 border border-slate-300 dark:border-slate-700 font-mono text-xs font-semibold rounded">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 md:px-3 py-1.5 md:py-2 transition-all rounded ${language === "en" ? "bg-[var(--color-secondary)] text-white shadow-sm border border-blue-400/50" : "text-slate-600 dark:text-gray-400 hover:text-[var(--color-primary)] dark:hover:text-white"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-2 md:px-3 py-1.5 md:py-2 transition-all rounded ${language === "hi" ? "bg-[var(--color-secondary)] text-white shadow-sm border border-blue-400/50" : "text-slate-600 dark:text-gray-400 hover:text-[var(--color-primary)] dark:hover:text-white"}`}
              >
                HI
              </button>
              <button
                onClick={() => setLanguage("gu")}
                className={`px-2 md:px-3 py-1.5 md:py-2 transition-all rounded ${language === "gu" ? "bg-[var(--color-secondary)] text-white shadow-sm border border-blue-400/50" : "text-slate-600 dark:text-gray-400 hover:text-[var(--color-primary)] dark:hover:text-white"}`}
              >
                GU
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-white/10 dark:bg-[#0a182b] border border-slate-300 dark:border-slate-700 text-[var(--color-primary)] dark:text-white rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`lg:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pt-6 pb-2" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 border-t border-slate-300 dark:border-slate-700 pt-4">
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-primary)] dark:text-white hover:text-[var(--color-secondary)] font-medium flex items-center gap-3">
              <Info className="w-5 h-5 text-[var(--color-secondary)]" /> {t("nav.catalog")}
            </Link>
            <Link href="/rfq" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-primary)] dark:text-white hover:text-[var(--color-secondary)] font-medium flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-[var(--color-secondary)]" /> {t("nav.rfq_basket")}
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[var(--color-primary)] dark:text-white hover:text-[var(--color-secondary)] font-medium flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-[var(--color-secondary)]" /> {t("nav.contact")}
            </Link>

            {/* Mobile Language Toggle */}
            <div className="sm:hidden flex items-center justify-between bg-white/5 dark:bg-[#0a182b]/50 p-2 border border-slate-300 dark:border-slate-700 font-mono text-xs font-semibold rounded mt-2">
              <span className="text-[var(--color-primary)] dark:text-slate-400 pl-2">Language</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-2 transition-all rounded ${language === "en" ? "bg-[var(--color-secondary)] text-white shadow-sm" : "text-slate-600 dark:text-gray-400"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-2 transition-all rounded ${language === "hi" ? "bg-[var(--color-secondary)] text-white shadow-sm" : "text-slate-600 dark:text-gray-400"}`}
                >
                  HI
                </button>
                <button
                  onClick={() => setLanguage("gu")}
                  className={`px-3 py-2 transition-all rounded ${language === "gu" ? "bg-[var(--color-secondary)] text-white shadow-sm" : "text-slate-600 dark:text-gray-400"}`}
                >
                  GU
                </button>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}
