

# Zach Cowan — Personal Website

A clean, professional one-page static site for an independent math educator and percussionist in Chico, CA.

## Design System
- **Color palette toggle** via a single CSS variable flag — Option A (deep indigo + warm off-white) as default, Option B (muted clay + charcoal) easily switchable
- **Typography**: Google Fonts — serif headings (e.g., Lora or Source Serif Pro), sans-serif body (e.g., Inter or Source Sans Pro)
- Generous whitespace, muted tones, no bright colors, no heavy animations

## Layout & Navigation
- **Sticky top nav** with smooth anchor links: Math Support, Drumming, About, Contact
- Mobile hamburger menu with clean slide-down
- Single scrolling page with clear section dividers

## Sections

### 1. Hero
- Headline, subheadline, short intro paragraph
- Two CTA buttons (Book Math Support / Drumming Lessons)
- Professional portrait placeholder (circular or soft-rounded)

### 2. Mathematics & Homeschool Support
- Bullet list of offerings with pricing
- Philosophy tagline
- Two testimonial cards with quotes and attribution

### 3. Drumming & Rhythm Instruction
- Lineage/authority line under heading
- Bullet list of offerings
- Philosophy tagline
- Responsive video embed placeholder (no autoplay)
- Three testimonial cards from musicians/dancers

### 4. Meet Zach
- Second video embed placeholder (intro video, no autoplay)
- Bio paragraph

### 5. Contact
- Intro text, contact details (email, phone, location)
- Simple form (Name, Email, Message) using `mailto:` submission
- "In-person and online" note

### Footer
- Centered closing line: *Honoring tradition. Strengthening the work.*
- Minimal, no clutter

## Technical Notes
- Fully static React + Tailwind (deployable to GitHub Pages via build output)
- Mobile-first responsive design
- Accessible contrast ratios throughout
- Subtle hover states only — no animations or autoplay
- Color palette switchable via a single constant in the code

