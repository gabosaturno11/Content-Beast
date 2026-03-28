# CONTENT BEAST v9.0

AI-powered Content OS. PDF Maker + Voice Multiplier + Epistemic Atomizer + Canvas — one app, zero frameworks, single HTML file.

**Live:** [content-beast-five.vercel.app](https://content-beast-five.vercel.app)
**License:** Private

---

## What It Does

Content Beast is a single-page content creation system with four integrated modes and an AI brain.

### 4 Modes

| Mode | What It Does |
|------|-------------|
| **PDF Maker** | WYSIWYG editor, 4 visual templates, 5 content presets, html2pdf export, markdown shortcuts, version history |
| **Captions** | Voice Multiplier V3, 8 voice modes, Collision Matrix (3 dials, 20 techniques), 103+ seed captions, 6 platform engines |
| **Atomizer** | Document decomposition for PDF/VTT/SRT/Markdown/text, epistemic type classification, 8 transcript templates |
| **Canvas** | Infinite whiteboard, 3 node types, connection lines, 6 layout templates, alignment tools, PNG/PDF export |

### AI Brain (v9.0)

Right-drawer panel powered by Claude. Runs an epistemic orbit loop:

```
SEED → ATOMS → COLLISIONS → CHANNEL → ARTIFACT → NEXT QUESTION
```

- **Epistemic Types:** claim, story, protocol, pattern, belief, question, feeling, command (wired -- every atom and caption gets classified via `classifyEpistemicType` at creation)
- **Channel Presets:** email, blog, tech, speech, webinar, book
- **Aperture Levels:** atom, section, chapter, os
- **Collision Matrix:** 20 techniques with 3 parametric dials (Intensity, Vulnerability, Abstraction)
- **Recursive Loop:** Each orbit generates the next question → re-seed → deeper orbit

### Cross-Mode Workflows

- **Transcript → Published Content:** Atomizer (import VTT) → select atoms → To PDF → format → export
- **Idea → Six Platforms:** Captions (type seed) → select voice + platforms → Multiply → copy variants
- **Content Calendar:** Canvas (Social Calendar template) → drag captions from library → connect → export PNG
- **Long Doc → Atomic Content:** Atomizer (import PDF) → filter quotes → To Seed → Multiplier → platform-ready

## API

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/claude-brain` | POST | AI synthesis — epistemic orbit engine |

**Request:** `{ seed, target, aperture, collisionPack, epAtoms, voiceDials, structureTemplate, metaQuestion }`
**Response:** `{ mode, summary, content, captions[], nodes[], connections[], nextQuestion }`

**Requires:** `ANTHROPIC_API_KEY` environment variable on Vercel.

## Architecture

```
Content-Beast/
├── index.html           (369KB — THE ENTIRE APP)
├── api/
│   └── claude-brain.js  (Anthropic Claude serverless function)
├── CLAUDE.md            (Build specs)
├── USER_MANUAL.md       (User manual)
├── vercel.json          (Routing)
└── README.md
```

- **Single-file architecture** — everything lives in `index.html`
- **Storage:** IndexedDB + localStorage (all data stays in your browser)
- **Fonts:** JetBrains Mono + Sora (locked)
- **Theme:** Dark only, teal accent (`#2dd4bf`)
- **Export:** html2pdf.js, jsPDF, JSZip
- **Framework:** None. Zero dependencies beyond CDN libraries.

## Deploy

```bash
# Clone
git clone https://github.com/gabosaturno11/Content-Beast.git

# Set environment variable on Vercel
vercel env add ANTHROPIC_API_KEY

# Deploy (auto-deploys on push to main)
git push origin main
```

## Saturno Ecosystem

Content Beast is one piece of the Saturno Movement infrastructure:

| Layer | Product |
|-------|---------|
| **Flagship** | Saturno Movement app |
| **Bridge** | Vault (bonus.saturnomovement.com) |
| **Multiplier** | Content Beast |
| **Infra** | ASTRA command center, titan-forge |

## What's Coming in v10.0

- Voice profile persistence (named presets, survive refresh)
- Transcript-to-everything pipeline (paste transcript → get all platforms)
- Branded PDF templates (Lead Magnet, Quick Guide, Workbook)
- Collision Matrix expansion (20 → 100 techniques)
- Knowledge context layer (AI gets smarter as you use it)
- Platform export cards (one-click copy per platform with character counts)

## License

Private. All rights reserved. Gabo Saturno / Saturno Movement.
