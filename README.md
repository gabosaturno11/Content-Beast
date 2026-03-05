# Content Beast v9.0

**Live:** [content-beast-five.vercel.app](https://content-beast-five.vercel.app)
**Repo:** [github.com/gabosaturno11/Content-Beast](https://github.com/gabosaturno11/Content-Beast)
**Architecture:** Single HTML file with inline CSS + JS (~6600 lines)
**Version:** v9.0 -- AI Brain / Epistemic Atomizer-Synthesizer

---

## Feature List

### Core PDF Engine
- WYSIWYG contenteditable canvas with live preview
- 4 templates (Saturno, Dark, Minimal, White)
- 5 presets (Program PDF, Level Guide, Framework, Transcript, Cover Page)
- Saturno Movement level badges (Foundation/Intermediate/Advanced/Elite)
- Markdown parser with tables, blockquotes, code, lists
- html2pdf.js + jsPDF export with custom settings

### Enterprise Features
- Command Palette (Cmd+K) -- 37 fuzzy-searchable actions
- 3 view modes: Full / Split (md+preview) / Focus (no library)
- Export settings modal (paper size, orientation, margins, quality, page numbers)
- Batch export all docs as ZIP (JSZip)
- JSON backup/restore (full data + versions)
- Version history with snapshots and restore
- Find & Replace (Cmd+F)
- Auto-TOC generator
- Document statistics (words, chars, reading time)

### Editing Toolbar
- Bold, italic, underline, strikethrough
- H1/H2/H3, alignment (L/C/R), lists, blockquote
- Font size, text color picker
- Insert: image, table (visual grid), link, page break, HR
- Quick-insert menu: callout blocks (info/tip/warning/fire), code block, labeled divider, 2-column layout
- Indent/outdent, clear formatting
- Zoom (50-200%), fullscreen mode

### Library Management
- Document library with localStorage persistence
- Search, sort (recent/A-Z/oldest), drag-to-reorder
- Duplicate, delete, import .md/.txt, drag-drop files

### v9.0 AI Brain
- Epistemic Atom Model (epType classification: claim, story, protocol, pattern, belief, question, feeling, command)
- Brain Drawer (right-side panel, seed input, channel/aperture/collision selectors, orbit log)
- Channel Presets (email, blog, tech, speech, webinar, book)
- Collision Matrix (100 techniques with voice dials: Intensity, Vulnerability, Abstraction)
- Recursive Brain Loop (SAY > REVEALS > ROUTE > VALIDATES > EXPANDS > SAY AGAIN)

### Polish
- Keyboard shortcuts (8 shortcuts, help modal Cmd+/)
- Markdown syntax cheatsheet
- Print stylesheet (clean white for dark templates)
- Mobile responsive (768px breakpoint)
- Word/char/page count + reading time in status bar
- Caption multiplier (6 platforms, 5 voices)

---

## APSIS-ORBIT -- Sandbox & Integration Log

This section is the central integration hub for the Saturno ecosystem.
All cross-repo connections, sync status, and integration notes are tracked here
before changes are pushed to their respective repositories.

### Orbit Status

| Signal | Meaning |
|--------|---------|
| ACTIVE | Repo is live and receiving updates |
| STABLE | Repo is deployed and functional, low activity |
| ARCHIVE | No recent activity, preserved for reference |

### Integration Notes

- **Content-Beast <> saturno-beast-api:** Brain endpoint (`/api/claude-brain`) lives in this repo as a Vercel serverless function. The Beast API provides additional voice synthesis endpoints (`/api/synthesize`, `/api/batch`, `/api/transform`) and can be wired as an alternative backend for the Caption Multiplier.
- **Content-Beast <> astra-command-center:** Shared design language (dark theme, Sora + JetBrains Mono, teal accent). Content created in Beast can be organized in ASTRA's Content Vault. Future: direct export bridge.
- **nexus-capture > astra-command-center:** Chrome extension routes captures to ASTRA backend (`/api/capture`). Captured highlights could feed Content Beast's Atomizer as raw input.
- **saturno-solar-system <> interactive-toc-editor <> victory-belt-cc:** Book project trio for The Art of Calisthenics. Solar System visualizes structure, TOC Editor manages chapter layout, Victory Belt CC tracks project status.
- **AI-Hub <> saturno-hub:** Hub is the starter scaffold to merge all scattered frontends into one command center. AI-Hub is the legacy multi-page version deployed to GitHub Pages.

### Sync Log

_Use this section to track cross-repo sync events and decisions._

| Date | Repos Involved | Action | Status |
|------|---------------|--------|--------|
| 2026-03-05 | Content-Beast | Initial APSIS-ORBIT setup, repo directory created | Done |

---

## Saturno Ecosystem -- Repository Directory

### Content & Publishing

| Repo | Description | Language | Deploy | Status |
|------|-------------|----------|--------|--------|
| [Content-Beast](https://github.com/gabosaturno11/Content-Beast) | Enterprise PDF Maker + Content Tools + AI Brain v9.0 | HTML | [Vercel](https://content-beast-five.vercel.app) | ACTIVE |
| [saturno-beast-api](https://github.com/gabosaturno11/saturno-beast-api) | Multi-provider voice synthesis API (Claude/OpenAI/Gemini) | JS | Vercel | ACTIVE |
| [interactive-toc-editor](https://github.com/gabosaturno11/interactive-toc-editor) | Professional TOC editor for The Art of Calisthenics | HTML | [GitHub Pages](https://gabosaturno11.github.io/interactive-toc-editor/) | STABLE |

### Command Centers

| Repo | Description | Language | Deploy | Status |
|------|-------------|----------|--------|--------|
| [astra-command-center](https://github.com/gabosaturno11/astra-command-center) | Zero-dependency single-file command center for solopreneurs | HTML | [Vercel](https://astra-command-center-sigma.vercel.app) | ACTIVE |
| [victory-belt-cc](https://github.com/gabosaturno11/victory-belt-cc) | Internal command center for The Art of Calisthenics (TITAN design) | HTML | GitHub Pages | ACTIVE |
| [saturno-hub](https://github.com/gabosaturno11/saturno-hub) | Starter scaffold to merge all frontends into one hub | HTML | -- | STABLE |
| [AI-Hub](https://github.com/gabosaturno11/AI-Hub) | Unified workspace for both computers (legacy multi-page) | HTML | [GitHub Pages](https://gabosaturno11.github.io/AI-Hub/) | STABLE |

### Movement & Fitness

| Repo | Description | Language | Deploy | Status |
|------|-------------|----------|--------|--------|
| [saturno-movement-studio](https://github.com/gabosaturno11/saturno-movement-studio) | The Ableton of Movement -- DAW-style workout composition | HTML | -- | ACTIVE |
| [saturno-solar-system](https://github.com/gabosaturno11/saturno-solar-system) | Interactive solar system visualization for book project | Vue | [GitHub Pages](https://gabosaturno11.github.io/saturno-solar-system/) | STABLE |
| [saturno-muscle-up](https://github.com/gabosaturno11/saturno-muscle-up) | Muscle-up training resource | HTML | -- | ARCHIVE |

### Capture & Extensions

| Repo | Description | Language | Deploy | Status |
|------|-------------|----------|--------|--------|
| [nexus-capture](https://github.com/gabosaturno11/nexus-capture) | Chrome extension for universal highlight capture (routes to ASTRA + Notion) | JS | Chrome Extension | STABLE |

### Personal & Marketing

| Repo | Description | Language | Deploy | Status |
|------|-------------|----------|--------|--------|
| [traveling-os](https://github.com/gabosaturno11/traveling-os) | Flight Command Center -- one-way flight search & travel management | HTML | [Vercel](https://traveling-os.vercel.app) | STABLE |
| [gabo-karina-love-roulette](https://github.com/gabosaturno11/gabo-karina-love-roulette) | Interactive love story journey with poetry and mantras | JS | Vercel | STABLE |
| [saturno-bonus-vault](https://github.com/gabosaturno11/saturno-bonus-vault) | Saturno Movement BONUS Vault | HTML | -- | ARCHIVE |
| [saturno-newsletter](https://github.com/gabosaturno11/saturno-newsletter) | Newsletter signup page with Brevo integration | HTML | [GitHub Pages](https://gabosaturno11.github.io/saturno-newsletter) | STABLE |

---

## Inter-Repo Connection Map

```
                    +-------------------+
                    |   Content Beast   |  (PDF, Captions, Atomizer, Canvas, Brain)
                    +--------+----------+
                             |
              +--------------+--------------+
              |                             |
   +----------v----------+     +------------v-----------+
   | saturno-beast-api   |     | astra-command-center   |
   | (voice synthesis)   |     | (content vault, tasks) |
   +---------------------+     +------------+-----------+
                                            |
                                +-----------v-----------+
                                |    nexus-capture      |
                                | (Chrome ext > ASTRA)  |
                                +-----------------------+

   +---------------------+     +------------------------+     +-----------------+
   | saturno-solar-system| <-> | interactive-toc-editor | <-> | victory-belt-cc |
   | (visualization)     |     | (chapter layout)       |     | (project mgmt)  |
   +---------------------+     +------------------------+     +-----------------+
              \                          |                           /
               +-------------------------+-------------------------+
                            The Art of Calisthenics Trio

   +---------------------+     +------------------------+
   |      AI-Hub         | --> |     saturno-hub        |
   | (legacy workspace)  |     | (merge target)         |
   +---------------------+     +------------------------+
```

---

## Next Steps

### Immediate Actions
- [ ] Verify saturno-beast-api endpoints match Content Beast's `/api/claude-brain` contract
- [ ] Audit deploy permissions across all Vercel and GitHub Pages projects
- [ ] Confirm ASTRA command-center capture endpoint accepts Content Beast atom format

### Documentation
- [ ] Add detailed example READMEs for repos missing them (saturno-movement-studio, saturno-muscle-up)
- [ ] Document the shared design token system (CSS variables) used across Content Beast, ASTRA, Victory Belt CC
- [ ] Write inter-repo data contract specs (atom format, capture format, voice synthesis request/response)

### Backend Checks
- [ ] Validate ANTHROPIC_API_KEY is set in Vercel for Content Beast's `/api/claude-brain`
- [ ] Test saturno-beast-api health endpoint and provider auto-detection
- [ ] Confirm nexus-capture ASTRA routing is functional

### Integration Roadmap
- [ ] Content Beast > ASTRA: export atoms/captions directly to Content Vault
- [ ] Nexus Capture > Content Beast: route captured highlights to Atomizer input
- [ ] saturno-hub: define merge strategy for legacy AI-Hub frontends
- [ ] Shared auth layer across Vercel-deployed apps (if needed)
