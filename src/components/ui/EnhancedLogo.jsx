// src/components/ui/EnhancedLogo.jsx
import React from 'react';

const EnhancedLogo = ({ size = 80, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="outerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#02496a" />
            <stop offset="50%" stopColor="#035678" />
            <stop offset="100%" stopColor="#02496a" />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <filter id="textShadow">
            <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Main circle background */}
        <circle 
          cx="100" 
          cy="100" 
          r="95" 
          fill="url(#outerGradient)" 
          stroke="#fff" 
          strokeWidth="3"
        />
        
        {/* Inner decorative circle */}
        <circle 
          cx="100" 
          cy="100" 
          r="85" 
          fill="none" 
          stroke="#fff" 
          strokeWidth="1" 
          opacity="0.5"
        />
        
        {/* Building silhouette in center */}
        <g transform="translate(100, 60)">
          {/* Central building */}
          <rect x="-8" y="0" width="16" height="35" fill="#fff"/>
          {/* Left buildings */}
          <rect x="-25" y="8" width="12" height="27" fill="#d49b06"/>
          <rect x="-40" y="15" width="10" height="20" fill="#fff"/>
          {/* Right buildings */}
          <rect x="13" y="8" width="12" height="27" fill="#d49b06"/>
          <rect x="30" y="15" width="10" height="20" fill="#fff"/>
          
          {/* Building windows */}
          <rect x="-6" y="5" width="2" height="3" fill="#02496a"/>
          <rect x="-2" y="5" width="2" height="3" fill="#02496a"/>
          <rect x="2" y="5" width="2" height="3" fill="#02496a"/>
          <rect x="-6" y="12" width="2" height="3" fill="#02496a"/>
          <rect x="-2" y="12" width="2" height="3" fill="#02496a"/>
          <rect x="2" y="12" width="2" height="3" fill="#02496a"/>
        </g>
        
        {/* Top curved text - TARIQ AL NUR AL ARABI */}
        <path
          id="topCircle"
          d="M 40 100 A 60 60 0 0 1 160 100"
          fill="none"
        />
        <text fontSize="14" fontWeight="bold" fill="url(#textGradient)" filter="url(#textShadow)">
          <textPath href="#topCircle" startOffset="50%" textAnchor="middle">
            TARIQ AL NUR AL ARABI
          </textPath>
        </text>
        
        {/* Bottom curved text - Arabic */}
        <path
          id="bottomCircle"
          d="M 160 100 A 60 60 0 0 1 40 100"
          fill="none"
        />
        <text fontSize="16" fontWeight="bold" fill="url(#textGradient)" filter="url(#textShadow)" fontFamily="serif">
          <textPath href="#bottomCircle" startOffset="50%" textAnchor="middle">
            طريق النور العربي
          </textPath>
        </text>
        
        {/* Center abbreviation */}
        <text 
          x="100" 
          y="140" 
          fontSize="18" 
          fontWeight="bold" 
          fill="#fff" 
          textAnchor="middle"
          filter="url(#textShadow)"
        >
          TNAC
        </text>
        
        {/* Decorative elements */}
        <circle cx="100" cy="25" r="2" fill="#fff"/>
        <circle cx="100" cy="175" r="2" fill="#fff"/>
        <circle cx="25" cy="100" r="2" fill="#fff"/>
        <circle cx="175" cy="100" r="2" fill="#fff"/>
      </svg>
    </div>
  );
};

export default EnhancedLogo;