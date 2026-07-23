import React from "react";
import { Target, HardHat, RefreshCw, DraftingCompass, Zap, Unlock } from "lucide-react";
import styles from "./EngineeringAdvantages.module.css";

const ADVANTAGES = [
  {
    icon: Target,
    title: "CNC Precision",
    desc: "Machined to exact tolerances of +/- 0.5mm using CNC laser cutting and robotic forming systems, ensuring perfectly square precast joints."
  },
  {
    icon: HardHat,
    title: "Heavy Duty Build",
    desc: "Constructed using premium 8mm to 12mm thick structural steel plates with rigid outer ribbing to endure high vibration and daily loads."
  },
  {
    icon: RefreshCw,
    title: "Maximum Reusability",
    desc: "Engineering designs built for over 1000+ concrete pours with minimal plate distortion or edge bending under thermal steam curing."
  },
  {
    icon: DraftingCompass,
    title: "Custom 3D Engineering",
    desc: "Full product optimization from custom drawings to digital assembly tests, checking clearances and weight profiles prior to fabrication."
  },
  {
    icon: Zap,
    title: "Fast Joint Assembly",
    desc: "Equipped with quick-acting locking wedges and hydraulic push-pull cylinders to reduce mold assembly times by up to 50%."
  },
  {
    icon: Unlock,
    title: "Clean Form Demolding",
    desc: "Features structural draft tapers and polished skin sheets that permit smooth concrete separation without visual defects."
  }
];

export default function EngineeringAdvantages() {
  return (
    <section className={`${styles.sectionBg} section-padding`} id="advantages">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSub}>Technical Value</span>
          <h2 className={styles.sectionTitle}>Engineering Advantages</h2>
          <p className={styles.headerText}>
            Every PRECAST mold is custom-engineered to improve safety, speed, and accuracy on the plant floor.
          </p>
        </div>

        {/* Advantages Cards Grid */}
        <div className={styles.advantagesGrid}>
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div key={idx} className={styles.advantageCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{adv.title}</h3>
                <p className={styles.cardDesc}>{adv.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
