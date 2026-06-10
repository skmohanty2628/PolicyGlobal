interface Props {
  variant?: 'banner' | 'sidebar' | 'inline' | 'bottom';
  className?: string;
}

const SLOT_LABELS: Record<string, string> = {
  banner:  'Top Banner — 728×90',
  sidebar: 'Sidebar — 300×250',
  inline:  'In-Feed Native Ad — 728×90',
  bottom:  'Article Footer — 728×90',
};

export default function AdSlot({ variant = 'inline', className = '' }: Props) {
  return (
    <div
      className={`ad-slot rounded-lg text-center ${className}`}
      role="complementary"
      aria-label="Advertisement"
    >
      <div className="flex flex-col items-center gap-1 py-3 px-4">
        <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Advertisement</p>
        <p className="text-[11px] text-slate-400">{SLOT_LABELS[variant]}</p>
        <p className="text-[9px] font-mono text-slate-300 opacity-60">Ad slot ready for integration</p>
      </div>
    </div>
  );
}
