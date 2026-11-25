import Image from "next/image";

type Props = {
  name: string;
  period: string;
  description: string;
  photo: string;
  alt: string;
  href: string;
  discover: string;
};

export function ProjectCard({ name, period, description, photo, alt, href, discover }: Props) {
  return (
    <div>
      <a
        href={href}
        aria-label={`${name}: ${discover}`}
        className="group relative block aspect-3/2 overflow-hidden rounded-photo shadow-soft"
      >
        <Image
          src={photo}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-focus-visible:scale-103"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy/80 p-4 text-center text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <span className="font-serif text-lg">{name}</span>
          <span className="text-sm underline decoration-sky decoration-2 underline-offset-4">
            {discover} →
          </span>
        </span>
      </a>
      <h4 className="mt-5 font-serif text-lg text-navy">{name}</h4>
      <p className="mt-1 text-sm font-medium text-navy-deep">{period}</p>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
      <a
        href={href}
        aria-label={`${discover}: ${name}`}
        className="mt-3 hidden py-1 text-sm link-ivory [@media(hover:none)]:inline-block"
      >
        {discover} →
      </a>
    </div>
  );
}
