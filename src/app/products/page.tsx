"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[var(--color-background)] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-6">
            {t("products.title")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-lg leading-relaxed">
            {t("products.subtitle")}
          </p>
          <div className="h-1 w-20 bg-blue-600 mt-8"></div>
        </div>

        <div className="space-y-24">
          {productsData.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-32">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                
                {/* Category Image & Info */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-300 dark:border-slate-800 bg-slate-900 group mb-6">
                    <Image
                      src={`/${category.id}.png`}
                      alt={category.name}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-[#030812]/40 to-transparent"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase mb-2">Category</span>
                      <h2 className="text-2xl font-bold tracking-wider uppercase text-white drop-shadow-md">{category.name}</h2>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                {/* Product Links Grid */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.specs.map((spec) => (
                    <Link 
                      key={spec.id} 
                      href={`/products/${category.id}/${spec.id}`}
                      className="group flex items-start justify-between p-5 bg-white dark:bg-[#060b17] border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:bg-[#0a1122] transition-all"
                    >
                      <div>
                        <h3 className="text-[15px] font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-snug mb-2 pr-4">
                          {spec.item}
                        </h3>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-widest group-hover:text-blue-500/70 transition-colors">
                          View Details
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white text-slate-400 transition-colors mt-0.5 ml-1">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
