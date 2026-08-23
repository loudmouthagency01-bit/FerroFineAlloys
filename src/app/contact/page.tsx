"use client";

import companyData from "@/data/company.json";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ContactMap from "@/components/ContactMap";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[var(--color-background)] min-h-screen pt-16 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-4">{t("contact.title")}</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-12 md:mb-16 leading-relaxed text-sm md:text-base">
          {t("contact.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* India Hub */}
          <div className="bg-white dark:bg-slate-900 p-6 md:p-10 shadow-md hover:shadow-lg border-t-4 border-[var(--color-secondary)] transition-all">
            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10 pb-6 md:pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-800 dark:text-blue-300 flex-shrink-0">
                <Globe className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("contact.asia_hq")}</h2>
                <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Domestic Hub</span>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">

              <div className="flex items-start gap-4 md:gap-5">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 md:mb-2">{t("contact.registered_address")}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs md:text-sm">{companyData.headquarters.registeredAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-5">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 md:mb-2">{t("contact.phone")}</h4>
                  <p className="text-[var(--color-secondary)] font-mono font-bold text-base md:text-lg">{companyData.headquarters.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:gap-5">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 md:mb-2">{t("contact.email")}</h4>
                  <p className="text-[var(--color-secondary)] font-mono font-bold text-sm md:text-base break-all">{companyData.headquarters.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="bg-white dark:bg-slate-900 p-6 md:p-10 shadow-md hover:shadow-lg border-t-4 border-[var(--color-secondary)] transition-all">
            <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10 pb-6 md:pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-800 dark:text-blue-300 flex-shrink-0">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wide">Global Reach</h2>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">International Logistics</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm mb-4">
                We supply our premium metallurgical products worldwide with strong logistics support across major international markets:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wide text-sm">USA & North America</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wide text-sm">Europe</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wide text-sm">Middle East</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></div>
                  <span className="text-slate-800 dark:text-slate-200 font-bold uppercase tracking-wide text-sm">Asia & Pan India</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Global Connections Map */}
        <ContactMap />
      </div>
    </div>
  );
}
