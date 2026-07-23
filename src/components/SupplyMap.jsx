"use client";

import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { USFlag, CAFlag, EUFlag } from "./FlagIcons";
import styles from "./SupplyMap.module.css";

const SUPPLY_REGIONS = [
  {
    id: "usa",
    name: "United States",
    hub: "Dallas, TX — HQ & Manufacturing",
    flag: <USFlag size={18} />,
    details: "Primary manufacturing center, steel mold fabrication yard, and distribution hub supplying precast concrete plants across the continental USA.",
    stats: [
      { label: "Production Area", value: "120,000 sq ft" },
      { label: "Active Clients", value: "180+ Plants" },
      { label: "On-Time Rate", value: "99.2%" },
    ],
    x: 20,
    y: 38,
  },
  {
    id: "canada",
    name: "Canada",
    hub: "Toronto, ON — Regional Hub",
    flag: <CAFlag size={18} />,
    details: "Sales and technical support division serving Canadian precast concrete manufacturers. Rapid cross-border logistics with USA production facility.",
    stats: [
      { label: "Provinces Served", value: "All 10" },
      { label: "Lead Time", value: "2–3 Weeks" },
      { label: "Support Hours", value: "EST Business Days" },
    ],
    x: 22,
    y: 26,
  },
  {
    id: "europe",
    name: "Europe",
    hub: "Hamburg, Germany — Engineering Office",
    flag: <EUFlag size={18} />,
    details: "Engineering head office and European logistics hub serving precast contractors from Western to Central Europe. FEA simulation division based here.",
    stats: [
      { label: "Countries Served", value: "18 EU Nations" },
      { label: "FEA Engineers", value: "12 Specialists" },
      { label: "Export Standard", value: "CE Certified" },
    ],
    x: 49,
    y: 28,
  },
];

export default function SupplyMap() {
  const [activeRegion, setActiveRegion] = useState("usa");

  const active = SUPPLY_REGIONS.find((r) => r.id === activeRegion);

  return (
    <section className={`${styles.sectionBg} blueprint-bg section-padding`} id="supply-map">
      <div className="container">

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSub}>Service Territories</span>
          <h2 className={styles.sectionTitle}>Serving USA · Canada · Europe</h2>
          <p className={styles.headerText}>
            Our industrial molds and EPS foam products are engineered and delivered to precast concrete facilities across North America and Europe.
          </p>
        </div>

        {/* Map Layout */}
        <div className={styles.mapLayout}>

          {/* Left: SVG Map */}
          <div className={styles.mapContainer}>
            <svg
              viewBox="0 0 1000 500"
              className={styles.svgMap}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              {/* Blueprint grid lines */}
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500"
                  stroke="rgba(33,150,243,0.06)" strokeWidth="1" strokeDasharray="4,4" />
              ))}
              {[100, 200, 300, 400].map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="1000" y2={y}
                  stroke="rgba(33,150,243,0.06)" strokeWidth="1" strokeDasharray="4,4" />
              ))}

              {/* North America */}
              <path
                d="M 100 100 L 140 70 L 200 60 L 280 80 L 310 130 L 320 180 L 290 200 L 310 240 L 330 300 L 310 390 L 290 360 L 260 290 L 230 270 L 200 250 L 160 280 L 120 260 L 100 210 Z"
                fill={activeRegion === "usa" || activeRegion === "canada" ? "rgba(21,101,192,0.15)" : "rgba(255,255,255,0.02)"}
                stroke={activeRegion === "usa" || activeRegion === "canada" ? "rgba(33,150,243,0.5)" : "rgba(255,255,255,0.08)"}
                strokeWidth="1.5"
                style={{ transition: "all 0.4s ease", cursor: "pointer" }}
                onMouseEnter={() => setActiveRegion("usa")}
              />

              {/* Europe */}
              <path
                d="M 450 90 L 500 70 L 560 80 L 620 100 L 650 130 L 640 160 L 600 180 L 580 220 L 540 210 L 510 180 L 490 140 L 460 130 Z"
                fill={activeRegion === "europe" ? "rgba(21,101,192,0.15)" : "rgba(255,255,255,0.02)"}
                stroke={activeRegion === "europe" ? "rgba(33,150,243,0.5)" : "rgba(255,255,255,0.08)"}
                strokeWidth="1.5"
                style={{ transition: "all 0.4s ease", cursor: "pointer" }}
                onMouseEnter={() => setActiveRegion("europe")}
              />
            </svg>

            {/* Hotspots */}
            {SUPPLY_REGIONS.map((region) => (
              <div
                key={region.id}
                className={`${styles.hotspot} ${activeRegion === region.id ? styles.activeHotspot : ""}`}
                style={{ top: `${region.y}%`, left: `${region.x}%` }}
                onMouseEnter={() => setActiveRegion(region.id)}
              >
                <div className="pulse-dot" />
                <div className={styles.hotspotLabel}>
                  <span>{region.flag}</span>
                  <span>{region.name}</span>
                </div>
              </div>
            ))}

            {/* Service territory label */}
            <div className={styles.mapLabel}>
              <MapPin size={12} />
              Active Service Territories: USA · Canada · Europe
            </div>
          </div>

          {/* Right: Region Cards */}
          <div className={styles.regionsPanel}>
            {/* Tab Selector */}
            <div className={styles.regionTabs}>
              {SUPPLY_REGIONS.map((region) => (
                <button
                  key={region.id}
                  className={`${styles.regionTab} ${activeRegion === region.id ? styles.activeTab : ""}`}
                  onClick={() => setActiveRegion(region.id)}
                >
                  <span>{region.flag}</span> {region.name}
                </button>
              ))}
            </div>

            {/* Detail Card */}
            {active && (
              <div className={styles.detailCard}>
                <div className={styles.detailHeader}>
                  <div className={styles.regionFlagLarge}>{active.flag}</div>
                  <div>
                    <div className={styles.regionName}>{active.name}</div>
                    <div className={styles.hubCity}>{active.hub}</div>
                  </div>
                </div>
                <p className={styles.regionDetails}>{active.details}</p>
                <div className={styles.statGrid}>
                  {active.stats.map((s) => (
                    <div key={s.label} className={styles.statItem}>
                      <div className={styles.statVal}>{s.value}</div>
                      <div className={styles.statLbl}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Strip */}
            <div className={styles.ctaStrip}>
              <div className={styles.ctaText}>Serving industrial precast clients across all three territories.</div>
              <button className={styles.ctaBtn} onClick={() => {
                const el = document.getElementById("downloads");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}>
                Get a Regional Quote <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
