import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { C, jk, dm } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import Label from "@/components/ui/Label";
import Card from "@/components/ui/Card";
import ArrowLink from "@/components/ui/ArrowLink";
import Button from "@/components/ui/Button";
import ClientLogoGrid from "@/components/ClientLogoGrid";

const h = CONTENT.home;

export const metadata: Metadata = {
  title: h.meta.title,
  description: h.meta.description,
  openGraph: { title: h.meta.ogTitle, description: h.meta.ogDescription },
  alternates: { canonical: "https://asanka.one" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: C.navy, paddingTop: 0, position: "relative", overflow: "hidden" }}
        aria-label="Hero"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.035,
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,196,176,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -100,
            left: 80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />
        <div
          className="hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "148px 32px 100px",
            display: "grid",
            gridTemplateColumns: "1fr 380px",
            gap: 80,
            alignItems: "center",
            position: "relative",
          }}
        >
          <div>
            <Label light>{h.hero.label}</Label>
            <h1
              style={{
                fontFamily: jk,
                fontSize: "clamp(38px,5vw,60px)",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.035em",
                lineHeight: 1.08,
                marginBottom: 24,
              }}
            >
              {h.hero.line1}
              <br />
              <span style={{ color: C.accent }}>{h.hero.line2}</span>
              <br />
              {h.hero.line3}
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 17,
                lineHeight: 1.75,
                marginBottom: 14,
                maxWidth: 520,
                fontFamily: dm,
              }}
            >
              {h.hero.body1}
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 44,
                maxWidth: 520,
                fontFamily: dm,
              }}
            >
              {h.hero.body2}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button href={h.hero.btn1Href}>{h.hero.btn1Label}</Button>
              <Button href={h.hero.btn2Href} ghost light>{h.hero.btn2Label}</Button>
            </div>
          </div>

          <div className="portrait-col" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1.5px solid rgba(255,255,255,0.12)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                position: "relative",
              }}
            >
              <Image
                src="/portrait.png"
                alt="Asanka — Strategic Consultant and AI Advisor"
                width={380}
                height={480}
                style={{ width: "100%", height: "auto", display: "block", filter: "brightness(0.92)" }}
                priority
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(11,25,41,0.85))",
                  padding: "40px 24px 24px",
                }}
              >
                <div style={{ fontFamily: jk, fontWeight: 700, fontSize: 18, color: "white" }}>{h.hero.portraitName}</div>
                <div style={{ fontFamily: dm, fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>
                  {h.hero.portraitRole}
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -12,
                right: -12,
                width: 60,
                height: 60,
                borderRadius: 12,
                background: C.accent,
                opacity: 0.18,
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -12,
                left: -12,
                width: 40,
                height: 40,
                borderRadius: 8,
                background: C.gold,
                opacity: 0.2,
              }}
            />
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section style={{ background: C.cream, padding: "100px 32px" }} aria-label="About">
        <div
          className="two-col-grid"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <div style={{ position: "relative" }}>
            <div style={{ background: C.navy, borderRadius: 18, padding: "48px 40px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                {h.about.stats.map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: jk, fontSize: 44, fontWeight: 800, color: C.accent, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 8, lineHeight: 1.4, fontFamily: dm }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", bottom: -14, right: -14, width: 72, height: 72, borderRadius: 14, background: C.accent, opacity: 0.14 }}
            />
          </div>
          <div>
            <Label>About</Label>
            <h2
              style={{
                fontFamily: jk,
                fontSize: "clamp(28px,3vw,38px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: "-0.03em",
                marginBottom: 20,
                lineHeight: 1.15,
              }}
            >
              {h.about.heading}
            </h2>
            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 32, fontFamily: dm }}>
              {h.about.body}
            </p>
            <ArrowLink href={h.about.linkHref}>{h.about.link}</ArrowLink>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ background: C.creamDark, padding: "100px 32px" }} aria-label="Services">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Label>{h.services.label}</Label>
            <h2
              style={{
                fontFamily: jk,
                fontSize: "clamp(28px,3.5vw,40px)",
                fontWeight: 800,
                color: C.navy,
                letterSpacing: "-0.03em",
              }}
            >
              {h.services.heading}
            </h2>
          </div>
          <div
            className="services-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}
          >
            {h.services.items.map((s) => (
              <Card key={s.title} clickable>
                <div style={{ fontSize: 20, color: C.accent, marginBottom: 14 }} aria-hidden="true">{s.icon}</div>
                <h3 style={{ fontFamily: jk, fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 10, lineHeight: 1.35 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.65, marginBottom: 24, fontFamily: dm }}>{s.body}</p>
                <ArrowLink href="/services">Explore Service</ArrowLink>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capability framework */}
      <section style={{ background: C.navy, padding: "100px 32px", position: "relative", overflow: "hidden" }} aria-label="Capabilities">
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <Label light>{h.capabilities.label}</Label>
            <h2 style={{ fontFamily: jk, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
              {h.capabilities.heading}
            </h2>
          </div>
          <div className="caps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>
            {h.capabilities.items.map((c, i) => (
              <div
                key={c.label}
                style={{
                  background: c.accent ? C.accent : C.navyLight,
                  padding: "44px 30px",
                  borderRadius: i === 0 ? "12px 0 0 12px" : i === 3 ? "0 12px 12px 0" : "0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", top: 14, right: 18, fontFamily: jk, fontSize: 52, fontWeight: 800, color: c.accent ? "rgba(11,25,41,0.13)" : "rgba(255,255,255,0.06)", lineHeight: 1 }}
                >
                  {c.n}
                </div>
                <div style={{ width: 32, height: 3, background: c.accent ? C.navy : C.accent, borderRadius: 2, marginBottom: 20 }} aria-hidden="true" />
                <h3 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: c.accent ? C.navy : "white", marginBottom: 10 }}>{c.label}</h3>
                <p style={{ fontSize: 14, color: c.accent ? "rgba(11,25,41,0.62)" : "rgba(255,255,255,0.52)", lineHeight: 1.6, fontFamily: dm }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Partners section */}
      <section style={{ background: "#ffffff", padding: "80px 32px" }} aria-label="Clients and Partners">
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Label>Clients and Partners</Label>
          <ClientLogoGrid />
          <p style={{ marginTop: 36, fontSize: 12, color: C.textLight, fontFamily: dm }}>
            {h.clients.disclaimer}
          </p>
        </div>
      </section>

      {/* Mentoring & Tools split */}
      <section style={{ background: C.creamDark, padding: "100px 32px" }} aria-label="Growth and execution">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <Label>{h.growth.label}</Label>
          </div>
          <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {h.growth.cards.map((card, i) => (
              <div
                key={card.title}
                style={{
                  background: i === 0 ? C.navy : C.navyMid,
                  borderRadius: 18,
                  padding: "56px 48px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${i === 0 ? "rgba(0,196,176,0.07)" : "rgba(201,168,76,0.06)"} 0%, transparent 70%)`,
                  }}
                />
                <h3 style={{ fontFamily: jk, fontSize: 26, fontWeight: 800, color: "white", marginBottom: 16, letterSpacing: "-0.02em" }}>{card.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, lineHeight: 1.75, marginBottom: 36, fontFamily: dm }}>{card.body}</p>
                <ArrowLink href={card.href}>{card.link}</ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section style={{ background: C.cream, padding: "80px 32px", borderTop: "1px solid rgba(0,0,0,0.06)" }} aria-label="Values">
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <Label>{h.values.label}</Label>
          <Image
            src="/asankaone-values.png"
            alt="Value Framework: Focus, Adapt, Innovate, Thrive"
            width={1000}
            height={400}
            style={{ width: "100%", height: "auto", borderRadius: 16 }}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ background: C.navy, padding: "100px 32px", position: "relative", overflow: "hidden" }} aria-label="Contact call to action">
        <div aria-hidden="true" style={{ position: "absolute", bottom: -100, left: -80, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Label light>{h.cta.label}</Label>
          <h2 style={{ fontFamily: jk, fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>
            {h.cta.heading}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 17, lineHeight: 1.75, marginBottom: 44, fontFamily: dm }}>
            {h.cta.body}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Button href={h.cta.btn1Href}>{h.cta.btn1Label}</Button>
            <Button href={h.cta.btn2Href} ghost light>{h.cta.btn2Label}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
