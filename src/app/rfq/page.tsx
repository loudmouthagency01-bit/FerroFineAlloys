"use client";

import { useState } from "react";
import { Send, Plus, Trash2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RFQPage() {
  const [basket, setBasket] = useState([{ product: "", quantity: "", sizing: "" }]);
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[var(--color-background)] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Basket Configuration */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-2">{t("rfq.title")}</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">{t("rfq.subtitle")}</p>

          <div className="bg-[var(--color-background)] border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-bold text-[var(--color-primary)] border-b border-slate-100 dark:border-slate-800 pb-4 mb-8">{t("rfq.basket_items")}</h2>
            
            <div className="space-y-6">
              {basket.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end bg-slate-50 dark:bg-slate-900 p-6 border border-slate-100 dark:border-slate-800">
                  <div className="md:col-span-5">
                    <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">{t("rfq.product_grade")}</label>
                    <select className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-[var(--color-background)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300">
                      <option>{t("rfq.select_product")}</option>
                      <option>Ferro Silicon 75-80%</option>
                      <option>HC Silico Manganese 60/14</option>
                      <option>High Carbon Ferro Chrome</option>
                      <option>Graphite Petroleum Coke</option>
                      <option>{t("rfq.other_specify")}</option>
                    </select>
                  </div>
                  <div className="md:col-span-3">
                    <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">{t("rfq.quantity")}</label>
                    <input type="number" placeholder={t("rfq.placeholder_qty")} className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-[var(--color-background)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300" />
                  </div>
                  <div className="md:col-span-3">
                    <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">{t("rfq.sizing")}</label>
                    <input type="text" placeholder={t("rfq.placeholder_size")} className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-[var(--color-background)] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300" />
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <button 
                      onClick={() => {
                        const newBasket = [...basket];
                        newBasket.splice(idx, 1);
                        setBasket(newBasket);
                      }}
                      className="p-3 text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors border border-transparent hover:border-red-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setBasket([...basket, { product: "", quantity: "", sizing: "" }])}
              className="mt-8 flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] uppercase tracking-widest hover:text-[var(--color-primary)] transition-colors"
            >
              <Plus className="w-4 h-4" /> {t("rfq.add_product")}
            </button>
          </div>
        </div>

        {/* Right Column: Buyer Identity Form (Sticky) */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white dark:bg-[var(--color-primary-container)] text-[var(--color-primary)] dark:text-white p-8 shadow-xl border border-slate-200 dark:border-blue-900/50">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-[var(--color-secondary)] dark:text-blue-100 border-b border-slate-200 dark:border-blue-800 pb-4">{t("rfq.buyer_identity")}</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.company_name")}</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.contact_person")}</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.email_address")}</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.contact_number")}</label>
                <input type="tel" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.destination_port")}</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <button className="w-full mt-8 bg-[var(--color-secondary)] hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-4 px-6 transition-colors flex items-center justify-center gap-3 group">
                {t("rfq.submit_rfq")} <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
