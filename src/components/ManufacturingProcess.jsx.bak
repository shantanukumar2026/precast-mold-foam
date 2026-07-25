import React from "react";
import styles from "./ManufacturingProcess.module.css";

const PROCESS_STEPS = [
  {
    index: "01",
    title: "Design & Structural Optimization",
    desc: "Our design process starts with full-scale 3D modeling and CAD/CAM engineering. We simulate stress distribution and weight vectors using FEA analysis to ensure structural rigidity before steel is cut.",
    image: "/images/Precast (37).jpeg",
    specs: {
      "Software Stack": "SolidWorks / AutoCAD",
      "Analysis Method": "FEA Stress & Deflection",
      "Design Standards": "AISC / ACI 318"
    }
  },
  {
    index: "02",
    title: "CNC Laser & Plasma Cutting",
    desc: "Steel plates are cut to exact tolerances using high-power CNC laser and plasma cutting systems. This ensures every matching plate and locking hinge matches CAD dimensions with zero error.",
    image: "/images/Precast (19).jpeg",
    specs: {
      "Cutting Tolerance": "+/- 0.2 mm",
      "Material Grade": "Q345B Carbon Steel",
      "Thickness Range": "6mm to 25mm Plates"
    }
  },
  {
    index: "03",
    title: "Heavy Plate Fabrication",
    desc: "Plate bending, rolling, and layout are executed by certified steel workers. Strong stiffener channels and structural hollow beams are welded onto plates to avoid warping during concrete vibration.",
    image: "/images/Precast (20).jpeg",
    specs: {
      "Forming Pressure": "400 Ton Brake Press",
      "Stiffener Spacing": "Calculated per FEA",
      "Reinforcement": "C-Channel & Angle Iron"
    }
  },
  {
    index: "04",
    title: "AWS Certified Welding",
    desc: "Welding is completed by AWS D1.1 certified technicians using MIG/TIG processes. All load-bearing seams are double-pass welded and inspected for cracks or slag inclusions.",
    image: "/images/Precast (22).jpeg",
    specs: {
      "Welding Standard": "AWS D1.1 Structural",
      "Process Type": "GMAW (MIG) / FCAW",
      "Seam Inspection": "Magnetic Particle / UT"
    }
  },
  {
    index: "05",
    title: "Modular Mold Assembly",
    desc: "Hinges, locks, joints, and hydraulic slide mechanisms are mounted and aligned. The mold is assembled in our shop floor, checking swing clearance and closing tightness.",
    image: "/images/Precast (41).jpeg",
    specs: {
      "Closing Tolerance": "0.5mm Gap Max",
      "Hinge Pin Specs": "Hardened 40Cr Steel",
      "Lock Alignment": "Dual Latch System"
    }
  },
  {
    index: "06",
    title: "On-Site Trial Casting",
    desc: "We perform wet concrete casting tests inside the assembled mold to verify locking stability under casting pressure. This validates seal compression and concrete release quality.",
    image: "/images/Precast (48).jpeg",
    specs: {
      "Test Medium": "Self-Consolidating Concrete",
      "Pressure Load": "Hydrostatic Head Test",
      "Release System": "Pneumatic Core Pull"
    }
  },
  {
    index: "07",
    title: "Quality Control & Metrology",
    desc: "Our quality inspectors measure crucial dimensions using digital levels and 3D laser trackers. All locking mechanisms, seal alignments, and surface finishes are logged in the QC register.",
    image: "/images/Precast (50).jpeg",
    specs: {
      "Measurement Tool": "FARO Laser Tracker",
      "QC Standards": "ISO 9001 Compliance",
      "Report Deliverable": "Dimensional Certificate"
    }
  },
  {
    index: "08",
    title: "Rustproofing & Global Dispatch",
    desc: "Molds receive industrial-grade primers and rustproofing coats before packing. Everything is crated with custom timber supports and loaded securely onto flatbeds for global logistics.",
    image: "/images/Precast (52).jpeg",
    specs: {
      "Coating Spec": "Zinc Phosphate Epoxy Primer",
      "Packaging Style": "Seaworthy Steel Frames",
      "Logistics Network": "Flatbed / Ocean Freight"
    }
  }
];

export default function ManufacturingProcess() {
  return (
    <section className={`${styles.sectionBg} section-padding`} id="process">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSub}>Fabrication Journey</span>
          <h2 className={styles.sectionTitle}>Precision Manufacturing Process</h2>
          <p className={styles.headerText}>
            Our step-by-step corporate workflow guarantees that every steel mold meets global precast plant specifications.
          </p>
        </div>

        {/* Process Steps List */}
        <div className={styles.processList}>
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.index}
                className={`${styles.processRow} ${!isEven ? styles.processRowReverse : ""}`}
              >
                {/* Image Column */}
                <div className={styles.imgCol}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className={styles.processImg}
                  />
                  <div className={styles.stepNumber}>{step.index}</div>
                </div>

                {/* Content Column */}
                <div className={styles.contentCol}>
                  <span className={styles.stepIndex}>Step {step.index}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>

                  {/* Tech Specs Summary Table */}
                  <div className={styles.techTable}>
                    {Object.entries(step.specs).map(([lbl, val]) => (
                      <div key={lbl} className={styles.techRow}>
                        <span className={styles.techLabel}>{lbl}</span>
                        <span className={styles.techValue}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
