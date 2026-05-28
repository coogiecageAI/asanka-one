import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Tools | Asanka.one",
  description:
    "Discover practical web apps, strategy papers, frameworks, and templates designed to improve planning, thinking, prioritization, and execution.",
  openGraph: {
    title: "Tools & Strategy Papers | Web Apps, Frameworks & Practical Insights",
    description:
      "Practical web apps, strategy papers, frameworks, and templates for sharper thinking and stronger execution.",
  },
  alternates: { canonical: "https://asanka.one/tools" },
};

const TOOLS = [
  {
    t: "Web Apps",
    b: "Useful digital tools designed to improve planning, productivity, task execution, and structured thinking.",
    i: "◉",
    status: "Coming Soon",
  },
  {
    t: "Strategy Papers",
    b: "Clear, well-structured papers that translate business and strategic issues into practical insights and actionable ideas.",
    i: "◈",
    status: "Coming Soon",
  },
  {
    t: "Frameworks & Templates",
    b: "Working models and decision tools built for real-world application.",
    i: "⬡",
    status: "Coming Soon",
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHero
        dark
        label="Tools"
        title="Practical tools for sharper thinking and stronger execution."
        body="Alongside consulting and mentoring, practical tools and resources are created to make strategy more usable and execution more structured."
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="three-col-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {TOOLS.map((t) => (
              <Card key={t.t} style={{ padding: "36px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{ fontSize: 22, color: C.accent }} aria-hidden="true">{t.i}</div>
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
                    {t.status}
                  </span>
                </div>
                <h2 style={{ fontFamily: jk, fontSize: 18, fontWeight: 800, color: C.navy, marginBottom: 12 }}>{t.t}</h2>
                <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.65, fontFamily: dm }}>{t.b}</p>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: 56, background: C.navy, borderRadius: 18, padding: "56px 48px", textAlign: "center" }}>
            <h3 style={{ fontFamily: jk, fontSize: 28, fontWeight: 800, color: "white", marginBottom: 16 }}>
              Explore practical resources.
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, marginBottom: 32, fontFamily: dm }}>
              Tools and strategy papers are in development. Get in touch to be notified when they launch.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
