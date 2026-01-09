import React from 'react';

const Navigation: React.FC = () => {
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Circulars', href: '#' },
    { name: 'Clubs', href: '#clubs' },
  ];

  return (
    <nav className="absolute top-8 left-8 z-20">
      <div className="px-8 py-3 rounded-full bg-white/50 backdrop-blur-md border border-black/5 flex items-center gap-8 text-sm font-medium text-gray-800 transition-all hover:bg-white/70">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:opacity-60 transition-opacity"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;