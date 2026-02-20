# CONTENT BEAST — Build Specs

## Current State
- **Version:** v7.4 (single-file HTML app, `index.html`, ~5530 lines)
- **Repo:** gabosaturno11/Content-Beast
- **Deploy:** Vercel auto-deploy from main -> content-beast-five.vercel.app
- **Architecture:** Single HTML file with inline CSS + JS
- **Storage:** IndexedDB (`ContentBeastCaptions` DB, schema v2) for caption library + canvas state
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

## Canvas Feature Set (v7.2-7.4)

### Core
- White canvas surface (#f8f7f4) with infinite dot grid
- Node types: caption (purple), text (blue), image (green)
- Type labels on each node
- Pan + zoom (mouse wheel, touch pinch)
- Touch: 1-finger pan, 2-finger pinch zoom, node touch drag

### Node Operations
- Add text, image, caption nodes
- Delete, duplicate, edit (in-place double-click contenteditable)
- Copy/paste nodes (Cmd+C / Cmd+V)
- Arrow key nudge (4px, Shift=24px)
- Tab/Shift+Tab to cycle through nodes

### Selection
- Click to select, Shift+click for multi
- Lasso selection (Shift+drag)
- Cmd+A to select all
- Escape to deselect
- Multi-node drag (all selected move together)

### Connection Lines
- SVG dashed lines between connected nodes
- Cmd+L to connect selected
- Connect/Disconnect buttons
- Persisted in IndexedDB + JSON export
- Auto-cleanup on node delete

### Alignment & Layout
- Snap to grid (24px)
- Align: left/right/top/bottom/center-h/center-v
- Distribute: horizontal/vertical spacing
- Alignment buttons in controls panel

### Templates (6)
- Social Calendar: 7-day x 4-week grid with platform-specific content slots
- Carousel: 10-slide structure (Hook > Problem > Agitate > Reframe > Points > CTA)
- Mood Board: 8 brand-building categories
- Infographic: 10-section vertical flow (Title > Problem > Solution > Steps > CTA)
- Quote Grid: 3x3, auto-populates from caption library
- Content Plan: 5-column Kanban (Ideas > Drafting > Review > Scheduled > Published)

### Persistence & Export
- IndexedDB auto-save (400ms debounce)
- JSON export/import (nodes + connections + viewport)
- PNG export (2x retina, includes grid, connection lines, styled nodes)
- Canvas state restored on reload

### Undo/Redo
- 40-level undo stack
- Cmd+Z / Cmd+Shift+Z
- Toolbar buttons with state indicators

### Minimap
- Live overview in bottom-right corner
- Color-coded dots by node type
- Viewport rectangle indicator
- Hidden on mobile

### Canvas Search
- Search input in controls panel
- Find nodes by text or theme
- Auto-pan to first match
- Highlights all matches as selected

### Mobile
- Toolbar above bottom nav (54px bottom)
- Larger touch targets (28px min)
- Node actions always visible (not hover-dependent)
- Minimap hidden
- "Board" button on caption items as drag alternative

### Keyboard Shortcuts (Canvas)
- Delete/Backspace: delete selected
- Cmd+A: select all
- Cmd+Z: undo
- Cmd+Shift+Z: redo
- Cmd+C: copy selected
- Cmd+V: paste
- Cmd+L: connect selected
- Arrow keys: nudge (4px, Shift=24px)
- Tab/Shift+Tab: cycle nodes
- Escape: deselect all

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
- `cvAddNode(type, data)` — add node to canvas
- `cvRender()` — re-render all canvas nodes
- `cvConnect(fromId, toId)` — create connection line
- `cvAlign(dir)` — align selected nodes
- `cvExportPNG()` — export canvas as PNG
- `cvSearchNodes(query)` — search and select matching nodes

### IndexedDB Schema (v2)
- **DB:** ContentBeastCaptions
- **Store:** captions (keyPath: id, indexes: theme, voice, platform, created)
- **Store:** canvasState (keyPath: id) — nodes, connections, viewport

### Canvas Node Data Model
```javascript
{ id, type: 'caption'|'text'|'image', x, y, text, theme, captionId, imgSrc, created }
```

### Canvas State Model
```javascript
{ id: 'main', nodes: [...], connections: [{from, to}], vx, vy, vz, updated }
```

### CSS Token System
- `--bg-void` (#0B0B10) / `--bg-base` / `--bg-elevated` / `--bg-surface` — depth layers
- `--accent` (#8B5CF6) / `--cyan` (#4F7CFF) — primary colors
- `--surface` / `--surface-2` — translucent elevated surfaces
- `--shadow-1` / `--shadow-2` — Endel-style depth shadows
- `--glow-accent` / `--glow-cyan` — subtle glow effects
- `--mono` / `--sans` — typography
