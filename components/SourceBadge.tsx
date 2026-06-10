interface Props {
  sourceName: string;
  sourceUrl: string;
  verificationStatus: string;
  verifiedAt: string;
}

export default function SourceBadge({ sourceName, sourceUrl, verificationStatus, verifiedAt }: Props) {
  const isVerified = verificationStatus === 'Verified';
  const verifiedDate = new Date(verifiedAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      {/* Source Info */}
      <div className="flex-1">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-mono mb-0.5">Original Source</p>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors underline-offset-2 hover:underline"
          style={{ color: '#0A1628' }}
        >
          {sourceName} ↗
        </a>
      </div>

      {/* Verified Badge */}
      {isVerified && (
        <span className="verified-badge flex-shrink-0">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd" />
          </svg>
          Verified · {verifiedDate}
        </span>
      )}

      {/* Original Source Link Button */}
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-all flex-shrink-0"
        style={{
          background: '#0A1628',
          color: '#C9A84C',
          borderColor: '#C9A84C',
        }}
      >
        Read Original
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
