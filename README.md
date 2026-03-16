# CONTENT BEAST v9.0

**Live:** [content-beast-five.vercel.app](https://content-beast-five.vercel.app)
**Repo:** gabosaturno11/Content-Beast
**Deploy:** `git push origin main` (Vercel auto-deploys)

AI-powered PDF Maker + Content Tools + Epistemic Atomizer. Single-file architecture, dark theme, zero frameworks.

## 4 Modes

| Mode | What It Does |
|------|-------------|
| **PDF Maker** | WYSIWYG editor, 4 templates, 5 presets, html2pdf export |
| **Captions** | Voice multiplier V3, Collision Matrix dials, 103+ seed captions |
| **Atomizer** | Document decomposition, VTT/SRT transcript pipeline |
| **Canvas** | Whiteboard with nodes, connections, groups, PNG/PDF export |

## v9.0 — AI Brain

- Epistemic Atom Model (9 epTypes: claim, story, protocol, pattern, belief, question, feeling, command, unknown)
- Brain Drawer (right panel, Claude-powered orbit loop)
- Channel Presets (email, blog, tech, speech, webinar, book)
- Collision Matrix (100 techniques from PX1 + god-level prompts)
- Recursive epistemology loop: SAY -> REVEALS -> ROUTE -> VALIDATES -> EXPANDS -> SAY AGAIN

## API

| Endpoint | Purpose |
|----------|---------|
| /api/claude-brain | AI synthesis (POST) — epistemic orbit engine |

## Tech

- 1 HTML file (~2000+ lines)
- Storage: IndexedDB (ContentBeastCaptions v2) + localStorage
- Fonts: JetBrains Mono + Sora (locked)
- Theme: Dark only, teal accent (#2dd4bf)
- Export: html2pdf.js, jsPDF, JSZip

## Part of the Saturno Ecosystem

- **ASTRA** controls everything: astra-command-center-sigma.vercel.app
- **Supabase** is the backend: 15 tables, shared with Client OS
- Content Beast → ASTRA Pipeline → Supabase

## License

Private.
