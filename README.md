# My-Website
My Portfolio

This repository contains a one-page dark-themed portfolio scaffold for Obuya Oduor.

Files added:
- `index.html` — single-page site with Hero, About, Projects, Booking, Contact sections.
- `assets/css/styles.css` — dark theme styles and responsive layout.
- `assets/js/script.js` — small script for nav, smooth scroll, loading `data/projects.json`, and form submission handling.
- `data/projects.json` — sample projects data used to populate the Projects section.
- `FORM_INTEGRATION.md` — guide to wire contact/booking forms (Formspree, Netlify).

How to preview locally:
1. Open `/workspaces/My-Website/index.html` in your browser (File → Open File in editor, or use a simple static server).

Optional: run a quick static server from the repo root:

```
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Next steps: update `data/projects.json` with your real projects, replace the headshot at `assets/img/headshot.jpg`, and configure your form endpoint in `index.html` (see `FORM_INTEGRATION.md`).
