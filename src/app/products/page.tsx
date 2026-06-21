"use client";

import productsData from "@/data/products.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[var(--color-background)] min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-4">{t("products.title")}</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed">
          {t("products.subtitle")}
        </p>

        <div className="space-y-16">
          {productsData.map((product) => (
            <div key={product.id} className="border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="bg-[var(--color-primary-container)] text-white px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-wider uppercase text-blue-100">{product.name}</h2>
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-900/50 text-[10px] uppercase tracking-widest font-mono text-blue-200 border border-blue-700/50">
                    {product.category}
                  </span>
                </div>
                {product.description && (
                  <p className="text-sm text-gray-300 mt-4 md:mt-0 max-w-xl text-left md:text-right leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 px-4 py-2 text-[10px] uppercase tracking-widest text-slate-500 flex items-center gap-2 md:hidden border-b border-slate-200 dark:border-slate-800">
                <span className="animate-pulse">←</span> Swipe to view specs <span className="animate-pulse">→</span>
              </div>
              <div className="overflow-x-auto relative">
                <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="px-8 py-5 font-bold sticky left-0 z-20 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Grade / Type</th>
                      {Array.from(new Set(product.specs.flatMap(s => Object.keys(s).filter(k => k !== 'grade')))).map(key => (
                        <th key={key} className="px-6 py-5 font-semibold text-blue-800 dark:text-blue-400">{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {product.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-colors group">
                        <td className="px-8 py-5 font-bold text-[var(--color-primary)] sticky left-0 z-10 bg-slate-100 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-800 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] group-hover:bg-blue-50/80 dark:group-hover:bg-blue-900/80 transition-colors">{spec.grade}</td>
                        {Array.from(new Set(product.specs.flatMap(s => Object.keys(s).filter(k => k !== 'grade')))).map(key => (
                          <td key={key} className="px-6 py-5 font-mono text-xs text-slate-700 dark:text-slate-300 whitespace-nowrap">
                            {(spec as any)[key] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
