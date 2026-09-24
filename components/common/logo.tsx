import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <svg width="220" height="42" viewBox="0 0 250 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Aggregation Hex Icon */}
        <g transform="translate(2, 5)">
          <path d="M15 2 L25 8 L15 14 L5 8 Z" fill="#2563EB"/>
          <path d="M5 8 L15 14 L15 24 L5 18 Z" fill="#1D4ED8"/>
          <path d="M25 8 L35 2 L35 18 L25 24 Z" fill="#3B82F6"/>
          <path d="M15 24 L25 18 L35 24 L25 30 Z" fill="#10B981"/>
          <path d="M15 24 L25 30 L25 40 L15 34 Z" fill="#059669"/>
          <path d="M25 30 L35 24 L35 34 L25 40 Z" fill="#047857"/>
        </g>
        {/* Full Text Visibility */}
        <text x="48" y="33" fontFamily="Inter, system-ui, sans-serif" fontWeight="900" fontSize="20" fill="#0F172A" letterSpacing="0.5">
          FACTORY<tspan fill="#10B981">2</tspan>SHOP
        </text>
      </svg>
    </div>
  );
}