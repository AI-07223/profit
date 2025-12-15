import React from 'react';

export const Logo = ({ className = "h-12" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      className={className}
      aria-label="Profitplus Gaming Logo"
    >
      {/* Background shape for the icon part - Luxury diamond/shield concept */}
      <path
        d="M20 10 L60 10 L70 40 L40 70 L10 40 Z"
        fill="#D4AF37"
        opacity="0.9"
      />

      {/* Icon details - Stylized 'P' inside */}
      <path
        d="M35 25 L35 55 M35 25 L50 25 C58 25 58 40 50 40 L35 40"
        stroke="black"
        strokeWidth="4"
        fill="none"
      />

      {/* Text - Profitplus */}
      <text
        x="85"
        y="38"
        fontFamily="serif"
        fontSize="32"
        fontWeight="bold"
        fill="#D4AF37"
        letterSpacing="1"
      >
        PROFITPLUS
      </text>

      {/* Text - Gaming */}
      <text
        x="85"
        y="65"
        fontFamily="sans-serif"
        fontSize="18"
        fontWeight="normal"
        fill="#FFFFFF"
        letterSpacing="4"
      >
        GAMING
      </text>
    </svg>
  );
};
export default Logo;
