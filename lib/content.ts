// ─────────────────────────────────────────────────────────────
//  SITE CONTENT
//  Edit the values below to update any text on the site.
//  Save the file — the site rebuilds automatically on Vercel.
// ─────────────────────────────────────────────────────────────

export const CONTENT = {

  // ── HOME PAGE ────────────────────────────────────────────────
  home: {
    meta: {
      title: "Home | Asanka.one",
      description: "Strategic consulting, AI advisory, mentoring, and practical tools for businesses, leaders, and professionals seeking clarity, execution, and growth.",
      ogTitle: "Asanka.one | Strategic Consulting, AI Advisory & Mentoring",
      ogDescription: "Strategic consulting, AI advisory, mentoring, and practical tools for businesses, leaders, and professionals seeking clarity, execution, and growth.",
    },
    hero: {
      label: "Strategic Consulting · AI Advisory · Mentoring",
      line1: "Strategic clarity for",
      line2: "businesses, leaders,",
      line3: "and professionals.",
      body1: "I help businesses grow, leaders make better decisions, and professionals move forward with confidence through strategy, execution, mentoring, and practical tools.",
      body2: "My work combines experience across banking, finance, governance, transformation, and advisory with a modern, AI-aware approach to problem-solving, decision-making, and delivery.",
      btn1Label: "Work With Me",
      btn1Href: "/contact",
      btn2Label: "Explore My Tools",
      btn2Href: "/tools",
      portraitName: "Asanka",
      portraitRole: "Strategic Consultant · AI Advisor · Mentor",
    },
    about: {
      stats: [
        ["20+", "Years Experience"],
        ["50+", "Engagements"],
        ["10",   "Major Clients"],
        ["4",   "Continents"],
      ] as [string, string][],
      heading: "Experienced in strategy, advisory, and execution.",
      body: "A strategic management consultant with experience across stategy development, corporate finance, risk management, corporate governance, regulatory remediation, enterprise-wide transformation, and business advisory. I help people and organizations simplify complexity, focus what matters, be adaptable, innovate and move forward with clarity and purpose to thrive to achieve excellence.",
      link: "Explore My Background",
      linkHref: "/about",
    },
    services: {
      label: "Services",
      heading: "Focused support where strategy meets execution.",
      items: [
        { title: "Strategic Advisory",         body: "Business strategy, growth planning, and decision support for leaders navigating complexity.", icon: "◈" },
        { title: "Management Consulting",       body: "Operating model improvement, transformation, and delivery planning.",                        icon: "⬡" },
        { title: "AI & Digital Enablement",    body: "Practical AI-era thinking, workflow redesign, and modernization support.",                    icon: "◉" },
        { title: "Governance & Financial Insight", body: "Banking, finance, risk, and regulatory perspective from deep institutional experience.",  icon: "◫" },
      ],
    },
    capabilities: {
      label: "Capabilities",
      heading: "A structured approach to complexity.",
      items: [
        { label: "Diagnose", desc: "Clarify the challenge and priorities.",        n: "01", accent: true },
        { label: "Design",   desc: "Shape strategy, options, and frameworks.",     n: "02" },
        { label: "Deliver",  desc: "Translate plans into execution.",              n: "03" },
        { label: "Develop",  desc: "Build long-term capability and growth.",       n: "04" },
      ],
    },
    clients: {
      disclaimer: "Selected organizations represented through prior professional experience and engagements.",
    },
    growth: {
      label: "Growth & Execution",
      cards: [
        {
          title: "Mentoring & Coaching",
          body:  "Practical guidance for young and experienced professionals seeking clarity, confidence, and career momentum.",
          link:  "Explore Mentoring",
          href:  "/mentoring",
        },
        {
          title: "Tools & Strategy Papers",
          body:  "Web apps, frameworks, and strategy papers designed to support better thinking and stronger execution.",
          link:  "Explore Tools",
          href:  "/tools",
        },
      ],
    },
    values: {
      label: "Values",
      items: ["FOCUS", "ADAPT", "INNOVATE", "THRIVE"],
      body:  "These four values shape how work is approached, advice is given, solutions are built, and progress is sustained.",
    },
    cta: {
      label:    "Contact",
      heading:  "Start a conversation.",
      body:     "Whether the need is consulting, mentoring, or practical tools, the work is grounded in experience, structure, and trusted perspective.",
      btn1Label: "Get in Touch",
      btn1Href:  "/contact",
      btn2Label: "Email Me",
      btn2Href:  "mailto:questions@asanka.one",
    },
  },

  // ── ABOUT PAGE ───────────────────────────────────────────────
  about: {
    meta: {
      title: "About | Asanka.one",
      description: "Learn about Asanka's background across banking, finance, governance, business advisory, and transformation, and how that experience supports consulting and mentoring.",
      ogTitle: "About Asanka | Strategy, Finance, Governance & Transformation",
      ogDescription: "Learn about Asanka's background across banking, finance, governance, business advisory, and transformation.",
    },
    hero: {
      label: "About",
      title: "A career built at the intersection of finance, strategy, governance, and execution.",
      body:  "A strategic and management consulting background shaped by banking, finance, business advisory, governance, and transformation work in complex environments where clarity, judgment, and delivery matter.",
    },
    background: {
      heading: "From complexity to clarity.",
      body1: "Today, that experience is applied through independent consulting, practical tool-building, and mentoring. The focus is simple: help businesses and professionals make better decisions and move forward with confidence.",
      body2: "Career experience spans banking, finance, governance, business advisory, and transformation work in complex institutional environments.",
      workingStyle: ["Structured thinking", "Honest advice", "Practical delivery", "Clear communication"],
      ctaHeading: "Let's build what matters.",
      email: "questions@asanka.one",
    },
  },

  // ── SERVICES PAGE ────────────────────────────────────────────
  services: {
    meta: {
      title: "Services | Asanka.one",
      description: "Explore consulting services including strategic advisory, management consulting, AI and digital enablement, governance insight, and executive decision support.",
      ogTitle: "Consulting Services | Strategy, Management, AI & Governance",
      ogDescription: "Consulting services spanning strategic advisory, management consulting, AI enablement, governance insight, and executive thinking partnership.",
    },
    hero: {
      label: "Services",
      title: "Services built for leaders facing complexity, growth, and change.",
      body:  "Focused consulting support where strategy, governance, execution, and modern technology intersect.",
    },
    items: [
      { title: "Strategic Advisory",            body: "Business strategy, growth planning, prioritization, and leadership decision support.",                                              icon: "◈" },
      { title: "Management Consulting",          body: "Operating model improvement, process refinement, transformation support, and execution planning.",                                 icon: "⬡" },
      { title: "AI & Digital Enablement",       body: "Practical AI-era thinking, workflow redesign, and modernization support shaped by business value rather than hype.",               icon: "◉" },
      { title: "Governance & Financial Insight", body: "Guidance informed by experience in banking, finance, risk, governance, and regulated environments.",                               icon: "◫" },
    ],
    thinkingPartner: {
      title: "Executive Thinking Partner",
      body:  "Independent, high-trust support for founders, executives, and business owners navigating complexity and change.",
      btnLabel: "Start a Conversation",
      btnHref:  "/contact",
    },
    cta: {
      heading:  "Need a clear strategic partner?",
      btnLabel: "Start a Conversation",
      btnHref:  "/contact",
    },
  },

  // ── MENTORING PAGE ───────────────────────────────────────────
  mentoring: {
    meta: {
      title: "Mentoring | Asanka.one",
      description: "Practical mentoring and coaching for young and experienced professionals seeking career clarity, stronger thinking, leadership presence, and purposeful growth.",
      ogTitle: "Mentoring & Coaching | Career Clarity, Leadership & Strategic Growth",
      ogDescription: "Practical mentoring and coaching for professionals seeking career clarity, stronger thinking, and leadership presence.",
    },
    hero: {
      label: "Mentoring",
      title: "Practical mentoring for professionals building direction, confidence, and momentum.",
      body:  "Support for young and experienced professionals who want to think more strategically, communicate more effectively, and move forward with greater clarity.",
    },
    approach: {
      heading: "Grounded in real-world experience.",
      body:    "Mentoring is practical, supportive, and shaped by real professional experience rather than abstract theory. It helps professionals strengthen thinking, improve decision-making, and position themselves for leadership, consulting, or entrepreneurial growth.",
      btnLabel: "Explore Mentoring Support",
      btnHref:  "/contact",
    },
    themes: [
      "Career clarity",
      "Strategic thinking",
      "Leadership presence",
      "Communication & positioning",
      "Career transition",
      "Growth with purpose",
    ],
    cta: {
      heading:  "Grow with direction.",
      btnLabel: "Explore Mentoring Support",
      btnHref:  "/contact",
    },
  },

  // ── TOOLS PAGE ───────────────────────────────────────────────
  tools: {
    meta: {
      title: "Tools | Asanka.one",
      description: "Discover practical web apps, strategy papers, frameworks, and templates designed to improve planning, thinking, prioritization, and execution.",
      ogTitle: "Tools & Strategy Papers | Web Apps, Frameworks & Practical Insights",
      ogDescription: "Practical web apps, strategy papers, frameworks, and templates for sharper thinking and stronger execution.",
    },
    hero: {
      label: "Tools",
      title: "Practical tools for sharper thinking and stronger execution.",
      body:  "Alongside consulting and mentoring, practical tools and resources are created to make strategy more usable and execution more structured.",
    },
    items: [
      { title: "Web Apps",                body: "Useful digital tools designed to improve planning, productivity, task execution, and structured thinking.",                                     icon: "◉", status: "Coming Soon" },
      { title: "Strategy Papers",         body: "Clear, well-structured papers that translate business and strategic issues into practical insights and actionable ideas.",                       icon: "◈", status: "Coming Soon" },
      { title: "Frameworks & Templates",  body: "Working models and decision tools built for real-world application.",                                                                           icon: "⬡", status: "Coming Soon" },
    ],
    cta: {
      heading:  "Explore practical resources.",
      body:     "Tools and strategy papers are in development. Get in touch to be notified when they launch.",
      btnLabel: "Get in Touch",
      btnHref:  "/contact",
    },
  },

  // ── CONTACT PAGE ─────────────────────────────────────────────
  contact: {
    meta: {
      title: "Contact | Asanka.one",
      description: "Get in touch with me for strategic collaborations, consulting engagements, interim or fractional roles, board advisory roles (including NED) or if you would like an experienced mentor.",
      ogTitle: "Contact Asanka | Start a Conversation",
      ogDescription: "Get in touch for consulting support, mentoring, strategy papers, or practical tools.",
    },
    hero: {
      label: "Contact",
      title: "Get in Touch",
      body:  "Whether the need is strategic advice, consulting support, execution remediation or mentoring, let's have a conversation and explore opportunities.",
    },
    email: "questions@asanka.one",
    quote: "Clear thinking starts with a good conversation.",
  },

};
