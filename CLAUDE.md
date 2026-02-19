# CONTENT BEAST — Build Specs

## Current State
- **Version:** v6.5+ (single-file HTML app, `index.html`)
- **Repo:** gabosaturno11/Content-Beast
- **Deploy:** Vercel auto-deploy from main → content-beast-five.vercel.app
- **Architecture:** Single HTML file (~4100+ lines) with inline CSS + JS
- **Storage:** IndexedDB (`ContentBeastCaptions` DB) for caption library + canvas state
- **Caption Library:** 103 Gabo content captions + 80 seed library entries, auto-seeded on first load

## Hard Rules
1. **Single-file architecture** — everything lives in index.html
2. **NO EMOJIS in UI** — custom icons only
3. **Commit + deploy after EVERY meaningful change**
4. **NO_DELETE** — never delete without explicit permission
5. **Dark theme only** — Endel-inspired, purple accent system
6. **Mobile-first** — every feature must work on mobile
7. **JetBrains Mono + Sora** — font system is locked

---

## UX/Canvas Spec (v7.0 Target)

### Block 1 — Role
Senior staff/principal engineer + UX systems architect. Ship production-grade UX improvements: accessible, mobile-first, performance-safe, maintainable.

### Block 2 — Mission
Deliver requested UX/navigation improvements end-to-end. Do not stop at planning or partial progress. If blocked by unknowns, proceed with best-practice defaults, document assumptions, and keep going.

### Block 3 — Primary Success Criteria (Definition of Done)
You are "done" only when:
- The requested UX features exist and work on **desktop + mobile**
- A11y basics are met (keyboard/focus/semantics; touch alternatives on mobile)
- No major regressions to existing Caption Library seeding / IndexedDB persistence

### Block 4 — Execution Policy (Anti-stall)
- Choose a default, implement it, and log it under "Assumptions Made."
- Never end with "here's what I would do." Always implement.

### Block 5 — Iteration Loop (Do not break until done)
Repeat:
1. Implement the next smallest coherent slice
2. Fix failures immediately
3. Verify acceptance criteria
4. Move to next slice

### Block 6 — Mobile-Always Requirements (Non-negotiable)
Every UX change must include mobile behavior:
- Responsive layout (breakpoints + fluid sizing)
- Touch support for interactions (drag, drop, scroll, long-press alternatives)
- Panels must be usable on small screens (collapse to drawers/sheets)
- Minimum tap target sizes; avoid hover-only affordances
- Performance safe on mobile (avoid heavy reflow; avoid jank during drag)

### Block 7 — Information Architecture + Navigation
- Keep navigation predictable and resilient (no dead ends)
- "Where am I / what can I do next" must be visible
- Add breadcrumbs/headers only if they reduce confusion

### Block 8 — Visual System Spec (Endel-inspired)
- Base background: near-black (#0B0B10 or similar)
- Text: --text: rgba(255,255,255,0.92); --muted: rgba(255,255,255,0.68)
- Accent hues: blue (#4F7CFF) + purple (#8B5CF6) with subtle gradients
- Endel-like gradients: low-opacity radial gradients, barely perceptible
- Higher elevation modules:
  - `--surface: rgba(255,255,255,0.04)`
  - `--surface-2: rgba(255,255,255,0.06)`
  - `--border: rgba(255,255,255,0.08)`
  - `--shadow-1: 0 8px 24px rgba(0,0,0,0.35)`
  - `--shadow-2: 0 16px 48px rgba(0,0,0,0.45)`
- Motion: 150-320ms, ease curves, respect prefers-reduced-motion

### Block 9 — Canvas Requirement (Non-negotiable feature scope)
Implement a **white canvas** where users can:
- Drag caption blocks (and/or text modules) onto the canvas to create "nodes"
- Reposition nodes freely
- Add images to the canvas (upload/paste/drag-in)
- Save/restore canvas state (IndexedDB persistence)
- Canvas must work on desktop + mobile (touch drag/pan/zoom)

### Block 10 — Canvas UX Behaviors

**A) Caption Library Integration:**
- Caption blocks are draggable
- Dragging provides a clear preview/ghost
- Drop targets are obvious (Canvas drop zone)
- "Add to Canvas" button for mobile-friendly fallback

**B) Canvas Features:**
- Pan + zoom (mouse wheel/trackpad; touch pinch on mobile)
- Drag nodes to reposition
- Multi-node selection (desktop; mobile simplified)
- Delete node, duplicate node, edit node text
- Add images: upload file picker, drag image file onto canvas (desktop), paste image
- Persistence: save canvas graph (nodes, positions, content refs) into IndexedDB, restore on reload
- Export: JSON of canvas graph (MVP), PNG snapshot (optional)

### Block 11 — Acceptance Criteria
- Desktop: drag a caption block -> drop on canvas -> node appears at drop position
- Mobile: user can add a caption to canvas without requiring drag (button or long-press)
- Canvas state persists after refresh
- Images can be added (at least via upload)
- No regressions: Caption seeding/dedup still works; app loads without errors
- `prefers-reduced-motion` respected for major transitions
- Keyboard: focus visible; basic navigation works; delete node via keyboard (desktop)

---

## Architecture Reference

### Modes
- `pdf` — PDF Maker (default)
- `caption` — Captions (multiplier, seed library, caption library)
- `atomizer` — Atomizer (document decomposition)
- `canvas` — Canvas (drag-and-compose workspace)

### Key Functions
- `setMode(mode)` — switches between modes
- `setView(view)` — switches layout (full/split/focus)
- `toggleSidebar()` — Astra-style sidebar toggle
- `mobileTab(tab, btn)` — mobile bottom nav
- `seedGaboCaptions()` — loads 103+ content captions into IndexedDB
- `importSeedsToLibrary()` — loads seed library into IndexedDB

### IndexedDB Schema
- **DB:** ContentBeastCaptions
- **Store:** captions (keyPath: id, indexes: theme, voice, platform, created)
- **Store:** canvasState (keyPath: id) — for canvas persistence

### CSS Token System
- `--bg-void` / `--bg-base` / `--bg-elevated` / `--bg-surface` — depth layers
- `--accent` (#a855f7) / `--cyan` (#818cf8) — primary colors
- `--shadow-sm/md/lg/xl` — elevation system
- `--mono` / `--sans` — typography
