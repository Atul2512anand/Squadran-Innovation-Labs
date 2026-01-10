'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  speed: number;
  color: string;
  width: number;
}

export function ShootingStarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      // Use window.inner* to get accurate viewport size on mobile
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    // Initialize dimensions immediately
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set exact canvas size to match display size for sharp rendering
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let animationFrameId: number;
    const stars: Star[] = [];
    
    const colors = [
      '#22d3ee', // Cyan
      '#e879f9', // Magenta
      '#facc15', // Yellow
      '#a3e635', // Lime
      '#f472b6', // Pink
      '#38bdf8', // Light Blue
      '#ffffff', // White
    ];

    // Helper: Create a new star
    const createStar = (isInitial = false): Star => {
      const w = dimensions.width;
      const h = dimensions.height;
      
      // Determine start position
      let x, y;
      if (isInitial) {
        // Spread randomly across screen initially
        x = Math.random() * w;
        y = Math.random() * h;
      } else {
        // Start from top-left area (off-screen)
        if (Math.random() < 0.5) {
            // Start from Top edge
            x = Math.random() * w;
            y = -150;
        } else {
            // Start from Left edge
            x = -150;
            y = Math.random() * h;
        }
      }

      return {
        x,
        y,
        // Tail length
        length: 80 + Math.random() * 150,
        // Speed
        speed: 5 + Math.random() * 8, 
        color: colors[Math.floor(Math.random() * colors.length)],
        width: 1 + Math.random() * 1.5,
      };
    };

    // Initialize stars
    // Fewer stars on smaller screens to ensure max FPS
    const density = 20000; // pixels per star (higher = fewer stars)
    const count = Math.min(Math.floor((dimensions.width * dimensions.height) / density), 30);
    
    for (let i = 0; i < count; i++) {
      stars.push(createStar(true));
    }

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw each star
      stars.forEach((star, index) => {
        // Move diagonally (45 degrees: x and y increase equally)
        star.x += star.speed;
        star.y += star.speed;

        // Calculate tail position (behind the head)
        const tailX = star.x - star.length;
        const tailY = star.y - star.length;

        // Draw the star trail using a gradient
        const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        gradient.addColorStop(0, star.color); // Head (bright)
        gradient.addColorStop(1, 'transparent'); // Tail (fades out)

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.width;
        ctx.lineCap = 'round';
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Reset star if it goes off screen (bottom or right)
        // Add buffer to ensure tail fully leaves screen before recycling
        if (tailX > dimensions.width || tailY > dimensions.height) {
          stars[index] = createStar();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
