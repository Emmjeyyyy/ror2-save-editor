import React from 'react';

interface SyringeProps {
  size?: number;
  className?: string;
}

const Syringe: React.FC<SyringeProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
       <g transform="rotate(45 50 50)">
          {/* Plunger Handle */}
          <rect x="35" y="5" width="30" height="6" rx="2" fill="#2d3748" />
          <rect x="46" y="11" width="8" height="14" fill="#718096" />
          
          {/* Barrel Body */}
          <rect x="35" y="25" width="30" height="50" rx="2" fill="#1a202c" stroke="#4a5568" strokeWidth="2" />
          
          {/* Liquid */}
          <rect x="39" y="35" width="22" height="36" fill="#dfff4f" />
          
          {/* Flanges */}
          <rect x="30" y="25" width="40" height="6" rx="1" fill="#2d3748" />
          
          {/* Needle Base */}
          <path d="M 40 75 L 50 85 L 60 75 Z" fill="#2d3748" />
          
          {/* Needle */}
          <rect x="48" y="82" width="4" height="18" fill="#e2e8f0" />
       </g>
       
       {/* Optional Glow Effect for the liquid */}
       <defs>
         <filter id="glow">
           <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
           <feMerge>
             <feMergeNode in="coloredBlur"/>
             <feMergeNode in="SourceGraphic"/>
           </feMerge>
         </filter>
       </defs>
    </svg>
  );
};

export default Syringe;