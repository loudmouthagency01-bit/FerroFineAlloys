import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Package, Truck, ShieldCheck, Factory } from "lucide-react";
import productsData from "@/data/products.json";

export async function generateStaticParams() {
  const paths: any[] = [];
  productsData.forEach((category) => {
    category.specs.forEach((spec) => {
      paths.push({
        categoryId: category.id,
        productId: spec.id,
      });
    });
  });
  return paths;
}

export default async function ProductDetailPage({ params }: { params: Promise<{ categoryId: string, productId: string }> }) {
  const { categoryId, productId } = await params;

  const category = productsData.find((c) => c.id === categoryId);
  if (!category) return notFound();

  const product = category.specs.find((s) => s.id === productId);
  if (!product) return notFound();

  return (
    <div className="w-full bg-[var(--color-background)] min-h-screen">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#030812]">
        <div className="absolute inset-0 z-0">
          <Image
            src={`/${category.id}.png`}
            alt={category.name}
            fill
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030812] via-[#030812]/80 to-transparent"></div>
          <div 
            className="absolute inset-0 opacity-100 pointer-events-none mix-blend-overlay"
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', 
              backgroundSize: '24px 24px',
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/products" className="inline-flex items-center text-sm font-mono tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Catalog
          </Link>
          
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-slate-400 mb-4">
            <span>Products</span>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/products#${category.id}`} className="hover:text-blue-400 transition-colors">{category.name}</Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide leading-tight max-w-4xl">
            {product.item}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4 inline-block"></span>
                Product Overview
              </h2>
              <div className="prose prose-lg dark:prose-invert prose-slate max-w-none">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  Premium quality <strong>{product.item}</strong> manufactured to precise metallurgical specifications. 
                  As part of our comprehensive <em>{category.name}</em> portfolio, this material is engineered to deliver 
                  exceptional performance, consistency, and reliability across demanding industrial applications.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mt-4">
                  Sourced and processed under strict quality control protocols, our {product.item.split(' ')[0].toLowerCase()} products ensure optimal chemical composition and physical properties to meet global manufacturing standards.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-6 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4 inline-block"></span>
                Technical Specifications
              </h2>
              <div className="bg-slate-50 dark:bg-[#060b17] border border-slate-200 dark:border-slate-800 p-8">
                <ul className="space-y-4 font-mono text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Product Category</span>
                    <span className="text-right">{category.name}</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Material Grade</span>
                    <span className="text-right">Standard / Premium</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Chemical Analysis</span>
                    <span className="text-right text-blue-600 dark:text-blue-400">Available on Request</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Particle Size / Dimensions</span>
                    <span className="text-right">Customizable as per requirement</span>
                  </li>
                </ul>
              </div>
            </section>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            
            {/* CTA Box */}
            <div className="bg-blue-900/10 border border-blue-500/30 p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] uppercase tracking-wide mb-4 relative z-10">Request a Quote</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 relative z-10">
                Contact our sales team for current pricing, bulk availability, and detailed technical data sheets for {product.item}.
              </p>
              <Link 
                href={`/rfq?category=${category.id}&product=${product.id}`} 
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white font-bold uppercase tracking-widest py-4 px-6 hover:bg-blue-700 transition-colors relative z-10 text-sm"
              >
                Inquire Now
              </Link>
            </div>

            {/* Logistics & Quality */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide text-sm mb-1">Packaging</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Available in 1MT Jumbo bags, 250kg steel drums, and custom packaging for safe international transit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide text-sm mb-1">Global Shipping</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">FOB and CIF delivery options worldwide via major sea ports with complete export documentation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide text-sm mb-1">Quality Assurance</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Pre-shipment inspection and comprehensive test certificates provided with every batch.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
