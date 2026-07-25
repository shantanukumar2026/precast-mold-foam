"use client";

import React, { useState } from "react";
import { X, ZoomIn, Eye } from "lucide-react";
import styles from "./FacilityGallery.module.css";

const GALLERY_DATA = [
  {
    image: "/images/Precast (19).jpeg",
    category: "CNC Machining",
    title: "10kW Fiber Laser Cutting Bed",
    description: "Highly automated high-power sheet processing. Cuts structural shapes directly from CAD DXF vectors, securing a perfect fit for multi-segment locking plates.",
    specs: {
      "Laser Power": "10,000 Watts Fiber",
      "Linear Tolerance": "+/- 0.05 mm",
      "Cutting Limits": "Up to 25mm Carbon Steel"
    }
  },
  {
    image: "/images/Precast (22).jpeg",
    category: "Welding Systems",
    title: "Heavy Structural Welding Bay",
    description: "Certified welding station utilizing dual-pass MIG and submerged arc welding processes. Every seam undergoes non-destructive ultrasonic testing.",
    specs: {
      "Process Standard": "AWS D1.1 Structural Steel",
      "Equipment Setup": "Lincoln Electric MIG stations",
      "Seam Penetration": "100% Full-Penetration welds"
    }
  },
  {
    image: "/images/Precast (41).jpeg",
    category: "Assembly Deck",
    title: "Main Mold Assembly & Alignment Platform",
    description: "Precision assembly platform where side panels, hinges, locking wedges, and hydraulic cylinders are integrated and validated under horizontal level gauges.",
    specs: {
      "Platform Area": "12,000 Sq. Ft.",
      "Overhead Cranes": "2x 20-Ton Demag Cranes",
      "Levelness Tolerance": "0.5mm per 10 Meters"
    }
  },
  {
    image: "/images/Precast (48).jpeg",
    category: "Quality Assurance",
    title: "On-Site casting trial deck",
    description: "Every mold undergoes mechanical load testing and trial casting under hydrostatic concrete pressure to assure seal compression and quick release function.",
    specs: {
      "Casting Pressure": "Tested up to 200 kN/m²",
      "Vibrator Rails": "Electric High-Freq channels",
      "Stripping Speed": "Validated under 10 minutes"
    }
  },
  {
    image: "/images/Precast (15).jpeg",
    category: "EPS Hotwire",
    title: "4-Axis CNC EPS Hotwire Cutters",
    description: "High-precision computer controlled thermal cutting systems. Translates detailed CAD blockout designs into rigid EPS foam void formers.",
    specs: {
      "Cutting Wire": "Titanium Alloy 0.25mm wire",
      "Forming Envelope": "4000mm x 1200mm x 1200mm",
      "CNC Accuracy": "+/- 1.0mm per block"
    }
  },
  {
    image: "/images/Precast (54).jpeg",
    category: "Dispatch Yard",
    title: "Finished Storage & Rustproofing Yard",
    description: "Final dispatch yard where finished molds receive double coatings of rust preventative primers and marine grade protective enamels prior to flatbed dispatch.",
    specs: {
      "Coating System": "Zinc-Rich Epoxy Primer & Enamel",
      "Dispatch Capacity": "8-10 major mold sets daily",
      "Logistics Hook": "Direct interstate highway access"
    }
  }
];

export default function FacilityGallery() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className={`${styles.sectionBg} section-padding`} id="facility">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <span className={styles.sectionSub}>Facility Operations</span>
            <h2 className={styles.sectionTitle}>Inside Our Manufacturing Plant</h2>
          </div>
          <p className={styles.headerText}>
            Operating a world-class fabrication yard equipped with modern CNC cutting, certified welding, and heavy casting test beds.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {GALLERY_DATA.map((item, idx) => {
            // Apply diagonal crop to first and last items for a premium magazine feel
            const isCrop = idx === 0 || idx === GALLERY_DATA.length - 1;
            return (
              <div 
                key={idx} 
                className={`${styles.galleryItem} ${isCrop ? styles.cropDiagonal : ""}`}
                onClick={() => setActiveItem(item)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.galleryImg}
                />
                <div className={styles.overlay}>
                  <Eye size={20} style={{ color: "var(--neutral-white)", marginBottom: "0.5rem" }} />
                  <span className={styles.imgCat}>{item.category}</span>
                  <h3 className={styles.imgTitle}>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {activeItem && (
          <div className={styles.lightbox} onClick={() => setActiveItem(null)}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button className={styles.closeBtn} onClick={() => setActiveItem(null)}>
                <X size={18} /> Close
              </button>

              {/* Left Column: Image */}
              <div className={styles.lightboxImgCol}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={activeItem.image} 
                  alt={activeItem.title} 
                  className={styles.lightboxImg}
                />
              </div>

              {/* Right Column: Information */}
              <div className={styles.lightboxMetaCol}>
                <div>
                  <span className={styles.lightboxCat}>{activeItem.category}</span>
                  <h3 className={styles.lightboxTitle}>{activeItem.title}</h3>
                  <p className={styles.lightboxDesc}>{activeItem.description}</p>
                </div>

                {/* Specs Table */}
                <ul className={styles.lightboxSpecs}>
                  {Object.entries(activeItem.specs).map(([lbl, val]) => (
                    <li key={lbl}>
                      <span className={styles.specLabel}>{lbl}</span>
                      <span className={styles.specValue}>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
