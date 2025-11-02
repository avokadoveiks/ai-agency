# AI Agency - Landing Page

🤖 **Современная лендинг-страница для агентства искусственного интеллекта**

Это современная, респонсивная лендинг-страница, созданная с использованием HTML5, CSS3 и JavaScript. Проект демонстрирует лучшие практики веб-разработки и включает в себя все необходимые элементы для представления услуг в области искусственного интеллекта.

## ✨ Особенности
```markdown
# AI Agency — Landing Page

A modern, responsive landing page template for an AI-focused agency. The project uses plain HTML, CSS and JavaScript and demonstrates best practices for a small static marketing site.

## Features

- Modern dark-themed design with accent color and subtle animations
- Responsive layout for desktop, tablet and mobile
- Accessible markup with ARIA attributes and keyboard support
- Smooth scrolling navigation and mobile menu
- Client-side form validation and notification toast
- Animated statistics and reveal-on-scroll effects

## Project structure

```
ai-agency/
├── index.html        # Main HTML page
├── style.css         # Styles
├── script.js         # Frontend interactivity
├── portfolio/        # Local copy of the demo site (assets)
└── README.md         # This documentation
```

## Quick start

1. Clone the repository:

```bash
git clone https://github.com/avokadoveiks/ai-agency.git
cd ai-agency
```

2. Serve locally (Python):

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use a development server such as `live-server`:

```bash
npx live-server
```

## Editing the site

- Update `index.html` to change copy and links
- Update `style.css` to customize colors and typography
- Update `script.js` to add or change client-side behaviour

## Deployment

You can host this static site on GitHub Pages, Netlify, Vercel, or any static host.

### GitHub Pages (recommended)

If you want the site to be served from the `gh-pages` branch (already pushed):

1. Go to your repository on GitHub → Settings → Pages
2. Under "Build and deployment" choose the `gh-pages` branch and the root folder `/`
3. Save — the site will usually become available at:

```
https://<your-username>.github.io/ai-agency/
```

### Netlify / Vercel

Connect the repository and set the build settings to serve static files from the repo root.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your fork and open a pull request

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact

For questions or support, open an issue in the repository.
```