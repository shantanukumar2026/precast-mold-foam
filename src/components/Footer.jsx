"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import styles from "./Footer.module.css";

const scrollTo = (id) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  const links = {
    Company: [
      ["about", "About Us"],
      ["process", "Our History & Legacy"],
      ["facility", "Manufacturing Facility"],
      ["advantages", "Certifications & Standards"],
      ["advantages", "Quality Assurance"],
      ["advantages", "ESG & Sustainability"],
      ["advantages", "Safety & Compliance"],
      ["process", "Research & Development"],
      ["supply-map", "Global Partner Network"],
      ["downloads", "Careers & Hiring"],
    ],
    Products: [
      ["products", "Steel Box Culvert Molds"],
      ["products", "EPS Void Formers"],
      ["products", "Manhole & Catch Basin Molds"],
      ["products", "Retaining Wall Panel Forms"],
      ["products", "U-Drain & Trench Channels"],
      ["products", "Structural Column & Beam Molds"],
      ["products", "Custom Magnetic Shuttering"],
      ["products", "EPS Architectural Cornices"],
      ["products", "Precast Accessories"],
      ["products", "Complete Mold Machinery"],
    ],
    Industries: [
      ["industries", "Stormwater & Infrastructure"],
      ["industries", "Highway & Bridge Construction"],
      ["industries", "Underground Power & Telecom"],
      ["industries", "Commercial Buildings"],
      ["industries", "Railway & Transit Systems"],
      ["industries", "Water Treatment"],
      ["industries", "Marine & Seawall Forms"],
      ["industries", "Agricultural Precast"],
      ["industries", "Residential Systems"],
      ["industries", "Modular Vaults"],
    ],
    Engineering: [
      ["process", "3D CAD & BIM Modeling"],
      ["process", "FEA Stress Analysis"],
      ["process", "Custom Mold Engineering"],
      ["how-it-works", "Self-Curing Steam Jackets"],
      ["how-it-works", "Pneumatic & Hydraulics"],
      ["advantages", "Steel Grades & Materials"],
      ["process", "On-Site Cast Trials"],
      ["how-it-works", "Automated Stripping"],
      ["process", "Precision CNC Machining"],
      ["process", "Technical Support"],
    ],
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className="container">

        {/* Six-Column Grid */}
        <div className={styles.topGrid}>

          {/* Brand Column */}
          <div className={styles.descCol}>
            <div className={styles.logoArea}>
              <img src="/images/Precast-logo-tr.png" alt="Precast Industries Logo" className={styles.logoImg} />
            </div>
            <p className={styles.companyDesc}>
              Industrial-grade manufacturer of structural steel molds and engineered EPS foam solutions for precast concrete producers across USA, Canada, and Europe.
            </p>
            <div className={styles.certBadges}>
              <span className={styles.certBadge}>ISO 9001:2015</span>
              <span className={styles.certBadge}>AWS D1.1</span>
              <span className={styles.certBadge}>CE Marked</span>
            </div>
            <ul className={styles.socialList}>
              {[
                ["https://linkedin.com", Linkedin, "LinkedIn"],
                ["https://facebook.com", Facebook, "Facebook"],
                ["https://twitter.com", Twitter, "Twitter"],
                ["https://youtube.com", Youtube, "YouTube"],
              ].map(([href, Icon, label]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className={styles.socialBtn} aria-label={label}>
                    <Icon size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className={styles.colTitle}>{title}</h4>
              <ul className={styles.linkList}>
                {items.map(([id, label]) => (
                  <li key={label}>
                    <button onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={15} />
                <span className={styles.contactText}>
                  <strong>SOUTH OFFICE</strong><br />
                  850 NW FEDERAL HWY<br />
                  STUART, FL 34994
                </span>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={15} />
                <a href="tel:+17722970700">(772) 297-0700</a>
              </li>

              <li className={`${styles.contactItem} ${styles.locationDivider}`}>
                <Mail className={styles.contactIcon} size={15} />
                <a href="mailto:info@precastsolutions.com">info@precastsolutions.com</a>
              </li>
              <li className={styles.contactItem}>
                <Clock className={styles.contactIcon} size={15} />
                <span className={styles.contactText}>Mon – Sat: 7:00 AM – 5:00 PM EST</span>
              </li>
            </ul>
            <div className={styles.territories}>
              <div className={styles.territoryTitle}>Service Territories</div>
              <div className={styles.territoryFlags}>
                <span>USA</span>
                <span>Canada</span>
                <span>Europe</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            <span>&copy; {new Date().getFullYear()} PRECAST Solutions Inc. All Rights Reserved.</span>
            <span className={styles.bottomSep}>|</span>
            <span>ISO 9001:2015 Certified Manufacturing</span>
          </div>
          <ul className={styles.bottomLinks}>
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Sitemap"].map((item) => (
              <li key={item}>
                <button onClick={() => scrollTo("downloads")}>{item}</button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
