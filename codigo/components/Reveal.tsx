"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = { children: ReactNode; index?: number; className?: string };

/** Aparición suave al entrar en pantalla, una sola vez. */
export function Reveal({ children, index = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // También lo que quedó por encima (al entrar directo a un #ancla).
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ "--reveal-index": index } as CSSProperties}
    >
      {children}
    </div>
  );
}
