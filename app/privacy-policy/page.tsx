import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Asanka.one",
  description:
    "Learn how Asanka.one may collect, use, store, protect, and manage personal information across the website, enquiries, services, and related tools.",
  alternates: { canonical: "https://asanka.one/privacy-policy" },
};

const sections = [
  {
    h: "Who I Am",
    b: "Asanka.one is operated by Asanka, an independent strategic and management consultant. This Privacy Notice explains how personal information is collected, used, stored, and protected when you use this website, make contact, request services, or use related tools and resources.",
  },
  {
    h: "Information I Collect",
    b: "Information may be collected when you contact me by email or web form, subscribe to updates, or use tools available on the site. This may include name, email address, and the content of enquiries. Standard web analytics data (pages visited, referral source, browser type) may also be collected.",
  },
  {
    h: "How Information Is Used",
    b: "Personal information is used to respond to enquiries, deliver consulting or mentoring services, improve the website and tools, and comply with legal obligations. Information is not used for unsolicited marketing and is not sold.",
  },
  {
    h: "Legal Bases for Processing",
    b: "Processing of personal information is based on legitimate interests in responding to enquiries and delivering services, contractual necessity where services are engaged, and compliance with applicable laws.",
  },
  {
    h: "Sharing of Information",
    b: "Personal information is not shared with third parties except where necessary to deliver services (such as email or analytics providers), required by law, or with your explicit consent.",
  },
  {
    h: "International Transfers",
    b: "Where personal information is transferred outside the UK or EEA, appropriate safeguards are applied in line with applicable data protection law, including the use of standard contractual clauses or equivalent mechanisms.",
  },
  {
    h: "Data Retention",
    b: "Personal information is retained only as long as necessary for the purposes described, or as required by applicable law. Enquiry data is typically retained for a period of up to three years.",
  },
  {
    h: "Your Rights",
    b: "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal information. Requests can be made by contacting questions@asanka.one.",
  },
  {
    h: "US State Privacy Rights",
    b: "If you are a resident of California or another US state with applicable privacy laws, you may have additional rights regarding your personal information, including the right to know, the right to delete, and the right to opt out of certain data uses. Please contact questions@asanka.one to make a request.",
  },
  {
    h: "Middle East Data Law Disclosures",
    b: "For individuals in the UAE, Saudi Arabia, and other jurisdictions with applicable data protection laws, personal information is handled in accordance with the principles of those frameworks, including purpose limitation, data minimization, and individual rights to access and correction.",
  },
  {
    h: "Cookies and Analytics",
    b: "The site may use cookies and analytics tools to understand how visitors use the site. Analytics data is aggregated and not used to personally identify visitors. You can manage cookie settings through your browser.",
  },
  {
    h: "Data Security",
    b: "Reasonable technical and organisational measures are applied to protect personal information from unauthorised access, loss, or disclosure, aligned with reference to recognized security standards.",
  },
  {
    h: "Payment Security",
    b: "This website does not currently process payments directly. Where payment services are used in connection with engagements, reputable providers with appropriate PCI DSS-aware security practices are used.",
  },
  {
    h: "Contact",
    b: "For privacy questions, rights requests, or complaints, contact questions@asanka.one. This notice is reviewed periodically and updated as needed.",
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" sections={sections} />;
}
