"use client";

import { useState } from "react";
import Link from "next/link";
import { C, jk, dm } from "@/lib/constants";
import { LogoMark } from "./Navbar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Mentoring", href: "/mentoring" },
  { label: "Tools", href: "/tools" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Security & Compliance", href: "/security-compliance" },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "block",
        color: hov ? "white" : "rgba(255,255,255,0.52)",
        fontSize: 14,
        fontFamily: jk,
        padding: "4px 0",
        transition: "color 0.18s",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </Link>
  );
}

function LegalLink({ label, href }: { label: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        display: "block",
        color: hov ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.42)",
        fontSize: 13,
        fontFamily: jk,
        padding: "3px 0",
        transition: "color 0.18s",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#060e18", color: "white", padding: "72px 32px 36px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 56,
            paddingBottom: 52,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            marginBottom: 28,
          }}
        >
          <div>
            <LogoMark />
            <p
              style={{
                color: "rgba(255,255,255,0.42)",
                fontSize: 14,
                lineHeight: 1.75,
                marginTop: 20,
                maxWidth: 270,
                fontFamily: dm,
              }}
            >
              Strategic consulting, mentoring, and practical tools for a changing world.
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: jk,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.32)",
                marginBottom: 16,
              }}
            >
              Navigation
            </div>
            {NAV_LINKS.map((item) => (
              <FooterLink key={item.href} label={item.label} href={item.href} />
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily: jk,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.32)",
                marginBottom: 16,
              }}
            >
              Get in Touch
            </div>
            <a
              href="mailto:questions@asanka.one"
              style={{ color: C.accent, fontSize: 14, textDecoration: "none", fontFamily: jk }}
            >
              questions@asanka.one
            </a>

            <div style={{ marginTop: 28 }}>
              <div
                style={{
                  fontFamily: jk,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.32)",
                  marginBottom: 14,
                }}
              >
                Legal
              </div>
              {LEGAL_LINKS.map((item) => (
                <LegalLink key={item.href} label={item.label} href={item.href} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.32)", fontSize: 13 }}>
            © 2026 Asanka.one. All rights reserved.
          </span>
          <span style={{ color: "rgba(255,255,255,0.22)", fontSize: 12 }}>
            Selected organizations through prior professional experience and engagements.
          </span>
        </div>
      </div>
    </footer>
  );
}
