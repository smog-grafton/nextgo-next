'use client';

import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null); const [shown, setShown] = useState(false);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setShown(true), { threshold: .12 }); const node = ref.current; if (node) observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${shown ? 'shown' : ''} ${className}`}>{children}</div>;
}
