"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line, ZoomableGroup } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Coordinates
const ahmedabad: [number, number] = [72.5714, 23.0225];
const regina: [number, number] = [-104.6189, 50.4452];
// Center point between the two for the overview
const centerOverview: [number, number] = [-15, 45];

type LocationKey = "overview" | "ahmedabad" | "regina";

export default function ContactMap() {
  const [mounted, setMounted] = useState(false);
  const [activeLocation, setActiveLocation] = useState<LocationKey>("overview");

  useEffect(() => {
    setMounted(true);
    
    // Carousel logic
    const locations: LocationKey[] = ["overview", "ahmedabad", "regina"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % locations.length;
      setActiveLocation(locations[currentIndex]);
    }, 6000); // Switch every 6 seconds

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[400px] mt-16 bg-[#040f24] rounded-xl animate-pulse"></div>;
  }

  // Determine zoom and center based on active location
  let currentCenter = centerOverview;
  let currentZoom = 1;

  if (activeLocation === "ahmedabad") {
    currentCenter = ahmedabad;
    currentZoom = 3.5;
  } else if (activeLocation === "regina") {
    currentCenter = regina;
    currentZoom = 3.5;
  } else {
    currentCenter = centerOverview;
    currentZoom = 1.2;
  }

  return (
    <div className="w-full h-[450px] mt-16 mb-0 relative rounded-xl overflow-hidden bg-[#040f24] border border-[#1e3a8a]/30 shadow-2xl">
      
      {/* Background Gradients/Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a1f44] via-[#040f24] to-[#040f24] opacity-80" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#4f83f2 1px, transparent 1px), linear-gradient(90deg, #4f83f2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* UI Overlay - Top Left */}
      <div className="absolute top-6 left-8 z-10 pointer-events-none">
        <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-1 shadow-black drop-shadow-md">Global Supply Chain</h3>
        <p className="text-xs text-blue-400 font-mono tracking-widest shadow-black drop-shadow-md">AHMEDABAD ↔ REGINA</p>
      </div>

      {/* Centered Maritime Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none drop-shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center bg-[#040f24]/60 backdrop-blur-sm p-4 rounded-xl border border-blue-900/50"
        >
          <div className="text-blue-300 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <p className="text-xs text-blue-200 font-mono tracking-[0.2em] uppercase mb-4 shadow-black drop-shadow-lg font-semibold">Maritime Logistics Visualizer</p>
          
          <div className="flex items-center gap-4 text-xs font-mono text-white">
            <div className={`flex items-center gap-2 transition-all duration-500 ${activeLocation === 'ahmedabad' ? 'text-blue-300 scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : ''}`}>
              <div className={`w-2 h-2 rounded-full ${activeLocation === 'ahmedabad' ? 'bg-blue-400 animate-pulse' : 'bg-slate-500'}`}></div>
              <span>IN-IXY (Mundra/Ahd)</span>
            </div>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-8 h-full bg-white shadow-[0_0_10px_white]"
                  animate={{ x: [0, 96] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
            </div>
            
            <div className={`flex items-center gap-2 transition-all duration-500 ${activeLocation === 'regina' ? 'text-blue-300 scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]' : ''}`}>
              <div className={`w-2 h-2 rounded-full ${activeLocation === 'regina' ? 'bg-blue-400 animate-pulse' : 'bg-slate-500'}`}></div>
              <span>CA-YQR (Regina)</span>
            </div>
          </div>
        </motion.div>
      </div>

      <ComposableMap 
        projection="geoMercator" 
        projectionConfig={{ scale: 130 }}
        width={800}
        height={400}
        className="w-full h-full object-cover opacity-60"
      >
        <ZoomableGroup 
          center={currentCenter} 
          zoom={currentZoom}
          className="transition-transform duration-[3000ms] ease-in-out"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  strokeWidth={0.5}
                  className="fill-transparent stroke-[#1e3a8a] outline-none"
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "rgba(30, 58, 138, 0.2)" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>



          {/* Markers */}
          <Marker coordinates={ahmedabad}>
            <g className="animate-pulse">
              <circle r={8} fill="#3b82f6" opacity={0.4} />
              <circle r={3} fill="#60a5fa" style={{ filter: "drop-shadow(0 0 5px #60a5fa)" }} />
            </g>
          </Marker>

          <Marker coordinates={regina}>
            <g className="animate-pulse">
              <circle r={8} fill="#3b82f6" opacity={0.4} />
              <circle r={3} fill="#60a5fa" style={{ filter: "drop-shadow(0 0 5px #60a5fa)" }} />
            </g>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}} />
    </div>
  );
}
