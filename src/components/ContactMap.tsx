"use client";

import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Coordinates for regions
const northAmerica: [number, number] = [-95.0, 40.0];
const europe: [number, number] = [15.0, 50.0];
const middleEast: [number, number] = [45.0, 25.0];
const asiaIndia: [number, number] = [78.9, 20.5];

// Center point for the overview
const centerOverview: [number, number] = [0, 30];

type LocationKey = "overview" | "north_america" | "europe" | "middle_east" | "asia_india";

export default function ContactMap() {
  const [mounted, setMounted] = useState(false);
  const [activeLocation, setActiveLocation] = useState<LocationKey>("overview");

  useEffect(() => {
    setMounted(true);
    
    // Carousel logic
    const locations: LocationKey[] = ["overview", "north_america", "europe", "middle_east", "asia_india"];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % locations.length;
      setActiveLocation(locations[currentIndex]);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="w-full h-[300px] md:h-[450px] mt-12 md:mt-16 bg-[#040f24] rounded-xl animate-pulse"></div>;
  }

  // Determine zoom and center based on active location
  let currentCenter = centerOverview;
  let currentZoom = 1;

  if (activeLocation === "north_america") {
    currentCenter = northAmerica;
    currentZoom = 2.5;
  } else if (activeLocation === "europe") {
    currentCenter = europe;
    currentZoom = 3.5;
  } else if (activeLocation === "middle_east") {
    currentCenter = middleEast;
    currentZoom = 4;
  } else if (activeLocation === "asia_india") {
    currentCenter = asiaIndia;
    currentZoom = 3.5;
  } else {
    currentCenter = centerOverview;
    currentZoom = 1;
  }

  const getRegionName = (loc: LocationKey) => {
    switch (loc) {
      case "north_america": return "USA & North America";
      case "europe": return "Europe";
      case "middle_east": return "Middle East";
      case "asia_india": return "Asia & Pan India";
      default: return "Global Network Overview";
    }
  };

  return (
    <div className="w-full h-[300px] md:h-[450px] mt-12 md:mt-16 mb-0 relative rounded-xl overflow-hidden bg-[#040f24] border border-[#1e3a8a]/30 shadow-2xl">
      
      {/* Background Gradients/Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a1f44] via-[#040f24] to-[#040f24] opacity-80" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#4f83f2 1px, transparent 1px), linear-gradient(90deg, #4f83f2 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* UI Overlay - Top Left */}
      <div className="absolute top-4 left-4 md:top-6 md:left-8 z-10 pointer-events-none">
        <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-widest mb-1 shadow-black drop-shadow-md">Global Supply Chain</h3>
        <p className="text-[10px] md:text-xs text-blue-400 font-mono tracking-widest shadow-black drop-shadow-md">ACTIVE REGIONS</p>
      </div>

      {/* Centered Maritime Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none drop-shadow-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center bg-[#040f24]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-900/50"
        >
          <div className="text-blue-300 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <p className="text-xs text-blue-200 font-mono tracking-[0.2em] uppercase mb-4 shadow-black drop-shadow-lg font-semibold">Logistics Network</p>
          
          <div className="flex items-center gap-4 text-sm font-mono text-white font-bold tracking-wider">
            <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
              {getRegionName(activeLocation)}
            </span>
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
          {[
            { key: "north_america", coord: northAmerica },
            { key: "europe", coord: europe },
            { key: "middle_east", coord: middleEast },
            { key: "asia_india", coord: asiaIndia }
          ].map((loc) => (
            <Marker key={loc.key} coordinates={loc.coord}>
              <g className={`transition-opacity duration-1000 ${activeLocation === loc.key || activeLocation === 'overview' ? 'opacity-100 animate-pulse' : 'opacity-30'}`}>
                <circle r={8} fill="#3b82f6" opacity={0.4} />
                <circle r={3} fill="#60a5fa" style={{ filter: "drop-shadow(0 0 5px #60a5fa)" }} />
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
