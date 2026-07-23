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
      ["about", "About Us"], ["process", "Our History"],
      ["facility", "Manufacturing Facility"], ["advantages", "Certifications"],
      ["advantages", "Quality Assurance"], ["downloads", "Careers"],
    ],
    Products: [
      ["products", "Steel Molds"], ["products", "EPS Foam Products"],
      ["products", "Custom Molds"], ["categories", "Precast Solutions"],
      ["explorer", "Accessories"], ["products", "All Products"],
    ],
    Industries: [
      ["industries", "Infrastructure"], ["industries", "Metro & Transit"],
      ["industries", "Bridges & Roads"], ["industries", "Building Construction"],
      ["industries", "Public Works"], ["industries", "Precast Plants"],
    ],
    Engineering: [
      ["process", "Design Process"], ["process", "Custom Development"],
      ["how-it-works", "Manufacturing Process"], ["advantages", "Materials & Standards"],
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
              <div className={styles.logoTitle}>PRE<span>CAST</span></div>
              <div className={styles.logoSubtitle}>Steel Molds &amp; EPS Foam Solutions</div>
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
                  123 Industrial Dr.<br />
                  Deer Park, NY 11729, USA
                </span>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={15} />
                <a href="tel:+16315550142">+1 (631) 555-0142</a>
              </li>
              <li className={styles.contactItem}>
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
