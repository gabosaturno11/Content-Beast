# Content Beast — Reality Audit (2026-02-25)

## Repository Status
- **Repo:** `gabosaturno11/Content-Beast`
- **Visibility:** **Public right now** (`private: false` from GitHub metadata)
- **Architecture:** Single-file app (`/home/runner/work/Content-Beast/Content-Beast/index.html`)
- **Current size:** ~5776 lines, 202 `function` declarations
- **Deploy target in code/docs:** `content-beast-five.vercel.app` (runtime health could not be verified from this sandbox due to DNS/network restrictions)

## Full Functional Audit

### Working / Implemented
- **PDF Maker mode** with editable canvas, template/preset system, export modal, and PDF/HTML/MD/TXT export paths.
- **Command palette** (`Cmd+K`) with broad action catalog.
- **Document library** with local persistence, search/sort, duplicate/delete, import, and drag-to-reorder.
- **Version snapshots** + restore flow.
- **Find & replace**, **document stats**, **TOC generation**, **zoom/fullscreen**.
- **Caption tools**:
  - Caption library persisted in IndexedDB (`ContentBeastCaptions`)
  - Seed import (`importSeedsToLibrary`) and full Gabo seed flow (`seedGaboCaptions`)
  - Multiplier with 6 platform outputs and multiple voice modes
- **Atomizer mode** with document decomposition and downstream actions.
- **Canvas mode**:
  - Node types (caption/text/image)
  - Selection, multi-drag, lasso, keyboard shortcuts
  - Connections (`cvConnect`/`cvConnectSelected`)
  - Alignment/distribution tools
  - Template loaders (social calendar, carousel, mood board, infographic, quote grid, content plan)
  - JSON import/export, PNG export, minimap, search, IndexedDB persistence
  - Touch pan/pinch/drag handlers for mobile interactions
- **Print CSS** exists (`@media print`) and normalizes dark templates for print.

### Missing / Not Present
- **No backend API service** in this repo. This is a browser-only app using localStorage + IndexedDB.
- **No automated test suite or lint/build pipeline** found in-repo (no `package.json`, no test files, no CI workflow files in this checkout).
- **No explicit privacy controls** in-app for local content encryption/backups.

### Breaks / Known Functional Gaps
- **Critical: Canvas undo/redo does not track connections**—only node arrays are serialized by `cvPushUndo`, `cvUndo`, and `cvRedo` (`cvNodes` but not `cvConnections`).  
  Result: after connect/disconnect operations, undo/redo can restore node positions/content without restoring matching edge state.

## API Health Check
- There is **no first-party API layer** to health-check (no `fetch`/XHR/WebSocket backend integration in app logic).
- External runtime dependencies are CDN scripts (jsPDF, html2pdf.js, JSZip, pdf.js) and Google Fonts.
- Live endpoint checks from this environment were blocked by DNS/network restrictions, so external uptime could not be confirmed here.

## Security Audit Summary
- **Good:** Uses `esc()` in several rendering paths to escape text before interpolation.
- **Risks identified:**
  1. **No CSP** found in `index.html`.
  2. **No SRI hashes** on third-party CDN scripts.
  3. Several `innerHTML` assignment paths exist; some are safe, but this pattern increases XSS risk if any unsanitized content reaches them.
  4. Persisted HTML restoration paths (e.g., document canvas restore) rely on trusted local state and can be abused if storage is tampered with.
- **Data model:** localStorage + IndexedDB only (no server-side auth boundary in this repository).

## What This README Now Reflects
This file now reflects the **actual observed state** of the checked-in codebase rather than aspirational claims.

## Suggested Follow-Up Steps *(to be approved by Gabo)*
- [ ] Make repository private if intended (`Settings -> General -> Danger Zone -> Change visibility`).
- [ ] Fix canvas undo/redo to include both `cvNodes` and `cvConnections` (see Breaks / Known Functional Gaps).
- [ ] Add CSP and SRI for third-party scripts.
- [ ] Audit all `innerHTML` writes and enforce sanitization policy consistently.
- [ ] Decide whether to keep CDN dependencies or self-host critical assets.
- [ ] Add minimal automated regression checks (at least smoke test for core mode switching and canvas undo/redo behavior).
