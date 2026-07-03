"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import { ArrowRight, ShieldCheck, Truck, Globe, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#001024]">
          <Image
            src="/hero_bg.png"
            alt="Steel Manufacturing Facility"
            fill
            className="object-cover opacity-25 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002045]/90 via-[#002045]/60 to-[var(--color-background)]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          
          {/* Company Identity */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4 drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image src="/Logo_final.png" alt="Shri Narsingh Micro Alloys Logo" fill sizes="(max-width: 768px) 112px, 144px" className="object-contain" priority />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white drop-shadow-2xl mb-1">
              Shri Narsingh
            </h2>
            <h3 className="text-sm md:text-xl text-blue-300 tracking-[0.3em] uppercase font-bold drop-shadow-lg">
              Micro Alloys
            </h3>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8 uppercase">
            {t("home.unrivaled_quality")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              {t("home.metals")}
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="bg-[var(--color-secondary)] hover:bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-2">
              {t("home.explore_catalog")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="glass-panel hover:bg-white/10 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors">
              {t("home.global_logistics")}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.corporate_overview")}</h2>
        <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-8">{t("home.company_vision")}</h3>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-slate-600 text-lg leading-loose max-w-4xl mx-auto">
          {t("home.company_overview")}
        </p>
      </section>

      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-[var(--color-background)]"></path>
        </svg>
      </div>

      {/* Core Pillars Grid */}
      <section className="bg-[var(--color-background)] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-16 uppercase tracking-wide">{t("home.core_pillars")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-start border border-slate-200 dark:border-slate-800 p-8 hover:border-[var(--color-secondary)] transition-colors bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-[var(--color-secondary)]">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-4">{t("home.world_class_quality")}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {t("home.quality_desc")}
              </p>
            </div>

            <div className="flex flex-col items-start border border-slate-200 dark:border-slate-800 p-8 hover:border-[var(--color-secondary)] transition-colors bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-[var(--color-secondary)]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-4">{t("home.professional_team")}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {t("home.team_desc")}
              </p>
            </div>

            <div className="flex flex-col items-start border border-slate-200 dark:border-slate-800 p-8 hover:border-[var(--color-secondary)] transition-colors bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 text-[var(--color-secondary)]">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-4">{t("home.spacious_warehouse")}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {t("home.warehouse_desc")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-[#050f1d]"></path>
        </svg>
      </div>

      {/* Certifications & Compliance Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-[#050f1d]">
          <Image
            src="/hero_bg.png"
            alt="Manufacturing Facility Background"
            fill
            className="object-cover opacity-30 mix-blend-color-dodge grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050f1d] via-[#050f1d]/80 to-[#050f1d]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide uppercase mb-3">
              Certifications & Compliance
            </h2>
            <p className="text-slate-400 text-lg">
              Committed to Quality and International Standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center bg-black/60 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/50 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)]">
              <div className="text-orange-400 mb-6">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Registered & Certified</h3>
              <div className="w-12 h-[1px] bg-slate-600 mb-6"></div>
              <p className="text-slate-300 text-sm leading-relaxed">
                SHRI NARSINGH MICRO ALLOYS is a fully registered, certified, and trademarked entity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center bg-black/60 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/50 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)]">
              <div className="text-orange-400 mb-6">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Regulatory Approvals</h3>
              <div className="w-12 h-[1px] bg-slate-600 mb-6"></div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We hold all necessary regulatory approvals and industry-standard certifications.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center bg-black/60 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/50 p-10 rounded-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)]">
              <div className="text-orange-400 mb-6">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality & Compliance</h3>
              <div className="w-12 h-[1px] bg-slate-600 mb-6"></div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our stringent quality control ensures every batch meets international specifications and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-[#050f1d]"></path>
        </svg>
      </div>

      {/* Featured Products Accordion */}
      <section className="py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.premium_materials")}</h2>
            <h3 className="text-4xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("home.product_portfolio")}</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-8"></div>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto">{t("home.hover_explore")}</p>
          </div>

          <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[450px] gap-2">
            {productsData.map((product) => (
              <Link 
                href={`/products`} 
                key={product.id} 
                className="relative flex-1 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-in-out group overflow-hidden border border-slate-300 bg-slate-900"
              >
                <Image
                  src={`/${product.id}.png`}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-transparent to-transparent group-hover:from-[var(--color-primary)]/80 transition-all duration-700"></div>
                
                {/* Vertical title (Default State) */}
                <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-center md:pb-8 opacity-100 md:group-hover:opacity-0 transition-opacity duration-300">
                  <h4 className="text-white font-bold tracking-widest uppercase md:-rotate-90 whitespace-nowrap text-xs md:text-sm drop-shadow-md">
                    {product.name}
                  </h4>
                </div>

                {/* Expanded State Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100 translate-y-4 group-hover:translate-y-0 flex flex-col justify-end">
                  <span className="inline-block px-2 py-1 bg-blue-600/80 text-[10px] font-bold uppercase tracking-widest text-white mb-3 border border-blue-400/50 backdrop-blur-sm self-start">
                    {product.category}
                  </span>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide drop-shadow-lg mb-2 leading-tight">{product.name}</h4>
                  <p className="text-blue-100 text-xs hidden lg:block drop-shadow-md line-clamp-2">
                    {product.description || `Premium industrial grade ${product.name.toLowerCase()} sourced and supplied with unrivaled quality assurance.`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-[var(--color-primary-container)]"></path>
        </svg>
      </div>

      {/* Value Proposition Strip (Accent Block) */}
      <section className="bg-[var(--color-primary-container)] text-white py-12 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 font-mono text-sm tracking-wider uppercase">
          {t("home.company_features").map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-blue-100">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-[var(--color-primary-container)]"></path>
        </svg>
      </div>

      {/* Global Partners Marquee */}
      <section className="py-20 bg-[var(--color-background)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.trusted_worldwide")}</h2>
          <h3 className="text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("home.global_partners")}</h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="relative flex overflow-hidden w-full bg-[var(--color-background)] py-12 border-y border-slate-200 dark:border-slate-800 group">
          <div className="animate-marquee flex items-center whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center justify-around w-max pr-24 gap-24">
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Globe className="w-8 h-8 text-slate-300 dark:text-slate-600" /> TATA STEEL</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Award className="w-8 h-8 text-slate-300 dark:text-slate-600" /> JSW METALS</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Truck className="w-8 h-8 text-slate-300 dark:text-slate-600" /> ESSAR HEAVY</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-slate-300 dark:text-slate-600" /> JINDAL PANTHER</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Globe className="w-8 h-8 text-slate-300 dark:text-slate-600" /> SAIL INDIA</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Award className="w-8 h-8 text-slate-300 dark:text-slate-600" /> VEDANTA</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent"></div>
        </div>
      </section>
    </div>
  );
}
