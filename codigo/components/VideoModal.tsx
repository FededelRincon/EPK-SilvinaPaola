"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { YouTubeFrame } from "./LiteYouTube";

type Props = { videoId: string; title: string; openLabel: string; closeLabel: string };

/** <dialog> nativo: deja inerte el fondo, cierra con Escape y devuelve el foco. */
export function VideoModal({ videoId, title, openLabel, closeLabel }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
      closeRef.current?.focus();
    }
  }, [open]);

  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${openLabel}: ${title}`}
        className="inline-flex items-center gap-2 rounded-full border border-ivory/60 px-5 py-2.5 text-sm transition-colors hover:bg-ivory hover:text-navy"
      >
        <Icon name="play" className="size-3.5" />
        {openLabel}
      </button>
      <dialog
        ref={ref}
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(event) => event.target === event.currentTarget && close()}
        className="m-auto w-[min(94vw,64rem)] max-w-none bg-transparent p-1 text-ivory backdrop:bg-black/80"
      >
        {open && (
          <>
            {/* Centinelas: Tab y Shift+Tab no salen del modal. */}
            <span tabIndex={0} onFocus={() => frameRef.current?.querySelector("iframe")?.focus()} />
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="font-serif text-lg">{title}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label={closeLabel}
                className="grid size-11 place-items-center rounded-full bg-navy hover:bg-navy-deep"
              >
                <Icon name="close" />
              </button>
            </div>
            <div ref={frameRef} className="relative aspect-video overflow-hidden rounded-photo bg-black">
              <YouTubeFrame videoId={videoId} title={title} />
            </div>
            <span tabIndex={0} onFocus={() => closeRef.current?.focus()} />
          </>
        )}
      </dialog>
    </>
  );
}
