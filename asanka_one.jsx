import { useState, useEffect } from "react";

const PORTRAIT = "data:image/jpeg;base64,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";

const C = {
  navy: "#0b1929",
  navyMid: "#142338",
  navyLight: "#1e3354",
  cream: "#f5f3ef",
  creamDark: "#eceae4",
  white: "#ffffff",
  accent: "#08abec",
  accentDim: "rgba(0,196,176,0.12)",
  gold: "#c9a84c",
  blue: "#2a4fa8",
  textDark: "#0b1929",
  textMid: "#3d4f63",
  textLight: "#7a8fa3",
};

const jk = "'Plus Jakarta Sans', sans-serif";
const dm = "'DM Sans', sans-serif";

const Logo = ({ light = true, size = 1 }) => (
  <div onClick={() => {}} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
    <svg width={52 * size} height={36 * size} viewBox="0 0 90 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6,58 L20,8 L34,58 M10,37 L30,37" stroke={C.gold} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6,58 L20,8 L34,58 M10,37 L30,37" stroke={C.blue} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M44,19 Q44,11 55,11 Q66,11 66,21 Q66,31 54,32 Q42,33 42,44 Q42,55 54,55 Q66,55 66,47" stroke={C.gold} strokeWidth={7} strokeLinecap="round"/>
      <path d="M44,19 Q44,11 55,11 Q66,11 66,21 Q66,31 54,32 Q42,33 42,44 Q42,55 54,55 Q66,55 66,47" stroke={C.blue} strokeWidth={3.5} strokeLinecap="round"/>
    </svg>
    <div style={{ fontFamily: jk, fontWeight: 800, fontSize: 18 * size, letterSpacing: "-0.03em", color: light ? "white" : C.navy, lineHeight: 1 }}>
      asanka<span style={{ color: C.accent }}>.one</span>
    </div>
  </div>
);

const Label = ({ children, light }) => (
  <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.accent, marginBottom: 14, opacity: light ? 0.9 : 1 }}>{children}</div>
);

const Btn = ({ children, onClick, ghost, light, style: s }) => {
  const [hov, setHov] = useState(false);
  const base = { fontFamily: jk, fontWeight: 700, fontSize: 14, letterSpacing: "0.02em", cursor: "pointer", padding: "13px 28px", borderRadius: 7, border: "none", transition: "all 0.18s", whiteSpace: "nowrap", ...s };
  if (!ghost) return <button onClick={onClick} style={{ ...base, background: hov ? "#00dfc8" : C.accent, color: C.navy, transform: hov ? "translateY(-1px)" : "none" }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
  if (light) return <button onClick={onClick} style={{ ...base, background: hov ? "rgba(255,255,255,0.1)" : "transparent", color: "white", border: `1.5px solid ${hov ? "white" : "rgba(255,255,255,0.35)"}` }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
  return <button onClick={onClick} style={{ ...base, background: hov ? C.navy : "transparent", color: hov ? "white" : C.navy, border: `1.5px solid ${hov ? C.navy : "rgba(11,25,41,0.22)"}` }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</button>;
};

const ALink = ({ children, onClick }) => {
  const [hov, setHov] = useState(false);
  return <button onClick={onClick} style={{ display: "inline-flex", alignItems: "center", gap: hov ? 10 : 6, fontFamily: jk, fontSize: 13, fontWeight: 600, color: C.accent, background: "none", border: "none", cursor: "pointer", padding: 0, transition: "gap 0.2s" }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children} <span>→</span></button>;
};

const PageHero = ({ label, title, body, dark }) => (
  <section style={{ background: dark ? C.navy : C.navyMid, paddingTop: 130, paddingBottom: 80 }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
      <Label light>{label}</Label>
      <h1 style={{ fontFamily: jk, fontSize: "clamp(32px,4.5vw,52px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 680, lineHeight: 1.1 }}>{title}</h1>
      {body && <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.75, maxWidth: 560 }}>{body}</p>}
    </div>
  </section>
);

const Card = ({ children, style: s, onClick }) => {
  const [hov, setHov] = useState(false);
  return <div onClick={onClick} style={{ background: C.white, borderRadius: 14, padding: "32px 28px", border: "1px solid rgba(0,0,0,0.07)", transition: "all 0.2s", boxShadow: hov ? "0 10px 36px rgba(0,0,0,0.1)" : "none", transform: hov ? "translateY(-3px)" : "none", cursor: onClick ? "pointer" : "default", ...s }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</div>;
};

const Dot = ({ dark }) => <div style={{ height: 1, background: dark ? "rgba(255,255,255,0.08)" : "rgba(11,25,41,0.07)" }} />;

const Navbar = ({ page, nav }) => {
  const [top, setTop] = useState(true);
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const fn = () => setTop(window.scrollY < 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const items = ["Home","About","Services","Mentoring","Tools","Contact"];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: top ? C.navy : "rgba(11,25,41,0.96)", backdropFilter: "blur(12px)", borderBottom: top ? "none" : "1px solid rgba(255,255,255,0.06)", transition: "all 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
        <div onClick={() => nav("Home")}><Logo /></div>
        <div style={{ display: "flex", gap: 28, alignItems: "center", flex: 1, justifyContent: "center" }}>
          {items.map(it => {
            const [h, setH] = useState(false);
            return <button key={it} onClick={() => nav(it)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: jk, fontSize: 14, fontWeight: 500, color: page === it ? C.accent : h ? "white" : "rgba(255,255,255,0.7)", letterSpacing: "0.02em", transition: "color 0.18s", padding: "2px 0" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{it}</button>;
          })}
        </div>
        <Btn onClick={() => nav("Contact")}>Start a Conversation</Btn>
      </div>
    </nav>
  );
};

const Footer = ({ nav }) => (
  <footer style={{ background: "#060e18", color: "white", padding: "72px 32px 36px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 56, paddingBottom: 52, borderBottom: "1px solid rgba(255,255,255,0.07)", marginBottom: 28 }}>
        <div>
          <Logo />
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14, lineHeight: 1.75, marginTop: 20, maxWidth: 270 }}>Strategic consulting, mentoring, and practical tools for a changing world.</p>
        </div>
        <div>
          <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 16 }}>Navigation</div>
          {["Home","About","Services","Mentoring","Tools","Contact"].map(it => {
            const [h, setH] = useState(false);
            return <button key={it} onClick={() => nav(it)} style={{ display: "block", background: "none", border: "none", color: h ? "white" : "rgba(255,255,255,0.52)", fontSize: 14, fontFamily: jk, cursor: "pointer", padding: "4px 0", transition: "color 0.18s" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{it}</button>;
          })}
        </div>
        <div>
          <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 16 }}>Get in Touch</div>
          <a href="mailto:questions@asanka.one" style={{ color: C.accent, fontSize: 14, textDecoration: "none", fontFamily: jk }}>questions@asanka.one</a>
          <div style={{ marginTop: 28 }}>
            <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 14 }}>Legal</div>
            {["Privacy Policy","Terms of Use","Security & Compliance"].map(it => {
              const [h, setH] = useState(false);
              return <button key={it} onClick={() => nav(it)} style={{ display: "block", background: "none", border: "none", color: h ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.42)", fontSize: 13, fontFamily: jk, cursor: "pointer", padding: "3px 0", transition: "color 0.18s" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{it}</button>;
            })}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span style={{ color: "rgba(255,255,255,0.32)", fontSize: 13 }}>© 2026 Asanka.one. All rights reserved.</span>
        <span style={{ color: "rgba(255,255,255,0.22)", fontSize: 12 }}>Selected organizations through prior professional experience and engagements.</span>
      </div>
    </div>
  </footer>
);

const HomePage = ({ nav }) => (
  <div>
    <section style={{ background: C.navy, paddingTop: 0, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div style={{ position: "absolute", top: -160, right: -160, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,196,176,0.07) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: -100, left: 80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "148px 32px 100px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 80, alignItems: "center", position: "relative" }}>
        <div>
          <Label light>Strategic Consulting · AI Advisory · Mentoring</Label>
          <h1 style={{ fontFamily: jk, fontSize: "clamp(38px,5vw,60px)", fontWeight: 800, color: "white", letterSpacing: "-0.035em", lineHeight: 1.08, marginBottom: 24 }}>
            Strategic clarity for<br/><span style={{ color: C.accent }}>businesses, leaders,</span><br/>and professionals.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, lineHeight: 1.75, marginBottom: 14, maxWidth: 520 }}>
            I help businesses grow, leaders make better decisions, and professionals move forward with confidence through strategy, execution, mentoring, and practical tools.
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.7, marginBottom: 44, maxWidth: 520 }}>
            My work combines experience across banking, finance, governance, transformation, and advisory with a modern, AI-aware approach to problem-solving, decision-making, and delivery.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Btn onClick={() => nav("Contact")}>Work With Me</Btn>
            <Btn ghost light onClick={() => nav("Tools")}>Explore My Tools</Btn>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1.5px solid rgba(255,255,255,0.12)", boxShadow: "0 24px 60px rgba(0,0,0,0.4)", position: "relative" }}>
            <img src={PORTRAIT} alt="Asanka — Strategic Consultant" style={{ width: "100%", display: "block", filter: "brightness(0.92)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(11,25,41,0.85))", padding: "40px 24px 24px" }}>
              <div style={{ fontFamily: jk, fontWeight: 700, fontSize: 18, color: "white" }}>Asanka</div>
              <div style={{ fontFamily: dm, fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Strategic Consultant · AI Advisor · Mentor</div>
            </div>
          </div>
          <div style={{ position: "absolute", top: -12, right: -12, width: 60, height: 60, borderRadius: 12, background: C.accent, opacity: 0.18 }} />
          <div style={{ position: "absolute", bottom: -12, left: -12, width: 40, height: 40, borderRadius: 8, background: C.gold, opacity: 0.2 }} />
        </div>
      </div>
    </section>

    <section style={{ background: C.navyMid, padding: "24px 32px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 0, justifyContent: "center", flexWrap: "wrap" }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: jk, marginRight: 32, whiteSpace: "nowrap" }}>Clients I've Worked With</span>
        {["Barclays","Credit Suisse","HSBC","Deutsche Bank","Citi Group","Shell","Genworth","GE"].map((c, i) => (
          <span key={c} style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", fontFamily: jk, padding: "4px 16px", borderRight: i < 7 ? "1px solid rgba(255,255,255,0.08)" : "none", whiteSpace: "nowrap" }}>{c}</span>
        ))}
      </div>
    </section>

    <section style={{ background: C.cream, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ background: C.navy, borderRadius: 18, padding: "48px 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              {[["15+","Years Experience"],["50+","Engagements"],["9","Major Clients"],["3","Continents"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: jk, fontSize: 44, fontWeight: 800, color: C.accent, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 8, lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", bottom: -14, right: -14, width: 72, height: 72, borderRadius: 14, background: C.accent, opacity: 0.14 }} />
        </div>
        <div>
          <Label>About</Label>
          <h2 style={{ fontFamily: jk, fontSize: "clamp(28px,3vw,38px)", fontWeight: 800, color: C.navy, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>Experienced in strategy, finance, governance, and transformation.</h2>
          <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>A strategic and management consultant with experience across banking, finance, governance, regulatory transformation, and business advisory. I help people and organizations simplify complexity, align around what matters, and move forward with clarity and purpose.</p>
          <ALink onClick={() => nav("About")}>Explore My Background</ALink>
        </div>
      </div>
    </section>

    <section style={{ background: C.creamDark, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Label>Services</Label>
          <h2 style={{ fontFamily: jk, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: C.navy, letterSpacing: "-0.03em" }}>Focused support where strategy meets execution.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
          {[
            { t: "Strategic Advisory", b: "Business strategy, growth planning, and decision support for leaders navigating complexity.", i: "◈" },
            { t: "Management Consulting", b: "Operating model improvement, transformation, and delivery planning.", i: "⬡" },
            { t: "AI & Digital Enablement", b: "Practical AI-era thinking, workflow redesign, and modernization support.", i: "◉" },
            { t: "Governance & Financial Insight", b: "Banking, finance, risk, and regulatory perspective from deep institutional experience.", i: "◫" },
          ].map((s, i) => (
            <Card key={i} onClick={() => nav("Services")}>
              <div style={{ fontSize: 20, color: C.accent, marginBottom: 14 }}>{s.i}</div>
              <h3 style={{ fontFamily: jk, fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 10, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.65, marginBottom: 24 }}>{s.b}</p>
              <ALink onClick={() => nav("Services")}>Explore Service</ALink>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: C.navy, padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Label light>Capabilities</Label>
          <h2 style={{ fontFamily: jk, fontSize: "clamp(28px,3.5vw,40px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>A structured approach to complexity.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 3 }}>
          {[
            { l: "Diagnose", d: "Clarify the challenge and priorities.", n: "01", accent: true },
            { l: "Design", d: "Shape strategy, options, and frameworks.", n: "02" },
            { l: "Deliver", d: "Translate plans into execution.", n: "03" },
            { l: "Develop", d: "Build long-term capability and growth.", n: "04" },
          ].map((c, i) => (
            <div key={i} style={{ background: c.accent ? C.accent : C.navyLight, padding: "44px 30px", borderRadius: i===0?"12px 0 0 12px":i===3?"0 12px 12px 0":"0", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 14, right: 18, fontFamily: jk, fontSize: 52, fontWeight: 800, color: c.accent ? "rgba(11,25,41,0.13)" : "rgba(255,255,255,0.06)", lineHeight: 1 }}>{c.n}</div>
              <div style={{ width: 32, height: 3, background: c.accent ? C.navy : C.accent, borderRadius: 2, marginBottom: 20 }} />
              <h3 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: c.accent ? C.navy : "white", marginBottom: 10 }}>{c.l}</h3>
              <p style={{ fontSize: 14, color: c.accent ? "rgba(11,25,41,0.62)" : "rgba(255,255,255,0.52)", lineHeight: 1.6 }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: C.cream, padding: "100px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <Label>Growth & Execution</Label>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { t: "Mentoring & Coaching", b: "Practical guidance for young and experienced professionals seeking clarity, confidence, and career momentum.", link: "Explore Mentoring", page: "Mentoring", bg: C.navy },
            { t: "Tools & Strategy Papers", b: "Web apps, frameworks, and strategy papers designed to support better thinking and stronger execution.", link: "Explore Tools", page: "Tools", bg: C.navyMid },
          ].map((card, i) => (
            <div key={i} style={{ background: card.bg, borderRadius: 18, padding: "56px 48px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: i===0 ? "rgba(0,196,176,0.07)" : "rgba(201,168,76,0.06)" }} />
              <h3 style={{ fontFamily: jk, fontSize: 26, fontWeight: 800, color: "white", marginBottom: 16, letterSpacing: "-0.02em" }}>{card.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15, lineHeight: 1.75, marginBottom: 36 }}>{card.b}</p>
              <ALink onClick={() => nav(card.page)}>{card.link}</ALink>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ background: C.creamDark, padding: "80px 32px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <Label>Values</Label>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
          {["FOCUS","ADAPT","INNOVATE","THRIVE"].map((v, i) => (
            <span key={v}>
              <span style={{ fontFamily: jk, fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, color: i%2===0 ? C.navy : C.accent, letterSpacing: "-0.03em" }}>{v}</span>
              {i<3 && <span style={{ fontFamily: jk, fontSize: "clamp(26px,4vw,44px)", fontWeight: 300, color: "rgba(11,25,41,0.18)", margin: "0 10px" }}>·</span>}
            </span>
          ))}
        </div>
        <p style={{ color: C.textMid, fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>These four values shape how work is approached, advice is given, solutions are built, and progress is sustained.</p>
      </div>
    </section>

    <section style={{ background: C.navy, padding: "100px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -100, left: -80, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Label light>Contact</Label>
        <h2 style={{ fontFamily: jk, fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>Start a conversation.</h2>
        <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 17, lineHeight: 1.75, marginBottom: 44 }}>Whether the need is consulting, mentoring, or practical tools, the work is grounded in experience, structure, and trusted perspective.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Btn onClick={() => nav("Contact")}>Get in Touch</Btn>
          <Btn ghost light onClick={() => { window.location.href = "mailto:questions@asanka.one"; }}>Email Me</Btn>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = ({ nav }) => (
  <div>
    <PageHero dark label="About" title="A career built at the intersection of finance, strategy, governance, and execution." body="A strategic and management consulting background shaped by banking, finance, business advisory, governance, and transformation work in complex environments where clarity, judgment, and delivery matter." />
    <section style={{ background: C.cream, padding: "80px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24 }}>
            <img src={PORTRAIT} alt="Asanka" style={{ width: "100%", display: "block" }} />
          </div>
          <div style={{ background: C.navy, borderRadius: 14, padding: "24px 28px" }}>
            <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Get in Touch</div>
            <a href="mailto:questions@asanka.one" style={{ color: C.accent, fontSize: 15, fontFamily: jk, textDecoration: "none" }}>questions@asanka.one</a>
          </div>
        </div>
        <div>
          <Label>Background</Label>
          <h2 style={{ fontFamily: jk, fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>From complexity to clarity.</h2>
          <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>Today, that experience is applied through independent consulting, practical tool-building, and mentoring. The focus is simple: help businesses and professionals make better decisions and move forward with confidence.</p>
          <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 40 }}>Career experience spans banking, finance, governance, business advisory, and transformation work in complex institutional environments.</p>
          <Label>How I Work</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 40 }}>
            {["Structured thinking","Honest advice","Practical delivery","Clear communication"].map(item => (
              <div key={item} style={{ background: C.creamDark, borderRadius: 10, padding: "16px 20px", fontFamily: jk, fontSize: 14, fontWeight: 600, color: C.navy, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: C.accent }}>✦</span> {item}
              </div>
            ))}
          </div>
          <div style={{ background: C.navy, borderRadius: 14, padding: "32px 28px", marginBottom: 28 }}>
            <h3 style={{ fontFamily: jk, fontWeight: 800, color: "white", fontSize: 18, marginBottom: 16 }}>Let's build what matters.</h3>
            <Btn onClick={() => nav("Contact")}>Contact Me</Btn>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ nav }) => (
  <div>
    <PageHero dark label="Services" title="Services built for leaders facing complexity, growth, and change." body="Focused consulting support where strategy, governance, execution, and modern technology intersect." />
    <section style={{ background: C.cream, padding: "80px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
          {[
            { t: "Strategic Advisory", b: "Business strategy, growth planning, prioritization, and leadership decision support.", i: "◈" },
            { t: "Management Consulting", b: "Operating model improvement, process refinement, transformation support, and execution planning.", i: "⬡" },
            { t: "AI & Digital Enablement", b: "Practical AI-era thinking, workflow redesign, and modernization support shaped by business value rather than hype.", i: "◉" },
            { t: "Governance & Financial Insight", b: "Guidance informed by experience in banking, finance, risk, governance, and regulated environments.", i: "◫" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: "40px 36px" }}>
              <div style={{ fontSize: 24, color: C.accent, marginBottom: 16 }}>{s.i}</div>
              <h3 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 14, letterSpacing: "-0.02em" }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7 }}>{s.b}</p>
            </Card>
          ))}
        </div>
        <Card style={{ padding: "44px 48px", background: C.navyLight + "22", border: `1px solid ${C.accent}22` }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
            <div>
              <div style={{ fontSize: 24, color: C.accent, marginBottom: 12 }}>◬</div>
              <h3 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 10 }}>Executive Thinking Partner</h3>
              <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7, maxWidth: 560 }}>Independent, high-trust support for founders, executives, and business owners navigating complexity and change.</p>
            </div>
            <Btn onClick={() => nav("Contact")}>Start a Conversation</Btn>
          </div>
        </Card>
      </div>
    </section>
    <section style={{ background: C.navy, padding: "80px 32px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: jk, fontSize: 36, fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>Need a clear strategic partner?</h2>
        <Btn onClick={() => nav("Contact")}>Start a Conversation</Btn>
      </div>
    </section>
  </div>
);

const MentoringPage = ({ nav }) => (
  <div>
    <PageHero dark label="Mentoring" title="Practical mentoring for professionals building direction, confidence, and momentum." body="Support for young and experienced professionals who want to think more strategically, communicate more effectively, and move forward with greater clarity." />
    <section style={{ background: C.cream, padding: "80px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <Label>Approach</Label>
          <h2 style={{ fontFamily: jk, fontSize: 32, fontWeight: 800, color: C.navy, letterSpacing: "-0.03em", marginBottom: 20, lineHeight: 1.15 }}>Grounded in real-world experience.</h2>
          <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>Mentoring is practical, supportive, and shaped by real professional experience rather than abstract theory. It helps professionals strengthen thinking, improve decision-making, and position themselves for leadership, consulting, or entrepreneurial growth.</p>
          <Btn onClick={() => nav("Contact")}>Explore Mentoring Support</Btn>
        </div>
        <div>
          <Label>Themes</Label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {["Career clarity","Strategic thinking","Leadership presence","Communication & positioning","Career transition","Growth with purpose"].map((item, i) => (
              <div key={i} style={{ background: C.white, borderRadius: 10, padding: "18px 20px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.accent, marginBottom: 10 }} />
                <div style={{ fontFamily: jk, fontSize: 14, fontWeight: 600, color: C.navy }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section style={{ background: C.navy, padding: "80px 32px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: jk, fontSize: 36, fontWeight: 800, color: "white", letterSpacing: "-0.03em", marginBottom: 20 }}>Grow with direction.</h2>
        <Btn onClick={() => nav("Contact")}>Explore Mentoring Support</Btn>
      </div>
    </section>
  </div>
);

const ToolsPage = ({ nav }) => (
  <div>
    <PageHero dark label="Tools" title="Practical tools for sharper thinking and stronger execution." body="Alongside consulting and mentoring, practical tools and resources are created to make strategy more usable and execution more structured." />
    <section style={{ background: C.cream, padding: "80px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {[
            { t: "Web Apps", b: "Useful digital tools designed to improve planning, productivity, task execution, and structured thinking.", i: "◉", status: "Coming Soon" },
            { t: "Strategy Papers", b: "Clear, well-structured papers that translate business and strategic issues into practical insights and actionable ideas.", i: "◈", status: "Coming Soon" },
            { t: "Frameworks & Templates", b: "Working models and decision tools built for real-world application.", i: "⬡", status: "Coming Soon" },
          ].map((t, i) => (
            <Card key={i} style={{ padding: "36px 32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <div style={{ fontSize: 22, color: C.accent }}>{t.i}</div>
                <span style={{ background: C.accentDim, color: C.accent, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 6, fontFamily: jk }}>{t.status}</span>
              </div>
              <h3 style={{ fontFamily: jk, fontSize: 18, fontWeight: 800, color: C.navy, marginBottom: 12 }}>{t.t}</h3>
              <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.65 }}>{t.b}</p>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: 56, background: C.navy, borderRadius: 18, padding: "56px 48px", textAlign: "center" }}>
          <h3 style={{ fontFamily: jk, fontSize: 28, fontWeight: 800, color: "white", marginBottom: 16 }}>Explore practical resources.</h3>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, marginBottom: 32 }}>Tools and strategy papers are in development. Get in touch to be notified when they launch.</p>
          <Btn onClick={() => nav("Contact")}>View Tools</Btn>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div>
      <PageHero dark label="Contact" title="Get in Touch" body="Whether the need is consulting support, mentoring, strategy papers, or practical tools, a conversation is welcome." />
      <section style={{ background: C.cream, padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <Label>Start a Conversation</Label>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontFamily: jk, fontSize: 12, fontWeight: 600, color: C.textMid, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid rgba(0,0,0,0.12)", fontFamily: dm, fontSize: 15, color: C.navy, outline: "none", background: C.white }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontFamily: jk, fontSize: 12, fontWeight: 600, color: C.textMid, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid rgba(0,0,0,0.12)", fontFamily: dm, fontSize: 15, color: C.navy, outline: "none", background: C.white }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontFamily: jk, fontSize: 12, fontWeight: 600, color: C.textMid, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Message</label>
              <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Tell me what you're working on..." rows={5} style={{ width: "100%", padding: "14px 16px", borderRadius: 8, border: "1.5px solid rgba(0,0,0,0.12)", fontFamily: dm, fontSize: 15, color: C.navy, outline: "none", resize: "vertical", background: C.white }} />
            </div>
            <Btn onClick={() => { window.location.href = `mailto:questions@asanka.one?subject=Enquiry from ${name}&body=${encodeURIComponent(msg)}`; }}>Send Message</Btn>
          </div>
          <div>
            <div style={{ background: C.navy, borderRadius: 18, padding: "48px 40px", marginBottom: 20 }}>
              <div style={{ fontFamily: jk, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>Email</div>
              <a href="mailto:questions@asanka.one" style={{ color: C.accent, fontSize: 18, fontFamily: jk, fontWeight: 700, textDecoration: "none" }}>questions@asanka.one</a>
            </div>
            <div style={{ background: C.creamDark, borderRadius: 14, padding: "32px 32px", border: "1px solid rgba(0,0,0,0.07)" }}>
              <p style={{ fontFamily: jk, fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.5 }}>"Clear thinking starts with a good conversation."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const LegalPage = ({ title, sections }) => (
  <div>
    <PageHero dark label="Legal" title={title} />
    <section style={{ background: C.cream, padding: "72px 32px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 44, paddingBottom: 44, borderBottom: i < sections.length-1 ? "1px solid rgba(0,0,0,0.07)" : "none" }}>
            <h2 style={{ fontFamily: jk, fontSize: 20, fontWeight: 800, color: C.navy, marginBottom: 14 }}>{s.h}</h2>
            <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.8 }}>{s.b}</p>
          </div>
        ))}
        <div style={{ background: C.navy, borderRadius: 14, padding: "28px 32px", marginTop: 16 }}>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, fontFamily: dm }}>For questions or requests, contact: </span>
          <a href="mailto:questions@asanka.one" style={{ color: C.accent, fontSize: 14, fontFamily: jk, fontWeight: 600, textDecoration: "none" }}>questions@asanka.one</a>
        </div>
      </div>
    </section>
  </div>
);

const privacySections = [
  { h: "Who I Am", b: "Asanka.one is operated by Asanka, an independent strategic and management consultant. This Privacy Notice explains how personal information is collected, used, stored, and protected when you use this website, make contact, request services, or use related tools and resources." },
  { h: "Information I Collect", b: "Information may be collected when you contact me by email or web form, subscribe to updates, or use tools available on the site. This may include name, email address, and the content of enquiries. Standard web analytics data (pages visited, referral source, browser type) may also be collected." },
  { h: "How Information Is Used", b: "Personal information is used to respond to enquiries, deliver consulting or mentoring services, improve the website and tools, and comply with legal obligations. Information is not used for unsolicited marketing and is not sold." },
  { h: "Legal Bases for Processing", b: "Processing of personal information is based on legitimate interests in responding to enquiries and delivering services, contractual necessity where services are engaged, and compliance with applicable laws." },
  { h: "Sharing of Information", b: "Personal information is not shared with third parties except where necessary to deliver services (such as email or analytics providers), required by law, or with your explicit consent." },
  { h: "Data Retention", b: "Personal information is retained only as long as necessary for the purposes described, or as required by applicable law. Enquiry data is typically retained for a period of up to three years." },
  { h: "Your Rights", b: "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal information. Requests can be made by contacting questions@asanka.one." },
  { h: "Cookies and Analytics", b: "The site may use cookies and analytics tools to understand how visitors use the site. Analytics data is aggregated and not used to personally identify visitors. You can manage cookie settings through your browser." },
  { h: "Contact", b: "For privacy questions, rights requests, or complaints, contact questions@asanka.one. This notice is reviewed periodically and updated as needed." },
];

const termsSections = [
  { h: "Website Purpose", b: "Asanka.one is a personal consulting and professional services website. Content is provided for general information purposes and does not constitute professional, legal, financial, or investment advice." },
  { h: "Use of Content", b: "Content on this site is the intellectual property of Asanka.one. Personal use and sharing for non-commercial purposes is permitted with appropriate attribution. Reproduction for commercial purposes requires prior written permission." },
  { h: "No Reliance", b: "While reasonable care is taken to ensure accuracy, no warranty is given about the completeness or accuracy of information on this site. You should not rely on content here without seeking specific professional advice relevant to your circumstances." },
  { h: "Third-Party Links", b: "This site may include links to third-party websites. These links are provided for convenience only. Asanka.one is not responsible for the content, accuracy, or practices of linked sites." },
  { h: "Intellectual Property", b: "All text, graphics, logos, tools, and design elements on Asanka.one are the property of Asanka.one or are used with permission. Unauthorized use is prohibited." },
  { h: "Limitation of Liability", b: "To the maximum extent permitted by applicable law, Asanka.one shall not be liable for any indirect, incidental, or consequential loss arising from use of this website or reliance on any content published here." },
  { h: "Changes to Terms", b: "These Terms of Use may be updated from time to time. Continued use of the site following changes constitutes acceptance of the revised terms." },
];

const securitySections = [
  { h: "Security by Design", b: "Asanka.one is designed with security principles in mind, aligned with reference to recognized standards including ISO/IEC 27001 and Cyber Essentials. Reasonable technical and organizational measures are applied to protect the site and any data processed through it." },
  { h: "Privacy-Aware Data Handling", b: "The site is designed with reference to GDPR and UK Data Protection Act 2018 principles, including data minimization, purpose limitation, and appropriate retention. See the Privacy Policy for full details." },
  { h: "Accessibility", b: "Asanka.one is designed with reference to WCAG 2.2 accessibility guidelines. If you encounter any accessibility barriers, please contact questions@asanka.one and I will endeavor to assist." },
  { h: "Trusted Third-Party Services", b: "Where third-party services are used (such as analytics, hosting, or email), reputable providers with their own security and compliance programs are selected. Data processing agreements are maintained where required." },
  { h: "Standards Reference", b: "This site is designed with reference to recognized good practices associated with ISO/IEC 27001, Cyber Essentials, SOC 2 Type II, WCAG 2.2, and modern privacy and payment-security expectations. Use of the terms 'aligned to' or 'designed with reference to' reflects good-practice orientation rather than formal certification." },
];

export default function App() {
  const [page, setPage] = useState("Home");
  
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap";
    document.head.appendChild(link);
    const style = document.createElement("style");
    style.textContent = `* { box-sizing: border-box; margin: 0; padding: 0; } body { background: #f5f3ef; } button { font-family: inherit; } a { font-family: inherit; } @media (max-width: 768px) { .res-grid-2 { grid-template-columns: 1fr !important; } .res-grid-3 { grid-template-columns: 1fr !important; } .res-grid-4 { grid-template-columns: 1fr 1fr !important; } }`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);
  
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  
  return (
    <div style={{ fontFamily: dm, background: C.cream, minHeight: "100vh", color: C.textDark }}>
      <Navbar page={page} nav={nav} />
      {page === "Home" && <HomePage nav={nav} />}
      {page === "About" && <AboutPage nav={nav} />}
      {page === "Services" && <ServicesPage nav={nav} />}
      {page === "Mentoring" && <MentoringPage nav={nav} />}
      {page === "Tools" && <ToolsPage nav={nav} />}
      {page === "Contact" && <ContactPage nav={nav} />}
      {page === "Privacy Policy" && <LegalPage title="Privacy Policy" sections={privacySections} />}
      {page === "Terms of Use" && <LegalPage title="Terms of Use" sections={termsSections} />}
      {page === "Security & Compliance" && <LegalPage title="Security & Compliance" sections={securitySections} />}
      <Footer nav={nav} />
    </div>
  );
}
