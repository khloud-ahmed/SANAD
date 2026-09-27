# SANAD Clinical Dashboard — Week 2 Components

Reusable provider status cards, appointment cards, and a scheduled
appointments table for the SANAD clinical dashboard, built with React
+ Vite.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

```bash
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## What's here

See `docs/week-2-notes.md` for the full write-up: task scope, design
decisions (props + mock-data fallback pattern), the API integration
placeholder, the RAG assistant placeholder, and test/evidence notes.

Quick map:

```
src/
├── data/                     # constants + mock data + API placeholder
├── components/
│   ├── Dashboard/            # the 3 required components
│   │   ├── ProviderStatusCard/
│   │   ├── AppointmentCard/
│   │   └── AppointmentsTable/
│   ├── Layout/                # Navbar/Footer — out-of-scope additions
│   └── RagAssistant/          # UI placeholder only, not wired up
├── App.jsx
└── main.jsx
```
