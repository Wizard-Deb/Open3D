import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HackathonData {
  id: string;
  name: string;
  organizer: string;
  icon: string;
  gradient: string;
  accentColor: string;
  tagline: string;
  deadline: string;
  eligibility: string;
  prizePool: string;
  mode: string;
  externalUrl: string;
}

const cardData: HackathonData[] = [
  {
    id: '01',
    name: 'OpenVerse',
    organizer: "GDG IIIT Agartala",
    icon: 'terminal',
    gradient: 'from-cyan-500/40 via-teal-400/30 to-emerald-400/20',
    accentColor: 'rgb(6, 182, 212)',
    tagline: 'Build the future of open source',
    deadline: 'Jan 25, 2026',
    eligibility: 'All UG/PG Students',
    prizePool: '₹1,00,000',
    mode: 'Hybrid',
    externalUrl: 'https://nita.ac.in/',
  },
  {
    id: '02',
    name: 'Arjuna',
    organizer: 'Civil Dept, NIT Agartala',
    icon: 'engineering',
    gradient: 'from-amber-500/40 via-orange-400/30 to-yellow-400/20',
    accentColor: 'rgb(245, 158, 11)',
    tagline: 'Engineering solutions for tomorrow',
    deadline: 'Feb 10, 2026',
    eligibility: 'Civil & Arch Students',
    prizePool: '₹75,000',
    mode: 'Offline',
    externalUrl: 'https://nita.ac.in/',
  },
  {
    id: '03',
    name: 'SIH',
    organizer: 'Govt. of India',
    icon: 'flag',
    gradient: 'from-emerald-500/40 via-green-400/30 to-lime-400/20',
    accentColor: 'rgb(16, 185, 129)',
    tagline: 'Smart India Hackathon 2026',
    deadline: 'Mar 01, 2026',
    eligibility: 'All Indian Students',
    prizePool: '₹5,00,000',
    mode: 'National',
    externalUrl: 'https://nita.ac.in/',
  },
  {
    id: '04',
    name: 'UIDAI',
    organizer: 'Aadhar Authority of India',
    icon: 'fingerprint',
    gradient: 'from-rose-500/40 via-pink-400/30 to-red-400/20',
    accentColor: 'rgb(244, 63, 94)',
    tagline: 'Innovate digital identity solutions',
    deadline: 'Feb 20, 2026',
    eligibility: 'Tech & Security Focus',
    prizePool: '₹2,50,000',
    mode: 'Online',
    externalUrl: 'https://nita.ac.in/',
  },
  {
    id: '05',
    name: 'PLUTUS',
    organizer: 'IIT(ISM) Dhanbad',
    icon: 'account_balance',
    gradient: 'from-yellow-500/40 via-amber-400/30 to-orange-400/20',
    accentColor: 'rgb(234, 179, 8)',
    tagline: 'Finance meets technology',
    deadline: 'Jan 30, 2026',
    eligibility: 'All Engineering Students',
    prizePool: '₹1,50,000',
    mode: 'Hybrid',
    externalUrl: 'https://nita.ac.in/',
  },
];

const FlipCard: React.FC<{
  data: HackathonData;
  style?: any;
}> = ({ data, style }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    window.open(data.externalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="relative w-64 h-96 cursor-pointer"
      style={{ 
        ...style,
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Card Background with gradient mesh - solid for performance */}
          <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient}`} />
          <div className="absolute inset-0 bg-[#0a0a0a]/85" />
          
          {/* Animated gradient orb */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-40"
            style={{ background: `radial-gradient(circle, ${data.accentColor}, transparent)` }}
          />
          
          {/* Neon border glow */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-50"
            style={{ 
              boxShadow: `inset 0 0 30px ${data.accentColor}20, 0 0 20px ${data.accentColor}10`,
            }}
          />
          
          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/10" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col p-6">
            {/* ID Badge */}
            <div className="flex items-center justify-between">
              <span 
                className="text-4xl font-black tracking-wider"
                style={{ 
                  color: data.accentColor,
                  textShadow: `0 0 30px ${data.accentColor}`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {data.id}
              </span>
              <span 
                className="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                style={{ 
                  backgroundColor: `${data.accentColor}20`,
                  color: data.accentColor,
                  border: `1px solid ${data.accentColor}40`,
                }}
              >
                {data.mode}
              </span>
            </div>
            
            {/* Icon Area */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                {/* Icon glow */}
                <div 
                  className="absolute inset-0 blur-2xl opacity-60 scale-150"
                  style={{ background: `radial-gradient(circle, ${data.accentColor}, transparent)` }}
                />
                <span 
                  className="material-symbols-outlined text-8xl relative"
                  style={{ 
                    color: data.accentColor,
                    filter: `drop-shadow(0 0 20px ${data.accentColor})`,
                  }}
                >
                  {data.icon}
                </span>
              </div>
            </div>
            
            {/* Bottom Content */}
            <div className="space-y-2">
              <h3 
                className="text-2xl font-bold text-white tracking-wide uppercase"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {data.name}
              </h3>
              <p className="text-white/40 text-xs font-medium leading-relaxed">
                {data.organizer}
              </p>
            </div>
          </div>

          {/* Corner decorations */}
          <div 
            className="absolute top-0 right-0 w-20 h-20 opacity-20"
            style={{ 
              background: `linear-gradient(135deg, ${data.accentColor} 0%, transparent 50%)`,
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-16 h-16 opacity-10"
            style={{ 
              background: `linear-gradient(-45deg, ${data.accentColor} 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Background - solid for performance */}
          <div className={`absolute inset-0 bg-gradient-to-br ${data.gradient}`} />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
          
          {/* Border glow */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{ 
              boxShadow: `inset 0 0 40px ${data.accentColor}30, 0 0 30px ${data.accentColor}20`,
            }}
          />
          
          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/20" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col p-6">
            {/* Header */}
            <div className="mb-4">
              <h3 
                className="text-2xl font-black uppercase tracking-wide mb-1"
                style={{ 
                  color: data.accentColor,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {data.name}
              </h3>
              <p className="text-white/60 text-sm font-medium">
                {data.tagline}
              </p>
            </div>
            
            {/* Details */}
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <span className="text-white/40 text-xs block mb-1 uppercase tracking-wide">Deadline</span>
                <span 
                  className="text-lg font-bold"
                  style={{ color: data.accentColor }}
                >
                  {data.deadline}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-white/40 text-[10px] block mb-1 uppercase tracking-wide">Prize Pool</span>
                  <span className="text-sm font-bold text-white">
                    {data.prizePool}
                  </span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-white/40 text-[10px] block mb-1 uppercase tracking-wide">Mode</span>
                  <span className="text-sm font-bold text-white">
                    {data.mode}
                  </span>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                <span className="text-white/40 text-xs block mb-1 uppercase tracking-wide">Eligibility</span>
                <span className="text-sm font-medium text-white/80">
                  {data.eligibility}
                </span>
              </div>
            </div>
            
            {/* Footer CTA */}
            <div 
              className="mt-4 py-3 rounded-xl text-center font-bold text-sm uppercase tracking-wide transition-all hover:scale-105"
              style={{ 
                backgroundColor: data.accentColor,
                color: '#0a0a0a',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Apply Now
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FinalCard: React.FC<{ opacity: any }> = ({ opacity }) => {
  return (
    <motion.div
      className="absolute w-72 h-[420px] rounded-2xl overflow-hidden"
      style={{ opacity }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90" />
      <div className="absolute inset-0 backdrop-blur-xl" />
      
      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-neutral-600/30" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
        <span className="material-symbols-outlined text-neutral-400 text-7xl mb-6">
          view_in_ar
        </span>
        <h2 
          className="text-3xl font-bold text-neutral-200 mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          The 3D Team
        </h2>
        <p className="text-neutral-500 text-sm">
          5 Hackathons. Endless Opportunities.
        </p>
      </div>
    </motion.div>
  );
};

const Hackathons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // X positions with more spacing
  const card0X = useTransform(scrollYProgress, [0, 0.3, 0.7], [-560, -560, 0]);
  const card1X = useTransform(scrollYProgress, [0, 0.3, 0.7], [-280, -280, 0]);
  const card2X = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0, 0]);
  const card3X = useTransform(scrollYProgress, [0, 0.3, 0.7], [280, 280, 0]);
  const card4X = useTransform(scrollYProgress, [0, 0.3, 0.7], [560, 560, 0]);
  
  // Scale for depth effect
  const card0Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.85]);
  const card1Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.9]);
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.95]);
  const card3Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.9]);
  const card4Scale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.85]);
  
  // Opacity for merge effect
  const cardsOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);
  const finalCardOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  
  // Rotation for stacking effect
  const card0Rotate = useTransform(scrollYProgress, [0.3, 0.7], [0, -20]);
  const card1Rotate = useTransform(scrollYProgress, [0.3, 0.7], [0, -10]);
  const card2Rotate = useTransform(scrollYProgress, [0.3, 0.7], [0, 0]);
  const card3Rotate = useTransform(scrollYProgress, [0.3, 0.7], [0, 10]);
  const card4Rotate = useTransform(scrollYProgress, [0.3, 0.7], [0, 20]);
  
  const cardTransforms = [
    { x: card0X, scale: card0Scale, rotate: card0Rotate, zIndex: 1 },
    { x: card1X, scale: card1Scale, rotate: card1Rotate, zIndex: 2 },
    { x: card2X, scale: card2Scale, rotate: card2Rotate, zIndex: 3 },
    { x: card3X, scale: card3Scale, rotate: card3Rotate, zIndex: 2 },
    { x: card4X, scale: card4Scale, rotate: card4Rotate, zIndex: 1 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Section header */}
        <motion.div 
          className="absolute top-16 text-center z-10"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]) }}
        >
          <h2 
            className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Hackathons
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Discover opportunities — hover to explore, click to apply
          </p>
        </motion.div>
        
        {/* Cards container */}
        <div className="relative flex items-center justify-center mt-8">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="absolute will-change-transform"
              style={{
                x: cardTransforms[index].x,
                scale: cardTransforms[index].scale,
                rotate: cardTransforms[index].rotate,
                zIndex: cardTransforms[index].zIndex,
                opacity: cardsOpacity,
              }}
            >
              <FlipCard data={card} />
            </motion.div>
          ))}
          
          {/* Final merged card */}
          <FinalCard opacity={finalCardOpacity} />
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 flex flex-col items-center gap-2 text-white/30"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        >
          <span className="text-sm uppercase tracking-widest font-medium">Scroll to merge</span>
          <span className="material-symbols-outlined animate-bounce">
            keyboard_arrow_down
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
