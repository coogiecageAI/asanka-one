import { C, jk } from "@/lib/constants";

export default function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div
      style={{
        fontFamily: jk,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: C.accent,
        marginBottom: 14,
        opacity: light ? 0.9 : 1,
      }}
    >
      {children}
    </div>
  );
}
