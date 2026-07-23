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
                      <FileText size={13} /> View Product Specifications
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

      {/* ─── Final Manufactured Product Lightbox Modal ─── */}
      {showCadModal && activeProduct && (
        <div className={styles.cadModalOverlay} onClick={() => setShowCadModal(false)}>
          <div className={styles.cadModalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cadModalHeader}>
              <div>
                <div className={styles.cadModalSub}>PRECAST Technical Datasheet</div>
                <h3 className={styles.cadModalTitle}>{activeProduct.name} ({activeProduct.code})</h3>
              </div>
              <button className={styles.cadModalClose} onClick={() => setShowCadModal(false)}>✕</button>
            </div>

            <div className={styles.cadModalBody}>
              {/* Product Showcase & Spec Grid */}
              <div className={styles.productModalGrid}>
                {/* Left: Final Product Photo */}
                <div className={styles.productModalImgBox}>
                  <div className={styles.productModalBadge}>Final Manufactured Product</div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activeProduct.image} alt={activeProduct.name} className={styles.productModalImg} />
                </div>

                {/* Right: Detailed Specification Table */}
                <div className={styles.cadSpecsTableBox}>
                  <div className={styles.cadSpecsTitle}>Manufacturing &amp; Engineering Specifications</div>
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
            </div>

            <div className={styles.cadModalFooter}>
              <button className={styles.cadDownloadBtn} onClick={() => { scrollTo("downloads"); setShowCadModal(false); }}>
                Download PDF Specifications
              </button>
              <button className="btn-primary" style={{ padding: "0.65rem 1.25rem", fontSize: "0.75rem" }}
                onClick={() => { scrollTo("downloads"); setShowCadModal(false); }}>
                Get Quotation <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
