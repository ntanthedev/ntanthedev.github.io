<div align="center">
  <h1>ntannn.dev</h1>
  <p>Personal portfolio website showcasing my projects, skills, and experience</p>

  <a href="https://ntannn.dev" target="_blank">
    <img src="https://img.shields.io/badge/Live-ntannn.dev-c770f0?style=for-the-badge&logo=vercel" alt="Live Site" />
  </a>
  <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=for-the-badge&logo=bootstrap" alt="Bootstrap" />
</div>

<br/>

<div align="center">
  <img alt="Portfolio Preview" src="./Images/readme-img1.png" />
</div>

## About

A modern, responsive portfolio website built with React.js. Features animated particle backgrounds, smooth transitions, and a clean design to showcase projects and technical skills.

## Features

- **Multi-Page SPA** - Home, About, Projects, and Resume sections
- **Responsive Design** - Optimized for all screen sizes
- **Interactive Elements** - Particle animations, typewriter effects, 3D tilt cards
- **GitHub Integration** - Live contribution calendar
- **PDF Resume Viewer** - Built-in document viewer

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 17, React Router 6, React Bootstrap |
| **Styling** | Bootstrap 5, CSS3 |
| **Animations** | tsparticles, react-parallax-tilt, typewriter-effect |
| **Icons** | react-icons |
| **PDF** | react-pdf |
| **Deployment** | GitHub Pages |

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ntanthedev/ntanthedev.github.io.git

# Navigate to directory
cd ntanthedev.github.io

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Create production build |
| `npm test` | Run tests |
| `npm run deploy` | Deploy to GitHub Pages |

## Project Structure

```
src/
├── components/
│   ├── Home/          # Landing page
│   ├── About/         # Skills, tools, experience
│   ├── Projects/      # Portfolio projects
│   ├── Resume/        # PDF resume viewer
│   ├── Navbar.js      # Navigation
│   ├── Footer.js      # Footer with socials
│   └── Particle.js    # Background animation
├── Assets/            # Images and files
├── App.js             # Main app with routing
└── style.css          # Global styles
```

## Customization

### Update Personal Info
- Home introduction: `src/components/Home/Home2.js`
- About section: `src/components/About/AboutCard.js`
- Typewriter text: `src/components/Home/Type.js`

### Add Projects
1. Add project image to `src/Assets/Projects/`
2. Edit `src/components/Projects/Projects.js`
3. Add new `<ProjectCards />` component

### Modify Skills
- Tech stack: `src/components/About/Techstack.js`
- Tools: `src/components/About/Toolstack.js`

### Update Social Links
- Home: `src/components/Home/Home2.js`
- Footer: `src/components/Footer.js`

## Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

For custom domain, update the `CNAME` file with your domain.

## Credits

This portfolio is built upon the excellent template by [Soumyajit Behera](https://github.com/soumyajit4419/Portfolio). Thanks for the foundation!

## License

This project is open source and available for personal use. If you use this template, please provide attribution by linking back to:
- [ntanthedev](https://github.com/ntanthedev)
- [soumyajit4419](https://github.com/soumyajit4419/Portfolio) (original template)

---

<div align="center">
  <sub>Built with React.js</sub>
</div>
