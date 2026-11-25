"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Modal } from "./Modal";

type Props = {
  name: string;
  period: string;
  description: string;
  photo: string;
  alt: string;
  discover: string;
  closeLabel: string;
  /** Con `href` es un enlace; sin él, abre una ventana con `children`. */
  href?: string;
  children?: ReactNode;
};

export function ProjectCard({ name, period, description, photo, alt, discover, closeLabel, href, children }: Props) {
  const [open, setOpen] = useState(false);

  const trigger = (label: string, className: string, content: ReactNode) =>
    href ? (
      <a href={href} aria-label={label} className={className}>
        {content}
      </a>
    ) : (
      <button type="button" aria-haspopup="dialog" aria-label={label} onClick={() => setOpen(true)} className={className}>
        {content}
      </button>
    );

  return (
    <div>
      {trigger(
        `${name}: ${discover}`,
        "group relative block aspect-3/2 w-full overflow-hidden rounded-photo shadow-soft",
        <>
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
            <span className="text-sm underline decoration-sky decoration-2 underline-offset-4">{discover} →</span>
          </span>
        </>,
      )}
      <h4 className="mt-5 font-serif text-lg text-navy">{name}</h4>
      <p className="mt-1 text-sm font-medium text-navy-deep">{period}</p>
      <p className="mt-2 text-sm leading-relaxed">{description}</p>
      {trigger(
        `${discover}: ${name}`,
        "mt-3 hidden py-1 text-sm link-ivory [@media(hover:none)]:inline-block",
        <>{discover} →</>,
      )}
      {open && (
        <Modal title={name} closeLabel={closeLabel} tone="light" onClose={() => setOpen(false)}>
          {children}
        </Modal>
      )}
    </div>
  );
}
