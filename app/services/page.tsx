import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services | Asanka.one",
  description:
    "Explore consulting services including strategic advisory, management consulting, AI and digital enablement, governance insight, and executive decision support.",
  openGraph: {
    title: "Consulting Services | Strategy, Management, AI & Governance",
    description:
      "Consulting services spanning strategic advisory, management consulting, AI enablement, governance insight, and executive thinking partnership.",
  },
  alternates: { canonical: "https://asanka.one/services" },
};

const SERVICES = [
  {
    t: "Strategic Advisory",
    b: "Business strategy, growth planning, prioritization, and leadership decision support.",
    i: "◈",
  },
  {
    t: "Management Consulting",
    b: "Operating model improvement, process refinement, transformation support, and execution planning.",
    i: "⬡",
  },
  {
    t: "AI & Digital Enablement",
    b: "Practical AI-era thinking, workflow redesign, and modernization support shaped by business value rather than hype.",
    i: "◉",
  },
  {
    t: "Governance & Financial Insight",
    b: "Guidance informed by experience in banking, finance, risk, governance, and regulated environments.",
    i: "◫",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        dark
        label="Services"
        title="Services built for leaders facing complexity, growth, and change."
        body="Focused consulting support where strategy, governance, execution, and modern technology intersect."
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
            {SERVICES.map((s) => (
              <Card key={s.t} style={{ padding: "40px 36px" }}>
                <div style={{ fontSize: 24, color: C.accent, marginBottom: 16 }} aria-hidden="true">{s.i}</div>
                <h2 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 14, letterSpacing: "-0.02em" }}>{s.t}</h2>
                <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7, fontFamily: dm }}>{s.b}</p>
              </Card>
            ))}
          </div>

          <Card style={{ padding: "44px 48px", background: `${C.navyLight}22`, border: `1px solid ${C.accent}22` }}>
            <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
              <div>
                <div style={{ fontSize: 24, color: C.accent, marginBottom: 12 }} aria-hidden="true">◬</div>
                <h2 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 10 }}>Executive Thinking Partner</h2>
                <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7, maxWidth: 560, fontFamily: dm }}>
                  Independent, high-trust support for founders, executives, and business owners navigating complexity and change.
                </p>
              </div>
              <Button href="/contact">Start a Conversation</Button>
            </div>
          </Card>
        </div>
      </section>

      <section style={{ background: C.navy, padding: "80px 32px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: jk, fontSize: 36, fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>
            Need a clear strategic partner?
          </h2>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </section>
    </>
  );
}
