import React from 'react';
import { PulsingBorder } from '@paper-design/shaders-react';

interface ShaderBackgroundProps {
  className?: string;
}

const ShaderBackground: React.FC<ShaderBackgroundProps> = ({ 
  className = ''
}) => {
  return (
    <div 
      className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      style={{ willChange: 'transform' }}
    >
      <PulsingBorder
        style={{ width: '100%', height: '100%' }}
        colors={["#0dc1fd", "#d915ef", "#ff3f2ecc", "#33cc33"]}
        colorBack="transparent"
        roundness={0.25}
        thickness={0.1}
        softness={0.75}
        intensity={0.25}
        bloom={0.15}
        spots={3}
        spotSize={0.4}
        pulse={0.2}
        smoke={0.15}
        smokeSize={0.5}
        speed={0.5}
        scale={0.6}
      />
    </div>
  );
};

export default ShaderBackground;
