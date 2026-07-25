"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./ProductExplorer.module.css";

const EXPLORER_PRODUCTS = [
  {
    category: "Drainage Systems",
    name: "Standard Box Culvert Mold",
    image: "/images/extracted_photos/final_30_48_mold__model_animation_284_frame1.jpg",
    video: "/images/Mold-images/final 30 48 mold  model animation.284.mp4",
    specs: {
      "Inner Dimensions": "3000mm x 3000mm x 1500mm L",
      "Core Retraction": "Mechanical Shrinkable Corner Core",
      "Steel Grade & Thickness": "Q345B Carbon Steel, 10mm Face Plate",
      "Locking System": "Quick-Action Wedge & Locking Bars",
      "Casting Application": "Storm Water Drainage, Pedestrian Underpasses"
    }
  },
  {
    category: "Utility Systems",
    name: "Precast Manhole Mold Assembly",
    image: "/images/extracted_photos/Mega_Mold_Ring_mold_frame1.jpg",
    video: "/images/Mold-images/Mega Mold Ring mold.mp4",
    specs: {
      "Internal Diameter": "Ø1200mm (Modular Ring Sections)",
      "Mold Operations": "Hinged outer shell with locking keys",
      "Stripping Method": "Internal core lift out with draft taper",
      "Concrete System": "Designed for both Dry Cast and Wet Cast",
      "Casting Application": "Sewer Shafts, Utility Access, Drainage Sumps"
    }
  },
  {
    category: "EPS Void Formers",
    name: "EPS Bridge Void Former Assembly",
    image: "/images/extracted_photos/untitled_52_frame1.jpg",
    video: "/images/Mold-images/untitled.52.mp4",
    specs: {
      "Density Specification": "25kg/m³ - 30kg/m³ High density foam",
      "Attachment Design": "Pre-routed anchor slots for hold-down strap",
      "CNC Accuracy": "+/- 1.0mm tolerance hot-wire precision",
      "Coating Options": "Uncoated or Poly-sheathed non-stick layer",
      "Casting Application": "Void formers for cast-in-place bridge decks"
    }
  },
  {
    category: "Structural Forms",
    name: "Precast Boundary Wall Battery Mold",
    image: "/images/extracted_photos/12_10__30_48_mold_rectangle_5272_frame1.jpg",
    video: "/images/Mold-images/12-10- 30-48 mold rectangle.5272.mp4",
    specs: {
      "Mold Capacity": "4 to 8 cavities simultaneously",
      "Side Panel Action": "Hydraulic cylinder sliding base",
      "Framework Grade": "Heavy H-Beam and I-Beam structural ribs",
      "Gasket Sealing": "High-durability neoprene water-stop joints",
      "Casting Application": "Boundary Wall Panels, Architectural Cladding"
    }
  }
];

export default function ProductExplorer() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 930; // 900px card width + 30px gap
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 930;
    }
  };

  return (
    <section className={`${styles.sectionBg} section-padding`} id="explorer">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <span className={styles.sectionSub}>Product Explorer</span>
            <h2 className={styles.sectionTitle}>High-Capacity Product Explorer</h2>
          </div>
          <div className={styles.headerControls}>
            <button className={styles.sliderArrow} onClick={scrollLeft} aria-label="Scroll left">
              <ArrowLeft size={20} />
            </button>
            <button className={styles.sliderArrow} onClick={scrollRight} aria-label="Scroll right">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div className={styles.sliderTrack} ref={scrollRef}>
          {EXPLORER_PRODUCTS.map((prod, idx) => (
            <div key={idx} className={styles.productItem}>
              {/* Left Column: Video / Image */}
              <div className={styles.imgCol}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={prod.image}
                  className={styles.explorerImg}
                >
                  <source src={prod.video} type="video/mp4" />
                </video>
              </div>

              {/* Right Column: Specs */}
              <div className={styles.metaCol}>
                <div>
                  <span className={styles.productCat}>{prod.category}</span>
                  <h3 className={styles.productName}>{prod.name}</h3>
                  
                  <div className={styles.specsTable}>
                    {Object.entries(prod.specs).map(([lbl, val]) => (
                      <div key={lbl} className={styles.specsRow}>
                        <span className={styles.label}>{lbl}</span>
                        <span className={styles.value}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.bottomArea}>
                  <button
                    className="btn-primary"
                    style={{ padding: "0.75rem 1.5rem", fontSize: "0.75rem" }}
                    onClick={() => { const el = document.getElementById('downloads'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
                  >
                    Get Spec Sheet <ArrowRight size={14} />
                  </button>
                  <button
                    className={styles.explorerLink}
                    onClick={() => { const el = document.getElementById('downloads'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
                  >
                    Quote Mold <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
