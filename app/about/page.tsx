import type { Metadata } from "next";
import Image from "next/image";
import { C, jk, dm } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";

const a = CONTENT.about;

export const metadata: Metadata = {
  title: a.meta.title,
  description: a.meta.description,
  openGraph: { title: a.meta.ogTitle, description: a.meta.ogDescription },
  alternates: { canonical: "https://asanka.one/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        dark
        label={a.hero.label}
        title={a.hero.title}
        body={a.hero.body}
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div
          className="two-col-grid"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
        >
          <div>
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24 }}>
              <Image
                src="/portrait.png"
                alt="Asanka — Strategic Consultant"
                width={540}
                height={680}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            <div style={{ background: C.navy, borderRadius: 14, padding: "24px 28px" }}>
              <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>
                Get in Touch
              </div>
              <a href={`mailto:${a.background.email}`} style={{ color: C.accent, fontSize: 15, fontFamily: jk, textDecoration: "none" }}>
                {a.background.email}
              </a>
            </div>
          </div>

          <div>
            <Label>Background</Label>
            <h2
              style={{ fontFamily: jk, fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}
            >
              {a.background.heading}
            </h2>
            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 24, fontFamily: dm }}>
              {a.background.body1}
            </p>
            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 40, fontFamily: dm }}>
              {a.background.body2}
            </p>

            <Label>How I Work</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 40 }}>
              {a.background.workingStyle.map((item) => (
                <div
                  key={item}
                  style={{
                    background: C.creamDark,
                    borderRadius: 10,
                    padding: "16px 20px",
                    fontFamily: jk,
                    fontSize: 14,
                    fontWeight: 600,
                    color: C.navy,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: C.accent }} aria-hidden="true">✦</span> {item}
                </div>
              ))}
            </div>

            <div style={{ background: C.navy, borderRadius: 14, padding: "32px 28px", marginBottom: 28 }}>
              <h3 style={{ fontFamily: jk, fontWeight: 800, color: "white", fontSize: 18, marginBottom: 16 }}>
                {a.background.ctaHeading}
              </h3>
              <Button href="/contact">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
