import { Reveal } from "./Reveal";

type Props = { title: string; phrase?: string; tone?: "light" | "dark"; as?: "h2" | "h3" };

export function SectionTitle({ title, phrase, tone = "light", as: Tag = "h2" }: Props) {
  const color = tone === "dark" ? "text-ivory" : "text-navy";
  const size = Tag === "h2" ? "text-heading" : "text-2xl";
  return (
    <Reveal>
      <Tag className={`font-serif tracking-wide uppercase ${size} ${color}`}>{title}</Tag>
      {phrase && (
        <p className={`mt-4 font-serif text-lead ${tone === "dark" ? "text-ivory/90" : "text-ink"}`}>
          {phrase}
        </p>
      )}
    </Reveal>
  );
}
