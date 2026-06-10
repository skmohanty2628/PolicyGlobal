import Link from 'next/link';
import { COUNTRIES } from '@/lib/constants';

const FLAGS: Record<string, string> = {
  'United States':  '🇺🇸',
  'India':          '🇮🇳',
  'United Kingdom': '🇬🇧',
  'Canada':         '🇨🇦',
  'Australia':      '🇦🇺',
  'UAE':            '🇦🇪',
  'Singapore':      '🇸🇬',
  'Germany':        '🇩🇪',
  'France':         '🇫🇷',
  'Japan':          '🇯🇵',
  'South Korea':    '🇰🇷',
  'Global':         '🌍',
};

interface Props {
  country: string;
  link?: boolean;
  className?: string;
}

export default function CountryBadge({ country, link = true, className = '' }: Props) {
  const slug = COUNTRIES.find((c) => c.label === country)?.slug ??
    country.toLowerCase().replace(/\s+/g, '-');
  const flag = FLAGS[country] ?? '🌐';
  const classes = `inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider 
    px-2.5 py-1 rounded-full bg-navy-900 text-slate-200 border border-navy-700 ${className}`;

  if (link) {
    return (
      <Link href={`/country/${slug}`} className={classes} style={{ background: '#0A1628', borderColor: '#162444' }}>
        <span>{flag}</span><span>{country}</span>
      </Link>
    );
  }
  return (
    <span className={classes} style={{ background: '#0A1628', borderColor: '#162444' }}>
      <span>{flag}</span><span>{country}</span>
    </span>
  );
}
