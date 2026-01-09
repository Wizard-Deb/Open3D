import React, { useState } from 'react';

const CrazyToggle: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
      <div className="bg-[#1a1a1a] px-4 py-2 rounded-full flex items-center gap-3 shadow-lg">
        <span className="text-xs font-medium text-white/60 uppercase tracking-widest">
          Crazy mode:
        </span>
        <div className="flex bg-black/40 rounded-full p-1">
          <button
            onClick={() => setIsOn(true)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all duration-300 ${
              isOn
                ? 'bg-white text-black'
                : 'bg-transparent text-white/50 hover:text-white'
            }`}
          >
            On
          </button>
          <button
            onClick={() => setIsOn(false)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all duration-300 ${
              !isOn
                ? 'bg-white text-black'
                : 'bg-transparent text-white/50 hover:text-white'
            }`}
          >
            Off
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrazyToggle;