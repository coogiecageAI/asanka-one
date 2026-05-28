"use client";

import { useState } from "react";
import { C } from "@/lib/constants";

interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  clickable?: boolean;
}

export default function Card({ children, style: s, clickable }: CardProps) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{
        background: C.white,
        borderRadius: 14,
        padding: "32px 28px",
        border: "1px solid rgba(0,0,0,0.07)",
        transition: "all 0.2s",
        boxShadow: hov ? "0 10px 36px rgba(0,0,0,0.1)" : "none",
        transform: hov && clickable ? "translateY(-3px)" : "none",
        cursor: clickable ? "pointer" : "default",
        ...s,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
}
