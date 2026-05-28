# Code Advancement Log

## 1. Current Architecture & State

**Runtime:** Next.js 14.2.10 (App Router) · TypeScript · React 18 · No Tailwind, no CSS Modules — all styling via inline `style` props.

**Rendering:** Every route is fully static (`○ Static`). No API routes, no server components with data fetching, no ISR. Build output is pure HTML/CSS/JS — zero server runtime needed.

**Deployment:** GitHub repo `coogiecageAI/asanka-one` (branch `main`) → Vercel production alias `asankaone.vercel.app`. Deploy via `~/.local/bin/vercel --prod --yes`. GitHub push triggers automatic Vercel rebuild in parallel.

**Content model:** All editable copy lives in a single file `lib/content.ts` (exported `CONTENT` object, typed). Pages import from it — no text is hardcoded in JSX. Client logos and binary assets live in `public/`.

**Design tokens:** `lib/constants.ts` exports `C` (colour palette), `jk` (Plus Jakarta Sans), `dm` (DM Sans). Fonts loaded via `next/font/google` with `display: swap` in `app/layout.tsx`.

**Data flow:**
```
lib/content.ts  ──►  app/**/page.tsx  ──►  components/*
lib/constants.ts ──►  (all files)
public/          ──►  next/image + <img> tags
```

---

## 2. Recent Major Changes (Latest First)

### 2026-05-28 — Values Section: Image Replaces Text
- **What Changed:** `app/page.tsx` Values section — removed the animated word display (FOCUS · ADAPT · INNOVATE · THRIVE) and body paragraph. Replaced with `<Image>` pointing at `/asankaone-values.png`. File copied from `~/Downloads/` into `public/` with a URL-safe hyphenated filename.
- **Why:** User supplied a branded "Value Framework" infographic that communicates the values more richly than plain text.
- **Impact & Side Effects:** `CONTENT.home.values.items` and `CONTENT.home.values.body` in `content.ts` are now unused by the page (label `CONTENT.home.values.label` is still rendered). The stale keys are harmless but could be pruned. A second copy of the file (`public/asankaone values.png` with a space) also exists — should be deleted.

### 2026-05-28 — Content Config File (`lib/content.ts`)
- **What Changed:** New file `lib/content.ts` created. All six page files (`app/page.tsx`, `app/about/page.tsx`, `app/services/page.tsx`, `app/mentoring/page.tsx`, `app/tools/page.tsx`, `app/contact/page.tsx`) refactored to import from `CONTENT` — every heading, body paragraph, label, button text, stat, list item, and SEO metadata string is now in one place.
- **Why:** Enable content updates without touching JSX. User edits `lib/content.ts`, commits, Vercel redeploys.
- **Impact & Side Effects:** Pages are now thin layout shells; all copy is decoupled. TypeScript enforces shape — adding a new field requires updating the type implicitly (no explicit interface yet). `as [string, string][]` cast used on stats array to satisfy tuple inference.

### 2026-05-28 — HSBC Logo Replacement + Git Casing Fix
- **What Changed:** `public/clients/hsbc.jpg` → `public/clients/HSBC.jpg` (new logo file). `components/ClientLogoGrid.tsx` reference updated to match. Two stale files from a GitHub web-UI upload (`hsbcold.jpg`, `HSBC1.jpeg`) deleted. Git index updated via `git rm --cached` to handle macOS case-insensitive filesystem conflict.
- **Why:** User supplied an updated HSBC logo.
- **Impact & Side Effects:** Git history briefly had a case-conflict commit that required a rebase abort and hard reset to `origin/main`. Resolved cleanly.

### 2026-05-28 — Client Logos v2 + Heading Style Fix
- **What Changed:** `components/ClientLogoGrid.tsx` `CLIENT_LOGOS` array updated from 9 webp placeholders to 15 real logo files (mixed PNG/JPG/WEBP/SVG). Home page Clients section heading changed from a large `<h2>` to `<Label>` component (11px teal uppercase) to match all other section labels. Old logo files deleted from `public/clients/`.
- **Why:** User uploaded real client logo assets; heading was visually inconsistent with other sections.
- **Impact & Side Effects:** `ClientLogoGrid` uses plain `<img>` (not `next/image`) to avoid format conversion; `// eslint-disable-next-line @next/next/no-img-element` comment suppresses lint warning. Grid: 5 cols desktop → 3 cols at 768px → 2 cols at 480px (controlled via `globals.css` media queries with `!important`).

### 2026-05-14 — Favicon, Client Logo Grid, White Buttons
- **What Changed:** `app/icon.png` added (512×512 resized ADS logo — Next.js App Router auto-serves as favicon). `components/ClientLogoGrid.tsx` created (grayscale at rest, full colour on hover). `components/ui/Button.tsx` primary variant text colour changed from `C.navy` to `"white"`. Trust strip ("Clients I've worked with") removed from home page. Clients section background set to `#ffffff`.
- **Why:** Address bar favicon missing; client logos added; button legibility improvement.
- **Impact & Side Effects:** None breaking.

### 2026-05-14 — Logo Transparency Fix
- **What Changed:** `public/ADS_Logo_transparent.png` processed with a Python/Pillow/numpy script that zeros alpha on pixels where brightness > 140 AND saturation < 55. Problem was baked-in checkerboard pixels (alpha=255), not a CSS issue.
- **Why:** Logo PNG had a white/checkerboard background baked in as opaque pixels — CSS `mix-blend-mode` approaches were insufficient.
- **Impact & Side Effects:** `next/image` uses `unoptimized` prop to preserve alpha channel (avif/webp conversion can strip alpha). Logo rendered at 64×64 in Navbar.

### 2026-05-14 — Initial Build
- **What Changed:** Full Next.js 14 site scaffolded: 9 pages (Home, About, Services, Mentoring, Tools, Contact, Privacy Policy, Terms of Use, Security & Compliance), Navbar with scroll-aware blur + mobile menu, Footer, PageHero, Card, Button, Label, ArrowLink, ClientLogoGrid components. `next.config.ts` → `next.config.mjs` (14.2.x doesn't support `.ts` config). Deployed to Vercel via CLI (`~/.local/bin/vercel` — installed with `--prefix ~/.local` to avoid permission errors).
- **Why:** Initial delivery from handoff document.
- **Impact & Side Effects:** All pages static. No database, no auth, no API routes.

---

## 3. Current Implementation Details (The "How")

**Active Tech Stack/Patterns:**
- Next.js 14 App Router, fully static output, TypeScript strict mode
- Styling: inline `style` props everywhere; `app/globals.css` only for CSS reset + responsive breakpoint overrides (`!important` on grid columns)
- Fonts: `next/font/google` (Plus Jakarta Sans + DM Sans) injected in `app/layout.tsx`, exposed as CSS variables and as `jk`/`dm` string constants
- Images: `next/image` for portrait + logo (with `unoptimized` for the logo PNG); plain `<img>` for client logos in `ClientLogoGrid`
- Content: single `lib/content.ts` → imported as `CONTENT` in each page; no CMS
- Hover state: `useState` pattern in client components (Button, NavItem, LogoTile) — no CSS `:hover` used

**Critical File Paths:**
| File | Role |
|------|------|
| `lib/content.ts` | **All editable copy** — the only file that needs touching for text/SEO updates |
| `lib/constants.ts` | Design tokens: colours (`C`), font stacks (`jk`, `dm`) |
| `app/layout.tsx` | Root layout: font loading, global SEO metadata, Navbar + Footer wrapper |
| `app/page.tsx` | Home page — most complex, references nearly every `CONTENT.home.*` key |
| `app/globals.css` | Responsive grid breakpoints; only non-inline CSS in the project |
| `components/ClientLogoGrid.tsx` | Client logo array + hover tile — update logo filenames here |

**Deployment commands:**
```bash
git add <files> && git commit -m "..." && git push origin main
~/.local/bin/vercel --prod --yes
```

---

## 4. Next Steps & Technical Debt

- [ ] **Delete `public/asankaone values.png`** (filename with space) — a duplicate of `asankaone-values.png` that was left behind when the file was copied with a safe name. Should not be committed.
- [ ] **Prune unused `CONTENT.home.values.items` and `CONTENT.home.values.body`** — these keys are no longer referenced by `app/page.tsx` after the infographic replacement. Leaving them is harmless but confusing.
- [ ] **Add explicit TypeScript interfaces to `content.ts`** — currently inferred, which works but makes structural errors harder to catch when adding new pages/sections.
- [ ] **Mobile navbar "Start a Conversation" CTA** is hidden on desktop below a certain width — `display: none` applied via className `mobile-menu-btn`; CSS for this is missing from `globals.css` (relies on component-level inline style). Should add a proper media query.
- [ ] **Contact form** (`app/contact/ContactForm.tsx`) — form submission target not confirmed. Verify it submits correctly (likely needs a backend endpoint or a service like Formspree/Resend).
- [ ] **Tools page** — all three tool cards are `status: "Coming Soon"`. When real tools are added they will need routing (`/tools/[slug]`) and potentially dynamic rendering.
- [ ] **No sitemap entries for dynamic routes** — `app/sitemap.ts` currently lists static URLs only. Fine for now, but needs updating if new pages are added.
- [ ] **`next.config.mjs` `images.formats`** — `["image/avif", "image/webp"]` is set but most images use `unoptimized: true` or plain `<img>`. Audit whether optimisation is actually running for portrait/logo images.
