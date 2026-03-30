# Content Beast

Premium content creation product. Not just a PDF maker.

## Identity

Content Beast is a content operating system -- a canvas, carousel, asset generator, and content intelligence engine that transforms ideas into multi-format outputs. Part of the APSIS ENTERPRISE connected ecosystem.

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

- **Durable (future):** Supabase -- cb_captions, cb_canvas_state, cb_brain_log (tables created, NOT YET WIRED)
- **Current:** IndexedDB (ContentBeastCaptions) + localStorage (docs, versions, brain log)
- **Write authority:** Operator + AI Brain
- **Read authority:** Public (no auth gate)

## Tech stack

- Single HTML file (~7,300 lines), zero frameworks
- Anthropic Claude API via /api/claude-brain (claude-sonnet-4-20250514)
- IndexedDB + localStorage
- Vercel serverless
- html2pdf + jsPDF for PDF export
- PDF.js for PDF import/parsing
- JSZip for batch export

## Features

### PDF Maker (Mode 1)
- 8 visual templates: Saturno, Dark, White, Minimal, Training Guide, Research Report, Rant Compilation, Prompt Library
- 5 content presets: Program PDF, Level Guide, Framework, Transcript, Cover Page
- Recently used templates sorted by frequency
- Level badges (Foundation, Intermediate, Advanced, Elite)
- Rich contentEditable editor with full toolbar
- Quick Insert blocks: callouts (info, tip, warning, important), code block, labeled divider, 2-column layout
- Image insertion, table builder, TOC generator
- Find & Replace (Cmd+F)
- Version history (40+ snapshots)
- Page estimation bar
- Markdown source editor with syntax help

### Captions v3 (Mode 2)
- Collision Matrix (20 techniques)
- 3 voice dials: Intensity, Vulnerability, Abstraction (1-10 each)
- 103+ seed captions with drag-to-canvas
- 6 platform engines
- Caption library with search, filter, delete
- Voice cards for rich voice selection

### Atomizer (Mode 3)
- PDF/VTT/SRT/MD/text file parsing
- 8 atom types
- Epistemic classification: claim, story, protocol, pattern, belief, question, feeling, command
- 6 processing templates: Smart Summary, Exercise Matrix, Quote Extraction, Chapter Builder, Visual Map, Platform Deploy
- Atom assembly into documents
- epType filter bar

### Canvas (Mode 4)
- Infinite whiteboard with pan/zoom
- 3 node types: sticky notes, text nodes, image nodes
- Node connections (link/unlink)
- Drag-drop captions from Captions mode
- Copy/paste nodes
- PNG + PDF export (transparent or white background)

### AI Brain v9.0
- Epistemic Orbit Loop: SEED -> ATOMS -> COLLISIONS -> CHANNEL -> ARTIFACT -> NEXT QUESTION
- 6 target channels: email, blog, tech, speech, webinar, book
- 4 aperture levels: atom, section, chapter, os
- Collision pack selection from 100 techniques
- Voice dials modulate collision strength
- Recursive orbit log (click any result to re-seed)
- Right-side drawer UI

### Import and Export
- Import: .md, .txt, .markdown files (drag-drop or file picker)
- Import from URL: paste any web page URL to fetch and strip text content
- Export: PDF (configurable paper/orientation/margins/quality/page numbers), HTML, Markdown (.md file), Plain Text
- Copy as Markdown: copies current doc to clipboard as clean markdown (Cmd+M)
- Quick Export: one-click PDF generation
- Batch Export: ZIP all documents
- Backup/Restore: JSON backup of all data

### Editor Features
- Fullscreen mode: hides sidebar and controls, expands preview
- Zen mode: distraction-free writing -- hides all chrome (header, footer, toolbar, sidebar, word count)
- Markdown keyboard shortcuts: Cmd+1/2/3 for headings, Cmd+Shift+> for blockquote, Cmd+Shift+C for code block, Cmd+B/I/U for bold/italic/underline
- Word count, character count, page estimate, reading time (live)
- Auto-save with "Saved" indicator
- Zoom controls (10% increments)
- Color picker for text
- Document library with search, sort (Recent, A-Z, Oldest)
- Collapsible sidebar (3 states: full, icons, hidden)

### UI System
- 5 color themes
- Dark theme only, no emojis
- Mobile optimized: safe area insets, 14px min font, touch targets, bottom nav
- Command palette (Cmd+K) with all actions searchable
- Keyboard shortcuts modal (Cmd+/)

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| Cmd+S | Save |
| Cmd+N | New document |
| Cmd+K | Command palette |
| Cmd+F | Find & Replace |
| Cmd+Shift+S | Export settings |
| Cmd+P | Print |
| Cmd+M | Copy as Markdown |
| Cmd+1 | Heading 1 |
| Cmd+2 | Heading 2 |
| Cmd+3 | Heading 3 |
| Cmd+B | Bold |
| Cmd+I | Italic |
| Cmd+U | Underline |
| Cmd+Shift+> | Blockquote |
| Cmd+Shift+C | Code block |
| Cmd+/ | Shortcuts help |
| Esc | Exit fullscreen / zen mode / close modals |

## AI policy

- AI powers the Brain v9.0 orbit loop via Claude API
- AI output is advisory -- operator curates final artifacts
- Epistemic type system classifies all content
- No autonomous mutations without operator trigger

## Product laws

- Premium over clutter
- Connect to ASTRA, don't flatten into one blob
- Don't rebuild a working specialized module just because ASTRA exists
- Single-file architecture -- everything in index.html
- No emojis in UI, dark theme only

## Data boundaries

- Captions and documents belong to the operator
- Brain orbit results are ephemeral (max 30 in localStorage)
- No user data collection
- Future: Supabase persistence for cross-device sync

## Status

- **Version:** v9.2
- **State:** Live, production
- **Lines:** ~7,300 (single HTML file)
- **Design:** Dark theme, teal accent (#2dd4bf), JetBrains Mono + Sora fonts
- **Recent:** v9.2 -- Import from URL, Copy as Markdown, Zen mode, markdown shortcuts, recently used templates
- **Next:** Supabase Phase 2 (replace IndexedDB with cb_* tables)
