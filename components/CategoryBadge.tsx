import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

const CATEGORY_COLORS: Record<string, string> = {
  'Insurance':          'bg-blue-100 text-blue-800',
  'Personal Finance':   'bg-emerald-100 text-emerald-800',
  'Banking':            'bg-violet-100 text-violet-800',
  'Markets':            'bg-orange-100 text-orange-800',
  'FinTech':            'bg-cyan-100 text-cyan-800',
  'Regulation':         'bg-red-100 text-red-800',
  'Economy':            'bg-amber-100 text-amber-800',
  'Healthcare Insurance':'bg-pink-100 text-pink-800',
  'Auto Insurance':     'bg-sky-100 text-sky-800',
  'Life Insurance':     'bg-teal-100 text-teal-800',
  'Loans & Mortgage':   'bg-indigo-100 text-indigo-800',
};

interface Props {
  category: string;
  link?: boolean;
  className?: string;
}

export default function CategoryBadge({ category, link = true, className = '' }: Props) {
  const slug = CATEGORIES.find((c) => c.label === category)?.slug ?? category.toLowerCase().replace(/\s+/g, '-');
  const color = CATEGORY_COLORS[category] ?? 'bg-gray-100 text-gray-700';
  const classes = `inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${color} ${className}`;

  if (link) {
    return <Link href={`/category/${slug}`} className={classes}>{category}</Link>;
  }
  return <span className={classes}>{category}</span>;
}
