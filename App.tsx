import React from 'react';
import Navigation from './components/Navigation';
import Typewriter from './components/Typewriter';
import CrazyToggle from './components/CrazyToggle';
import Hackathons from './components/Hackathons';
import Clubs from './components/Clubs';
import ShaderBackground from './components/ShaderBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#1a1a1a] flex flex-col font-sans">
      {/* Single Global PulsingBorder - fixed behind everything */}
      <ShaderBackground />
      
      {/* Header */}
      <header className="relative z-20 flex justify-between items-center px-8 py-4 mb-2">
        <div className="flex items-center gap-2 text-white">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <span className="material-symbols-outlined text-black text-xl">
              view_in_ar
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase select-none">
            The 3D Team
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full border border-white/20 text-white text-sm flex items-center gap-2 hover:bg-white/10 transition-colors">
            English{' '}
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
            <span className="material-symbols-outlined text-sm font-bold">
              arrow_forward
            </span>
            Let's Connect
          </button>
        </div>
      </header>

      {/* Main Content Area - Hero Section */}
      <div id="hero" className="relative mx-4 md:mx-8 z-10">
        <main className="relative flex-grow rounded-3xl overflow-hidden flex flex-col items-center justify-center px-6 shadow-2xl min-h-[85vh]">
          {/* Background Canvas */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fbfaf8] to-[#f6f4f0] z-0"></div>

          {/* Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnJFom0-RX-H9b1sb_oBz3dt16189lbYKggiHq6dVSS8iuhe4H6mrWyaJqD38Jc6z7OoH4X4c_TqNUFB8X1W2s72OfIuw8_9pqnEB_zPpprwu9-ESMudg_KY1oj4PYubyMFkHRBRfjT1BtmwxdoL9Otz08l9ZI7GM4vBMkTBhevHZT7_ZYwRHz2DFjs7Z7V5M5b59-LAURKUKdN5KpMo4x9tA4mG7xY-hjP6DRU5i32hZKH7G-zCXlGGR8cfVxkVl-68H7F029-KqF')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <Navigation />

          <div className="relative z-10 max-w-5xl text-center space-y-8">
            {/* Hero Typewriter */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-gray-900 min-h-[3.3em]">
              <Typewriter
                phrases={[
                  "Build Your\nWorld.\n With Us.",
                  "Shape Your\nFuture.\n With Us.",
                  "Create Your\nReality.\n With Us.",
                  "Design Your\nDreams.\n With Us."
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2000}
              />
            </h1>

            <div className="flex justify-center">
              <button className="flex items-center gap-2 text-lg font-semibold bg-[#1a1a1a] text-white px-8 py-4 rounded-full hover:bg-black/80 transition-all hover:scale-105 group shadow-xl">
                <span className="material-symbols-outlined text-white text-2xl transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
                Contact Us
              </button>
            </div>
          </div>

          {/* Description Paragraph - Moved to bottom left */}
          <div className="absolute bottom-8 left-8 z-20 max-w-sm">
            <p className="text-xs md:text-sm text-black/60 leading-relaxed font-medium">
              We blend technical precision with artistic vision to redefine how your
              brand exists in the third dimension. We make complex 3D solutions
              accessible, turning your ideas into tangible realities with ease.
            </p>
          </div>

          <CrazyToggle />
        </main>
      </div>

      {/* Hackathons Section */}
      <div id="hackathons" className="relative z-10">
        <Hackathons />
      </div>

      {/* Clubs Section */}
      <div id="clubs" className="relative z-10">
        <Clubs />
      </div>

      {/* Footer */}
      <footer className="relative z-10 h-12 flex items-center justify-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          © 2024 THE 3D TEAM — ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default App;