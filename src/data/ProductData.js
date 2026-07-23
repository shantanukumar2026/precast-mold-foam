/**
 * PRECAST Product Catalog Data
 * 
 * Technical specifications derived from engineering drawings and manufacturing standards.
 * All dimensions are nominal; actual units shipped to project-specific tolerances.
 * Reference: ASTRO Drawing Series REV-04, Q345B Steel Grade, AWS D1.1 Welding Standard
 */

export const PRODUCT_CATALOG = [

  // ─────────────────────────────────────────────
  // DRAINAGE & UTILITY MOLDS
  // ─────────────────────────────────────────────
  {
    id: "BCM-300",
    code: "BCM-300",
    category: "steel-molds",
    subcategory: "drainage",
    name: "Square Catch Basin Mold",
    shortName: "Catch Basin",
    badge: "Standard",
    image: "/images/Precast (1).jpeg",
    description: "Single-piece square catch basin mold for roadside stormwater collection. Based on ASTRO DWG Series REV-04. Includes cover slab mold with lifting hook pocket.",
    applications: ["Municipal Stormwater", "Roadside Drainage", "Parking Lots", "Highway Verges"],
    dimensions: {
      "Outer Size (O.D.)": "508 × 508 mm (1'-8\" × 1'-8\")",
      "Inner Void (I.D.)": "305 × 305 mm (1' × 1')",
      "Wall Thickness": "100 mm (4\")",
      "Mold Height Range": "200–400 mm (8\"–1'-4\")",
      "Cover Slab O.D.": "610 × 610 mm (2' × 2\")",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Face Plate Thickness": "8 mm",
      "Outer Rib Structure": "75×75 L-angle @ 200mm c/c",
      "Locking System": "Toggle Clamp + Hex Key",
      "Stripping Method": "Inward Collapsible Core",
      "Surface Finish": "SQ-4 Machined Skin Sheet",
      "Casting Cycle": "8 hr cure + 4 hr strip",
      "Approx. Mold Weight": "180 kg",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: true,
      has3DRender: true,
      drawingRef: "ASTRO-BCM-300-REV04",
      scale: "1:8",
    },
  },

  {
    id: "BCM-1500",
    code: "BCM-1500",
    category: "steel-molds",
    subcategory: "drainage",
    name: "Box Culvert Mold — 1500 Series",
    shortName: "Box Culvert",
    badge: "Best Seller",
    image: "/images/Precast (3).jpeg",
    description: "Heavy-duty rectangular box culvert mold for stormwater tunnels and pedestrian underpasses. Mechanical shrinkable corner core for fast stripping.",
    applications: ["Stormwater Tunnels", "Pedestrian Underpasses", "Highway Crossings", "Irrigation Channels"],
    dimensions: {
      "Internal Clear Span": "1500 × 1500 mm",
      "Barrel Length": "1000 mm (standard), custom up to 2400 mm",
      "Outer Footprint": "1820 × 1820 × 1140 mm",
      "Wall Thickness (Nominal)": "160 mm",
      "Base Slab Thickness": "200 mm",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Face Plate Thickness": "10 mm",
      "Outer Frame": "200×200 H-beam ribs",
      "Core System": "Mechanical Shrinkable Corner Core",
      "Locking System": "Hydraulic Wedge Clamp Bars",
      "Vibration": "External Electric Vibrators ×4",
      "Casting Cycle": "12 hr steam cure + 2 hr strip",
      "Approx. Mold Weight": "4,800 kg",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: true,
      has3DRender: false,
      drawingRef: "ASTRO-BCM-1500-REV03",
      scale: "1:20",
    },
  },

  {
    id: "UDM-600",
    code: "UDM-600",
    category: "steel-molds",
    subcategory: "drainage",
    name: "U-Drain Channel Mold — 600mm",
    shortName: "U-Drain",
    badge: "Infrastructure",
    image: "/images/Precast (4).jpeg",
    description: "Open-top U-shaped drain mold for roadside kerb and channel systems. Pneumatic core withdrawal for sub-15-minute strip cycle. Lengths 500–1000mm.",
    applications: ["Roadside Kerb Channels", "Footpath Drainage", "Agricultural Runoff", "Industrial Aprons"],
    dimensions: {
      "Channel Width (I.D.)": "600 mm",
      "Channel Depth": "450 mm",
      "Wall Thickness": "80 mm",
      "Unit Length": "500 mm / 750 mm / 1000 mm",
      "Outer Width": "760 mm",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Face Plate Thickness": "8 mm",
      "Core System": "Pneumatic Withdrawal Core",
      "Strip Time": "< 15 minutes",
      "Locking": "Side-panel swing-open with latch",
      "Gradient Option": "Invert falls 1:100 to 1:500",
      "Casting Cycle": "8 hr + strip",
      "Approx. Mold Weight": "620 kg per unit",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: false,
      has3DRender: false,
      drawingRef: "ASTRO-UDM-600-REV02",
      scale: "1:10",
    },
  },

  // ─────────────────────────────────────────────
  // UTILITY CHAMBER MOLDS
  // ─────────────────────────────────────────────
  {
    id: "MHM-1200",
    code: "MHM-1200",
    category: "steel-molds",
    subcategory: "utility",
    name: "Circular Manhole Mold — Ø1200",
    shortName: "Manhole Ø1200",
    badge: "Municipal",
    image: "/images/Precast (10).jpeg",
    description: "Standard modular circular manhole mold with hinged outer shell and collapsible internal core. Supports both wet-cast and dry-cast methods. Knock-out ports included.",
    applications: ["Sewer Inspection Shafts", "Utility Access Chambers", "Stormwater Sumps", "Telecom Manholes"],
    dimensions: {
      "Internal Diameter (I.D.)": "Ø 1200 mm",
      "Wall Thickness (Nominal)": "120 mm",
      "Ring Height Options": "600 mm / 1000 mm / 1200 mm",
      "Base Slab Diameter": "Ø 1560 mm",
      "Cover Slab Diameter": "Ø 1400 mm",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Outer Shell": "Hinged, 2-piece clamshell",
      "Inner Core": "Draft-tapered collapsible mandrel",
      "Locking": "Locking key bar + 12-point bolt ring",
      "Knock-out Ports": "4× 150 mm Ø (adjustable position)",
      "Sealing": "Neoprene rubber water-stop gasket",
      "Casting Cycle": "22 hr cast-to-strip",
      "Approx. Mold Weight": "1,200 kg",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: false,
      has3DRender: false,
      drawingRef: "ASTRO-MHM-1200-REV05",
      scale: "1:15",
    },
  },

  {
    id: "CHM-1800",
    code: "CHM-1800",
    category: "steel-molds",
    subcategory: "utility",
    name: "Rectangle Utility Chamber Mold — 1800",
    shortName: "Utility Chamber",
    badge: "Telecom / Power",
    image: "/images/Precast (11).jpeg",
    description: "Multi-port rectangular chamber mold for telecom, power cable, and water utility access pits. Interchangeable base joint profiles. Shrinkable mechanical internal core.",
    applications: ["Telecom Cable Pits", "Power Cable Chambers", "Water Valve Boxes", "Gas Utility Access"],
    dimensions: {
      "Inner Clear Size": "1800 × 900 × 1200 mm",
      "Wall Thickness": "150 mm",
      "Port Knock-outs": "6× configurable Ø 150–300 mm",
      "Base Rebate Depth": "50 mm (for seating ring)",
      "Cover Slab Size": "2100 × 1200 mm",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Face Plate Thickness": "10 mm",
      "Core System": "Shrinkable Mechanical Core (4 quadrant)",
      "Base Plate": "Interchangeable joint profile inserts",
      "Vibration": "Bolt-on external vibrators ×6",
      "Gasket System": "EPDM compression ring",
      "Casting Cycle": "22 hr cast-to-strip",
      "Approx. Mold Weight": "3,600 kg",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: false,
      has3DRender: false,
      drawingRef: "ASTRO-CHM-1800-REV02",
      scale: "1:20",
    },
  },

  // ─────────────────────────────────────────────
  // STRUCTURAL MOLDS
  // ─────────────────────────────────────────────
  {
    id: "WPM-3600",
    code: "WPM-3600",
    category: "steel-molds",
    subcategory: "structural",
    name: "Boundary Wall Panel Mold — Battery",
    shortName: "Wall Panel Battery",
    badge: "Commercial",
    image: "/images/Precast (18).jpeg",
    description: "4-cavity horizontal battery mold for precast boundary wall and fence panels. Hydraulic side-panel sliding mechanism. Heavy H-beam ribs for zero deflection under vibration.",
    applications: ["Boundary & Perimeter Walls", "Highway Noise Barriers", "Architectural Cladding", "Security Fencing"],
    dimensions: {
      "Panel Size (per cavity)": "3000 × 300 × 200 mm",
      "No. of Cavities": "4 (expandable to 8)",
      "Overall Mold Length": "3200 mm",
      "Bed Width (4-cavity)": "1600 mm",
      "Panel Thickness Range": "100–250 mm",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Framework": "250×250 H-beam primary ribs",
      "Side Panel Action": "Hydraulic cylinder sliding base",
      "Face Plate Thickness": "12 mm",
      "Gasket Sealing": "High-durability neoprene joints",
      "Vibration": "Table vibrator (5 HP motor)",
      "Casting Cycle": "Daily cycle (16 hr cure + overnight)",
      "Approx. Mold Weight": "6,200 kg",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: true,
      has3DRender: false,
      drawingRef: "ASTRO-WPM-3600-REV03",
      scale: "1:25",
    },
  },

  {
    id: "CLM-400",
    code: "CLM-400",
    category: "steel-molds",
    subcategory: "structural",
    name: "Square Column Mold — 400mm",
    shortName: "Column Mold",
    badge: "Structural",
    image: "/images/Precast (6).jpeg",
    description: "Self-sustaining vertical column mold with adjustable cross-section and face plate for architectural A-class finish. Maximum 12m casting length with internal stiffener rings.",
    applications: ["Building Columns", "Bridge Piers", "Carpark Structures", "Industrial Frames"],
    dimensions: {
      "Column Section (Square)": "400 × 400 mm (adjustable 300–600 mm)",
      "Max Casting Length": "12,000 mm",
      "Internal Stiffener Rings": "@ 600 mm c/c spacing",
      "Corbel Pockets": "As per drawing",
      "Base Plate Leveling": "4× adjustable screw jacks",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Face Plate": "10 mm, Machined A-Class Finish",
      "External Rib": "100×100 L-angle @ 400 mm c/c",
      "Locking": "12× Quick-action wedge locking keys",
      "Casting Direction": "Vertical cast (upright)",
      "Surface Finish": "A-Class Architectural — < 0.5mm waviness",
      "Casting Cycle": "Daily cycle",
      "Approx. Mold Weight": "2,800 kg (per 12m unit)",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: false,
      has3DRender: false,
      drawingRef: "ASTRO-CLM-400-REV02",
      scale: "1:20",
    },
  },

  {
    id: "STM-2400",
    code: "STM-2400",
    category: "steel-molds",
    subcategory: "structural",
    name: "Inverted-T Staircase Mold",
    shortName: "Staircase Mold",
    badge: "Custom CNC",
    image: "/images/Precast (9).jpeg",
    description: "Vertical-cast staircase mold with fully adjustable tread and riser dimensions. Side panels swing open on hinge for clean demolding. 8–18 treads per casting.",
    applications: ["Residential Stairs", "Commercial Stairwells", "Industrial Mezzanines", "Public Buildings"],
    dimensions: {
      "Tread Width": "1000 mm standard (900–1500 mm range)",
      "Tread Depth": "260 mm (adjustable 240–300 mm)",
      "Riser Height": "175 mm (adjustable 150–200 mm)",
      "Step Count": "8–18 treads per pour",
      "Stringer Thickness": "200 mm",
    },
    specs: {
      "Steel Grade": "Q345B Carbon Steel",
      "Tread Face Plate": "10 mm anti-skid textured plate",
      "Side Panel Action": "Swing-open on hinge, single latch per tread",
      "Adjustability": "CNC-machined tread blocks — interchangeable",
      "Nosing Insert": "Bull-nose Ø 30mm rubber insert strip",
      "Casting Direction": "Vertical (standing orientation)",
      "Casting Cycle": "18–24 hr cure cycle",
      "Approx. Mold Weight": "1,800 kg (12-tread config)",
    },
    drawings: {
      hasTopView: false,
      hasSectionView: true,
      hasIsometricView: true,
      has3DRender: false,
      drawingRef: "ASTRO-STM-2400-REV01",
      scale: "1:15",
    },
  },

  // ─────────────────────────────────────────────
  // EPS FOAM SOLUTIONS
  // ─────────────────────────────────────────────
  {
    id: "EPS-VF-300",
    code: "EPS-VF-300",
    category: "eps-foam",
    subcategory: "void-formers",
    name: "Rectangular EPS Void Former — 300 Series",
    shortName: "Void Former",
    badge: "High Density",
    image: "/images/Precast (14).jpeg",
    description: "CNC hot-wire cut EPS void former for creating hollow cores in precast decks, beams, and walls. Poly-laminated non-stick surface for clean extraction. Class A fire retardant.",
    applications: ["Hollow-Core Slabs", "Bridge Deck Voids", "Rib & Beam Systems", "Lightweight Wall Panels"],
    dimensions: {
      "Standard Block Size": "300 × 300 × 1200 mm (custom any size)",
      "CNC Accuracy": "±1.5 mm (hotwire precision)",
      "Min Wall Passage": "50 mm (for vibrator access)",
      "Anchor Slots": "Pre-routed at 600 mm c/c",
      "Max Single Length": "6000 mm (jointed)",
    },
    specs: {
      "EPS Foam Grade": "EPS 29 — 1.8 lb/cu ft (29 kg/m³)",
      "Compressive Strength": "≥ 10.9 psi (75 kPa at 10% deformation)",
      "Water Absorption": "< 2.0% by volume (28-day immersion)",
      "Surface Coating": "Poly-laminated non-stick skin (optional)",
      "Fire Rating": "Class A Fire Retardant (ASTM E84)",
      "R-Value": "R-10 per 100 mm thickness",
      "Lead Time": "3–5 working days from DXF file",
      "Tolerance": "±1.5 mm all dimensions",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: false,
      has3DRender: false,
      drawingRef: "ASTRO-EPS-VF-300-REV02",
      scale: "1:10",
    },
  },

  {
    id: "EPS-BK-150",
    code: "EPS-BK-150",
    category: "eps-foam",
    subcategory: "blockouts",
    name: "Circular Blockout Former — Ø150mm",
    shortName: "Pipe Blockout",
    badge: "Standard Utility",
    image: "/images/Precast (16).jpeg",
    description: "CNC hot-wire cut cylindrical EPS blockout for pipe penetrations through precast walls, slabs, and foundation elements. Available Ø50–600mm. Tapered ends for easy removal.",
    applications: ["Pipe Penetration Sleeves", "Anchor Bolt Pockets", "Conduit Pass-throughs", "Drain Holes in Slabs"],
    dimensions: {
      "Diameter Range": "Ø 50 mm to Ø 600 mm",
      "Standard Length": "200 mm / 300 mm / custom",
      "Wall Taper": "2° per side for extraction",
      "End Cap Style": "Flat, Chamfered, or T-ended",
      "Min Order Qty": "50 units per size",
    },
    specs: {
      "EPS Foam Grade": "EPS 20 — 1.25 lb/cu ft (20 kg/m³)",
      "Compressive Strength": "≥ 7.3 psi (50 kPa at 10%)",
      "Surface Coating": "Poly-laminated (prevents bond to concrete)",
      "Taper Angle": "2° (extraction without damage)",
      "Fire Rating": "Class B Fire Retardant",
      "Dimensional Accuracy": "±1.0 mm diameter",
      "Lead Time": "2–3 working days",
      "Packaging": "Bundle of 20 units with plastic wrap",
    },
    drawings: {
      hasTopView: true,
      hasSectionView: true,
      hasIsometricView: false,
      has3DRender: false,
      drawingRef: "ASTRO-EPS-BK-150-REV01",
      scale: "1:5",
    },
  },

];

// ─────────────────────────────────────────────
// Helper: group by category & subcategory
// ─────────────────────────────────────────────
export const CATEGORY_GROUPS = {
  "steel-molds": {
    label: "Steel Molds",
    subcategories: {
      drainage:   { label: "Drainage & Utility" },
      utility:    { label: "Chamber & Manhole" },
      structural: { label: "Structural & Panel" },
    },
  },
  "eps-foam": {
    label: "EPS Foam Solutions",
    subcategories: {
      "void-formers": { label: "Void Formers" },
      blockouts:      { label: "Blockouts & Sleeves" },
    },
  },
};

export function getProductsBySubcategory(subcategory) {
  return PRODUCT_CATALOG.filter((p) => p.subcategory === subcategory);
}

export function getProductById(id) {
  return PRODUCT_CATALOG.find((p) => p.id === id);
}
