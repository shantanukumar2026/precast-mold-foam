"use client";

import React, { useState } from "react";
import { Play, ArrowLeft, ArrowRight, ShieldAlert, Cpu } from "lucide-react";
import styles from "./ProcessTimeline.module.css";

const TIMELINE_STEPS = [
  {
    number: "01",
    label: "Closed Mold",
    title: "Initial State: Closed & Clamped",
    desc: "The steel mold is securely aligned and clamped using high-strength mechanical locks to prevent movement during the high-frequency vibration process. All sealing gaskets are compressed to ensure water-tight boundaries.",
    image: "/images/Precast (1).jpeg",
    tag: "Lock State: 100% Compressed",
    notes: "Ensure outer frame tension indicators read green. Safety pins must be fully seated."
  },
  {
    number: "02",
    label: "Unlock Mechanism",
    title: "Quick-Release Locking Sequence",
    desc: "The quick-acting hydraulic locking pins are deactivated. A dual-safety mechanical latch releases the heavy locking bars without requiring manual hammer-striking, reducing wear and noise.",
    image: "/images/Precast (10).jpeg",
    tag: "Hydraulic pressure: 180 Bar",
    notes: "Keep hands clear of side panels. Locking pistons retraction is automated."
  },
  {
    number: "03",
    label: "Open Side Panels",
    title: "Side Formwork Retraction",
    desc: "Hydraulic cylinders retract the side shuttering panels outward on horizontal guide rails. The mold opens wide, providing easy access to clean and spray form release agent.",
    image: "/images/Precast (11).jpeg",
    tag: "Form Release Spraying",
    notes: "Verify side panels clear the base profile by at least 150mm for proper cleaning access."
  },
  {
    number: "04",
    label: "Insert Foam Core",
    title: "EPS Foam Core Positioning",
    desc: "Custom-cut EPS foam inserts or void formers are placed into the mold cavities. Magnetic blockout holders secure the foam blocks against buoyancy forces during pouring.",
    image: "/images/Precast (14).jpeg",
    tag: "EPS Grade: High Compressive",
    notes: "Check buoyancy anchor links are securely fastened to prevent foam drift during placement."
  },
  {
    number: "05",
    label: "Pour Concrete",
    title: "High-Slump Concrete Placement",
    desc: "Concrete is discharged directly into the mold while high-frequency electric vibrators, attached to the outer steel ribs, fluidize the concrete to eliminate air voids around the foam.",
    image: "/images/Precast (22).jpeg",
    tag: "Vibration freq: 60-90 Hz",
    notes: "Distribute concrete evenly in 300mm layers. Avoid direct contact between nozzle and foam inserts."
  },
  {
    number: "06",
    label: "Curing Phase",
    title: "Accelerated Steam/Thermal Curing",
    desc: "The closed mold is covered or heated using thermal channels on the back of the steel plates. Steam is circulated to accelerate early concrete strength development overnight.",
    image: "/images/Precast (30).jpeg",
    tag: "Temp profile: Max 60°C",
    notes: "Thermal ramping must not exceed 20°C per hour to prevent surface micro-cracking."
  },
  {
    number: "07",
    label: "Open Mold",
    title: "Formwork Stripping & Release",
    desc: "After concrete reaches stripping strength (typically 15-20 MPa), the side panels are retracted again. The precast shape separates cleanly from the polished steel plates.",
    image: "/images/Precast (31).jpeg",
    tag: "Release Tension: 0",
    notes: "Inspect joint gaskets for wear. Replace if visible deformation is present."
  },
  {
    number: "08",
    label: "Finished Product",
    title: "Final Product & Inspection",
    desc: "The cured box culvert, manhole, or column is lifted from the base plate using integrated lifting anchors. The product is cataloged, QC checked, and stacked for storage.",
    image: "/images/Precast (52).jpeg",
    tag: "Dimensional Toler: +/- 2mm",
    notes: "Check joint groove dimensions using go/no-go gauges. Log product serial in quality database."
  }
];

export default function ProcessTimeline() {
  const [currentStep, setCurrentStep] = useState(0);

  const activeStep = TIMELINE_STEPS[currentStep];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % TIMELINE_STEPS.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + TIMELINE_STEPS.length) % TIMELINE_STEPS.length);
  };

  // Calculate line width based on active step
  const progressPercent = (currentStep / (TIMELINE_STEPS.length - 1)) * 100;

  return (
    <section className={`${styles.sectionWrapper} blueprint-bg section-padding`} id="how-it-works">
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionSub}>Operation Flow</span>
          <h2 className={styles.sectionTitle}>How Our Mold Works</h2>
          <p className={styles.headerText}>
            Step-by-step engineering timeline from closed mold preparation to finished concrete product.
          </p>
        </div>

        {/* Steps Tracker */}
        <div className={styles.stepsTrack}>
          {/* Connector Line */}
          <div className={styles.lineConnector}>
            <div className={styles.lineProgress} style={{ width: `${progressPercent}%` }} />
          </div>

          {TIMELINE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`${styles.stepNode} ${currentStep === idx ? styles.activeStepNode : ""}`}
              onClick={() => setCurrentStep(idx)}
            >
              <div className={styles.stepDot}>{step.number}</div>
              <div className={styles.stepLabel}>{step.label}</div>
            </div>
          ))}
        </div>

        {/* Step Detail Showcase */}
        <div className={styles.showcaseLayout}>
          
          {/* Left: Step Image */}
          <div className={styles.imgWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className={styles.showcaseImg}
            />
            <span className={styles.technicalTag}>{activeStep.tag}</span>
          </div>

          {/* Right: Technical Details */}
          <div className={styles.detailsCol}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--accent-orange)", fontWeight: "800", fontSize: "0.9rem" }}>
                STEP {activeStep.number} OF {TIMELINE_STEPS.length}
              </span>
            </div>
            <h3 className={styles.detailsTitle}>{activeStep.title}</h3>
            <p className={styles.detailsDesc}>{activeStep.desc}</p>

            {/* Engineering Note Card */}
            <div className={styles.engCard}>
              <div className={styles.engCardTitle}>
                <Cpu size={14} />
                <span>Engineering Log & Safety Instructions</span>
              </div>
              <p className={styles.engCardText}>
                &ldquo;{activeStep.notes}&rdquo;
              </p>
            </div>

            {/* Navigation buttons */}
            <div className={styles.controls}>
              <button className="btn-secondary" onClick={handlePrev}>
                <ArrowLeft size={16} /> Prev
              </button>
              <button className="btn-primary" onClick={handleNext}>
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
