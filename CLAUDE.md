# CLAUDE.md - AI Assistant Guide for ntanthedev.github.io

## Project Overview

This is **ntannn.dev** - a personal portfolio website built with React.js and deployed to GitHub Pages. It showcases projects, skills, experience, and includes a resume viewer.

**Live Site**: https://ntannn.dev
**Repository Type**: React Single Page Application (SPA)
**Build System**: Create React App (CRA)

## Tech Stack

### Core
- **React** 17.0.2 - UI framework
- **React Router DOM** 6.2.2 - Client-side routing (HashRouter)
- **React Bootstrap** 2.2.1 + **Bootstrap** 5.1.3 - UI components

### Key Libraries
- **react-tsparticles** - Animated particle backgrounds
- **typewriter-effect** - Home page typing animation
- **react-github-calendar** - GitHub contribution display
- **react-pdf** - Resume PDF viewer
- **react-parallax-tilt** - 3D tilt effects
- **react-icons** - Icon library (AiFill*, BsGithub, CgCPlusPlus, etc.)

### Development
- **react-scripts** 5.0.0 - CRA build tooling
- **gh-pages** - GitHub Pages deployment
- **Jest** + **React Testing Library** - Testing

## Directory Structure

```
/
├── src/
│   ├── components/           # React components
│   │   ├── Home/            # Home page (Home.js, Home2.js, Type.js)
│   │   ├── About/           # About page (About.js, Techstack.js, Experience.js, etc.)
│   │   ├── Projects/        # Projects page (Projects.js, ProjectCards.js)
│   │   ├── Resume/          # Resume viewer (ResumeNew.js)
│   │   ├── Navbar.js        # Navigation bar
│   │   ├── Footer.js        # Site footer
│   │   ├── Particle.js      # Animated background
│   │   ├── Pre.js           # Loading preloader
│   │   └── ScrollToTop.js   # Auto-scroll utility
│   ├── Assets/              # Images and static files
│   │   └── Projects/        # Project screenshots
│   ├── App.js               # Main app with routing
│   ├── style.css            # Main theme styles (743 lines)
│   ├── App.css              # App-specific styles
│   └── index.js             # Entry point
├── public/                  # Static HTML template and assets
├── build/                   # Production build output (do not edit)
├── .github/workflows/       # CI/CD configuration
├── package.json             # Dependencies and scripts
└── CNAME                    # Custom domain config
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start

# Run tests
npm test

# Create production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Hero section with typewriter effect |
| `/about` | About | Skills, tools, GitHub calendar, experience |
| `/project` | Projects | Portfolio project cards |
| `/resume` | ResumeNew | PDF resume viewer |

## Code Conventions

### Component Structure
- **Functional components only** - No class components
- **Hooks used**: `useState`, `useEffect`, `useLocation`
- **File naming**: PascalCase (e.g., `ProjectCards.js`)
- **Folder naming**: PascalCase for feature folders

### Styling
- Global styles in `src/style.css`
- CSS classes use kebab-case (e.g., `home-section`, `project-card`)
- Primary accent color: `#c770f0` (purple) via `--imp-text-color`
- Uses Bootstrap grid system (Container, Row, Col)

### Import Order
1. React and React libraries
2. Third-party libraries
3. Components
4. Assets (images, CSS)

### Props Pattern (ProjectCards example)
```javascript
<ProjectCards
  imgPath={projectImage}
  isBlog={false}
  title="Project Name"
  description="Description text"
  ghLink="https://github.com/..."
  demoLink="https://..."
/>
```

## Key Files for Common Tasks

### Adding a New Project
1. Add project image to `src/Assets/Projects/`
2. Edit `src/components/Projects/Projects.js`
3. Import image and add new `<ProjectCards />` component

### Updating Skills/Tech Stack
- Tech icons: `src/components/About/Techstack.js`
- Tools: `src/components/About/Toolstack.js`
- Icons from `react-icons` library

### Changing Personal Info
- Home intro: `src/components/Home/Home2.js`
- About card: `src/components/About/AboutCard.js`
- Typewriter text: `src/components/Home/Type.js`
- Social links: `src/components/Home/Home2.js` and `src/components/Footer.js`

### Updating Resume
- Replace PDF at `src/Assets/` (check path in ResumeNew.js)
- Viewer: `src/components/Resume/ResumeNew.js`

### Modifying Navigation
- Navbar: `src/components/Navbar.js`
- Routes: `src/App.js`

### Styling Changes
- Theme colors/fonts: `src/style.css`
- Component-specific: `src/App.css`
- Particle config: `src/components/Particle.js`

## GitHub Username

The portfolio displays data for GitHub user: **ntanthedev**

Update in:
- `src/components/About/Github.js` (contribution calendar)
- Social links in Home2.js and Footer.js

## Testing

```bash
npm test
```

- Test file: `src/App.test.js`
- Setup: `src/setupTests.js`
- Framework: Jest + React Testing Library

## Deployment

### Manual Deployment
```bash
npm run deploy
```
This builds and deploys to GitHub Pages with the custom domain.

### CI/CD
GitHub Actions workflow (`.github/workflows/npm-publish-github-packages.yml`) runs on release creation:
- Runs tests
- Publishes package to GitHub npm registry

## Important Considerations

### HashRouter
Uses `HashRouter` instead of `BrowserRouter` for GitHub Pages compatibility. URLs have `#` (e.g., `ntannn.dev/#/about`).

### Build Output
The `build/` folder contains production files. **Do not edit directly** - changes will be overwritten on next build.

### Assets
- Images should be imported in JS files (not referenced by URL)
- Large images in `src/Assets/Projects/` may impact build size

### External Links
Always include `target="_blank"` and `rel="noreferrer"` for security.

### Commented Features
Some features are commented out in the codebase:
- Resume link in Navbar
- Blog-related code in ProjectCards
- Some AI/ML project entries

## Common Modifications

### Change Site Title/Meta
Edit `public/index.html` - update `<title>`, meta description, OG tags

### Change Domain
1. Update `CNAME` file in root
2. Update `public/CNAME`
3. Configure DNS with domain provider

### Add New Page
1. Create component in `src/components/NewPage/`
2. Add route in `src/App.js`
3. Add nav link in `src/components/Navbar.js`

### Update Footer Social Links
Edit `src/components/Footer.js` - modify icon buttons with appropriate hrefs

## Performance Notes

- Particle animation has density limits for performance
- react-pdf uses CDN for worker
- Images should be optimized before adding
- Build produces ~20MB output (includes all assets)

## ESLint

Configured via `react-app` preset in package.json. No custom rules.

## Browser Support

Production: `>0.2%`, not dead, not op_mini all
Development: Latest Chrome, Firefox, Safari
