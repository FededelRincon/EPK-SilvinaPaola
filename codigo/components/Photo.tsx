import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className: string;
  tone?: "light" | "dark";
  position?: string;
  zoom?: boolean;
};

/** Contenedor con proporción fija: `className` define el aspect-ratio. */
export function Photo({ src, alt, sizes, className, tone = "light", position = "", zoom }: Props) {
  return (
    <div
      className={`group/photo relative overflow-hidden rounded-photo ${tone === "dark" ? "shadow-deep" : "shadow-soft"} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${position} ${zoom ? "transition-transform duration-500 ease-out group-hover/photo:scale-103" : ""}`}
      />
    </div>
  );
}
