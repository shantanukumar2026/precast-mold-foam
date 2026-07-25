"use client";

import React, { useState, useEffect } from "react";
import { Award, Building2, Users, ShieldCheck, Truck, Cpu, ArrowRight, Play, PhoneCall, Download, DraftingCompass } from "lucide-react";
import styles from "./Hero.module.css";

const HERO_IMAGES = [
  "/images/Precast (22).jpeg",
  "/images/Precast (41).jpeg",
  "/images/Precast (48).jpeg",
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className={styles.heroContainer} id="hero">
        {/* Background Slideshow */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={styles.heroBg}
            style={{ backgroundImage: `url('${img}')`, opacity: currentSlide === index ? 1 : 0 }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className={styles.heroOverlay} />

        {/* CAD Engineering Grid */}
        <div className={styles.heroGrid} />

        {/* Corner technical tag */}
        <div className={styles.heroCornerTag}>
          <span>DWG-REF: MOLD-2026-USA</span>
          <span>REV: 04 | SHEET: 1 OF 1</span>
        </div>

        {/* Hero Content */}
        <div className="container" style={{ position: "relative", zIndex: 4 }}>
          <div className={styles.heroContent}>
            <div className={styles.preBadge}>
              <span className={styles.preDot} />
              Steel Molds &amp; EPS Foam Solutions — USA · Canada · Europe
            </div>
            <h1 className={styles.mainTitle}>
              Engineered For <br />
              <span>Precision.</span> Built For <span>Performance.</span>
            </h1>
            <p className={styles.description}>
              Manufacturing high-performance structural steel molds and custom EPS foam components for the precast concrete industry. Trusted by leading infrastructure contractors across North America and Europe.
            </p>

            {/* Engineering spec tags below headline */}
            <div className={styles.specTags}>
              <span className={styles.specTag}>ISO 9001:2015 Certified</span>
              <span className={styles.specTagDivider}>|</span>
              <span className={styles.specTag}>AWS D1.1 Welding Standard</span>
              <span className={styles.specTagDivider}>|</span>
              <span className={styles.specTag}>Q345B Grade Steel</span>
              <span className={styles.specTagDivider}>|</span>
              <span className={styles.specTag}>CNC ±0.2mm Tolerance</span>
            </div>

            <div className={styles.btnGroup}>
              <button className="btn-primary" onClick={() => scrollTo("products")}>
                Explore Products <ArrowRight size={15} />
              </button>
              <button className="btn-secondary" onClick={() => scrollTo("how-it-works")}>
                Our Capabilities <Play size={13} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Quick Action Widgets */}
        <div className={styles.floatingWidgetList}>
          <button className={styles.floatingWidget} onClick={() => scrollTo("downloads")}>
            <PhoneCall size={18} />
            <span>Contact</span>
          </button>
          <button className={styles.floatingWidget} onClick={() => scrollTo("downloads")}>
            <Download size={18} />
            <span>Catalog</span>
          </button>
          <button className={styles.floatingWidget} onClick={() => scrollTo("process")}>
            <DraftingCompass size={18} />
            <span>CAD</span>
          </button>
          <button className={styles.floatingWidget} onClick={() => scrollTo("advantages")}>
            <ShieldCheck size={18} />
            <span>ISO</span>
          </button>
        </div>

        {/* Slideshow Dots */}
        <div className={styles.slideshowDots}>
          {HERO_IMAGES.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { Icon: Award, number: "15+", label: "Years of Engineering Excellence" },
              { Icon: Building2, number: "5,000+", label: "Projects Delivered" },
              { Icon: Users, number: "50+", label: "Certified Skilled Professionals" },
              { Icon: ShieldCheck, number: "100%", label: "ISO Quality Assurance" },
              { Icon: Truck, number: "On-Time", label: "USA · Canada · Europe Delivery" },
              { Icon: Cpu, number: "Custom", label: "CAD/CAM Engineering Support" },
            ].map(({ Icon, number, label }, i) => (
              <div key={i} className={styles.statItem}>
                <Icon size={34} className={styles.statIcon} />
                <div className={styles.statMeta}>
                  <div className={styles.statNumber}>{number}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
