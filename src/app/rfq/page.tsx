"use client";

import { useState, useEffect } from "react";
import { Send, Plus, Trash2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import productsData from "@/data/products.json";

export default function RFQPage() {
  const [basket, setBasket] = useState([{ categoryId: "", productId: "", quantity: "", sizing: "" }]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Run only on client side after mount to avoid hydration mismatch
    const searchParams = new URLSearchParams(window.location.search);
    const catId = searchParams.get("category");
    const prodId = searchParams.get("product");
    
    if (catId || prodId) {
      setBasket([{ 
        categoryId: catId || "", 
        productId: prodId || "", 
        quantity: "", 
        sizing: "" 
      }]);
    }
  }, []);

  const serializeBasket = () => {
    return basket.map((item, index) => {
      const cat = productsData.find(c => c.id === item.categoryId)?.name || "Unknown Category";
      const prod = productsData.find(c => c.id === item.categoryId)?.specs.find(s => s.id === item.productId)?.item || "Unknown Product";
      return `[Item ${index + 1}] Category: ${cat} | Product: ${prod} | Qty: ${item.quantity || "N/A"} | Sizing: ${item.sizing || "N/A"}`;
    }).join("\n");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("basket_details", serializeBasket());

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full bg-[var(--color-background)] min-h-screen py-24 flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-4">RFQ Submitted</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Thank you for your inquiry. Our procurement team has received your Request for Quote and will be in touch with you within 24 hours.
          </p>
          <button 
            onClick={() => { setIsSuccess(false); setBasket([{ categoryId: "", productId: "", quantity: "", sizing: "" }]); }}
            className="bg-[var(--color-secondary)] hover:bg-blue-600 text-white font-bold py-3 px-8 transition-colors uppercase tracking-widest text-sm"
          >
            Submit Another RFQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[var(--color-background)] min-h-screen py-12 lg:pt-32">
      <form 
        name="rfq-form" 
        data-netlify="true" 
        onSubmit={handleSubmit}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        <input type="hidden" name="form-name" value="rfq-form" />
        
        {/* Left Column: Basket Configuration */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-2">{t("rfq.title")}</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">{t("rfq.subtitle")}</p>

          <div className="bg-[var(--color-background)] border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-bold text-[var(--color-primary)] border-b border-slate-100 dark:border-slate-800 pb-4 mb-8">{t("rfq.basket_items")}</h2>
            
            <div className="space-y-6">
              {basket.map((item, idx) => {
                const category = productsData.find(c => c.id === item.categoryId);
                
                return (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-slate-50 dark:bg-slate-900/50 p-6 border border-slate-100 dark:border-slate-800">
                    
                    <div className="md:col-span-3">
                      <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Category</label>
                      <select 
                        required
                        value={item.categoryId}
                        onChange={(e) => {
                          const newBasket = [...basket];
                          newBasket[idx].categoryId = e.target.value;
                          newBasket[idx].productId = ""; // Reset product when category changes
                          setBasket(newBasket);
                        }}
                        className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-white dark:bg-[#0a182b] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300"
                      >
                        <option value="">Select Category...</option>
                        {productsData.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-4">
                      <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{t("rfq.product_grade")}</label>
                      <select 
                        required
                        disabled={!item.categoryId}
                        value={item.productId}
                        onChange={(e) => {
                          const newBasket = [...basket];
                          newBasket[idx].productId = e.target.value;
                          setBasket(newBasket);
                        }}
                        className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-white dark:bg-[#0a182b] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300 disabled:opacity-50"
                      >
                        <option value="">{t("rfq.select_product")}</option>
                        {category?.specs.map(spec => (
                          <option key={spec.id} value={spec.id}>{spec.item}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-6 md:col-span-2">
                      <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{t("rfq.quantity")}</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 20 MT"
                        value={item.quantity}
                        onChange={(e) => {
                          const newBasket = [...basket];
                          newBasket[idx].quantity = e.target.value;
                          setBasket(newBasket);
                        }}
                        className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-white dark:bg-[#0a182b] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300" 
                      />
                    </div>
                    
                    <div className="col-span-6 md:col-span-2">
                      <label className="block font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{t("rfq.sizing")}</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 10-50mm" 
                        value={item.sizing}
                        onChange={(e) => {
                          const newBasket = [...basket];
                          newBasket[idx].sizing = e.target.value;
                          setBasket(newBasket);
                        }}
                        className="w-full border border-slate-300 dark:border-slate-700 p-3 text-sm bg-white dark:bg-[#0a182b] focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] text-slate-700 dark:text-slate-300" 
                      />
                    </div>

                    <div className="col-span-12 md:col-span-1 flex justify-end">
                      <button 
                        type="button"
                        onClick={() => {
                          if (basket.length === 1) return;
                          const newBasket = [...basket];
                          newBasket.splice(idx, 1);
                          setBasket(newBasket);
                        }}
                        className={`p-3 transition-colors border border-transparent ${basket.length === 1 ? 'text-slate-300 dark:text-slate-700 cursor-not-allowed' : 'text-red-400 hover:bg-red-50 hover:text-red-600 hover:border-red-200 dark:hover:bg-red-900/20'}`}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              type="button"
              onClick={() => setBasket([...basket, { categoryId: "", productId: "", quantity: "", sizing: "" }])}
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
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.company_name")}</label>
                <input required name="company_name" type="text" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.contact_person")}</label>
                  <input required name="contact_person" type="text" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.email_address")}</label>
                <input required name="email" type="email" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.contact_number")}</label>
                <input required name="phone" type="tel" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-blue-300 mb-2">{t("rfq.destination_port")}</label>
                <input required name="destination" type="text" className="w-full bg-slate-50 dark:bg-[#0a182b] border border-slate-300 dark:border-blue-800/50 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-[var(--color-secondary)] dark:focus:border-blue-400 transition-colors" />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 bg-[var(--color-secondary)] hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-4 px-6 transition-colors flex items-center justify-center gap-3 group disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : t("rfq.submit_rfq")} 
                {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
