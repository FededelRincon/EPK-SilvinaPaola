/** Banda azul con línea celeste, el motivo que separa las hojas del EPK. */
export function SectionDivider({ fade = false }: { fade?: boolean }) {
  return (
    <div aria-hidden="true">
      <div className="h-1 bg-sky" />
      <div className={fade ? "h-14 bg-linear-to-b from-navy-deep to-navy" : "h-8 bg-navy-deep"} />
    </div>
  );
}
