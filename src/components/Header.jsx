"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Clock, Linkedin, ChevronDown, ArrowRight, Menu, X, Layers, Box, Settings, DraftingCompass, CheckCircle } from "lucide-react";
import styles from "./Header.module.css";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 90;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const MEGA_PRODUCTS = {
  "Steel Molds": {
    items: [
      { name: "Box Culvert Molds", code: "BCM-1500", desc: "Stormwater tunnels & underpasses" },
      { name: "U-Drain Channel Molds", code: "UDM-600", desc: "Roadside kerb channels" },
      { name: "Square Catch Basin", code: "BCM-300", desc: "Stormwater collection pits" },
      { name: "Circular Manhole Molds", code: "MHM-1200", desc: "Sewer & utility shafts" },
      { name: "Utility Chamber Molds", code: "CHM-1800", desc: "Telecom & power access pits" },
      { name: "Wall Panel Battery Mold", code: "WPM-3600", desc: "Boundary & noise barrier walls" },
      { name: "Square Column Molds", code: "CLM-400", desc: "Building & bridge columns" },
      { name: "Staircase Molds", code: "STM-2400", desc: "Residential & commercial stairs" },
    ],
  },
  "EPS Foam Products": {
    items: [
      { name: "Rectangular Void Formers", code: "EPS-VF-300", desc: "Hollow core decks & beams" },
      { name: "Circular Blockouts", code: "EPS-BK-150", desc: "Pipe sleeve penetrations" },
      { name: "Architectural Profiles", code: "EPS-ARCH", desc: "Cornices, columns & features" },
      { name: "Packaging Foam", code: "EPS-PKG", desc: "Protective transit padding" },
    ],
  },
  "Engineering": {
    items: [
      { name: "CAD/CAM Design", code: null, desc: "3D solid model from drawings" },
      { name: "FEA Stress Analysis", code: null, desc: "Structural load simulation" },
      { name: "Custom Fabrication", code: null, desc: "Bespoke mold development" },
      { name: "On-site Commissioning", code: null, desc: "Cast trials & setup support" },
    ],
  },
};

const FEATURED_PRODUCTS = [
  { img: "/images/Precast (1).jpeg", name: "Catch Basin Mold", code: "BCM-300", tag: "Drainage" },
  { img: "/images/Precast (10).jpeg", name: "Manhole Mold Ø1200", code: "MHM-1200", tag: "Utility" },
  { img: "/images/Precast (14).jpeg", name: "EPS Void Former", code: "EPS-VF-300", tag: "Foam" },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.headerWrapper}>
      {/* ── Top Utility Bar ── */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityLeft}>
          <div className={styles.utilityItem}>
            <span className={styles.isoBadge}>ISO 9001:2015</span>
            <span>Certified Quality Management</span>
          </div>
          <div className={styles.utilityDivider} />
          <div className={styles.utilityItem}>
            <Mail size={12} className={styles.utilIcon} />
            <a href="mailto:info@precastsolutions.com">info@precastsolutions.com</a>
          </div>
          <div className={styles.utilityItem}>
            <Phone size={12} className={styles.utilIcon} />
            <a href="tel:+16315550142">+1 (631) 555-0142</a>
          </div>
        </div>
        <div className={styles.utilityRight}>
          <div className={styles.utilityItem}>
            <Clock size={12} className={styles.utilIcon} />
            <span>Mon – Sat: 7:00 AM – 5:00 PM EST</span>
          </div>
          <div className={styles.utilityDivider} />
          <div className={styles.regionBadges}>
            <span className={styles.regionFlag}>🇺🇸 USA</span>
            <span className={styles.regionFlag}>🇨🇦 Canada</span>
            <span className={styles.regionFlag}>🇪🇺 Europe</span>
          </div>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Linkedin size={14} />
          </a>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`${styles.mainHeader} ${isSticky ? styles.stickyMainHeader : ""}`}>
        <button className={styles.logoArea} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className={styles.logoTitle}>
            PRE<span>CAST</span>
          </div>
          <div className={styles.logoSubtitle}>Steel Molds &amp; EPS Foam Solutions</div>
        </button>

        {/* Desktop Nav */}
        <nav>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <button className={`${styles.navLink} ${styles.navLinkActive}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Home
              </button>
            </li>

            {/* Company dropdown */}
            <li className={styles.navItem}>
              <button className={styles.navLink}>
                Company <ChevronDown size={12} />
              </button>
              <ul className={styles.dropdown}>
                {[
                  ["about","About Us"],["process","Our History"],
                  ["facility","Manufacturing Facility"],
                  ["downloads","Certifications"],["advantages","Quality Assurance"]
                ].map(([id, label]) => (
                  <li key={id} className={styles.dropdownItem}>
                    <button onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Products Mega Menu */}
            <li
              className={`${styles.navItem} ${styles.megaMenuItem}`}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className={`${styles.navLink} ${megaOpen ? styles.navLinkActive : ""}`}
                onClick={() => scrollTo("products")}
              >
                Products <ChevronDown size={12} />
              </button>

              {/* ── Premium Mega Menu Panel ── */}
              <div className={`${styles.megaMenu} ${megaOpen ? styles.megaMenuOpen : ""}`}>

                {/* Left: Product Category Links */}
                <div className={styles.megaLeft}>
                  {Object.entries(MEGA_PRODUCTS).map(([cat, data]) => (
                    <div key={cat} className={styles.megaCategory}>
                      <div className={styles.megaCatLabel}>{cat}</div>
                      <ul className={styles.megaList}>
                        {data.items.map((item) => (
                          <li key={item.name}>
                            <button
                              className={styles.megaProductBtn}
                              onClick={() => { scrollTo("products"); setMegaOpen(false); }}
                            >
                              <div className={styles.megaProductName}>{item.name}</div>
                              <div className={styles.megaProductDesc}>{item.desc}</div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Right: Featured Visual Cards */}
                <div className={styles.megaRight}>
                  <div className={styles.megaRightTitle}>Featured Products</div>
                  <div className={styles.megaFeaturedGrid}>
                    {FEATURED_PRODUCTS.map((p) => (
                      <div
                        key={p.code}
                        className={styles.megaFeaturedCard}
                        onClick={() => { scrollTo("products"); setMegaOpen(false); }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.img} alt={p.name} className={styles.megaFeaturedImg} />
                        <div className={styles.megaFeaturedOverlay}>
                          <span className={styles.megaFeaturedTag}>{p.tag}</span>
                          <div className={styles.megaFeaturedName}>{p.name}</div>
                          <div className={styles.megaFeaturedCode}>{p.code}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Standards strip */}
                  <div className={styles.megaStandards}>
                    {["ISO 9001:2015","AWS D1.1 Welding","Q345B Steel Grade","CNC ±0.2mm"].map((s) => (
                      <div key={s} className={styles.megaStandardItem}>
                        <CheckCircle size={11} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={styles.megaViewAllBtn}
                    onClick={() => { scrollTo("products"); setMegaOpen(false); }}
                  >
                    View Full Catalog <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </li>

            {/* Industries dropdown */}
            <li className={styles.navItem}>
              <button className={styles.navLink}>
                Industries <ChevronDown size={12} />
              </button>
              <ul className={styles.dropdown}>
                {[
                  ["industries","Infrastructure"],["industries","Metro & Rail"],
                  ["industries","Bridges & Highways"],
                  ["industries","Residential & Commercial"],["industries","Government Projects"]
                ].map(([id, label]) => (
                  <li key={label} className={styles.dropdownItem}>
                    <button onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Engineering dropdown */}
            <li className={styles.navItem}>
              <button className={styles.navLink}>
                Engineering <ChevronDown size={12} />
              </button>
              <ul className={styles.dropdown}>
                {[
                  ["process","CAD/CAM Design"],["advantages","FEA Stress Analysis"],
                  ["how-it-works","Manufacturing Process"],["advantages","Quality Standards"]
                ].map(([id, label]) => (
                  <li key={label} className={styles.dropdownItem}>
                    <button onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Resources dropdown */}
            <li className={styles.navItem}>
              <button className={styles.navLink}>
                Resources <ChevronDown size={12} />
              </button>
              <ul className={styles.dropdown}>
                {[
                  ["downloads","Download Center"],["downloads","Technical Drawings"],
                  ["downloads","Installation Guides"],["downloads","Product Datasheets"]
                ].map(([id, label]) => (
                  <li key={label} className={styles.dropdownItem}>
                    <button onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.navItem}>
              <button className={styles.navLink} onClick={() => scrollTo("downloads")}>
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* CTA */}
        <button className={styles.quoteBtn} onClick={() => scrollTo("downloads")}>
          Request Quote <ArrowRight size={16} />
        </button>

        {/* Mobile Toggle */}
        <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
    </div>
  );
}
