"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { C, jk } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Mentoring", href: "/mentoring" },
  { label: "Tools", href: "/tools" },
  { label: "Contact", href: "/contact" },
];

function NavItem({ label, href, active }: { label: string; href: string; active: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      style={{
        background: "none",
        border: "none",
        fontFamily: jk,
        fontSize: 14,
        fontWeight: 500,
        color: active ? C.accent : hov ? "white" : "rgba(255,255,255,0.7)",
        letterSpacing: "0.02em",
        transition: "color 0.18s",
        padding: "2px 0",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function LogoMark() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} aria-label="Asanka.one home">
      <Image
        src="/logo.png"
        alt="Asanka.one logo"
        width={44}
        height={44}
        style={{ objectFit: "contain" }}
        priority
      />
      <div style={{ fontFamily: jk, fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em", color: "white", lineHeight: 1 }}>
        asanka<span style={{ color: C.accent }}>.one</span>
      </div>
    </Link>
  );
}

export { LogoMark };

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: scrolled ? "rgba(11,25,41,0.96)" : C.navy,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <LogoMark />

        {/* Desktop nav */}
        <div
          style={{ display: "flex", gap: 28, alignItems: "center", flex: 1, justifyContent: "center" }}
          role="menubar"
          aria-label="Site navigation"
        >
          {NAV_LINKS.map((item) => (
            <NavItem key={item.href} label={item.label} href={item.href} active={pathname === item.href} />
          ))}
        </div>

        <Link
          href="/contact"
          style={{
            fontFamily: jk,
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.02em",
            padding: "11px 22px",
            borderRadius: 7,
            background: C.accent,
            color: C.navy,
            textDecoration: "none",
            whiteSpace: "nowrap",
            transition: "background 0.18s",
          }}
        >
          Start a Conversation
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            fontSize: 24,
            cursor: "pointer",
            padding: 4,
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: C.navyMid,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "20px 32px",
          }}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                fontFamily: jk,
                fontSize: 16,
                fontWeight: 500,
                color: pathname === item.href ? C.accent : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: 20,
              fontFamily: jk,
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 24px",
              borderRadius: 7,
              background: C.accent,
              color: C.navy,
              textDecoration: "none",
            }}
          >
            Start a Conversation
          </Link>
        </div>
      )}
    </nav>
  );
}
