# Content Beast v8.0 — User Manual

---

## Table of Contents

1. [Overview](#1-overview)
2. [Interface Layout](#2-interface-layout)
3. [PDF Maker](#3-pdf-maker)
4. [Captions](#4-captions)
5. [Atomizer](#5-atomizer)
6. [Canvas](#6-canvas)
7. [Command Palette](#7-command-palette)
8. [Keyboard Shortcuts](#8-keyboard-shortcuts)
9. [Data & Storage](#9-data--storage)
10. [Mobile Usage](#10-mobile-usage)

---

## 1. Overview

Content Beast is a single-page content creation system. It runs entirely in your browser with no server dependency. All data is stored locally using localStorage and IndexedDB.

Four integrated modes work together:

| Mode | Purpose |
|------|---------|
| **PDF Maker** | Rich text editor with live preview and multi-format export |
| **Captions** | Content library + voice multiplier for 6 platforms |
| **Atomizer** | Document decomposition for PDF, VTT, SRT, Markdown, and plain text |
| **Canvas** | Infinite whiteboard for visual content planning |

Content flows between modes. A caption can become a PDF block. An atomized transcript can feed the multiplier. A canvas node can pull from the library. Everything connects.

---

## 2. Interface Layout

### Desktop (3-Column Grid)

```
┌──────────────────────────────────────────────────────────┐
│  CONTENT BEAST v8.0    [PDF] [Captions] [Atoms] [Canvas] │
├────────────┬─────────────────┬───────────────────────────┤
│            │                 │                           │
│  Library   │   Controls      │   Preview / Canvas        │
│  Panel     │   Panel         │   Panel                   │
│            │                 │                           │
│            │                 │                           │
├────────────┴─────────────────┴───────────────────────────┤
│  Word Count · Characters · Pages · Reading Time          │
└──────────────────────────────────────────────────────────┘
```

- **Library Panel** (left): Document list, caption library, or atom list depending on mode. Collapsible via sidebar toggle.
- **Controls Panel** (center): Mode-specific tools, settings, and inputs.
- **Preview Panel** (right): Live document preview, caption output, atom preview, or canvas workspace.

### View Modes

Switch between three layouts using the view buttons in the header:

- **Full** — All three columns visible.
- **Split** — Controls + Preview only. Library hidden.
- **Focus** — Minimized controls + centered preview for distraction-free editing.

### Sidebar Toggle

Click the sidebar button (top-left) to collapse or expand the library panel. State persists across sessions.

---

## 3. PDF Maker

PDF Maker is the default mode. It provides a WYSIWYG rich text editor with live preview and multi-format export.

### 3.1 Document Library

The left panel displays all saved documents sorted by last modified date.

- **Search**: Filter documents by title using the search box.
- **Sort**: Recent / A-Z / Oldest.
- **New Document**: Click "New" or press `Cmd+N`.
- **Open**: Click any document to load it.
- **Duplicate / Delete**: Right-click a document for options.

### 3.2 The Editor Canvas

The main editing area is a contenteditable WYSIWYG surface. Type directly, paste content, or use the formatting toolbar.

**Auto-save** runs every 2 seconds. A "Saved" indicator appears in the status bar.

**Markdown shortcuts** are supported inline:

| Syntax | Result |
|--------|--------|
| `# Text` | Heading 1 |
| `## Text` | Heading 2 |
| `**text**` | Bold |
| `*text*` | Italic |
| `` `text` `` | Inline code |
| `- item` | Bullet list |
| `> text` | Blockquote |
| `[text](url)` | Hyperlink |

### 3.3 Formatting Toolbar

Located above the preview panel.

**Text Formatting:**
- Bold (`Cmd+B`), Italic (`Cmd+I`), Underline (`Cmd+U`), Strikethrough
- Font size selector (12px–32px)
- Text color picker

**Block Formatting:**
- H1, H2, H3 headings
- Align: Left / Center / Right
- Bullet list, Numbered list
- Blockquote, Horizontal divider
- Indent / Outdent

**Insert Tools:**
- **Image** — Upload an image file into the document. Supports figcaption.
- **Table** — Visual grid picker (up to 8x8). Click to create.
- **Link** — Insert a hyperlink with display text.
- **Page Break** — Insert a page separator for PDF export.

**Quick Insert Menu** (the + button):
- Callout blocks (Info, Tip, Warning, Fire) — colored highlight panels
- Code block — monospace pre-formatted text
- Labeled divider — horizontal rule with centered label text
- 2-Column layout — side-by-side content areas

### 3.4 Document Presets

Five quick-start templates to scaffold common document types:

| Preset | Description |
|--------|-------------|
| **Program PDF** | 4-week calisthenics training phase with sets, reps, and progressions |
| **Level Guide** | Skill progression system across Foundation, Intermediate, Advanced, Elite |
| **Framework** | Training methodology document (Saturno System structure) |
| **Transcript** | Video transcript layout with timestamps and key points |
| **Cover Page** | Title page with branding elements |

Click any preset to populate the editor with its template structure.

### 3.5 PDF Templates

Four visual themes control the exported PDF appearance:

| Template | Style |
|----------|-------|
| **Saturno** | Dark gradient background, cyan/teal accents, branded |
| **Dark** | Pure black background with teal headers |
| **Minimal** | Georgia serif font, light and clean |
| **White** | Standard white background |

### 3.6 Level Badges

Insert colored skill-level badges into your document:

- **Foundation** — Green
- **Intermediate** — Cyan
- **Advanced** — Teal
- **Elite** — Amber

### 3.7 Find & Replace

Press `Cmd+F` to open the find & replace bar at the bottom of the editor.

- Type to search. Match count displays automatically.
- Replace one occurrence or replace all.

### 3.8 Version History

A slide-out panel on the right shows saved snapshots of each document. Click any version to restore it. Each entry shows a timestamp and word count.

### 3.9 Export

Press `Cmd+Shift+S` or click the export button to open the export modal.

**Export Settings:**

| Setting | Options |
|---------|---------|
| Paper Size | A4, Letter, A3 |
| Orientation | Portrait, Landscape |
| Margins | Top, Bottom, Left, Right (in mm) |
| Quality | 72, 150, or 300 DPI |
| Page Numbers | On / Off |

**Export Formats:**

| Format | Output |
|--------|--------|
| PDF | Styled document using jsPDF + html2pdf |
| HTML | Standalone HTML file with embedded CSS |
| Markdown | Converted back to Markdown syntax |
| Plain Text | Text only, no formatting |

**Batch Export**: Download all documents as a ZIP archive.

### 3.10 Word Count Bar

The bottom status bar displays in real time:

- Words
- Characters
- Estimated pages (A4)
- Reading time

---

## 4. Captions

Captions mode has two sub-modes: **Library** and **Multiplier**. Switch between them using the tabs at the top of the controls panel.

### 4.1 Caption Library

The library stores all your captions in IndexedDB with full CRUD operations.

**Adding Captions:**
- Click **+** to write a new caption manually.
- Click **Seed** to load the full pre-built content library (103 entries from manifesto, poems, training philosophy).
- Import files: JSON, CSV, Markdown, or TXT. Drag and drop or use the file picker.
- Click **Import Seeds** to load the 80-entry seed library.

**Browsing:**
- **Search** by text content.
- **Filter** by theme using the filter buttons.
- **Sort** by Recent, A-Z, or Oldest.

**Caption Card Actions:**

Each caption in the list has these actions:

| Action | What it does |
|--------|-------------|
| Preview | Show full text in the preview panel |
| Edit | Open caption for editing |
| Copy | Copy text to clipboard |
| Delete | Remove from library |
| To PDF | Insert into the PDF editor canvas |
| To Board | Add as a node on the Canvas whiteboard |

**Bulk Operations:**

Select multiple captions (click to toggle selection), then use:

- **To PDF** — Insert all selected into the editor.
- **To Board** — Add all as Canvas nodes.
- **Seed** — Send all to the Multiplier seed input.
- **Copy** — Copy all text to clipboard.
- **Export** — Download selected as JSON, Markdown, or plain text.

**Export All:**
Download the entire library as JSON, Markdown, or TXT.

### 4.2 Seed Library

A curated collection of 80+ seed phrases organized by theme. Use the dropdown to filter:

- Mindset / Will
- Truth / Clarity
- Courage / Trust
- Discipline / Focus
- Manifesto Lines
- Training / Movement
- Vulnerability / Growth

Click any seed to load it into the Multiplier input.

### 4.3 Caption Multiplier

The Multiplier takes a single idea and generates platform-specific content variants.

**Step 1 — Enter Seed Phrase**

Type your core idea in the text area, or drag a caption from the library into it.

**Step 2 — Select Voice Mode**

Eight voice modes shape the tone of the output:

| Voice | Character | Prefix / Suffix Style |
|-------|-----------|----------------------|
| **Teacher** | Warm, clear, guiding | Clean delivery + "Save this for later." |
| **Raw** | Unfiltered, street, real | No wrapper. Direct. |
| **Prophet** | Certain, visionary, bold | "The truth is this:" + "This changes everything." |
| **Rebel** | Against the grain, edgy | "Most people get this wrong." + "Think different." |
| **Mystic** | Cosmic, transcendent | "In the silence between reps..." |
| **Philosopher** | Deep, layered, abstract | "Consider this:" + "Sit with that." |
| **Companion** | Beside you, intimate | "I need you to hear this." + "You are not alone in this." |
| **Confessor** | Honest, vulnerable, no BS | "I will be honest with you." + "Take it or leave it." |

**Step 3 — Adjust Voice Dials**

Three sliders (1–10 each) fine-tune the output:

| Dial | Range | What it controls |
|------|-------|-----------------|
| **Intensity** | Whisper → Nuclear | Energy level of delivery |
| **Vulnerability** | Guarded → Exposed | How personal and open |
| **Abstraction** | Concrete → Cosmic | How literal vs metaphorical |

The current dial levels display as a badge on the output (e.g., `[confident / open / practical]`).

**Step 4 — Select Platforms**

Check one or more target platforms:

| Platform | Format |
|----------|--------|
| **Instagram** | Body text + hashtags (#Calisthenics #Movement #Mastery #SaturnoMovement) |
| **Email** | Subject line + body + personal sign-off |
| **YouTube** | 3-act structure: Hook (0:00) → Expand (0:15) → CTA (End) |
| **Twitter/X** | Truncated to 240 characters with voice wrapper |
| **LinkedIn** | Professional framing + engagement question |
| **TikTok** | Text-on-screen + voiceover + caption layers |

**Step 5 — Apply Framework (Optional)**

Four framework modules transform the seed before multiplication:

| Framework | What it does |
|-----------|-------------|
| **None** | No transformation. Seed passes through as-is. |
| **Fusion** | Splits the seed in half and merges both halves into a unified concept. |
| **Expansion** | Expands the seed 4x through three mirrors: Training, Relationships, Business. Adds a paradox layer. |
| **Contraction** | Compresses to a 47-word essence, then generates Raw, Philosopher, and Prophet variations. |
| **Recursive** | Multi-stage: fuse → expand → extract 60 quotes → map to 8 platforms. |

**Step 6 — Click Multiply**

The output panel shows one card per selected platform. Each card includes:

- Platform label
- Voice-wrapped content
- Copy button

**Multiply & Save**: Click to generate variants AND save the original seed to the caption library.

---

## 5. Atomizer

The Atomizer decomposes documents into classified content blocks called "atoms."

### 5.1 Importing a Document

**Supported formats:**

| Format | Notes |
|--------|-------|
| PDF | Text extracted via PDF.js |
| VTT | WebVTT subtitles. Timestamps stripped, segments merged into paragraphs. |
| SRT | SubRip subtitles. Converted to clean text segments. |
| Markdown | .md, .markdown, .text extensions |
| Plain Text | .txt |
| HTML | Converted to text |

**How to import:**
- Drag and drop a file onto the drop zone.
- Click the drop zone to open a file picker.

### 5.2 Processing Pipeline

A visual 5-stage pipeline animates as your document is processed:

```
[Ingest] → [Parse] → [Classify] → [Index] → [Ready]
```

Each stage lights up as it completes.

### 5.3 Atoms

After processing, the content is broken into typed atoms:

| Atom Type | Color | Source Pattern |
|-----------|-------|---------------|
| Heading | Cyan | `#` markers, `<h1>`–`<h6>` tags |
| Quote | Teal | `>` markers, `<blockquote>` tags |
| Paragraph | Gray | Body text blocks |
| List | Green | `- ` or `* ` bullets, numbered items |
| Table | Amber | `|` pipe syntax |
| Code | Indigo | Triple backtick blocks, `<pre>` tags |
| Image | Pink | `![alt](url)` or `<img>` tags |
| Divider | Slate | `---` horizontal rules |

**Per-Atom Actions:**

| Action | What it does |
|--------|-------------|
| Preview | Show full atom text in the preview panel |
| To PDF | Insert atom into the PDF editor |
| To Seed | Send atom text to the Caption Multiplier input |
| To New Doc | Create a new document from this atom |
| Copy | Copy atom text to clipboard |

**Filtering:**
Use the type filter buttons (All / Quote / Heading / Paragraph / etc.) to narrow the list. Count per type is displayed.

**Bulk Operations:**
Select multiple atoms, then use To PDF, To Seed, New Doc, or Copy.

### 5.4 Transcript Templates

When a VTT or SRT file is imported, eight processing templates become available:

1. **Smart Summary** — Condensed overview of the transcript content.
2. **Exercise Matrix** — Extract exercises, sets, reps, and cues.
3. **Concept Hierarchy** — Map topics and subtopics.
4. **Quote Extraction** — Pull standalone quotable lines.
5. **Chapter Builder** — Group content into chapter-like sections.
6. **Visual Map** — Generate a structural outline.
7. **Platform Deploy** — Reformat for social media platforms.
8. **Gap Analysis** — Identify missing topics or incomplete sections.

---

## 6. Canvas

Canvas is an infinite whiteboard for visual content planning.

### 6.1 The Surface

- White background with a dot grid (24px spacing).
- Infinite scrollable area (100,000 x 100,000 px).
- Pan by clicking and dragging on empty space.
- Zoom with mouse wheel or pinch gesture. Zoom controls also available in the toolbar.

### 6.2 Node Types

| Type | Color Label | Source |
|------|-------------|--------|
| **Text** | Blue | Created manually |
| **Image** | Green | Uploaded from file, pasted, or dragged |
| **Caption** | Purple | Added from caption library |

### 6.3 Adding Nodes

- **+ Text** — Click the button in the controls panel. A text node appears at the center of the viewport.
- **+ Image** — Click to open a file picker, or paste/drag an image onto the canvas.
- **From Library** — Drag a caption from the library panel onto the canvas. On mobile, use the "Board" button on each caption card.
- **From Templates** — Load a pre-built layout (see 6.8).

### 6.4 Selecting Nodes

| Method | Action |
|--------|--------|
| Click | Select one node |
| Shift+Click | Add to selection |
| Shift+Drag | Lasso select (draw a rectangle) |
| Cmd+A | Select all nodes |
| Escape | Deselect all |
| Tab / Shift+Tab | Cycle through nodes (auto-pans to each) |

### 6.5 Editing Nodes

- **Double-click** a text or caption node to edit its content inline.
- **Arrow keys** nudge selected nodes by 4px. Hold Shift for 24px jumps.
- **Delete / Backspace** removes selected nodes.
- **Cmd+C / Cmd+V** copies and pastes nodes.

### 6.6 Connection Lines

Draw dashed SVG lines between nodes to show relationships.

- Select two or more nodes, then press `Cmd+L` to connect them.
- Use the **Connect** button in the controls panel.
- **Disconnect** removes connections between selected nodes.
- Connections auto-delete when a connected node is removed.
- Connections persist in JSON export and IndexedDB.

### 6.7 Alignment & Layout

When multiple nodes are selected, use the alignment toolbar:

| Button | Action |
|--------|--------|
| L | Align left edges |
| CH | Center horizontally |
| R | Align right edges |
| T | Align top edges |
| CV | Center vertically |
| B | Align bottom edges |
| DH | Distribute horizontal (equal spacing) |
| DV | Distribute vertical (equal spacing) |
| Snap | Snap all to 24px grid |

### 6.8 Canvas Templates

Six pre-built layouts populate the canvas with structured node arrangements:

**1. Social Calendar**
7-day x 4-week grid with platform-specific content slots (IG Reel, TikTok, Email, Carousel, etc.).

**2. Carousel**
10-slide sequential flow: Hook → Problem → Agitate → Reframe → 3 Key Points → Proof → Summary → CTA.

**3. Mood Board**
8 category nodes: Visual Tone, Typography, Hero Image, Color Palette, Brand Voice, Inspiration, Audience, Content Pillars.

**4. Infographic**
10-section vertical layout: Headline → Subhead → Problem → Key Stat → Solution → 3 Steps → Result → CTA.

**5. Quote Grid**
3x3 node arrangement. Auto-populates from the caption library when captions are available.

**6. Content Plan**
5-column Kanban board: Ideas → Drafting → Review → Scheduled → Published. Three cards per column with actionable items.

### 6.9 Undo / Redo

- 40-level undo stack.
- `Cmd+Z` to undo, `Cmd+Shift+Z` to redo.
- Toolbar buttons reflect available undo/redo state.
- Tracked operations: add, delete, drag, edit, template load, clear.

### 6.10 Minimap

A small overview panel in the bottom-right corner:

- Shows the entire canvas as a thumbnail.
- Color-coded dots represent nodes by type.
- A rectangle indicates your current viewport.
- Click the minimap to jump to a location.
- Hidden on screens narrower than 768px.

### 6.11 Canvas Search

A search input in the controls panel finds nodes by text content or theme.

- Auto-pans to the first match.
- All matching nodes are highlighted as selected.

### 6.12 Export & Import

| Action | Output |
|--------|--------|
| **Export JSON** | Downloads canvas state (nodes, connections, viewport position/zoom) as a JSON file |
| **Export PNG** | Downloads a 2x retina PNG image of the canvas including grid, connection lines, and styled nodes |
| **Import JSON** | Loads a previously exported canvas state, restoring all nodes and connections |
| **Clear All** | Removes all canvas content (confirmation required) |

### 6.13 Auto-Save

Canvas state saves to IndexedDB every 400ms after changes. Your nodes, connections, and viewport position are fully restored on reload.

---

## 7. Command Palette

Press `Cmd+K` to open the command palette. Type to search across 37 available commands.

### Document Operations
- New Document
- Backup Data (download all data as JSON)
- Restore Backup (upload JSON)
- Show Document Stats

### Export
- Export PDF / HTML / Markdown / Plain Text
- Batch Export ZIP

### PDF Features
- Insert Page Break
- Generate Table of Contents
- Insert Table
- Open Version History
- Save Version Snapshot

### Caption Operations
- Seed Full Content Library
- Add Caption Manually

### Canvas Operations
- Open Canvas
- Add Text Node / Add Image
- Export JSON / Export PNG / Import JSON
- Fit View
- Undo / Redo
- Align (Left, Right, Top, Bottom, Center-H, Center-V)
- Distribute (Horizontal, Vertical)
- Load Templates (all six)

### View
- Toggle Library Panel
- Toggle Toolbar
- Set View (Full / Split / Focus)

### Help
- Keyboard Shortcuts

---

## 8. Keyboard Shortcuts

### Global

| Shortcut | Action |
|----------|--------|
| `Cmd+K` | Command palette |
| `Cmd+N` | New document |
| `Cmd+S` | Save |
| `Cmd+F` | Find & Replace |
| `Cmd+Shift+S` | Export settings |
| `Cmd+/` | Shortcuts help |

### Text Formatting (PDF Mode)

| Shortcut | Action |
|----------|--------|
| `Cmd+B` | Bold |
| `Cmd+I` | Italic |
| `Cmd+U` | Underline |

### Canvas Mode

| Shortcut | Action |
|----------|--------|
| `Cmd+Z` | Undo |
| `Cmd+Shift+Z` | Redo |
| `Cmd+A` | Select all nodes |
| `Cmd+C` | Copy selected |
| `Cmd+V` | Paste |
| `Cmd+L` | Connect selected nodes |
| `Arrow keys` | Nudge 4px |
| `Shift+Arrow` | Nudge 24px |
| `Tab` | Next node |
| `Shift+Tab` | Previous node |
| `Escape` | Deselect all |
| `Delete` | Delete selected |

---

## 9. Data & Storage

### Where Data Lives

| Store | Technology | Contents |
|-------|-----------|----------|
| Documents | localStorage | All PDF documents (JSON) |
| Captions | IndexedDB | Full caption library with metadata |
| Canvas State | IndexedDB | Nodes, connections, viewport |
| Sidebar State | localStorage | Collapsed/expanded preference |

### Backup & Restore

- **Backup**: Command palette → Backup Data. Downloads a JSON file containing all documents and settings.
- **Restore**: Command palette → Restore Backup. Upload a previously downloaded JSON file.

### Caption Import Formats

| Format | Structure |
|--------|-----------|
| JSON | Array of `{text, theme, voice, platform}` objects |
| CSV | Columns: `text`, `theme`, `voice` |
| Markdown | Each `## Heading` becomes a theme; text below becomes the caption |
| TXT | Each paragraph becomes a separate caption |

---

## 10. Mobile Usage

Content Beast is fully responsive below 800px.

- **Bottom Navigation**: Four tabs (PDF / Captions / Atoms / Canvas) replace the header tabs.
- **Single-Column Layout**: Panels stack vertically.
- **Touch Gestures on Canvas**: 1-finger pan, 2-finger pinch zoom.
- **Larger Touch Targets**: Minimum 28px interactive areas.
- **Node Actions Always Visible**: No hover-dependent UI.
- **Minimap Hidden**: Reclaims screen space.
- **Board Button**: Each caption card has a "Board" button as an alternative to drag-and-drop.

---

## Cross-Mode Workflows

### Transcript to Published Content
`Atomizer` (import VTT) → select key atoms → `To PDF` → format in PDF Maker → export

### Idea to Six Platforms
`Captions` (type seed) → select voice + platforms → `Multiply` → copy each variant

### Content Calendar Planning
`Canvas` (load Social Calendar template) → drag captions from library → connect related nodes → export PNG

### Caption to Formatted Document
`Caption Library` → select captions → `To PDF` → apply Saturno template → export PDF

### Long Document to Atomic Content
`Atomizer` (import PDF/Markdown) → filter quotes → `To Seed` → `Multiplier` → platform-ready content

---

*Content Beast v8.0 — content-beast-five.vercel.app*
