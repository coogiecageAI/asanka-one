"use client";

import { useState } from "react";

const CLIENT_LOGOS = [
  { file: "Barclays_Bank.png",           name: "Barclays" },
  { file: "hsbc.jpg",                    name: "HSBC" },
  { file: "Deutsche_Bank.png",           name: "Deutsche Bank" },
  { file: "citibank.jpg",                name: "Citi" },
  { file: "shell.webp",                  name: "Shell" },
  { file: "genworth-og.jpeg",            name: "Genworth" },
  { file: "GE-logo.jpg",                 name: "GE" },
  { file: "EY.png",                      name: "EY" },
  { file: "Deloitte-Logo-700x394.png",   name: "Deloitte" },
  { file: "pwc.png",                     name: "PwC" },
  { file: "Paypal_2014_logo.png",        name: "PayPal" },
  { file: "ebay.jpg",                    name: "eBay" },
  { file: "nab.jpeg",                    name: "NAB" },
  { file: "IOM.svg",                     name: "IOM" },
  { file: "CS.png",                      name: "Credit Suisse" },
];

function LogoTile({ file, name }: { file: string; name: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 20px",
        borderRadius: 12,
        border: "1px solid rgba(0,0,0,0.07)",
        background: hov ? "#f8f8f8" : "#ffffff",
        transition: "all 0.2s",
        minHeight: 90,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/clients/${file}`}
        alt={name}
        style={{
          maxWidth: "100%",
          maxHeight: 52,
          objectFit: "contain",
          filter: hov ? "none" : "grayscale(100%)",
          opacity: hov ? 1 : 0.55,
          transition: "filter 0.25s, opacity 0.25s",
        }}
      />
    </div>
  );
}

export default function ClientLogoGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 16,
      }}
      className="client-logo-grid"
    >
      {CLIENT_LOGOS.map((logo) => (
        <LogoTile key={logo.file} file={logo.file} name={logo.name} />
      ))}
    </div>
  );
}
