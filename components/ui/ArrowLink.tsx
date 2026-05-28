"use client";

import { useState } from "react";
import Link from "next/link";
import { C, jk } from "@/lib/constants";

interface ArrowLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ArrowLink({ children, href }: ArrowLinkProps) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: hov ? 10 : 6,
        fontFamily: jk,
        fontSize: 13,
        fontWeight: 600,
        color: C.accent,
        textDecoration: "none",
        transition: "gap 0.2s",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
