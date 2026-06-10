import Link from 'next/link';

interface Crumb { label: string; href?: string; }

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500 font-mono flex items-center gap-1.5 flex-wrap">
      <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <span className="text-slate-300">/</span>
          {c.href ? (
            <Link href={c.href} className="hover:text-gold-600 transition-colors">{c.label}</Link>
          ) : (
            <span className="text-slate-400 truncate max-w-[200px]">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
