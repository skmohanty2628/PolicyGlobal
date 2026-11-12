'use client';
import { Children, ReactNode, useState } from 'react';

// Shows the first `initial` children and reveals more on request, so long lists stay fast and readable.
export default function ShowMore({ children, initial = 24, step = 24, className }: {
  children: ReactNode; initial?: number; step?: number; className?: string;
}) {
  const items = Children.toArray(children);
  const [shown, setShown] = useState(initial);
  const left = items.length - shown;
  return (
    <>
      <div className={className}>{items.slice(0, shown)}</div>
      {left > 0 && (
        <div className="flex justify-center mt-8">
          <button type="button" onClick={() => setShown(shown + step)}
            className="text-sm font-semibold px-6 py-2.5 rounded-full text-white" style={{ background: '#0A1628' }}>
            Show more stories ({left} left)
          </button>
        </div>
      )}
    </>
  );
}
