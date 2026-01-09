# Open3D - The 3D Team

A stunning, experimental landing page for NIT Agartala's 3D Team featuring WebGL shaders, interactive animations, and modern glassmorphism design.

![Hero Section](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

### 🎨 Visual Effects
- **WebGL PulsingBorder Shader** - Animated glowing border effect using `@paper-design/shaders-react`
- **Glassmorphism Cards** - Modern frosted glass aesthetic throughout
- **Dynamic Gradients** - Colorful gradient meshes and accent colors

### 🎭 Interactive Elements
- **Typewriter Animation** - Rotating hero text with typing effect
- **Flip Cards** - Hover to reveal detailed information on Hackathons and Clubs
- **Scroll Animations** - Framer Motion powered scroll-triggered card stacking in Hackathons section
- **Infinite Marquee** - Auto-scrolling clubs showcase

### 📍 Sections
| Section | Description |
|---------|-------------|
| **Hero** | Eye-catching typewriter headline with CTA |
| **Hackathons** | 5 hackathon cards with scroll-merge animation |
| **Clubs** | 13+ club cards in infinite marquee |

### ⚡ Performance Optimizations
- Single global shader instance (reduced from 3)
- GPU-accelerated animations with `will-change`
- Removed expensive `backdrop-blur` in favor of solid backgrounds
- Reduced shader intensity for smoother performance

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack
- **React 18** + TypeScript
- **Vite** - Fast build tool
- **Framer Motion** - Animations
- **TailwindCSS** - Styling
- **@paper-design/shaders-react** - WebGL shaders

## 📁 Project Structure
```
├── App.tsx              # Main app with all sections
├── components/
│   ├── Navigation.tsx   # Anchor navigation
│   ├── Typewriter.tsx   # Typing animation
│   ├── Hackathons.tsx   # Scroll-animated cards
│   ├── Clubs.tsx        # Marquee with flip cards
│   ├── ShaderBackground.tsx  # WebGL pulsing border
│   └── CrazyToggle.tsx  # Easter egg toggle
```

## 📄 License
MIT License - Built with ❤️ by The 3D Team, NIT Agartala
