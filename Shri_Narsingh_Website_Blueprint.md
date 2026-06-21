# Comprehensive Website Architecture & UI/UX Blueprint
**Project:** Shri Narsingh Micro Alloys Pvt. Ltd. Corporate Portal
**Document Lead:** Milan Nagar, LJ Institute of Computer Science

---

## 1. Company Information & Extracted Data

**Corporate Identity:**
* **Legal Name:** SHRI NARSINGH MICRO ALLOYS PRIVATE LIMITED
* **CIN:** U28999GJ2021PTC121521
* **Incorporation Date:** 24 March 2021
* **Key Executive:** Anil Gupta (Director)

**Global Operations:**
* **Domestic Hub (India):** Shed No. 84, Akshar Industrial Park, Vatva GIDC, Ahmedabad, Gujarat.
* **International Hub (North America):** Regina, Saskatchewan (SK), Canada.

**Product Portfolio (Technical Specs Gathered):**
* **Ferro Alloys:** Ferro Silicon (70-80%), Silico Manganese (HC/MC), Ferro Manganese (HC/MC/LC), Ferro Chrome (HC/LC), Ferro Titanium, Ferro Molybdenum.
* **Carbon Products:** Carbon Raiser 93%, Graphite Petroleum Coke.
* **Specialty Minerals:** Perlite Ore, Electrolytic Manganese Metal (Flakes).

---

## 2. Target Audience & Core Demographics

* **Audience:** B2B industrial clients—procurement managers, supply chain heads, metallurgists, and foundry engineers.
* **Age & Intent:** 35 to 60+ years old. High-intent users looking for precise chemical compositions, physical sizing, and bulk pricing.
* **Vibe Needed:** Maximum clarity, speed, technical accuracy, and unwavering corporate authority.

---

## 3. UI/UX Aesthetic Direction: "Industrial Minimalism" + "Glassmorphism"

To justify a premium tier (₹1 Lakh+) design, the portal must abandon generic templates and adopt a highly functional, bespoke layout.

* **Color Palette:** Deep Corporate Navy (`#1A365D`), Slate Grey (`#4A5568`) for text, Electric Blue (`#3182CE`) for CTAs, and pure White/Off-White for data tables.
* **Typography:** Geometric Sans-serif (e.g., Inter, Roboto) for dense data readability.
* **The "Retro Acrylic" Element:** Implementation of a translucent, frosted glass effect (`backdrop-blur`) specifically reserved for floating navigation and overlay modals to give a modern, logistics-dashboard feel.

---

## 4. The "Yes" and "No" Design Rules

### ✅ DO THIS (The "Yes" List)
* **YES to a Top-Pinned Navigation Island:** Use a translucent navy acrylic pill-shaped menu floating at the top center of the screen.
* **YES to Solid Data Zones:** Keep technical specification tables and text on high-contrast, solid white or light-grey backgrounds. 
* **YES to High-Density Matrices:** Consolidate multiple product pages into single, interactive, filterable data tables (e.g., viewing HC, MC, and LC Ferro Manganese side-by-side).
* **YES to a Dual-Hub Gateway:** Prominently feature a toggle `[ 🇮🇳 India | 🇨🇦 North America ]` to dynamically switch regional logistics details and contact numbers.
* **YES to Sticky Forms:** Pin the buyer identity form on the right side of the screen while the user scrolls through their RFQ basket on the left.

### ❌ AVOID THIS (The "No" List)
* **NO to Frosted Glass over Data:** Never use the translucent acrylic theme over chemical percentages or reading text—it destroys accessibility for older eyes.
* **NO to Bottom Navigation on Desktop:** Do not place the navigation island at the bottom of a desktop screen; B2B buyers expect top-down site architecture.
* **NO to Generic Contact Forms:** Do not force users to type out their needs in a blank message box.
* **NO to Flashy/Bouncy Animations:** Avoid consumer-style graphics. Animations should be strictly functional (e.g., smooth row expansions).

---

## 5. Strategic Features to Enhance UX

1. **The B2B Multi-Item "RFQ Basket":** Instead of an e-commerce "cart", build a Request For Quote (RFQ) engine where buyers can add "20 Tons of Ferro Silicon (10-50mm)" and "5 Tons of GPC", then submit one unified corporate inquiry.
2. **One-Click Technical Datasheets (TDS):**
   Auto-generate clean, branded PDF datasheets directly from the product matrix rows so engineers can attach them to internal purchase orders.
3. **Smart Sizing & Packaging Visualizers:**
   Implement hover-states over sizing dimensions (e.g., 1-5mm vs. 25-125mm) that display scale vectors or high-res photos of the bulk packaging (Gunny bags vs. Bulk cargo).
4. **Interactive Custom Composition Builder ("Spec-Sizer"):**
   Allow engineers to use sliders to input their target Carbon or Manganese percentages, dynamically filtering the matrix to the correct product grade.

---

## 6. Proposed Tech Stack & Architecture
* **Frontend:** Next.js (React) for hybrid static/dynamic rendering.
* **Styling:** Tailwind CSS + Shadcn/ui for precision micro-interactions.
* **CMS:** Strapi or Sanity.io for easy backend updates to chemical formulas and MOQs by the company staff.
* **Routing:** Secure webhooks routing RFQ submissions directly to procurement desk emails and a lightweight B2B CRM.
