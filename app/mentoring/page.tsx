import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Mentoring | Asanka.one",
  description:
    "Practical mentoring and coaching for young and experienced professionals seeking career clarity, stronger thinking, leadership presence, and purposeful growth.",
  openGraph: {
    title: "Mentoring & Coaching | Career Clarity, Leadership & Strategic Growth",
    description:
      "Practical mentoring and coaching for professionals seeking career clarity, stronger thinking, and leadership presence.",
  },
  alternates: { canonical: "https://asanka.one/mentoring" },
};

const THEMES = [
  "Career clarity",
  "Strategic thinking",
  "Leadership presence",
  "Communication & positioning",
  "Career transition",
  "Growth with purpose",
];

export default function MentoringPage() {
  return (
    <>
      <PageHero
        dark
        label="Mentoring"
        title="Practical mentoring for professionals building direction, confidence, and momentum."
        body="Support for young and experienced professionals who want to think more strategically, communicate more effectively, and move forward with greater clarity."
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
              Grounded in real-world experience.
            </h2>
            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 32, fontFamily: dm }}>
              Mentoring is practical, supportive, and shaped by real professional experience rather than abstract theory. It helps professionals strengthen thinking, improve decision-making, and position themselves for leadership, consulting, or entrepreneurial growth.
            </p>
            <Button href="/contact">Explore Mentoring Support</Button>
          </div>

          <div>
            <Label>Themes</Label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {THEMES.map((item) => (
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
            Grow with direction.
          </h2>
          <Button href="/contact">Explore Mentoring Support</Button>
        </div>
      </section>
    </>
  );
}
