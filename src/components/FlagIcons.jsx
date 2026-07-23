import React from "react";

export function USFlag({ size = 14, className }) {
  return (
    <svg width={size} height={Math.round(size * 0.75)} viewBox="0 0 640 480" className={className} style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "2px" }}>
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M0 36.9h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0zm0 73.8h640v36.9H0z"/>
      <path fill="#192f5d" d="M0 0h288v258.5H0z"/>
      <g fill="#fff">
        <g id="s18">
          <g id="s9">
            <g id="s5">
              <polygon points="24,12 29,27 15,17 33,17 19,27"/>
            </g>
            <use href="#s5" x="48"/>
            <use href="#s5" x="96"/>
            <use href="#s5" x="144"/>
            <use href="#s5" x="192"/>
          </g>
          <g id="s4" x="24" y="24">
            <polygon points="24,12 29,27 15,17 33,17 19,27"/>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function CAFlag({ size = 14, className }) {
  return (
    <svg width={size} height={Math.round(size * 0.75)} viewBox="0 0 640 480" className={className} style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "2px" }}>
      <path fill="#ff0000" d="M0 0h640v480H0z"/>
      <path fill="#fff" d="M160 0h320v480H160z"/>
      <path fill="#ff0000" d="M320 72l23 60 48-28-20 62 65 5-48 45 42 48-64-15 4 65-70-42v68h-20v-68l-70 42 4-65-64 15 42-48-48-45 65-5-20-62 48 28z"/>
    </svg>
  );
}

export function EUFlag({ size = 14, className }) {
  return (
    <svg width={size} height={Math.round(size * 0.75)} viewBox="0 0 640 480" className={className} style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "2px" }}>
      <path fill="#003399" d="M0 0h640v480H0z"/>
      <g fill="#ffcc00">
        <polygon points="320,60 324,72 336,72 326,80 330,92 320,84 310,92 314,80 304,72 316,72"/>
        <polygon points="320,388 324,400 336,400 326,408 330,420 320,412 310,420 314,408 304,400 316,400"/>
        <polygon points="156,224 160,236 172,236 162,244 166,256 156,248 146,256 150,244 140,236 152,236"/>
        <polygon points="484,224 488,236 500,236 490,244 494,256 484,248 474,256 478,244 468,236 480,236"/>
      </g>
    </svg>
  );
}
