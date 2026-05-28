"use client";

import { useState } from "react";
import { C, jk, dm } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 8,
    border: "1.5px solid rgba(0,0,0,0.12)",
    fontFamily: dm,
    fontSize: 15,
    color: C.navy,
    outline: "none",
    background: "#ffffff",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: jk,
    fontSize: 12,
    fontWeight: 600,
    color: C.textMid,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 8,
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `mailto:questions@asanka.one?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
      }}
    >
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="contact-name" style={labelStyle}>Name</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          style={inputStyle}
          autoComplete="name"
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={inputStyle}
          autoComplete="email"
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Tell me what you're working on..."
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>
      <Button>Send Message</Button>
    </form>
  );
}
