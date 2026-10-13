"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  decimals = 2,
  duration = 0.6,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const currentValue = useRef(0);

  useEffect(() => {
    const startValue = currentValue.current;
    const endValue = value;
    const startTime = Date.now();
    const durationMs = duration * 1000;
    let frame = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (endValue - startValue) * eased;
      currentValue.current = current;
      setDisplayValue(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return <span className={className}>{displayValue.toFixed(decimals)}</span>;
}
