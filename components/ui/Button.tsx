"use client";

import { useState } from "react";
import Link from "next/link";
import { C, jk } from "@/lib/constants";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  ghost?: boolean;
  light?: boolean;
  style?: React.CSSProperties;
}

export default function Button({ children, href, onClick, ghost, light, style: s }: ButtonProps) {
  const [hov, setHov] = useState(false);

  const base: React.CSSProperties = {
    fontFamily: jk,
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.02em",
    cursor: "pointer",
    padding: "13px 28px",
    borderRadius: 7,
    border: "none",
    transition: "all 0.18s",
    whiteSpace: "nowrap",
    display: "inline-block",
    textDecoration: "none",
    ...s,
  };

  let variantStyle: React.CSSProperties;
  if (!ghost) {
    variantStyle = {
      background: hov ? "#00dfc8" : C.accent,
      color: "white",
      transform: hov ? "translateY(-1px)" : "none",
    };
  } else if (light) {
    variantStyle = {
      background: hov ? "rgba(255,255,255,0.1)" : "transparent",
      color: "white",
      border: `1.5px solid ${hov ? "white" : "rgba(255,255,255,0.35)"}`,
    };
  } else {
    variantStyle = {
      background: hov ? C.navy : "transparent",
      color: hov ? "white" : C.navy,
      border: `1.5px solid ${hov ? C.navy : "rgba(11,25,41,0.22)"}`,
    };
  }

  const combinedStyle = { ...base, ...variantStyle };

  if (href) {
    return (
      <Link
        href={href}
        style={combinedStyle}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combinedStyle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
}
