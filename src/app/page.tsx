"use client";

import Image from "next/image";
import Link from "next/link";
import productsData from "@/data/products.json";
import companyData from "@/data/company.json";
import { ArrowRight, ShieldCheck, Truck, Globe, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
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
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-16">
          
          {/* Company Identity */}
          <div className="flex flex-col items-center justify-center mb-2 w-full px-4">
            <Image 
              src="/logo.png" 
              alt="Ferro Fine Alloys Logo" 
              width={300} 
              height={300} 
              className="w-auto h-32 md:h-48 lg:h-64 mb-4 mt-8 object-contain brightness-0 invert drop-shadow-2xl"
              priority
            />
            <Image 
              src="/CompNameWithoutLogo.png" 
              alt="Ferro Fine Alloys Text" 
              width={800} 
              height={200} 
              className="w-auto h-16 md:h-24 lg:h-32 mb-0 object-contain brightness-0 invert drop-shadow-2xl max-w-[90vw]"
              priority
            />
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8 uppercase">
            {t("home.unrivaled_quality")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 drop-shadow-sm">
              {t("home.metals")}
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
            <Link href="/products" className="w-full sm:w-auto justify-center bg-[var(--color-secondary)] hover:bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-2">
              {t("home.explore_catalog")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto justify-center text-center glass-panel hover:bg-white/10 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-colors">
              {t("home.global_logistics")}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.corporate_overview")}</h2>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-8">{t("home.company_vision")}</h3>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed md:leading-loose max-w-4xl mx-auto">
          {t("home.company_overview")}
        </p>
      </section>


      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px] -scale-x-100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" style={{ fill: 'var(--color-primary-container)' }}></path>
        </svg>
      </div>

      {/* Certifications & Compliance Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[var(--color-primary-container)]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg.png"
            alt="Manufacturing Facility Background"
            fill
            className="object-cover opacity-30 mix-blend-color-dodge grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-container)] via-[var(--color-primary-container)]/80 to-[var(--color-primary-container)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-wide uppercase mb-3">
              Certifications & Compliance
            </h2>
            <p className="text-slate-300 text-base md:text-lg">
              Committed to Quality and International Standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="relative group p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-slate-700/50 group-hover:border-orange-500/50 rounded-2xl shadow-xl group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)] transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-orange-400 mb-6">
                  <ShieldCheck className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Registered & Certified</h3>
                <div className="w-12 h-[2px] bg-slate-600 mb-6"></div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ferro Fine Alloys is a fully registered, certified, and trademarked entity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-slate-700/50 group-hover:border-orange-500/50 rounded-2xl shadow-xl group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)] transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-orange-400 mb-6">
                  <Award className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Regulatory Approvals</h3>
                <div className="w-12 h-[2px] bg-slate-600 mb-6"></div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We hold all necessary regulatory approvals and industry-standard certifications.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-slate-700/50 group-hover:border-orange-500/50 rounded-2xl shadow-xl group-hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.3)] transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-orange-400 mb-6">
                  <Globe className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-4">Quality & Compliance</h3>
                <div className="w-12 h-[2px] bg-slate-600 mb-6"></div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our stringent quality control ensures every batch meets international specifications and compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Angled Divider */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px] -scale-x-100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200 120L0 16.48V0h1200v120z" style={{ fill: 'var(--color-primary-container)' }}></path>
        </svg>
      </div>

      {/* Featured Products Accordion */}
      <section className="py-16 md:py-24 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.premium_materials")}</h2>
            <h3 className="font-heading text-2xl md:text-4xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("home.product_portfolio")}</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 md:mt-8"></div>
            <p className="text-slate-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">{t("home.hover_explore")}</p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full min-h-[600px] md:min-h-0 md:h-[60vh] gap-2">
            {productsData.map((product) => (
              <Link 
                href={`/products#${product.id}`} 
                key={product.id} 
                className="relative flex-1 min-h-[120px] md:min-h-0 md:hover:flex-[4] hover:flex-[2] transition-all duration-700 ease-in-out group overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-900"
              >
                <Image
                  src={`/${product.id}.png`}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030812]/90 via-[#030812]/40 md:via-transparent to-transparent transition-all duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"></div>
                <div 
                  className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', 
                    backgroundSize: '24px 24px',
                    WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
                    maskImage: 'linear-gradient(to top, black 0%, transparent 60%)'
                  }}
                ></div>
                
                {/* Vertical title (Default State) */}
                <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-center md:pb-8 opacity-100 md:group-hover:opacity-0 transition-opacity duration-300">
                  <h4 className="text-white font-bold tracking-widest uppercase md:-rotate-90 whitespace-nowrap text-sm md:text-sm drop-shadow-md">
                    {product.name}
                  </h4>
                </div>

                {/* Expanded State Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100 translate-y-4 group-hover:translate-y-0 flex flex-col justify-end">
                  <span className="inline-block px-2 py-1 bg-blue-600/80 text-[10px] font-bold uppercase tracking-widest text-white mb-2 md:mb-3 border border-blue-400/50 backdrop-blur-sm self-start">
                    {product.category}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide drop-shadow-lg mb-1 md:mb-2 leading-tight">{product.name}</h4>
                  <p className="text-blue-100 text-xs hidden lg:block drop-shadow-md line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Strip Wrapper */}
      <div className="relative w-full">
        {/* Continuous Texture Background */}
        <div className="absolute inset-0 z-0 bg-[var(--color-primary-container)]"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20"></div>

        {/* Top Masking Divider */}
        <div className="relative z-10 w-full leading-[0] -scale-y-100 -mt-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M0 16.48 L1200 120 L0 120 Z" style={{ fill: 'var(--color-background)' }}></path>
          </svg>
        </div>

        {/* Content */}
        <section className="relative z-10 py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {t("home.company_features").map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-4 group cursor-default transition-transform duration-300 hover:scale-105">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 border border-blue-500/30 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500">
                  <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-orange-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] group-hover:shadow-[0_0_10px_rgba(251,146,60,0.8)] transition-all duration-500"></span>
                </div>
                <span className="font-heading text-lg md:text-xl font-bold text-white tracking-widest uppercase drop-shadow-md group-hover:text-orange-400 transition-colors duration-500">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Masking Divider */}
        <div className="relative z-10 w-full leading-[0] -scale-x-100 -mb-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M0 16.48 L1200 120 L0 120 Z" style={{ fill: 'var(--color-background)' }}></path>
          </svg>
        </div>
      </div>

      {/* Global Partners Marquee */}
      <section className="py-20 bg-[var(--color-background)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="font-heading text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.trusted_worldwide")}</h2>
          <h3 className="font-heading text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("home.global_partners")}</h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="relative flex overflow-hidden w-full bg-[var(--color-background)] py-12 border-y border-slate-200 dark:border-slate-800 group">
          <div className="animate-marquee flex items-center whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center justify-around w-max pr-24 gap-24">
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Globe className="w-8 h-8 text-slate-300 dark:text-slate-600" /> CMR</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Award className="w-8 h-8 text-slate-300 dark:text-slate-600" /> JINDAL STEEL</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Truck className="w-8 h-8 text-slate-300 dark:text-slate-600" /> JINDAL STAINLESS</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-slate-300 dark:text-slate-600" /> TATA STEEL</span>
                <span className="text-2xl font-bold text-slate-400/80 uppercase tracking-widest flex items-center gap-3"><Globe className="w-8 h-8 text-slate-300 dark:text-slate-600" /> VEDANTA</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-background)] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-background)] to-transparent"></div>
        </div>
      </section>
      {/* Company Summary Wrapper */}
      <div className="relative w-full">
        {/* Continuous Texture Background for the Blue Section */}
        <div className="absolute inset-0 z-0 bg-[var(--color-primary-container)]"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-600/10 via-transparent to-blue-600/10"></div>

        {/* Top Masking Divider (Page Background) */}
        <div className="relative z-10 w-full leading-[0] -scale-y-100 -mt-[1px]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
              <path d="M0 16.48 L1200 120 L0 120 Z" style={{ fill: 'var(--color-background)' }}></path>
          </svg>
        </div>

        {/* Company Summary Content */}
        <section className="relative z-10 py-24 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest mb-4">{t("home.company_profile_summary")}</h2>
            <h3 className="font-heading text-3xl font-bold uppercase tracking-wide mb-8 drop-shadow-md">Ferro Fine Alloys</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 shadow-sm"></div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 drop-shadow-sm">
              Established in 2008, Ferro Fine Alloys is a pioneer in Powder Metallurgy and all types of metals. We specialize in atomized metal powders, ferro alloys, inoculants, carbons, and more.
            </p>
            <p className="text-slate-400 text-md leading-relaxed drop-shadow-sm">
              With a robust global reach, we supply to the USA, Europe, Middle East, and Asia, including Pan India, ensuring world-class quality and reliable delivery for all industrial and metallurgical needs.
            </p>
          </div>
        </section>

        {/* Bottom Masking Wedge (Footer Background) */}
        <div className="relative z-10 w-full h-[40px] md:h-[60px] bg-[#030812] -mb-[1px]" style={{ clipPath: 'polygon(100% 13.7333%, 100% 100%, 0 100%)' }}>
           <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        </div>
      </div>
    </div>
  );
}
