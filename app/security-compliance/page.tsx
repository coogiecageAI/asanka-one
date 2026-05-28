import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Security & Compliance | Asanka.one",
  description:
    "Understand the security, privacy, accessibility, and compliance principles that inform the design and operation of Asanka.one.",
  alternates: { canonical: "https://asanka.one/security-compliance" },
};

const sections = [
  {
    h: "Security by Design",
    b: "Asanka.one is designed with security principles in mind, aligned with reference to recognized standards including ISO/IEC 27001 and Cyber Essentials. Reasonable technical and organizational measures are applied to protect the site and any data processed through it.",
  },
  {
    h: "Privacy-Aware Data Handling",
    b: "The site is designed with reference to GDPR and UK Data Protection Act 2018 principles, including data minimization, purpose limitation, and appropriate retention. See the Privacy Policy for full details.",
  },
  {
    h: "Accessibility",
    b: "Asanka.one is designed with reference to WCAG 2.2 accessibility guidelines. If you encounter any accessibility barriers, please contact questions@asanka.one and I will endeavour to assist.",
  },
  {
    h: "Trusted Third-Party Services",
    b: "Where third-party services are used (such as analytics, hosting, or email), reputable providers with their own security and compliance programs are selected. Data processing agreements are maintained where required.",
  },
  {
    h: "Standards Reference",
    b: "This site is designed with reference to recognized good practices associated with ISO/IEC 27001, Cyber Essentials, SOC 2 Type II, WCAG 2.2, and modern privacy and payment-security expectations. Use of the terms 'aligned to' or 'designed with reference to' reflects good-practice orientation rather than formal certification.",
  },
  {
    h: "Contact",
    b: "For security or compliance questions, contact questions@asanka.one.",
  },
];

export default function SecurityCompliancePage() {
  return <LegalPage title="Security & Compliance" sections={sections} />;
}
