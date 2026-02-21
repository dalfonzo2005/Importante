import React from 'react';
import { Heart } from 'lucide-react';

const Decorations: React.FC = () => {
  const hearts = Array.from({ length: 25 });

  return (
    <div className="hearts-bg">
      {hearts.map((_, i) => (
        <Heart
          key={i}
          className="heart-float"
          size={20 + Math.random() * 25}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 12}s`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
};

export default Decorations;