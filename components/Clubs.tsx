import React from 'react';

interface ClubData {
  name: string;
  fullName: string;
  description: string;
  link: string;
  icon: string;
}

const clubs: ClubData[] = [
  { name: "AVIDA", fullName: "The Autonomous Vehicle Team", description: "Pioneering the future of driverless mobility and robotics.", link: "#", icon: "smart_toy" },
  { name: "Anima", fullName: "The Aero Club", description: "Design, build, and fly. Exploring the frontiers of aerodynamics.", link: "#", icon: "flight" },
  { name: "Team Xanthronz", fullName: "E-baja", description: "Engineering all-terrain electric beasts for the ultimate endurance.", link: "#", icon: "electric_car" },
  { name: "Aaveg", fullName: "The Drama Club", description: "The stage is set. Stories, emotions, and the art of performance.", link: "#", icon: "theater_comedy" },
  { name: "Malhar", fullName: "The Music Club", description: "Rhythm, melody, and soul. Uniting hearts through sound.", link: "#", icon: "music_note" },
  { name: "DCC", fullName: "Developers & Coders Club", description: "Compiling dreams into reality. The hub for code wizards.", link: "#", icon: "code" },
  { name: "GDSC", fullName: "Google Developer Student Club", description: "Building with Google technologies. Learn, Grow, Connect.", link: "#", icon: "developer_mode" },
  { name: "D-Zire", fullName: "The Dance Club", description: "Poetry in motion. Expressing life through every beat.", link: "#", icon: "nightlife" },
  { name: "Fine Arts Club", fullName: "Creative Arts", description: "Canvas, colors, and imagination unleashed.", link: "#", icon: "palette" },
  { name: "Pixels", fullName: "Photography Club", description: "Capturing moments, freezing time, telling stories through lenses.", link: "#", icon: "photo_camera" },
  { name: "NLC", fullName: "NITA Literary Club", description: "Ink, words, and wisdom. For the love of literature and debate.", link: "#", icon: "menu_book" },
  { name: "WeCan", fullName: "Social Welfare", description: "Empowering society through collective action and kindness.", link: "#", icon: "volunteer_activism" },
  { name: "E-Cell", fullName: "Entrepreneurship Cell", description: "Ideate. Innovate. Incubate. Fostering future leaders.", link: "#", icon: "rocket_launch" }
];

const FlipCard: React.FC<{ club: ClubData }> = ({ club }) => {
  return (
    <div 
      className="group w-56 h-72 cursor-pointer flex-shrink-0 mx-4"
      style={{ perspective: '1000px' }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-out group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face - Dark glassmorphism with white accents */}
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Background with gradient - solid for performance */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#121212] to-[#0a0a0a]" />
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors" />
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
            {/* Icon with glow */}
            <div className="relative mb-6">
              <div className="absolute inset-0 blur-2xl bg-white/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="material-symbols-outlined text-white text-6xl relative group-hover:scale-110 transition-transform">
                {club.icon}
              </span>
            </div>
            
            {/* Club Name */}
            <h3 
              className="text-xl font-black text-white uppercase tracking-wider text-center leading-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {club.name}
            </h3>
            
            {/* Full Name */}
            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-3 text-center">
              {club.fullName}
            </p>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-12 h-12 opacity-30">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-white to-transparent" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-12 h-12 opacity-30">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white to-transparent" />
            <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>

        {/* Back Face - White with black text */}
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-white" />
          
          {/* Border */}
          <div className="absolute inset-0 rounded-xl border-2 border-black" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-between p-6">
            {/* Header */}
            <div className="text-center">
              <h3 
                className="text-lg font-black text-black uppercase tracking-wider"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {club.name}
              </h3>
              <p className="text-[9px] text-black/50 uppercase tracking-[0.15em] mt-1">
                {club.fullName}
              </p>
            </div>
            
            {/* Description */}
            <p className="text-sm text-black/70 text-center leading-relaxed">
              {club.description}
            </p>
            
            {/* Visit Button */}
            <a
              href={club.link}
              className="w-full py-3 bg-black text-white font-bold uppercase text-sm tracking-wider text-center rounded-lg hover:bg-black/80 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Visit
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
          
          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-black" />
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-black" />
        </div>
      </div>
    </div>
  );
};

const MarqueeRow: React.FC<{ direction?: 'left' | 'right' }> = ({ direction = 'left' }) => {
  const animationClass = direction === 'left' 
    ? 'animate-marquee-left' 
    : 'animate-marquee-right';

  return (
    <div className="flex overflow-hidden group/marquee">
      <div className={`flex ${animationClass} group-hover/marquee:[animation-play-state:paused]`} style={{ willChange: 'transform' }}>
        {/* First set */}
        {clubs.map((club, index) => (
          <FlipCard key={`first-${index}`} club={club} />
        ))}
        {/* Duplicate set for seamless loop */}
        {clubs.map((club, index) => (
          <FlipCard key={`second-${index}`} club={club} />
        ))}
      </div>
    </div>
  );
};

const Clubs: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-16 px-4 relative z-10">
        <h2 
          className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Clubs
        </h2>
        <p className="text-white/40 text-lg max-w-lg mx-auto">
          Where passions unite — hover to explore
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="space-y-8 relative z-10">
        <MarqueeRow direction="left" />
      </div>
      
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none z-20" />
      
      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clubs;
