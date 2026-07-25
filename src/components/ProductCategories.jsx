"use client";

import React from "react";
import { Layers, Box, Cpu, DraftingCompass, Settings, ArrowRight } from "lucide-react";
import styles from "./ProductCategories.module.css";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function ProductCategories() {
  return (
    <section className={`${styles.sectionBg} section-padding`} id="categories">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <span className={styles.sectionSub}>Product Capabilities</span>
            <h2 className={styles.sectionTitle}>Comprehensive Precast Solutions</h2>
          </div>
          <p className={styles.headerText}>
            Delivering thousands of precision industrial products built to the highest tolerances for the global concrete casting market — USA, Canada, and Europe.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {/* Card 1: Steel Molds — Span 2 asymmetric */}
          <div className={`${styles.categoryCard} ${styles.spanTwo}`}>
            <div className={styles.spanTwoLeft}>
              <div>
                <Layers className={styles.cardIcon} size={38} />
                <h3 className={styles.cardTitle}>Steel Molds</h3>
                <p className={styles.cardDesc}>
                  Heavy-duty structural steel molds engineered to withstand vibration, thermal cycling, and high hydrostatic pressure across thousands of repeat casting cycles.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Box Culverts &amp; U-Drain Systems</li>
                  <li>Manholes, Shafts &amp; Chamber Systems</li>
                  <li>Structural Columns, Beams &amp; Wall Panels</li>
                </ul>
              </div>
              <button className={styles.cardLink} onClick={() => scrollTo("products")}>
                Explore Molds <ArrowRight size={13} />
              </button>
            </div>
            <div className={styles.spanTwoRight}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/extracted_photos/Mega_Mold_Trench_Red_frame1.jpg"
                className={styles.spanTwoImg}
              >
                <source src="/images/Mold-images/Mega Mold Trench Red.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.categoryCard}>
            <div>
              <Box className={styles.cardIcon} size={38} />
              <h3 className={styles.cardTitle}>EPS Foam Solutions</h3>
              <p className={styles.cardDesc}>Lightweight, high-compressive EPS inserts and custom blockouts engineered for complex concrete void configurations.</p>
              <ul className={styles.cardFeatures}>
                <li>Void Formers &amp; Blockouts</li>
                <li>Architectural Profiles</li>
                <li>Custom Industrial Shapes</li>
              </ul>
            </div>
            <button className={styles.cardLink} onClick={() => scrollTo("products")}>
              Explore Foam <ArrowRight size={13} />
            </button>
            <Box className={styles.cardBgGraphic} size={140} />
          </div>

          {/* Card 3 */}
          <div className={styles.categoryCard}>
            <div>
              <Cpu className={styles.cardIcon} size={38} />
              <h3 className={styles.cardTitle}>Custom Fabrication</h3>
              <p className={styles.cardDesc}>Bespoke mold engineering from customer drawing blueprints to structural requirements — with FEA validation before manufacture.</p>
              <ul className={styles.cardFeatures}>
                <li>Custom Locking Mechanisms</li>
                <li>Self-Curing Steam Jackets</li>
                <li>Pneumatic &amp; Hydraulic Setups</li>
              </ul>
            </div>
            <button className={styles.cardLink} onClick={() => scrollTo("process")}>
              View Capabilities <ArrowRight size={13} />
            </button>
            <Cpu className={styles.cardBgGraphic} size={140} />
          </div>

          {/* Card 4 */}
          <div className={styles.categoryCard}>
            <div>
              <Settings className={styles.cardIcon} size={38} />
              <h3 className={styles.cardTitle}>Production Accessories</h3>
              <p className={styles.cardDesc}>Magnetic fixing magnets, rubber chamfer strips, and formwork locking systems to maximise plant floor productivity.</p>
              <ul className={styles.cardFeatures}>
                <li>Fixing Magnets &amp; Shuttering</li>
                <li>Steel &amp; Rubber Chamfers</li>
                <li>Mold Clamps &amp; Locking Keys</li>
              </ul>
            </div>
            <button className={styles.cardLink} onClick={() => scrollTo("explorer")}>
              Explore Accessories <ArrowRight size={13} />
            </button>
            <Settings className={styles.cardBgGraphic} size={140} />
          </div>

          {/* Card 5 */}
          <div className={styles.categoryCard}>
            <div>
              <DraftingCompass className={styles.cardIcon} size={38} />
              <h3 className={styles.cardTitle}>Engineering Services</h3>
              <p className={styles.cardDesc}>Full technical validation including structural FEA simulation, CAD detailing, trial casting, and on-site commissioning support.</p>
              <ul className={styles.cardFeatures}>
                <li>CAD &amp; 3D Solid Modeling</li>
                <li>FEA Stress Simulations</li>
                <li>On-Site Cast Trials &amp; Commissioning</li>
              </ul>
            </div>
            <button className={styles.cardLink} onClick={() => scrollTo("process")}>
              Learn More <ArrowRight size={13} />
            </button>
            <DraftingCompass className={styles.cardBgGraphic} size={140} />
          </div>
        </div>
      </div>
    </section>
  );
}
