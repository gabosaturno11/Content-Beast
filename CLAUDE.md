# CONTENT BEAST v9.0 — ASTRA SATURNO BRAIN SPECS

## Current State
- **Version:** v9.0 — AI Brain / Epistemic Atomizer-Synthesizer
- **Repo:** gabosaturno11/Content-Beast
- **Deploy:** Vercel auto-deploy from main → content-beast-five.vercel.app
- **Architecture:** Single HTML file with inline CSS + JS (HARD RULE: stays single file)
- **Storage:** IndexedDB (ContentBeastCaptions DB, schema v2) + localStorage
- **Font system:** JetBrains Mono + Sora — LOCKED. No changes.
- **Theme:** Dark only. No emojis. Custom icons only.

## Hard Rules (unchanged + new)
1. Single-file architecture — everything lives in index.html
2. NO EMOJIS in UI — custom icons only
3. Commit + deploy after EVERY meaningful change
4. NO_DELETE — never delete without explicit permission
5. Dark theme only
6. Mobile-first — every feature must work on mobile
7. JetBrains Mono + Sora fonts — locked
8. NEW: Brain panel is a right drawer — never a modal, never a new page
9. NEW: epType classification is additive — never replaces existing atom.type
10. NEW: Channel ladder is: email → blog → tech → speech → webinar → book
11. NEW: Scale aperture is: atom → section → chapter → os
12. NEW: Collision techniques live in a JS const — never hardcoded per function

## v9.0 New Systems

### A. Epistemic Atom Model
Atoms now carry `epType` in addition to `type`.
epType values: claim | story | protocol | pattern | belief | question | feeling | command | unknown
Classification: rule-based (JS, no API) via `classifyEpistemicType(text, atomType)`

### B. Brain Drawer
- Triggered by BRAIN button in .hdr-right
- Right-side panel, 360px wide, slides in from right
- State: open/closed — no overlay lock on body scroll
- Fields: seed textarea | target channel select | aperture select | collision pack select | run button | orbit log (last 20 runs)

### C. Channel Presets
Target channels: email | blog | tech | speech | webinar | book
Each channel has:
- structureTemplate: string (HTML scaffold)
- collisionPack: array of technique IDs (3–7) from COLLISION_MATRIX
- epBias: array of epTypes prioritized for that channel
- apertureSuggestion: default aperture for that channel

### D. Collision Matrix
100 techniques from Collision-prompt-PX1.md + Prompting-level-god-2.txt
Stored as JS const COLLISION_MATRIX = [...] at top of script block
Each entry: { id, name, type (dial/slider/switch/knob), collision, move, best_for, failure_mode }
Brain dials (Intensity 1–10, Vulnerability 1–10, Abstraction 1–10) modulate collision strength

### E. Claude Backend Contract
Endpoint: /api/claude-brain (POST)
Request shape: { seed, target, aperture, collisionPack, epAtoms, voiceDials, metaQuestion }
Response shape: { mode, summary, content, captions[], nodes[], connections[], nextQuestion }
- mode: 'pdf' | 'caption' | 'canvas' | 'multi'
- nextQuestion: seed question Claude generates for next orbit loop

### F. Seed Meta-Question (always injected)
"What do I need to say right now that, once said, tells me what to say next,
where to say it, and makes everything I've already said more true?"

### G. Brain Loop (recursive)
Each Brain run appends a nextQuestion to the orbit log.
Clicking any orbit log entry re-seeds the Brain input → new orbit.
This creates the recursive epistemology loop: SAY → REVEALS → ROUTE → VALIDATES → EXPANDS → SAY AGAIN

## Key New Functions
- `classifyEpistemicType(text, atomType)` → epType string
- `setEpFilter(ep)` → filters atom list by epType
- `toggleBrain()` → opens/closes brain drawer
- `runBrain()` → orchestrates full orbit
- `callClaudeBrain(payload)` → fetch to /api/claude-brain
- `handleBrainResult(result, ctx)` → routes result to correct mode
- `appendBrainLog(entry)` → adds to orbit log, persists to localStorage
- `getChannelPreset(target)` → returns { structureTemplate, collisionPack, epBias, apertureSuggestion }
- `buildClaudePayload(seed, target, aperture)` → assembles full request from atoms + dials + preset

## IndexedDB Schema additions (v3)
- Store: brainLog (keyPath: id) — { id, ts, target, aperture, seed, summary, nextQuestion }

---

## Existing Systems (v8.0)

### Modes
- `pdf` — PDF Maker (default)
- `caption` — Captions (multiplier V3 with Collision Matrix dials, seed library, caption library)
- `atomizer` — Atomizer (document decomposition + VTT/SRT transcript pipeline)
- `canvas` — Canvas (whiteboard with colors, notes, connections, groups)

### Key Functions (existing)
- `setMode(mode)` — switches between modes
- `toggleSidebar()` — Astra-style sidebar toggle
- `mobileTab(tab, btn)` — mobile bottom nav
- `seedGaboCaptions()` — loads 103+ content captions into IndexedDB
- `cvAddNode(type, data)` — add node to canvas
- `cvRender()` — re-render all canvas nodes
- `cvExportPNG()` / `cvExportPDF(transparent)` — canvas export
- `multiply()` — voice multiplier V3 with real Collision Matrix transforms

### Design System (v8.5)
- Spacing scale: --sp-1 through --sp-9 (4px base)
- Typography: --text-xs through --text-xl with clamp()
- WCAG AA contrast on all text levels
- Focus-visible states on all interactive elements
- 44px touch targets on mobile
- Semantic colors: --success/--warning/--error/--info

### CSS Token System
- `--bg-void` (#050508) / `--bg-base` / `--bg-elevated` / `--bg-surface` — depth layers
- `--accent` (#2dd4bf) / `--cyan` (#38bdf8) — teal + sky blue
- `--mono` (JetBrains Mono) / `--sans` (Sora) — typography
- Full spacing, shadow, border, and motion token system
