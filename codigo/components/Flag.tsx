import type { ReactNode } from "react";

/** SVG y no emoji: Windows no dibuja los emojis de banderas. */
const flags: Record<string, ReactNode> = {
  // Argentina
  es: (
    <>
      <path fill="#74acdf" d="M0 0h30v20H0z" />
      <path fill="#fff" d="M0 6.67h30v6.66H0z" />
      <circle cx="15" cy="10" r="2.2" fill="#f6b40e" />
    </>
  ),
  // Estados Unidos
  en: (
    <>
      <path fill="#fff" d="M0 0h30v20H0z" />
      <path stroke="#b22234" strokeWidth="1.54" d="M0 .77h30M0 3.85h30M0 6.92h30M0 10h30M0 13.08h30M0 16.15h30M0 19.23h30" />
      <path fill="#3c3b6e" d="M0 0h13v10.77H0z" />
      <path
        stroke="#fff"
        strokeWidth="1.1"
        strokeLinecap="round"
        d="M2 2h0M5 2h0M8 2h0M11 2h0M3.5 4.2h0M6.5 4.2h0M9.5 4.2h0M2 6.4h0M5 6.4h0M8 6.4h0M11 6.4h0M3.5 8.6h0M6.5 8.6h0M9.5 8.6h0"
      />
    </>
  ),
  // Italia
  it: (
    <>
      <path fill="#fff" d="M0 0h30v20H0z" />
      <path fill="#009246" d="M0 0h10v20H0z" />
      <path fill="#ce2b37" d="M20 0h10v20H20z" />
    </>
  ),
  // Brasil
  pt: (
    <>
      <path fill="#009c3b" d="M0 0h30v20H0z" />
      <path fill="#ffdf00" d="m15 2 12.5 8L15 18 2.5 10z" />
      <circle cx="15" cy="10" r="4.4" fill="#002776" />
      <path fill="none" stroke="#fff" strokeWidth=".9" d="M10.8 9.2c3-.8 6.200 0 8.300 2.200" />
    </>
  ),
};

/** Si un idioma todavía no tiene bandera, muestra su código. */
export function Flag({ locale }: { locale: string }) {
  const flag = flags[locale];
  if (!flag) return <span className="text-sm uppercase">{locale}</span>;
  return (
    <svg viewBox="0 0 30 20" aria-hidden="true" className="h-4 w-6 shrink-0 rounded-xs ring-1 ring-ivory/40">
      {flag}
    </svg>
  );
}
