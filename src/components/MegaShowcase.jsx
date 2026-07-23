"use client";

import React, { useState } from "react";
import { ChevronRight, ArrowRight, DraftingCompass, FileText, CheckCircle, Layers } from "lucide-react";
import { PRODUCT_CATALOG, CATEGORY_GROUPS } from "@/data/ProductData";
import styles from "./MegaShowcase.module.css";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

// Group products into display categories
const DISPLAY_CATS = [
  {
    id: "drainage",
    label: "Drainage & Utility Molds",
    products: PRODUCT_CATALOG.filter(p => p.subcategory === "drainage"),
  },
  {
    id: "utility",
    label: "Chamber & Manhole Molds",
    products: PRODUCT_CATALOG.filter(p => p.subcategory === "utility"),
  },
  {
    id: "structural",
    label: "Structural & Panel Molds",
    products: PRODUCT_CATALOG.filter(p => p.subcategory === "structural"),
  },
  {
    id: "eps",
    label: "EPS Foam Solutions",
    products: PRODUCT_CATALOG.filter(p => p.category === "eps-foam"),
  },
];

export default function MegaShowcase() {
  const [activeCatIdx, setActiveCatIdx] = useState(0);
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const [showCadModal, setShowCadModal] = useState(false);

  const activeCategory = DISPLAY_CATS[activeCatIdx];
  const activeProduct = activeCategory.products[activeProductIdx] || activeCategory.products[0];

  const handleCategoryChange = (idx) => {
    setActiveCatIdx(idx);
    setActiveProductIdx(0);
  };

  return (
    <section className={`${styles.sectionBg} section-padding`} id="products">
      <div className="container">

        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSub}>Industrial Catalog</span>
          <h2 className={styles.sectionTitle}>Technical Product Showcase</h2>
          <p className={styles.headerSubtext}>
            10 product lines based on engineering drawings — all specified to AWS D1.1, Q345B steel grade, ISO 9001:2015.
          </p>
        </div>

        {/* Browser Panel */}
        <div className={styles.browserPanel}>

          {/* ─── Left: Category Nav ─── */}
          <div className={styles.leftCol}>
            <div className={styles.leftLabel}>Product Categories</div>
            {DISPLAY_CATS.map((cat, idx) => (
              <button
                key={cat.id}
                className={`${styles.categoryBtn} ${activeCatIdx === idx ? styles.activeCategoryBtn : ""}`}
                onClick={() => handleCategoryChange(idx)}
              >
                <div className={styles.catBtnInner}>
                  <Layers size={14} className={styles.catIcon} />
                  <span>{cat.label}</span>
                </div>
                <div className={styles.catCount}>{cat.products.length}</div>
              </button>
            ))}
          </div>

          {/* ─── Middle: Product List ─── */}
          <div className={styles.middleCol}>
            <div className={styles.middleLabel}>{activeCategory.label}</div>
            {activeCategory.products.map((prod, idx) => (
              <button
                key={prod.id}
                className={`${styles.productListBtn} ${activeProductIdx === idx ? styles.activeProductBtn : ""}`}
                onClick={() => setActiveProductIdx(idx)}
              >
                <div className={styles.productListCode}>{prod.code}</div>
                <div className={styles.productListName}>{prod.name}</div>
                {prod.badge && (
                  <span className={styles.productListBadge}>{prod.badge}</span>
                )}
              </button>
            ))}
          </div>

          {/* ─── Right: Product Detail ─── */}
          <div className={styles.rightCol}>
            {activeProduct && (
              <>
                {/* Image Banner */}
                <div className={styles.productImageBanner}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className={styles.productBannerImg}
                  />
                  <div className={styles.productBannerOverlay}>
                    <div className={styles.productBannerCode}>{activeProduct.code}</div>
                    {activeProduct.badge && (
                      <span className={styles.productBannerBadge}>{activeProduct.badge}</span>
                    )}
                  </div>
                </div>

                {/* Detail Content */}
                <div className={styles.productDetail}>
                  <h3 className={styles.productDetailName}>{activeProduct.name}</h3>
                  <p className={styles.productDetailDesc}>{activeProduct.description}</p>

                  {/* Tabs: Dimensions / Specs */}
                  <div className={styles.specTabs}>

                    {/* Dimensions */}
                    <div className={styles.specGroup}>
                      <div className={styles.specGroupTitle}>
                        <DraftingCompass size={13} />
                        Dimensions
                      </div>
                      <table className={styles.specTable}>
                        <tbody>
                          {Object.entries(activeProduct.dimensions).map(([k, v]) => (
                            <tr key={k}>
                              <td className={styles.specKey}>{k}</td>
                              <td className={styles.specVal}>{v}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Engineering Specs */}
                    <div className={styles.specGroup}>
                      <div className={styles.specGroupTitle}>
                        <FileText size={13} />
                        Engineering Specs
                      </div>
                      <table className={styles.specTable}>
                        <tbody>
                          {Object.entries(activeProduct.specs).map(([k, v]) => (
                            <tr key={k}>
                              <td className={styles.specKey}>{k}</td>
                              <td className={styles.specVal}>{v}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  </div>

                  {/* Applications */}
                  <div className={styles.applicationRow}>
                    <div className={styles.appLabel}>Applications</div>
                    <div className={styles.appTags}>
                      {activeProduct.applications.map((a) => (
                        <span key={a} className={styles.appTag}>{a}</span>
                      ))}
                    </div>
                  </div>

                  {/* Drawing Ref */}
                  {activeProduct.drawings?.drawingRef && (
                    <div className={styles.drawingRef}>
                      <div className={styles.drawingRefCode}>
                        DWG: {activeProduct.drawings.drawingRef}
                      </div>
                      <div className={styles.drawingViews}>
                        {activeProduct.drawings.hasTopView && <span>Top View ✓</span>}
                        {activeProduct.drawings.hasSectionView && <span>Section ✓</span>}
                        {activeProduct.drawings.hasIsometricView && <span>Isometric ✓</span>}
                        {activeProduct.drawings.has3DRender && <span>3D Render ✓</span>}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className={styles.productActions}>
                    <button
                      className="btn-primary"
                      style={{ fontSize: "0.75rem", padding: "0.7rem 1.25rem" }}
                      onClick={() => setShowCadModal(true)}
                    >
                      <DraftingCompass size={13} /> View CAD Blueprint Sheet
                    </button>
                    <button className={styles.quoteLink} onClick={() => scrollTo("downloads")}>
                      Request Quote <ChevronRight size={13} />
                    </button>
                  </div>

                </div>
              </>
            )}
          </div>

        </div>
      </div>

      {/* ─── CAD Blueprint Lightbox Modal ─── */}
      {showCadModal && activeProduct && (
        <div className={styles.cadModalOverlay} onClick={() => setShowCadModal(false)}>
          <div className={styles.cadModalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cadModalHeader}>
              <div>
                <div className={styles.cadModalSub}>ASTRO CAD Drawing Series · Scale 1:8</div>
                <h3 className={styles.cadModalTitle}>{activeProduct.name} ({activeProduct.code})</h3>
              </div>
              <button className={styles.cadModalClose} onClick={() => setShowCadModal(false)}>✕</button>
            </div>

            <div className={styles.cadModalBody}>
              {/* CAD Drawings Grid */}
              <div className={styles.cadBlueprintGrid}>
                {/* Panel 1: Top View */}
                <div className={styles.cadViewCard}>
                  <div className={styles.cadViewLabel}>TOP VIEW 1:8</div>
                  <div className={styles.cadDrawingBox}>
                    <svg viewBox="0 0 200 200" className={styles.cadSvg}>
                      <rect x="20" y="20" width="160" height="160" fill="none" stroke="#1565c0" strokeWidth="2" />
                      <rect x="50" y="50" width="100" height="100" fill="none" stroke="#1565c0" strokeWidth="1.5" strokeDasharray="3,3" />
                      <rect x="85" y="85" width="30" height="30" fill="none" stroke="#e65100" strokeWidth="1.5" />
                      {/* Dimension lines */}
                      <line x1="20" y1="10" x2="180" y2="10" stroke="#1565c0" strokeWidth="1" />
                      <text x="100" y="8" fill="#1565c0" fontSize="10" textAnchor="middle" fontWeight="bold">1'-8"</text>
                      <line x1="10" y1="20" x2="10" y2="180" stroke="#1565c0" strokeWidth="1" />
                      <text x="8" y="100" fill="#1565c0" fontSize="10" textAnchor="end" fontWeight="bold">1'-8"</text>
                    </svg>
                  </div>
                </div>

                {/* Panel 2: Isometric View */}
                <div className={styles.cadViewCard}>
                  <div className={styles.cadViewLabel}>ISOMETRIC VIEW 1:8</div>
                  <div className={styles.cadDrawingBox}>
                    <svg viewBox="0 0 200 200" className={styles.cadSvg}>
                      <polygon points="100,20 180,60 100,100 20,60" fill="none" stroke="#1565c0" strokeWidth="1.5" />
                      <polygon points="100,100 180,60 180,140 100,180" fill="none" stroke="#1565c0" strokeWidth="1.5" />
                      <polygon points="100,100 20,60 20,140 100,180" fill="none" stroke="#1565c0" strokeWidth="1.5" />
                      <polygon points="100,50 140,70 100,90 60,70" fill="rgba(33,150,243,0.15)" stroke="#1565c0" strokeWidth="1" strokeDasharray="2,2" />
                    </svg>
                  </div>
                </div>

                {/* Panel 3: Section A-A */}
                <div className={styles.cadViewCard}>
                  <div className={styles.cadViewLabel}>SECTION A-A SCALE 1:8</div>
                  <div className={styles.cadDrawingBox}>
                    <svg viewBox="0 0 200 200" className={styles.cadSvg}>
                      <rect x="30" y="30" width="140" height="140" fill="rgba(13,33,55,0.04)" stroke="#1565c0" strokeWidth="2" />
                      <rect x="60" y="30" width="80" height="110" fill="#fff" stroke="#1565c0" strokeWidth="1.5" />
                      {/* Hatch pattern */}
                      <line x1="30" y1="50" x2="60" y2="30" stroke="#aaa" strokeWidth="0.75" />
                      <line x1="30" y1="80" x2="60" y2="60" stroke="#aaa" strokeWidth="0.75" />
                      <line x1="140" y1="50" x2="170" y2="30" stroke="#aaa" strokeWidth="0.75" />
                      <line x1="140" y1="80" x2="170" y2="60" stroke="#aaa" strokeWidth="0.75" />
                      <text x="100" y="185" fill="#1565c0" fontSize="10" textAnchor="middle" fontWeight="bold">WALL 4" · INVERT FALL 1:100</text>
                    </svg>
                  </div>
                </div>

                {/* Panel 4: 3D Render Breakdown */}
                <div className={styles.cadViewCard}>
                  <div className={styles.cadViewLabel}>3D EXPLODED RENDER</div>
                  <div className={styles.cadDrawingBox} style={{ background: "#f5f7fa" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={activeProduct.image} alt={activeProduct.name} className={styles.cadRenderImg} />
                  </div>
                </div>
              </div>

              {/* PDF Engineering Details Table */}
              <div className={styles.cadSpecsTableBox}>
                <div className={styles.cadSpecsTitle}>Manufacturing Specifications (From ASTRO PDF Series)</div>
                <div className={styles.cadSpecsGrid}>
                  {Object.entries({ ...activeProduct.dimensions, ...activeProduct.specs }).map(([lbl, val]) => (
                    <div key={lbl} className={styles.cadSpecItem}>
                      <span className={styles.cadSpecLbl}>{lbl}:</span>
                      <span className={styles.cadSpecVal}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.cadModalFooter}>
              <button className={styles.cadDownloadBtn} onClick={() => { scrollTo("downloads"); setShowCadModal(false); }}>
                Download DWG / PDF Specs
              </button>
              <button className="btn-primary" style={{ padding: "0.65rem 1.25rem", fontSize: "0.75rem" }}
                onClick={() => { scrollTo("downloads"); setShowCadModal(false); }}>
                Request Custom Quotation <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
