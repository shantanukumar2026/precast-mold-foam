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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className={`${styles.sectionBg} section-padding`} id="downloads">
      <div className="container">
        <div className={styles.doubleColGrid}>
          
          {/* Left Column: Download Center */}
          <div className={styles.downloadCol}>
            <span className={styles.subTitle}>Resource Hub</span>
            <h2 className={styles.mainTitle}>Technical Download Center</h2>
            <p className={styles.desc}>
              Access our library of technical resources, including product catalogs, structural layout guidelines, and standardized CAD templates for municipal infrastructure design.
            </p>

            <div className={styles.downloadList}>
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

          {/* Right Column: Custom Mold Form */}
          <div className={styles.quoteFormBox} id="contact">
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Need a Custom Mold?</h2>
              <p className={styles.formSubtitle}>Let&apos;s Build It Together. Send us your project drawing files.</p>
            </div>

            {formSubmitted ? (
              <div style={{ backgroundColor: "var(--primary-light)", padding: "2rem", borderLeft: "4px solid var(--primary-royal)", color: "var(--primary-royal)", fontWeight: "600" }}>
                Thank you! Your technical request has been sent to our engineering lead. We will reach back within 24 business hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>Full Name</label>
                    <input type="text" className={styles.formInput} required placeholder="John Doe" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>Company Name</label>
                    <input type="text" className={styles.formInput} required placeholder="Enterprise Precast LLC" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>Work Email</label>
                    <input type="email" className={styles.formInput} required placeholder="j.doe@company.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>Phone Number</label>
                    <input type="tel" className={styles.formInput} required placeholder="+1 (555) 019-2834" />
                  </div>
                  <div className={`${styles.formGroup} ${styles.spanFull}`}>
                    <label className={styles.inputLabel}>Project Category</label>
                    <select className={`${styles.formInput} ${styles.formSelect}`} required defaultValue="">
                      <option value="" disabled>Select Product Category</option>
                      <option value="steel-molds">Steel Molds (Box Culverts, U-Drains, Columns)</option>
                      <option value="eps-foam">EPS Foam Solutions (Void Formers, Inserts)</option>
                      <option value="custom">Custom Fabrication (Heavy-Duty builds)</option>
                      <option value="other">Accessories & Fixing Systems</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.spanFull}`}>
                    <label className={styles.inputLabel}>Project Description / Specifications</label>
                    <textarea 
                      className={`${styles.formInput} ${styles.formTextarea}`} 
                      required 
                      placeholder="Please enter dimensions, concrete strength requirements, or target cycle times..."
                    />
                  </div>
                </div>
                
                <button type="submit" className="btn-primary submitBtn">
                  Submit Technical Proposal Request <Send size={14} style={{ marginLeft: "0.5rem" }} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
