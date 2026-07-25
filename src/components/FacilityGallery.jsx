"use client";

import React, { useState } from "react";
import { X, ZoomIn, Eye, Play } from "lucide-react";
import styles from "./FacilityGallery.module.css";

const GALLERY_DATA = [
  {
    image: "/images/extracted_photos/movement_section_view_73_frame1.jpg",
    video: "/images/Mold-images/movement section view.73.mp4",
    category: "Mechanism View",
    title: "Dynamic Cross-Section Core Withdrawal",
    description: "Highly automated mechanical inner core collapsing system. Works synchronously to allow rapid demolding without damaging concrete wall faces.",
    specs: {
      "Stripping Action": "Internal Collapsible Core",
      "Linear Tolerance": "+/- 0.05 mm",
      "Operation Speed": "< 30 Seconds Withdrawal"
    }
  },
  {
    image: "/images/extracted_photos/trnch_mold_animation_7_frame1.jpg",
    video: "/images/Mold-images/trnch mold animation.7.mp4",
    category: "Trench System",
    title: "Automated Trench Mold Assembly",
    description: "Modular trench mold system with swing-open side panels and heavy structural locking pins designed for high-cycle daily casting.",
    specs: {
      "Process Standard": "AWS D1.1 Structural Steel",
      "Locking Mechanism": "Heavy Mechanical Wedge Clamps",
      "Seam Penetration": "100% Full-Penetration welds"
    }
  },
  {
    image: "/images/extracted_photos/12_10__30_48_mold_rectangle_5277_frame1.jpg",
    video: "/images/Mold-images/12-10- 30-48 mold rectangle.5277.mp4",
    category: "Chamber Assembly",
    title: "Utility Chamber Structural Framework",
    description: "Precision assembly platform where side panels, hinges, locking wedges, and core mechanisms are validated for structural alignment.",
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Framework": "Heavy Ribbed Stiffeners",
      "Levelness Tolerance": "0.5mm per 10 Meters"
    }
  },
  {
    image: "/images/extracted_photos/ring_mold_animation_5276_frame1.jpg",
    video: "/images/Mold-images/ring mold animation.5276.mp4",
    category: "Manhole Ring",
    title: "Circular Ring Mold Expansion & Lock",
    description: "Multi-segment circular ring mold with clamshell outer jackets and collapsible inner mandrel undergoing mechanical movement testing.",
    specs: {
      "Casting Pressure": "Tested up to 200 kN/m²",
      "Vibrator Rails": "Electric High-Freq channels",
      "Stripping Speed": "Validated under 10 minutes"
    }
  },
  {
    image: "/images/extracted_photos/untitled_28_frame1.jpg",
    video: "/images/Mold-images/untitled.28.mp4",
    category: "Precision Core",
    title: "3D Mold Kinematic Motion Test",
    description: "Full CAD computer simulation and real-world kinematic verification of mold core collapse and expansion clearance.",
    specs: {
      "Simulation Tool": "3D CAD Kinematic Motion",
      "Forming Envelope": "4000mm x 1200mm x 1200mm",
      "CNC Accuracy": "+/- 0.2mm per block"
    }
  },
  {
    image: "/images/extracted_photos/2_feet_mold_55_frame1.jpg",
    video: "/images/Mold-images/2 feet mold.55.mp4",
    category: "Modular Systems",
    title: "2-Feet Modular Box Mold Animation",
    description: "Compact modular steel mold design configured for quick assembly, rapid turnover, and easy highway transport.",
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
            <span className={styles.sectionSub}>Facility Operations &amp; Mechanics</span>
            <h2 className={styles.sectionTitle}>3D Mold Motion &amp; Engineering Gallery</h2>
          </div>
          <p className={styles.headerText}>
            Explore interactive 3D motion models and real mechanism animations of our precast steel molds and core withdrawal systems.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {GALLERY_DATA.map((item, idx) => {
            const isCrop = idx === 0 || idx === GALLERY_DATA.length - 1;
            return (
              <div 
                key={idx} 
                className={`${styles.galleryItem} ${isCrop ? styles.cropDiagonal : ""}`}
                onClick={() => setActiveItem(item)}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={item.image}
                  className={styles.galleryImg}
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className={styles.overlay}>
                  <Play size={22} style={{ color: "var(--neutral-white)", marginBottom: "0.5rem" }} fill="currentColor" />
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

              {/* Left Column: Video */}
              <div className={styles.lightboxImgCol}>
                <video 
                  autoPlay
                  loop
                  muted
                  controls
                  poster={activeItem.image} 
                  className={styles.lightboxImg}
                >
                  <source src={activeItem.video} type="video/mp4" />
                </video>
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
