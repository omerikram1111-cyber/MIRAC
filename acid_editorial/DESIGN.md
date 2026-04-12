# Design System Specification: Editorial Precision

## 1. Overview & Creative North Star

### Creative North Star: "The Brutalist Editor"
This design system rejects the "app-like" conventions of rounded corners, soft shadows, and colorful gradients. Instead, it draws inspiration from high-end architectural monographs and avant-garde fashion journals. The goal is to present information with the authority of a premium consultancy and the edge of a digital-first creative studio.

The system is built on three pillars:
1.  **Extreme Contrast:** Using absolute black (`#000000`) and neon accents to create immediate visual impact.
2.  **Structural Rigidity:** A commitment to `0px` radii and sharp, hairline strokes that define space without the "clutter" of containers.
3.  **Typographic Scale as Layout:** Headlines aren't just text; they are structural elements that dictate the flow of the page.

---

## 2. Colors

The color palette is intentionally restricted to maintain a high-fashion, tech-forward aesthetic. It relies on the tension between deep blacks and high-visibility neon.

### Palette Highlights
*   **Background:** `surface_container_lowest` (`#000000`). This is the foundation. Every experience begins in absolute darkness.
*   **Accent (Primary):** `primary_container` (`#c5fe00`). This neon yellow/green is used sparingly for critical calls to action and interactive states.
*   **Typography:** `on_background` (`#ffffff`). High-legibility white ensures the content remains the focal point against the dark canvas.

### The "Linear Boundary" Rule
In this system, we do not use 1px solid borders for general sectioning or containment. Traditional "boxes" are prohibited. Instead:
*   **Negative Space:** Use the Spacing Scale to create moderate gaps between sections.
*   **Hairline Rules:** If a horizontal break is required, use the `outline_variant` (`#484848`) as a 1px line that spans the full width of the container. 
*   **Tonal Anchoring:** Subtle background shifts (e.g., moving from `surface` to `surface_container_low`) can be used to "anchor" a block of content without boxing it in.

---

## 3. Typography

Typography is the primary engine of this design system. We utilize a high-contrast pairing of a bold Grotesk and a geometric Sans-Serif.

### Headline & Display: Space Grotesk
*   **Vibe:** Industrial, tech-forward, authoritative.
*   **Usage:** Used for `display` and `headline` tiers. Always set with tight letter-spacing (-2% to -4%) to create a "block" of text effect. Use large scales (`display-lg`: 3.5rem) to command the viewport.

### Body & Label: Manrope
*   **Vibe:** Clean, functional, modern.
*   **Usage:** Used for `title`, `body`, and `label` tiers. This provides a sophisticated counter-balance to the aggressive headlines. Ensure generous line-height (1.5x) for maximum readability in long-form editorial content.

---

## 4. Elevation & Depth

Standard shadows and blur-based depth are strictly forbidden. Depth in this system is "flat" and architectural.

### The Layering Principle
Hierarchy is achieved through **Tonal Layering** using the Material surface tokens. 
*   **Base:** `surface` (`#0e0e0e`)
*   **Elevated Content:** `surface_container_high` (`#1f1f1f`). 
*   **Interactive Elements:** Elements do not "lift" off the page; they change color. There is no Z-axis, only a shift in value.

### Sharp Edges
The `Roundedness Scale` is set to `0px` across all tokens (`sm` through `xl`). This reinforces the "Brutalist" feel. Every button, input field, and container must have 90-degree corners.

### The "Ghost Rule"
Avoid 100% opaque borders. If a boundary is needed for a form field or a button, use `outline` (`#757575`) at 30% opacity. This creates a "Ghost Border" that feels integrated into the dark background rather than sitting on top of it.

---

## 5. Components

### Buttons
*   **Primary:** Background: `primary_container` (`#c5fe00`), Text: `on_primary` (`#4f6700`). Sharp edges. Heavy uppercase labels.
*   **Secondary:** Background: Transparent, Border: 1px `on_background` (`#ffffff`), Text: `on_background`. 
*   **Interaction:** On hover, the primary button should invert or shift to `primary_fixed_dim` (`#b9ef00`).

### Input Fields
*   **Style:** Underline only. No four-sided boxes.
*   **Focus State:** The 1px underline transitions from `outline` to `primary_container` (`#c5fe00`).
*   **Error State:** Use `error` (`#ff7351`) for text and underlines. No icons; let the typography communicate the error.

### Lists & Dividers
*   **Layout:** Vertical lists must use `body-lg` for items. 
*   **Dividers:** Use 1px hairline rules (`outline_variant`). 
*   **Spacing:** Ensure at least 32px of padding between list items to maintain the editorial feel.

### Navigation (The Editorial Rail)
*   Instead of a standard top bar, consider a "Rail" system—thin vertical or horizontal lines that house the `label-md` navigation links, separated by small vertical pipes (`|`) or significant whitespace.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme scale. A headline can take up 50% of the viewport.
*   **Do** embrace the "Pure Black." Let the `#000000` background breathe.
*   **Do** use 90-degree angles for everything. Precision is luxury.
*   **Do** use the neon accent (`#C6FF00`) as a surgical tool—only for where you want the eye to land immediately.

### Don't:
*   **Don't** use border-radius. Even a 2px radius breaks the aesthetic.
*   **Don't** use shadows. If you need to separate a layer, use a tonal shift in the background color.
*   **Don't** use "Card" UI. Do not wrap content in boxes with backgrounds; use typography and lines to define the relationship between elements.
*   **Don't** use gradients. Solid, flat colors only to maintain the high-contrast "studio" vibe.