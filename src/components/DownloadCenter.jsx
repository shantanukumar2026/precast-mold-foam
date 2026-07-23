"use client";

import React, { useState } from "react";
import { FileText, Download, Send, ArrowRight } from "lucide-react";
import styles from "./DownloadCenter.module.css";

const DOCUMENTS = [
  {
    title: "2026 Precast Steel Mold Catalog",
    type: "General Catalog",
    size: "PDF, 14.5 MB"
  },
  {
    title: "EPS Void Former Engineering Guidelines",
    type: "Technical Brochure",
    size: "PDF, 8.2 MB"
  },
  {
    title: "Box Culvert Standard CAD Drawings",
    type: "Technical Specifications",
    size: "DWG / PDF, 22.1 MB"
  },
  {
    title: "Fixing Magnets & Accessories Guide",
    type: "Product Brochure",
    size: "PDF, 4.8 MB"
  }
];

export default function DownloadCenter() {
  return (
    <section className={`${styles.sectionBg} section-padding`} id="downloads">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.subTitle}>Resource Hub</span>
          <h2 className={styles.mainTitle}>Technical Download Center</h2>
          <p className={styles.desc}>
            Access our library of technical resources, including product catalogs, structural layout guidelines, and standardized CAD templates for municipal infrastructure design.
          </p>
        </div>

        {/* 2x2 Download Cards Grid */}
        <div className={styles.downloadGrid}>
          {DOCUMENTS.map((doc, idx) => (
            <a key={idx} href="#download-link" className={styles.downloadCard} onClick={(e) => e.preventDefault()}>
              <div className={styles.docInfo}>
                <FileText className={styles.docIcon} size={28} />
                <div className={styles.docMeta}>
                  <span className={styles.docTitle}>{doc.title}</span>
                  <span className={styles.docSize}>{doc.type} &bull; {doc.size}</span>
                </div>
              </div>
              <Download className={styles.downloadBtn} size={20} />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
