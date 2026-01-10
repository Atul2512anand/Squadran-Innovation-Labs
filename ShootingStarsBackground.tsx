'use client';

import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

export function ShootingStarsBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starCount = 20;
    const colors = [
      '#22d3ee', // Cyan
      '#e879f9', // Magenta
      '#facc15', // Yellow
      '#a3e635', // Lime
      '#f472b6', // Pink
      '#38bdf8', // Light Blue
      '#ffffff', // White
    ];

    const generateStars = () => {
      return Array.from({ length: starCount }).map((_, i) => ({
        id: i,
        // Spread starting positions across a wider area to ensure coverage
        top: Math.random() * 100, 
        left: Math.random() * 100,
        delay: Math.random() * 5, // Random start times
        duration: 2 + Math.random() * 4, // Varying speeds
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>
        {`
          @keyframes shooting-star-animation {
            0% {
              transform: translateX(0) translateY(0) rotate(45deg) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateX(100vmax) translateY(100vmax) rotate(45deg) scale(0.8);
              opacity: 0;
            }
          }
        `}
      </style>
      
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute h-[2px] w-[100px] md:w-[150px] rounded-full"
          style={{
            top: `${star.top - 20}%`, // Offset start to allow sliding in
            left: `${star.left - 20}%`,
            background: `linear-gradient(90deg, transparent, ${star.color})`,
            boxShadow: `0 0 20px ${star.color}, 0 0 40px ${star.color}`, // Glowing effect
            animation: `shooting-star-animation ${star.duration}s linear infinite`,
            animationDelay: `${star.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}