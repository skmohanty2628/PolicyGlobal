// Ad slots are currently disabled.
// To re-enable, replace `return null` with the ad code block below.

interface Props {
  variant?: 'banner' | 'sidebar' | 'inline' | 'bottom';
  className?: string;
}

export default function AdSlot({ variant: _variant, className: _className }: Props) {
  return null; // Ads disabled — re-enable when AdSense is approved
}