# Agent Instructions

## Package Manager
Use **npm**: `npm install`, `npm start`, `npm test`, `npm run build`

## Commit Attribution
AI commits MUST include:
```
Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

## File-Scoped Commands
| Task | Command |
|------|---------|
| Test | `npx react-scripts test --watchAll=false --testPathPattern path/to/file.test.js` |
| Lint | ESLint via `react-app` preset in `package.json` — no separate config file |

## Key Conventions
- **Functional components only** — no class components
- **HashRouter** — required for GitHub Pages (`/#/route`)
- **PascalCase** files and folders for components
- **Import order**: React → third-party → components → assets
- External links: always `target="_blank" rel="noreferrer"`
- Styles in `src/style.css` (global) and `src/App.css` (app-specific)
- Accent color: `#c770f0` via `--imp-text-color`
- Bootstrap grid: `Container`, `Row`, `Col` from `react-bootstrap`

## Project Structure
```
src/
├── components/
│   ├── Home/        # Home.js, Home2.js, Type.js
│   ├── About/       # About.js, Techstack.js, Toolstack.js, Experience.js, Github.js
│   ├── Projects/    # Projects.js, ProjectCards.js
│   ├── Resume/      # ResumeNew.js
│   ├── Navbar.js
│   ├── Footer.js
│   └── Particle.js
├── Assets/          # Images, PDFs
├── App.js           # Routes
├── style.css        # Theme
└── index.js         # Entry
```

## Routes
| Path | Component |
|------|-----------|
| `/` | Home |
| `/about` | About |
| `/project` | Projects |
| `/resume` | ResumeNew |

## Common Tasks
- **Add project**: image in `src/Assets/Projects/` → `<ProjectCards />` in `Projects.js`
- **Update skills**: `src/components/About/Techstack.js` and `Toolstack.js`
- **Personal info**: `Home2.js`, `AboutCard.js`, `Type.js`
- **Navigation**: `Navbar.js` + `App.js`
- **Deploy**: `npm run deploy` (builds + pushes to gh-pages)

## Do Not
- Edit `build/` — overwritten on build
- Use `BrowserRouter` — only `HashRouter` works on GitHub Pages
- Reference images by URL — import them in JS
