# Wellbeing — Health Tracker MVP

A working MVP built from the provided mockup. Three connected screens:

1. **Splash** — animated heart logo + "Get started"
2. **Home** — greeting, today's activity log, suggestion cards, bottom tab bar
3. **Health report** — Weekly / Monthly / Yearly tabs, stomach illustration, vertical feeling slider, "Next" CTA

## Run it

No build step. Open `index.html` in any modern browser, or serve the folder:

```bash
cd health-mvp
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Vercel (one command)

```bash
cd health-mvp
vercel deploy --yes        # preview URL
vercel deploy --prod --yes # production URL
```

Static site, no build step. The included `vercel.json` enables clean URLs.

## What's interactive

- Tap activity cards to mark them done (persists to `localStorage`)
- "Mindful moment" → breathing prompt toast
- "Community insight" → social-proof toast
- "Download report" → generates and downloads a `.txt` daily summary
- Bottom tabs scroll between Home and Report; "Check in" saves a history entry
- Weekly / Monthly / Yearly segmented control switches range
- Vertical slider on Report updates the status label live (Very full ↔ Hungry)
- "Next" saves the current feeling reading to history

## Files

```
health-mvp/
├── index.html   # markup for all 3 phone-frame screens
├── styles.css   # phone-frame mockup styling, gradients, components
└── app.js       # state, rendering, persistence (vanilla JS, zero deps)
```

State persists in `localStorage` under the key `wellbeing.mvp.v1`.
