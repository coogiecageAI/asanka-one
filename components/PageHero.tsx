import { C, jk, dm } from "@/lib/constants";
import Label from "./ui/Label";

interface PageHeroProps {
  label: string;
  title: string;
  body?: string;
  dark?: boolean;
}

export default function PageHero({ label, title, body, dark }: PageHeroProps) {
  return (
    <section
      style={{
        background: dark ? C.navy : C.navyMid,
        paddingTop: 130,
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <Label light>{label}</Label>
        <h1
          style={{
            fontFamily: jk,
            fontSize: "clamp(32px,4.5vw,52px)",
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.03em",
            marginBottom: 20,
            maxWidth: 680,
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
        {body && (
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 560,
              fontFamily: dm,
            }}
          >
            {body}
          </p>
        )}
      </div>
    </section>
  );
}
