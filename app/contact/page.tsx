import type { Metadata } from "next";
import { C, jk } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Label from "@/components/ui/Label";
import ContactForm from "./ContactForm";

const c = CONTENT.contact;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  openGraph: { title: c.meta.ogTitle, description: c.meta.ogDescription },
  alternates: { canonical: "https://asanka.one/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        dark
        label={c.hero.label}
        title={c.hero.title}
        body={c.hero.body}
      />

      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div
          className="two-col-grid"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
        >
          <div>
            <Label>Start a Conversation</Label>
            <ContactForm />
          </div>

          <div>
            <div style={{ background: C.navy, borderRadius: 18, padding: "48px 40px", marginBottom: 20 }}>
              <div
                style={{
                  fontFamily: jk,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 12,
                }}
              >
                Email
              </div>
              <a
                href={`mailto:${c.email}`}
                style={{ color: C.accent, fontSize: 18, fontFamily: jk, fontWeight: 700, textDecoration: "none" }}
              >
                {c.email}
              </a>
            </div>
            <div
              style={{
                background: C.creamDark,
                borderRadius: 14,
                padding: "32px 32px",
                border: "1px solid rgba(0,0,0,0.07)",
              }}
            >
              <p style={{ fontFamily: jk, fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.5 }}>
                &ldquo;{c.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
