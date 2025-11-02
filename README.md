# AI Agency — Landing Page

A modern, responsive landing page for an AI‑focused agency. This is a static site built with plain HTML, CSS, and JavaScript.

## Features

- Dark theme with accent color and subtle animations
- Responsive layout (desktop, tablet, mobile)
- Accessible markup (ARIA, keyboard navigation)
- Smooth scrolling and mobile menu
- Client‑side form validation and toast notifications
- Animated stats and reveal‑on‑scroll effects

## Project structure

```
.
├── index.html                # Main HTML page
├── style.css                 # Styles
├── script.js                 # Frontend interactivity
├── portfolio/
│   └── ai-agency/            # Self-contained demo copy with local assets
│       ├── index.html
│       ├── style.css
│       ├── script.js
│       └── images/
└── README.md                 # This documentation
```

## Quick start

Serve locally:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Or use a dev server such as `live-server`:

```bash
npx live-server
```

## Editing the site

- Edit `index.html` to change text, links, and structure
- Edit `style.css` to customize colors, spacing, and typography
- Edit `script.js` to adjust client-side behavior and interactions

## Deployment

You can host the static files on GitHub Pages, Netlify, Vercel, or any static host.

### GitHub Pages

1. Open repository → Settings → Pages
2. Select branch `gh-pages` and folder `/`
3. The site will be available at:

```
https://avokadoveiks.github.io/ai-agency/
```

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes and push to your fork
4. Open a pull request

## License

MIT — see `LICENSE` for details.

## Contact

Open an issue in the repository if you need help or want to suggest improvements.