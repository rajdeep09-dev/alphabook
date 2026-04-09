# Session Prompts

This document stores all the prompts provided during the session.

## Prompt 1
Got it. Here's the reimagined prompt with sky blue color palette, new fonts, updated hero text placement, local video bg references, and two new sections added. Liquid glass is untouched.

---

**REVISED PROMPT**

Build a premium, single-page landing page for an AI-powered web design agency using React + Vite + Tailwind CSS + shadcn/ui + Framer Motion (motion/react). The page has a cinematic editorial aesthetic — sky blue and deep navy backgrounds, crisp white text, liquid glass (glassmorphism) effects, and local video backgrounds.

---

**FONTS**
Import from Google Fonts:

```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap
```

- Headings: Playfair Display (italic) — `font-heading`
- Body: DM Sans (300, 400, 500, 600) — `font-body`

Tailwind config:
```js
heading: ["'Playfair Display'", "serif"]
body: ["'DM Sans'", "sans-serif"]
```

---

**COLOR THEME**

```css
:root {
  --background: 204 80% 16%;         /* deep navy */
  --foreground: 0 0% 100%;
  --card: 204 60% 20%;
  --card-foreground: 0 0% 100%;
  --primary: 199 89% 60%;            /* sky blue */
  --primary-foreground: 204 80% 10%;
  --secondary: 204 60% 28%;
  --secondary-foreground: 0 0% 100%;
  --muted: 204 40% 24%;
  --muted-foreground: 0 0% 100% / 0.6;
  --accent: 199 89% 72%;             /* lighter sky blue */
  --accent-foreground: 204 80% 10%;
  --border: 199 89% 60% / 0.2;
  --input: 0 0% 100% / 0.15;
  --ring: 199 89% 60% / 0.4;
  --radius: 9999px;
  --glass-bg: rgba(135, 206, 250, 0.08);
  --glass-border: rgba(135, 206, 250, 0.2);
  --glass-shadow: 0 4px 30px rgba(0, 80, 140, 0.15);
  --glass-blur: 16px;
}
```

---

**LIQUID GLASS CSS** ← **DO NOT MODIFY — KEEP EXACTLY AS ORIGINAL**

(Copy `.liquid-glass` and `.liquid-glass-strong` with all `::before` pseudo-elements verbatim from the original prompt.)

---

**ASSETS & MEDIA — LOCAL VIDEO FILES**

The developer will place video files in `public/videos/`. Reference them as local paths. Use two versions per section: one for desktop, one for mobile (swap using a responsive wrapper).

```
Hero bg desktop:     /videos/hero-desktop.mp4
Hero bg mobile:      /videos/hero-mobile.mp4
Start section:       /videos/start-desktop.mp4  /  /videos/start-mobile.mp4
Stats section:       /videos/stats-desktop.mp4  /  /videos/stats-mobile.mp4
CTA/Footer section:  /videos/cta-desktop.mp4    /  /videos/cta-mobile.mp4
Poster fallback:     /images/hero_bg.jpeg
```

For each video background, render TWO `<video>` tags — one `hidden md:block` (desktop), one `block md:hidden` (mobile) — both `autoPlay loop muted playsInline absolute inset-0 w-full h-full object-cover`.

Feature GIFs: same as original (`src/assets/feature-1.gif`, `feature-2.gif`)
Logo: `src/assets/logo-icon.png` (h-12 w-12)

---

**SECTION-BY-SECTION BREAKDOWN**

**1. NAVBAR** (fixed, floating)
- Fixed top-4, full width, px-8 lg:px-16, py-3, z-50
- Left: Logo image (h-12 w-12)
- Center (desktop, hidden md:flex): Nav links inside liquid-glass rounded-full pill
  - Links: "Home", "Services", "Work", "Process", "Pricing"
  - Each: px-3 py-2 text-sm font-medium font-body text-white/85
  - Last item: solid sky-blue button "Get Started" + ArrowUpRight icon — `bg-[#38bdf8] text-[#0c2a40]` rounded-full px-3.5 py-1.5 text-sm font-semibold
- Right (mobile): hamburger icon

---

**2. HERO SECTION**
- Container: relative overflow-hidden, min-height: 100svh
- Background: dual `<video>` tags (desktop + mobile), `absolute inset-0 w-full h-full object-cover z-0`
- Overlay: `absolute inset-0 bg-[#0a1f35]/50 z-0` (deep navy tint, not black)
- Bottom gradient: `absolute bottom-0 h-[350px]` linear-gradient to bottom from transparent to `#0a1f35`
- **Content layout: z-10, positioned at bottom-left of viewport**
  - `absolute bottom-0 left-0 px-8 lg:px-20 pb-16 md:pb-20 max-w-3xl`
  - Badge pill: liquid-glass rounded-full px-1 py-1 — inner `bg-[#38bdf8] text-[#0c2a40]` "New" badge + "Introducing AI-powered web design."
  - Heading (BlurText): **"The Website Your Brand Deserves"**
    - `text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] tracking-[-3px] max-w-xl`
    - Word-by-word blur-in from bottom, delay 100ms per word
  - Subtext (motion.p): "Stunning design. Blazing performance. Built by AI, refined by experts. This is web design, wildly reimagined."
    - `text-sm md:text-base text-white/70 font-body font-light leading-snug mt-4 max-w-md`
    - blur-in delay 0.8s
  - CTA buttons (motion.div, delay 1.1s, flex gap-3 mt-6):
    - "Get Started" — liquid-glass-strong rounded-full px-5 py-2.5 + ArrowUpRight icon, text-white
    - "Watch the Film" — text-white/80 font-body text-sm + Play icon (filled), no bg
- Partners bar: `absolute bottom-8 right-8 md:right-16` — liquid-glass rounded-full px-4 py-2 pill containing "Trusted by" text + partner names in a single row: **Stripe · Vercel · Linear · Notion · Figma** — `font-heading italic text-white text-base gap-6`

---

**3. BlurText COMPONENT** ← Keep exactly as original

---

**4. START SECTION ("How It Works")**
- Dual local video bg (desktop + mobile)
- Sky blue tint overlay: `bg-[#0c2a40]/40`
- Top/bottom gradient fades (200px, fading to `#0a1f35`)
- Content centered, z-10, minHeight 500px:
  - Badge: "How It Works" in liquid-glass rounded-full
  - Heading: "You dream it. We ship it." — `font-heading italic text-white`
  - Subtext: text-white/60 font-body font-light
  - CTA: "Get Started" liquid-glass-strong

---

**5. FEATURES CHESS (alternating rows)**
- Section header: "Capabilities" badge + **"Pro features. Zero complexity."**
- Section bg: `bg-[#091929]`
- Row 1 (content left / gif right) — same copy as original
- Row 2 (reversed) — same copy as original
- All headings: `font-heading italic text-white`
- Body text: `text-white/65 font-body font-light`

---

**6. FEATURES GRID ("Why Us")**
- Section bg: `bg-[#091929]`
- Header: "Why Us" badge + "The difference is everything."
- 4-column grid, each card: liquid-glass rounded-2xl p-6
- Icon circles: liquid-glass-strong rounded-full w-10 h-10, icon color `text-[#38bdf8]`
- Cards: same 4 as original (Zap, Palette, BarChart3, Shield)

---

**7. ✦ NEW — PROCESS SECTION ("How We Work")**
- Section bg: `bg-[#0a1f35]`
- Header: "Our Process" badge + "Four steps to your perfect site."
- Horizontal stepper layout on desktop, vertical stack on mobile
- 4 steps, each in a liquid-glass rounded-2xl p-6 card with a large sky-blue step number (`text-6xl font-heading italic text-[#38bdf8]/30`) behind the content:
  1. **"Discover"** — "You share your vision, goals, and brand. We listen deeply."
  2. **"Design"** — "Our AI drafts wireframes and visuals. You approve in hours."
  3. **"Build"** — "Experts refine and ship a pixel-perfect site at speed."
  4. **"Optimise"** — "Live analytics drive continuous improvement. No extra cost."
- Connector line between cards (desktop only): `border-t border-[#38bdf8]/20`

---

**8. STATS SECTION**
- Dual local video bg (desktop + mobile), `filter: saturate(0)` (B&W)
- Overlay: `bg-[#0a1f35]/60`
- Top/bottom fades to `#0a1f35`
- Stats card: liquid-glass rounded-3xl p-12 md:p-16, 4-column grid
  - Same 4 stats as original
  - Values: `font-heading italic text-[#38bdf8]` (sky blue accent on numbers)
  - Labels: `text-white/55 font-body font-light text-sm`

---

**9. TESTIMONIALS**
- Section bg: `bg-[#091929]`
- Header: "What They Say" badge + "Don't take our word for it."
- 3-column grid, liquid-glass rounded-2xl p-8 cards
- Same 3 testimonials as original
- Quote text: `text-white/75 font-body font-light text-sm italic`
- Sky blue accent quotation mark `"` at top of each card: `text-[#38bdf8] text-4xl font-heading`

---

**10. ✦ NEW — PRICING TEASER SECTION**

- Section bg: `bg-[#0a1f35]`
- Header: "Pricing" badge + "Simple. Transparent. Yours."
- 3-column card grid (liquid-glass rounded-2xl p-8), one card visually elevated (liquid-glass-strong, scale-105, `border border-[#38bdf8]/30`):
  1. **Starter** — "₹29,999" — "Landing page, mobile-optimised, 3-day delivery"
  2. **Growth** *(featured)* — "₹59,999" — "Full site, AI optimisation, integrations, 5-day delivery"
  3. **Scale** — "₹99,999" — "Custom portal, automation, dedicated support, ongoing retainer"
- Each card: plan name in `font-heading italic`, price in `text-4xl font-heading italic text-[#38bdf8]`, description in `text-white/60 font-body font-light text-sm`
- CTA button per card: liquid-glass-strong on Starter/Scale, `bg-[#38bdf8] text-[#0c2a40] font-semibold` on Growth

---

**11. CTA + FOOTER**

- Dual local video bg (desktop + mobile)
- Overlay: `bg-[#0a1f35]/55`
- Top/bottom fades to `#0a1f35`
- Heading: "Your next website starts here." — `font-heading italic text-white`
- Subtext: same as original, `text-white/60`
- Buttons:
  - "Book a Call" — liquid-glass-strong
  - "View Pricing" — `bg-[#38bdf8] text-[#0c2a40] font-semibold` rounded-full
- Footer bar: same structure, text-white/40

---

**KEY DEPENDENCIES** (unchanged)
```json
{
  "motion": "^12.35.0",
  "hls.js": "^1.6.15",
  "lucide-react": "^0.462.0",
  "react-router-dom": "^6.30.1"
}
```
Icons: ArrowUpRight, Play, Zap, Palette, BarChart3, Shield, CheckCircle

---

**OVERALL PAGE STRUCTURE**
```jsx
<div className="bg-[#0a1f35]">
  <Navbar />
  <Hero />
  <StartSection />
  <FeaturesChess />
  <FeaturesGrid />
  <ProcessSection />       {/* NEW */}
  <Stats />
  <Testimonials />
  <PricingTeaser />        {/* NEW */}
  <CtaFooter />
</div>
```

---
name the working directory agency2

## Prompt 2
run it on local host 3000

## Prompt 3
use the herobgmobile mp4 and jpeg for tye kobile version only and creqre a smooth transition from tue herisection to another , a seemless trasition and add marque plus the marque testonomial take referencw from agency-landing

## Prompt 4
i want yiu to use herobgdesktop.jpg  herobgdesktop.mp4  herobgmobile.jpeg  herobgmobile.mp4

## Prompt 5
thrwr is a blur overlay on the top of the herosection i down want it and analyse herobgdesktop.jpg  herobgdesktop.mp4  herobgmobile.jpeg  herobgmobile.mp4 to get a perfect colurs plattelate for otyee section amd cirrect placement of txext right in tye heqrt , go ahead take you time to think deeply

## Prompt 6
creqre a prompt.md of qll tye guven prompt f4om starting if this session to tue futire will be stored in docs folder