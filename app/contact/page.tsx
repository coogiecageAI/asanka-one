import type { Metadata } from "next";
import { C, jk, dm } from "@/lib/constants";
import PageHero from "@/components/PageHero";
import Label from "@/components/ui/Label";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Asanka.one",
  description:
    "Get in touch with Asanka for consulting, mentoring, strategy papers, tools, or strategic collaboration.",
  openGraph: {
    title: "Contact Asanka | Start a Conversation",
    description:
      "Get in touch for consulting support, mentoring, strategy papers, or practical tools.",
  },
  alternates: { canonical: "https://asanka.one/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        dark
        label="Contact"
        title="Get in Touch"
        body="Whether the need is consulting support, mentoring, strategy papers, or practical tools, a conversation is welcome."
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
                href="mailto:questions@asanka.one"
                style={{ color: C.accent, fontSize: 18, fontFamily: jk, fontWeight: 700, textDecoration: "none" }}
              >
                questions@asanka.one
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
                &ldquo;Clear thinking starts with a good conversation.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
