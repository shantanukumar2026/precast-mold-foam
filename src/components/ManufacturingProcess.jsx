import React from "react";
import styles from "./ManufacturingProcess.module.css";

const PROCESS_STEPS = [
  {
    index: "01",
    title: "Design & Structural Optimization",
    desc: "Our design process starts with full-scale 3D modeling and CAD/CAM engineering. We simulate stress distribution and weight vectors using FEA analysis to ensure structural rigidity before steel is cut.",
    image: "/images/extracted_photos/untitled_73_frame1.jpg",
    video: "/images/Mold-images/untitled.73.mp4",
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
    image: "/images/extracted_photos/movement_section_view_73_frame1.jpg",
    video: "/images/Mold-images/movement section view.73.mp4",
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
    image: "/images/extracted_photos/12_10__30_48_mold_rectangle_14_frame1.jpg",
    video: "/images/Mold-images/12-10- 30-48 mold rectangle.14.mp4",
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
    image: "/images/extracted_photos/trnch_mold_animation_24_frame1.jpg",
    video: "/images/Mold-images/trnch mold animation.24.mp4",
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
    image: "/images/extracted_photos/12_10__30_48_mold_rectangle_5277_frame1.jpg",
    video: "/images/Mold-images/12-10- 30-48 mold rectangle.5277.mp4",
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
    image: "/images/extracted_photos/ring_mold_animation_5275_frame1.jpg",
    video: "/images/Mold-images/ring mold animation.5275.mp4",
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
    image: "/images/extracted_photos/final_30_48_mold__model_animation_284_frame1.jpg",
    video: "/images/Mold-images/final 30 48 mold  model animation.284.mp4",
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
    image: "/images/extracted_photos/2_feet_mold_55_frame1.jpg",
    video: "/images/Mold-images/2 feet mold.55.mp4",
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
                {/* Image / Video Column */}
                <div className={styles.imgCol}>
                  {step.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={step.image}
                      className={styles.processImg}
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={step.image}
                      alt={step.title}
                      className={styles.processImg}
                    />
                  )}
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
