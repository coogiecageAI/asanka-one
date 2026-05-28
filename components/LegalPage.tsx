import { C, jk, dm } from "@/lib/constants";
import PageHero from "./PageHero";

interface Section {
  h: string;
  b: string;
}

interface LegalPageProps {
  title: string;
  sections: Section[];
}

export default function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <>
      <PageHero dark label="Legal" title={title} />
      <section style={{ background: C.cream, padding: "72px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {sections.map((s, i) => (
            <div
              key={s.h}
              style={{
                marginBottom: 44,
                paddingBottom: 44,
                borderBottom: i < sections.length - 1 ? "1px solid rgba(0,0,0,0.07)" : "none",
              }}
            >
              <h2 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 14 }}>{s.h}</h2>
              <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.8, fontFamily: dm }}>{s.b}</p>
            </div>
          ))}
          <div style={{ background: C.navy, borderRadius: 14, padding: "28px 32px", marginTop: 16 }}>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, fontFamily: dm }}>
              For questions or requests, contact:{" "}
            </span>
            <a
              href="mailto:questions@asanka.one"
              style={{ color: C.accent, fontSize: 14, fontFamily: jk, fontWeight: 600, textDecoration: "none" }}
            >
              questions@asanka.one
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
