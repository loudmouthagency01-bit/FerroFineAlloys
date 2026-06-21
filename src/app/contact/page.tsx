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
        <h1 className="text-4xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-4">{t("contact.title")}</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-16 leading-relaxed">
          {t("contact.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* India Hub */}
          <div className="bg-white dark:bg-slate-900 p-10 shadow-md hover:shadow-lg border-t-4 border-[var(--color-secondary)] transition-all">
            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-800 dark:text-blue-300">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("contact.asia_hq")}</h2>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Domestic Hub</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <MapPin className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.factory_address")}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{companyData.headquarters.factoryAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <MapPin className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.registered_address")}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{companyData.headquarters.registeredAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Phone className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.phone")}</h4>
                  <p className="text-[var(--color-secondary)] font-mono font-bold text-lg">{companyData.headquarters.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Mail className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.email")}</h4>
                  <p className="text-[var(--color-secondary)] font-mono font-bold">{companyData.headquarters.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* NA Hub */}
          <div className="bg-white dark:bg-slate-900 p-10 shadow-md hover:shadow-lg border-t-4 border-[var(--color-secondary)] transition-all">
            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-800 dark:text-blue-300">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wide">{t("contact.north_america")}</h2>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">International Logistics</span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <MapPin className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.location")}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{companyData.internationalHub.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Phone className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.phone")}</h4>
                  <p className="text-[var(--color-secondary)] font-mono font-bold text-lg">{companyData.internationalHub.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Globe className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{t("contact.timezone")}</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{companyData.internationalHub.timezone}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Connections Map */}
        <ContactMap />
      </div>
    </div>
  );
}
