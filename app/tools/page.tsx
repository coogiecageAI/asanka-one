import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const t = CONTENT.tools;

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  openGraph: { title: t.meta.ogTitle, description: t.meta.ogDescription },
  alternates: { canonical: "https://asanka.one/tools" },
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        dark
        label={t.hero.label}
        title={t.hero.title}
        body={t.hero.body}
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="three-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {t.items.map((item) => (
              <Card key={item.title} style={{ padding: "36px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ fontSize: 22, color: C.accent }} aria-hidden="true">{item.icon}</div>
                  <span
                    style={{
                      background: C.accentDim,
                      color: C.accent,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontFamily: jk,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <h2 style={{ fontFamily: jk, fontSize: 18, fontWeight: 800, color: C.navy, marginBottom: 12 }}>{item.title}</h2>
                <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.65, fontFamily: dm }}>{item.body}</p>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: 56, background: C.navy, borderRadius: 18, padding: "56px 48px", textAlign: "center" }}>
            <h3 style={{ fontFamily: jk, fontSize: 28, fontWeight: 800, color: "white", marginBottom: 16 }}>
              {t.cta.heading}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, marginBottom: 32, fontFamily: dm }}>
              {t.cta.body}
            </p>
            <Button href={t.cta.btnHref}>{t.cta.btnLabel}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
