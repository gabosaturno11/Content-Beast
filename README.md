Live: content-beast-five.vercel.app                                                                  
  Repo: github.com/gabosaturno11/Content-Beast
  Size: 2015 lines, 79 functions, ~101KB single-file HTML                                              
                                                                                                       
  Full feature list:                                                                                   
                                                                                                       
  Core PDF Engine:                                                                                     
  - WYSIWYG contenteditable canvas with live preview
  - 4 templates (Saturno, Dark, Minimal, White)                                                        
  - 5 presets (Program PDF, Level Guide, Framework, Transcript, Cover Page)                            
  - Saturno Movement level badges (Foundation/Intermediate/Advanced/Elite)                             
  - Markdown parser with tables, blockquotes, code, lists                                              
  - html2pdf.js + jsPDF export with custom settings                                                    

  Enterprise Features:
  - Command Palette (Cmd+K) — 37 fuzzy-searchable actions
  - 3 view modes: Full / Split (md+preview) / Focus (no library)
  - Export settings modal (paper size, orientation, margins, quality, page numbers)
  - Batch export all docs as ZIP (JSZip)
  - JSON backup/restore (full data + versions)
  - Version history with snapshots and restore
  - Find & Replace (Cmd+F)
  - Auto-TOC generator
  - Document statistics (words, chars, reading time)

  Editing Toolbar:
  - Bold, italic, underline, strikethrough
  - H1/H2/H3, alignment (L/C/R), lists, blockquote
  - Font size, text color picker
  - Insert: image, table (visual grid), link, page break, HR
  - Quick-insert menu: callout blocks (info/tip/warning/fire), code block, labeled divider, 2-column
  layout
  - Indent/outdent, clear formatting
  - Zoom (50-200%), fullscreen mode

  Library Management:
  - Document library with localStorage persistence
  - Search, sort (recent/A-Z/oldest), drag-to-reorder
  - Duplicate, delete, import .md/.txt, drag-drop files

  Polish:
  - Keyboard shortcuts (8 shortcuts, help modal Cmd+/)
  - Markdown syntax cheatsheet
  - Print stylesheet (clean white for dark templates)
  - Mobile responsive (768px breakpoint)
  - Word/char/page count + reading time in status bar
  - Caption multiplier (6 platforms, 5 voices)
  - 9 commits, incrementally deployed
