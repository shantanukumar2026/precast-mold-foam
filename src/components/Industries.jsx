"use client";

import React from "react";
import { 
  Milestone, 
  Train, 
  DraftingCompass, 
  Map, 
  Building, 
  Building2, 
  Landmark, 
  Factory, 
  ArrowRight 
} from "lucide-react";
import styles from "./Industries.module.css";

const INDUSTRIES = [
  {
    icon: Milestone,
    title: "Infrastructure",
    desc: "Heavy structural forms designed for municipal sewage, stormwater management, and global civil works."
  },
  {
    icon: Train,
    title: "Metro & Rail Transit",
    desc: "Precision molds for track sleepers, curved railway tunnel segments, and viaduct guide beams."
  },
  {
    icon: DraftingCompass,
    title: "Bridges & Highways",
    desc: "Massive formwork systems for girders, pier caps, columns, and large span box segment casting."
  },
  {
    icon: Map,
    title: "Roads & Highways",
    desc: "Scalable U-drain and box culvert forms optimized for fast roadside installation and line water runoff."
  },
  {
    icon: Building2,
    title: "Residential Building",
    desc: "Modular battery molds for sandwich panels, exterior wall slabs, columns, and stair systems."
  },
  {
    icon: Building,
    title: "Commercial Build",
    desc: "Custom molds for parking garage columns, prestressed floor slabs, and large structural beams."
  },
  {
    icon: Landmark,
    title: "Government Works",
    desc: "Certified, military-grade civil molds satisfying strict DOT and federal structural guidelines."
  },
  {
    icon: Factory,
    title: "Precast Plants",
    desc: "End-to-end automated casting machinery, curing chambers, and quick-strip molds for high throughput."
  }
];

export default function Industries() {
  return (
    <section className={`${styles.sectionBg} section-padding`} id="industries">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSub}>Sectors Served</span>
          <h2 className={styles.sectionTitle}>Built For North American &amp; European Infrastructure</h2>
          <p className={styles.headerText}>
            Our structural molds and EPS void formers are trusted by leading engineering contractors across USA, Canada, and Europe.
          </p>
        </div>

        {/* Industries Grid */}
        <div className={styles.industriesGrid}>
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className={styles.industryCard}>
                <div>
                  <Icon className={styles.iconWrapper} size={32} />
                  <h3 className={styles.cardTitle}>{ind.title}</h3>
                  <p className={styles.cardDesc}>{ind.desc}</p>
                </div>
                <button
                  className={styles.industryLink}
                  onClick={() => { const el = document.getElementById('downloads'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
                >
                  View Industry Cases <ArrowRight size={12} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
