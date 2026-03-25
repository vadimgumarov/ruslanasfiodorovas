# Design System Strategy: Editorial Authority

## 1. Overview & Creative North Star

### Creative North Star: "The Architectural Monolith"
This design system is built to convey the unwavering stability of real estate development and the refined taste of a high-end agent. It rejects the frantic, "click-here" energy of traditional real estate portals in favor of a curated, gallery-like experience. By utilizing high-contrast typography, an uncompromisingly sharp-edged geometry (0px border-radius), and an editorial layout, the system positions the agent as a director of luxury environments rather than just a salesperson.

**Breaking the Template:**
Unlike standard web grids, this system uses intentional asymmetry and large "white-space-as-structure" principles. Large-scale serif headlines overlap with high-resolution imagery, and content blocks are staggered vertically to create a rhythmic, scrolling experience that mimics a premium printed architectural journal.

---

## 2. Colors

The palette is rooted in architectural materials: basalt, limestone, and gold leaf.

- **Primary (`#5d5e61`):** A deep, graphite grey used for core structural elements and primary actions.
- **Secondary (`#785a1a`):** A sophisticated gold/bronze used sparingly as a "seal of quality" for callouts and premium CTAs.
- **Tertiary (`#496178`):** A muted slate blue used for secondary information or developmental data visualizations.
- **Surface Tiers:** We utilize a grayscale ramp (`surface-container-lowest` to `surface-container-highest`) to define hierarchy without borders.

**The "No-Line" Rule:**
1px solid borders are strictly prohibited for defining sections. Content transitions must be handled by shifting from `background` (#f8f9fa) to `surface-container-low` (#f1f4f6). This creates a "monolithic" feel where the page feels carved from a single block rather than assembled from pieces.

**Signature Textures & Glass:**
For floating navigation or project overlays, use **Glassmorphism**. Apply a background of `surface_container_lowest` at 80% opacity with a `20px` backdrop-blur. For primary CTAs, a subtle linear gradient from `primary` (#5d5e61) to `primary_dim` (#515255) adds a metallic, satin-finish depth.

---

## 3. Typography

The typographic strategy is a dialogue between the classic authority of the serif and the modern precision of the sans-serif.

- **Display & Headlines (Newsreader):** The serif `newsreader` is the voice of the expert. It should be used for large statements and section titles. Its variable weights allow for "High-Contrast" pairings—using a thin weight for a subtitle directly above a bold weight for the main headline.
- **Title & Body (Manrope):** The sans-serif `manrope` provides technical clarity. It is used for property details, development specs, and long-form expertise. 
- **The Label Scale:** Small-caps or widely letter-spaced `label-md` tokens should be used for metadata (e.g., "SQUARE FOOTAGE" or "ESTIMATED COMPLETION"), acting as functional architectural annotations.

---

## 4. Elevation & Depth

This system avoids "floating" components in favor of "carved" or "stacked" layers.

- **The Layering Principle:** Depth is achieved through tonal nesting. A property feature card (`surface-container-lowest`) sits atop a project overview section (`surface-container-low`). This provides visual separation that feels natural and light-dependent.
- **Ambient Shadows:** Shadows should be used only for elements that physically move above the page (e.g., a "Contact" modal). Use a `40px` blur with a 4% opacity of the `on-surface` (#2b3437) color to create a soft, atmospheric glow.
- **The "Ghost Border" Fallback:** In rare cases where a container needs definition against a similar background, use `outline-variant` (#abb3b7) at **15% opacity**. This creates a "whisper" of a line that suggests a boundary without cluttering the editorial flow.
- **Corner Logic:** In accordance with the Roundedness Scale, all corners are `0px`. This maintains the "brutalist" architectural aesthetic and reinforces a sense of permanence.

---

## 5. Components

### Buttons
- **Primary:** `surface-container-lowest` text on a `primary` (#5d5e61) background. No border. Sharp corners.
- **Secondary:** `secondary` (#785a1a) text with a `Ghost Border` (15% opacity outline).
- **Interactive State:** On hover, primary buttons shift to `primary_dim`.

### Cards (Project & Property)
Forbid dividers. Use `spacing-10` (3.5rem) to separate the image from the text content. Project status (e.g., "Under Construction") should be a `Chip` using `tertiary-container` with `on-tertiary-container` text, placed in the top-right corner of the image.

### Input Fields
Text inputs use `surface-container-low` with a bottom-only border of `outline` (#737c7f) at 30% opacity. This mimics the look of a signature line on a contract.

### Data Lists (Development Specs)
Use `spacing-4` between rows. Instead of lines, use a subtle background toggle: odd rows use `surface`, even rows use `surface-container-low`.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetric Spacing:** Use `spacing-24` (8.5rem) for top padding and `spacing-12` (4rem) for bottom padding in hero sections to create a sense of movement.
- **Embrace the Serif:** Allow `display-lg` headlines to be the hero of the page; images should support the text, not compete with it.
- **Tonal Transitions:** Transition between `surface` and `surface-dim` to signal a shift from "Biography" to "Portfolio."

### Don't:
- **No Rounded Corners:** Never use `border-radius`. Everything must remain sharp and architectural.
- **No Heavy Shadows:** Avoid standard "drop shadows" that make elements look like they are hovering far off the page. Keep it grounded.
- **No Grid Rigidity:** Don't feel forced to center everything. Off-center text blocks paired with large-scale imagery create a much higher-end, curated feel.
- **No Standard Borders:** Avoid 1px solid lines for decoration. If it doesn't need to be there for functional clarity, remove it.
