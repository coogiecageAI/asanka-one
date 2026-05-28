import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const s = CONTENT.services;

export const metadata: Metadata = {
  title: s.meta.title,
  description: s.meta.description,
  openGraph: { title: s.meta.ogTitle, description: s.meta.ogDescription },
  alternates: { canonical: "https://asanka.one/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        dark
        label={s.hero.label}
        title={s.hero.title}
        body={s.hero.body}
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
            {s.items.map((item) => (
              <Card key={item.title} style={{ padding: "40px 36px" }}>
                <div style={{ fontSize: 24, color: C.accent, marginBottom: 16 }} aria-hidden="true">{item.icon}</div>
                <h2 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 14, letterSpacing: "-0.02em" }}>{item.title}</h2>
                <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7, fontFamily: dm }}>{item.body}</p>
              </Card>
            ))}
          </div>

          <Card style={{ padding: "44px 48px", background: `${C.navyLight}22`, border: `1px solid ${C.accent}22` }}>
            <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
              <div>
                <div style={{ fontSize: 24, color: C.accent, marginBottom: 12 }} aria-hidden="true">◬</div>
                <h2 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 10 }}>{s.thinkingPartner.title}</h2>
                <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7, maxWidth: 560, fontFamily: dm }}>
                  {s.thinkingPartner.body}
                </p>
              </div>
              <Button href={s.thinkingPartner.btnHref}>{s.thinkingPartner.btnLabel}</Button>
            </div>
          </Card>
        </div>
      </section>

      <section style={{ background: C.navy, padding: "80px 32px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: jk, fontSize: 36, fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>
            {s.cta.heading}
          </h2>
          <Button href={s.cta.btnHref}>{s.cta.btnLabel}</Button>
        </div>
      </section>
    </>
  );
}
