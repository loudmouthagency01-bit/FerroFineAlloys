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
          <Link href="/" className="flex items-center group z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Ferro Fine Alloys Logo" width={48} height={48} className="w-auto h-8 sm:h-10 object-contain brightness-0 invert" />
              <Image src="/CompNameWithoutLogo.png" alt="Ferro Fine Alloys Text" width={160} height={48} className="hidden md:block w-auto h-5 sm:h-6 lg:h-8 object-contain brightness-0 invert" />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <Link href="/products" className="hover:text-blue-300 transition-colors flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-300" /> {t("nav.catalog")}
            </Link>
            <Link href="/rfq" className="hover:text-blue-300 transition-colors flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-blue-300" /> {t("nav.rfq_basket")}
            </Link>
            <Link href="/contact" className="hover:text-blue-300 transition-colors flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-300" /> {t("nav.contact")}
            </Link>
          </div>

          {/* Toggles & Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4 z-50">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/10 border border-white/20 text-white/80 hover:text-white transition-all rounded"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-yellow-400" />}
            </button>

            {/* Language Toggle (Hidden on very small screens, moved to menu) */}
            <div className="hidden sm:flex items-center bg-white/10 border border-white/20 rounded px-2 hover:bg-white/20 transition-colors">
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-transparent text-white font-mono text-sm font-semibold py-2 outline-none cursor-pointer appearance-none text-center"
              >
                <option value="en" className="text-slate-800 font-sans">EN - English</option>
                <option value="es" className="text-slate-800 font-sans">ES - Español</option>
                <option value="fr" className="text-slate-800 font-sans">FR - Français</option>
                <option value="de" className="text-slate-800 font-sans">DE - Deutsch</option>
                <option value="ar" className="text-slate-800 font-sans">AR - العربية</option>
                <option value="hi" className="text-slate-800 font-sans">HI - हिन्दी</option>
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 text-white rounded"
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
          <div className="flex flex-col gap-4 border-t border-white/20 pt-4">
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blue-300 font-medium flex items-center gap-3">
              <Info className="w-5 h-5 text-blue-300" /> {t("nav.catalog")}
            </Link>
            <Link href="/rfq" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blue-300 font-medium flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-blue-300" /> {t("nav.rfq_basket")}
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blue-300 font-medium flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-blue-300" /> {t("nav.contact")}
            </Link>

            {/* Mobile Language Toggle */}
            <div className="sm:hidden flex items-center justify-between bg-white/5 p-2 border border-white/20 font-mono text-sm font-semibold rounded mt-2">
              <span className="text-white/70 pl-2">Language</span>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-slate-800 text-white font-sans p-2 rounded outline-none border border-white/20"
              >
                <option value="en">EN - English</option>
                <option value="es">ES - Español</option>
                <option value="fr">FR - Français</option>
                <option value="de">DE - Deutsch</option>
                <option value="ar">AR - العربية</option>
                <option value="hi">HI - हिन्दी</option>
              </select>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
}
