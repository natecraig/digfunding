# Dig Funding

A static web app that lets archaeologists post projects and the public back them — inspired by Kickstarter/Patreon but focused on archaeology.

**Live-ready for GitHub Pages.** Just drop these files into a repository and enable Pages.

---

## Features

- Explorer‑inspired design (modern, Indiana Jones‑adjacent vibe)
- Browse, search, and filter projects by topic, location, and dates
- Project detail pages with funding progress and tiered rewards
- Exclusive content posts locked until you back a project (stored locally)
- Demo "Create a Project" flow that saves to your browser (no server needed)
- 24 example projects worldwide across varied sub‑disciplines
- Fully static: HTML/CSS/JS + JSON. No build step required.

> **Note on images**: All images in this demo are **generated SVG placeholders** (logo, covers, profile art). They are deliberately non‑photographic. Replace them with your own images any time by swapping files in `assets/` (same filenames), or switch to a model with image generation to create photo‑realistic assets and drop them in.

## Quick start (GitHub Pages)

1. Create a new repo (e.g. `dig-funding`) and upload all files/folders.
2. In **Settings → Pages**, set:
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
3. Visit the published URL (typically `https://<username>.github.io/dig-funding/`).

## Local preview

Just open `index.html` in your browser. (Some browsers block `fetch` from `file://`; if so, run a tiny local server: `python3 -m http.server 8080` and open `http://localhost:8080`.)

## Data model

Each project is a JSON object with the following fields:

```jsonc
{
  "id": "proj-001",
  "title": "…",
  "shortDescription": "…",
  "fullDescription": "…",
  "country": "…",
  "locationDetail": "…",
  "topics": ["…","…"],
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "leadResearcher": "…",
  "organization": "…",
  "coverImage": "assets/covers/proj-001.svg",
  "profileImage": "assets/profiles/proj-001.svg",
  "fundingGoalUSD": 50000,
  "amountRaisedUSD": 12000,
  "rewards": [
    { "amount": 10, "label": "Trailhead", "perks": "Access to updates" }
  ],
  "exclusiveUpdates": [
    { "title": "Week 1", "content": "…", "locked": true, "date": "YYYY-MM-DD" }
  ]
}
```

## Exclusive content + backings (no server)

Pledges are tracked in `localStorage` under the key `digfunding_my_backings`. Exclusive posts show a lock icon until the viewer has backed that particular project in this browser.

> This is a demo; no real payments are processed.

## Replacing images

- **Logo**: `assets/logo.svg`
- **Project covers**: `assets/covers/*.svg`
- **Profile images**: `assets/profiles/*.svg`

Keep filenames the same to avoid editing JSON. If you add new projects, use any image path you like.

## Accessibility

- Semantic HTML and labeled controls.
- Live regions for results counts.
- Sufficient color contrast and keyboard‑reachable controls.

## License

MIT — see `LICENSE`.

