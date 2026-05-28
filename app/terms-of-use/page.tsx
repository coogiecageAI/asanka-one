import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Asanka.one",
  description:
    "Read the terms for using Asanka.one, including website purpose, content use, third-party links, and limitations of liability.",
  alternates: { canonical: "https://asanka.one/terms-of-use" },
};

const sections = [
  {
    h: "Website Purpose",
    b: "Asanka.one is a personal consulting and professional services website. Content is provided for general information purposes and does not constitute professional, legal, financial, or investment advice.",
  },
  {
    h: "Use of Content",
    b: "Content on this site is the intellectual property of Asanka.one. Personal use and sharing for non-commercial purposes is permitted with appropriate attribution. Reproduction for commercial purposes requires prior written permission.",
  },
  {
    h: "No Reliance",
    b: "While reasonable care is taken to ensure accuracy, no warranty is given about the completeness or accuracy of information on this site. You should not rely on content here without seeking specific professional advice relevant to your circumstances.",
  },
  {
    h: "Third-Party Links",
    b: "This site may include links to third-party websites. These links are provided for convenience only. Asanka.one is not responsible for the content, accuracy, or practices of linked sites.",
  },
  {
    h: "Intellectual Property",
    b: "All text, graphics, logos, tools, and design elements on Asanka.one are the property of Asanka.one or are used with permission. Unauthorized use is prohibited.",
  },
  {
    h: "Limitation of Liability",
    b: "To the maximum extent permitted by applicable law, Asanka.one shall not be liable for any indirect, incidental, or consequential loss arising from use of this website or reliance on any content published here.",
  },
  {
    h: "Privacy",
    b: "Use of this site is also governed by the Privacy Policy, which is incorporated into these Terms by reference.",
  },
  {
    h: "Changes to Terms",
    b: "These Terms of Use may be updated from time to time. Continued use of the site following changes constitutes acceptance of the revised terms.",
  },
  {
    h: "Contact",
    b: "For questions about these terms, contact questions@asanka.one.",
  },
];

export default function TermsOfUsePage() {
  return <LegalPage title="Terms of Use" sections={sections} />;
}
