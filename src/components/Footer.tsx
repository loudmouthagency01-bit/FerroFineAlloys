"use client";

import Link from "next/link";
import companyData from "@/data/company.json";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[var(--color-primary-container)] text-white py-16 border-t border-slate-700 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4 font-sans uppercase tracking-widest text-[var(--color-secondary)]">{companyData.name}</h3>
          <p className="text-gray-400 text-sm mb-2 font-mono">{t("footer.cin")} {companyData.cin}</p>
          <p className="text-gray-400 text-sm">{t("footer.incorporated")} {companyData.incorporationDate}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-400">{t("contact.asia_hq")}</h4>
          <p className="text-sm text-gray-300 mb-2 leading-relaxed">{companyData.headquarters.factoryAddress}</p>
          <p className="text-sm text-blue-400 font-mono">{companyData.headquarters.phone}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-400">{t("contact.north_america")}</h4>
          <p className="text-sm text-gray-300 mb-2 leading-relaxed">{companyData.internationalHub.location}</p>
          <p className="text-sm text-blue-400 font-mono">{companyData.internationalHub.phone}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} {companyData.name}. {t("footer.all_rights")}</p>
        <div className="flex gap-8 mt-6 md:mt-0 font-mono font-semibold tracking-wider">
          <Link href="/products" className="hover:text-white transition-colors uppercase">{t("nav.catalog")}</Link>
          <Link href="/rfq" className="hover:text-white transition-colors uppercase">{t("nav.rfq_basket")}</Link>
          <Link href="/contact" className="hover:text-white transition-colors uppercase">{t("nav.contact")}</Link>
        </div>
      </div>
    </footer>
  );
}
