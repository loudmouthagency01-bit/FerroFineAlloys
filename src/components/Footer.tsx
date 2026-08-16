"use client";

import Link from "next/link";
import Image from "next/image";
import companyData from "@/data/company.json";
import productsData from "@/data/products.json";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#030812] text-white py-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#030812] via-transparent to-[#030812]/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* Company Info */}
        <div className="flex flex-col items-start md:col-span-12 lg:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Ferro Fine Alloys Logo" width={48} height={48} className="w-auto h-8 sm:h-10 object-contain brightness-0 invert" />
            <Image src="/CompNameWithoutLogo.png" alt="Ferro Fine Alloys Text" width={160} height={48} className="w-auto h-5 sm:h-6 object-contain brightness-0 invert" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">Pioneers in Powder Metallurgy and industrial metals, supplying premium quality alloys globally since 2008.</p>
          <div className="space-y-4 w-full max-w-[280px]">
            <div className="flex justify-between items-center border-b border-slate-800/60 pb-3">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">GSTIN</span>
              <span className="text-gray-300 text-sm font-mono">{companyData.gstin}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-800/60 pb-3">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">PAN</span>
              <span className="text-gray-300 text-sm font-mono">{companyData.pan}</span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Established</span>
              <span className="text-gray-300 text-sm font-mono">{companyData.established}</span>
            </div>
          </div>
        </div>
        
        {/* Products List */}
        <div className="md:col-span-6 lg:col-span-5">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-300">Products</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {productsData.map((product) => (
              <li key={product.id}>
                <Link href={`/products#${product.id}`} className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-start group">
                  <span className="text-blue-500/50 mr-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                  <span className="line-clamp-2 leading-tight group-hover:translate-x-1 transition-transform">{product.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Office */}
        <div className="md:col-span-6 lg:col-span-3">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-300">Corporate Office</h4>
          <ul className="space-y-6">
            <li className="flex items-start group">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-500/20 transition-colors mt-0.5">
                <MapPin className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed pr-2">{companyData.headquarters.registeredAddress}</p>
            </li>
            <li className="flex items-center group">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-sm text-gray-400 font-mono tracking-wide">{companyData.headquarters.phone}</p>
            </li>
            <li className="flex items-center group">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <a href={`mailto:${companyData.headquarters.email}`} className="text-sm text-gray-400 font-mono tracking-wide hover:text-blue-400 transition-colors break-all">
                {companyData.headquarters.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {companyData.name}. {t("footer.all_rights")}</p>
          <span className="hidden sm:inline text-gray-700">|</span>
          <p>
            Developed by <a href="https://crestonee.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors font-semibold tracking-wide">Crestonee</a>
          </p>
        </div>
        <div className="flex gap-8 mt-2 md:mt-0 font-mono font-semibold tracking-wider">
          <Link href="/products" className="hover:text-white transition-colors uppercase">{t("nav.catalog")}</Link>
          <Link href="/rfq" className="hover:text-white transition-colors uppercase">{t("nav.rfq_basket")}</Link>
          <Link href="/contact" className="hover:text-white transition-colors uppercase">{t("nav.contact")}</Link>
        </div>
      </div>
    </footer>
  );
}
