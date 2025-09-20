'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface FlipWordsProps {
  words: string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
  pauseOnHover?: boolean;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  interval = 3000,
  className = '',
  wordClassName = '',
  pauseOnHover = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <span
      className={cn('inline-block relative', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative overflow-hidden inline-block">
        {words.map((word, index) => (
          <span
            key={index}
            className={cn(
              'absolute top-0 left-0 transition-all duration-500 ease-in-out whitespace-nowrap',
              wordClassName,
              index === currentIndex
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-4'
            )}
            style={{
              transitionDelay: index === currentIndex ? '100ms' : '0ms',
            }}
          >
            {word}
          </span>
        ))}
        {/* Invisible placeholder to maintain layout */}
        <span className={cn('opacity-0 whitespace-nowrap', wordClassName)}>
          {words[currentIndex]}
        </span>
      </span>
    </span>
  );
};
