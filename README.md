# Content Beast

Premium content creation product. Not just a PDF maker.

## Identity

Content Beast is a content operating system — a canvas, carousel, asset generator, and content intelligence engine that transforms ideas into multi-format outputs.

## What it is

- Content pipeline and transformation engine
- 4 integrated modes: PDF Maker, Captions, Atomizer, Canvas
- AI Brain v9.0 with epistemic orbit loop
- Artifact builder for multi-platform output
- One of the fastest monetizable product surfaces

## What it is not

- Not just a PDF toy or caption generator
- Not merely "content support" for ASTRA
- Not decorative

## Role in ecosystem

- **Upstream:** Receives structured context from ASTRA (prompts, KB entries)
- **Downstream:** Exports artifacts into Bonus, Client OS, social platforms
- **Shared services:** Supabase backend (cb_* tables created, wiring pending)
- **Controlled by:** ASTRA orchestration layer
- **Part of:** APSIS ENTERPRISE

## Live

- **URL:** [content-beast-five.vercel.app](https://content-beast-five.vercel.app)
- **Repo:** [gabosaturno11/Content-Beast](https://github.com/gabosaturno11/Content-Beast)
- **Deploy:** `git push origin main` (Vercel auto-deploy)

## Source of truth

- **Durable (future):** Supabase — cb_captions, cb_canvas_state, cb_brain_log (tables created, NOT YET WIRED)
- **Current:** IndexedDB (ContentBeastCaptions) + localStorage (docs, versions, brain log)
- **Write authority:** Operator + AI Brain
- **Read authority:** Public (no auth gate)

## Tech stack

- Single HTML file (6,692 lines), zero frameworks
- Anthropic Claude API via /api/claude-brain (claude-sonnet-4-20250514)
- IndexedDB + localStorage
- Vercel serverless
- html2pdf for PDF export

## Features

### PDF Maker
4 visual templates, 5 content presets, markdown shortcuts, version history (40+ versions)

### Captions v3
Collision Matrix (20 techniques), 3 voice dials (Intensity, Vulnerability, Abstraction), 103+ seed captions, 6 platform engines

### Atomizer
PDF/VTT/SRT/MD/text parsing, 8 atom types, epistemic classification (claim, story, protocol, pattern, belief, question, feeling, command)

### Canvas
Infinite whiteboard, 3 node types, connections, 6 layouts, PNG/PDF export

### AI Brain v9.0
Epistemic Orbit Loop: SEED -> ATOMS -> COLLISIONS -> CHANNEL -> ARTIFACT -> NEXT QUESTION

## AI policy

- AI powers the Brain v9.0 orbit loop via Claude API
- AI output is advisory — operator curates final artifacts
- Epistemic type system classifies all content
- No autonomous mutations without operator trigger

## Product laws

- Premium over clutter
- Connect to ASTRA, don't flatten into one blob
- Don't rebuild a working specialized module just because ASTRA exists
- Single-file architecture — everything in index.html
- No emojis in UI, dark theme only

## Data boundaries

- Captions and documents belong to the operator
- Brain orbit results are ephemeral (max 30 in localStorage)
- No user data collection
- Future: Supabase persistence for cross-device sync

## Status

- **State:** Live, production
- **Commits:** 52
- **Design:** Dark theme, teal accent (#2dd4bf), JetBrains Mono + Sora fonts
- **Recent:** epType classification wired to atoms and captions (March 28)
- **Next:** Supabase Phase 2 (replace IndexedDB with cb_* tables)
