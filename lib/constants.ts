export const C = {
  navy: "#0b1929",
  navyMid: "#142338",
  navyLight: "#1e3354",
  cream: "#f5f3ef",
  creamDark: "#eceae4",
  white: "#ffffff",
  accent: "#08abec",
  accentDim: "rgba(8,171,236,0.12)",
  gold: "#c9a84c",
  blue: "#2a4fa8",
  textDark: "#0b1929",
  textMid: "#3d4f63",
  textLight: "#7a8fa3",
} as const;

export const jk = "'Plus Jakarta Sans', sans-serif";
export const dm = "'DM Sans', sans-serif";

export const NAV_ITEMS = ["Home", "About", "Services", "Mentoring", "Tools", "Contact"] as const;
export type NavItem = typeof NAV_ITEMS[number];
