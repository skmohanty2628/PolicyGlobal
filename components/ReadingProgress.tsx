'use client';
import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[70] pointer-events-none" aria-hidden="true">
      <div className="h-full transition-[width] duration-100" style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#C9A84C,#F0D080)' }} />
    </div>
  );
}
