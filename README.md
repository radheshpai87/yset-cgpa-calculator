# YSET CGPA/SGPA Calculator

A modern, responsive CGPA/SGPA Calculator for **Yenepoya School of Engineering & Technology (YSET)**.

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Recharts.

## Features

- **SGPA Calculator** – Enter subjects with marks and credits, get instant SGPA
- **CGPA Calculator** – Weighted calculation across all semesters (not average of SGPAs)
- **Semester Presets** – Pre-loaded YSET B.Tech CSE semester structures
- **PDF Export** – Download SGPA/CGPA reports as PDF
- **Dark Mode** – Full light/dark theme support
- **Performance Charts** – SGPA trend bar chart and CGPA progression line chart
- **CGPA Predictor** – Calculate what you need next semester to hit your target
- **LocalStorage Persistence** – Save semesters and import into CGPA calculator
- **JSON Import/Export** – Backup and restore all data
- **Copy to Clipboard** – One-click copy SGPA/CGPA values
- **Mobile Responsive** – Optimized for all screen sizes
- **Animated Counters** – Smooth number animations
- **Toast Notifications** – Feedback for all actions

## Grading System

| Marks | Grade | Grade Point |
|-------|-------|-------------|
| 90-100 | O | 10 |
| 80-89 | A+ | 9 |
| 70-79 | A | 8 |
| 60-69 | B+ | 7 |
| 55-59 | B | 6 |
| 50-54 | C | 5 |
| Below 50 | F | 0 |

## Formulas

**SGPA** = Σ(Credit × Grade Point) / Σ(Credits)

**CGPA** = Σ(All Credit Points across semesters) / Σ(All Credits across semesters)

> CGPA uses weighted calculation, NOT average of SGPAs.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Recharts
- Lucide Icons
- jsPDF + jsPDF-AutoTable
- Sonner (Toast Notifications)
- next-themes (Dark Mode)

## Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── page.tsx        # Home
│   ├── sgpa/page.tsx   # SGPA Calculator
│   ├── cgpa/page.tsx   # CGPA Calculator
│   └── grading/page.tsx # Grading System
├── components/    # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, Input, Badge)
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── animated-counter.tsx
│   └── data-manager.tsx
├── hooks/         # Custom React hooks
│   └── useLocalStorage.ts
└── lib/           # Utility functions
    ├── grading.ts      # Grade calculations
    ├── pdf-export.ts   # PDF generation
    ├── presets.ts      # Semester presets
    ├── storage.ts      # LocalStorage management
    ├── types.ts        # TypeScript types
    └── utils.ts        # General utilities
```

## Build

```bash
npm run build
```

## License

Built for YSET students.
