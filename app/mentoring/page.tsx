import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";

const m = CONTENT.mentoring;

export const metadata: Metadata = {
  title: m.meta.title,
  description: m.meta.description,
  openGraph: { title: m.meta.ogTitle, description: m.meta.ogDescription },
  alternates: { canonical: "https://asanka.one/mentoring" },
};

export default function MentoringPage() {
  return (
    <>
      <PageHero
        dark
        label={m.hero.label}
        title={m.hero.title}
        body={m.hero.body}
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div
          className="two-col-grid"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
        >
          <div>
            <Label>Approach</Label>
            <h2
              style={{ fontFamily: jk, fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}
            >
              {m.approach.heading}
            </h2>
            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 32, fontFamily: dm }}>
              {m.approach.body}
            </p>
            <Button href={m.approach.btnHref}>{m.approach.btnLabel}</Button>
          </div>

          <div>
            <Label>Themes</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {m.themes.map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#ffffff",
                    borderRadius: 10,
                    padding: "18px 20px",
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <div
                    style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent, marginBottom: 10 }}
                    aria-hidden="true"
                  />
                  <div style={{ fontFamily: jk, fontSize: 14, fontWeight: 600, color: C.navy }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: C.navy, padding: "80px 32px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: jk, fontSize: 36, fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>
            {m.cta.heading}
          </h2>
          <Button href={m.cta.btnHref}>{m.cta.btnLabel}</Button>
        </div>
      </section>
    </>
  );
}
